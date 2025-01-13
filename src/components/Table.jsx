import { useState, useEffect } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { loadEVData } from "../utils/dataLoader";
import Papa from "papaparse";
import * as d3 from "d3";
const TableComponent = () => {
  const [data, setData] = useState([]); 
  const [selectedMake, setSelectedMake] = useState(null); 
  const [modelData, setModelData] = useState([]); 

  useEffect(() => {
    const fetchData = async () => {
      const chartData = await loadEVData(); 
      setData(chartData.slice(0, 10)); 
    };
    fetchData();
  }, []);

  // Fetch model data for the selected make
  const fetchModelData = async (make) => {
    const response = await fetch("electric_vehicle_data.csv");
    const csvText = await response.text();

    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: ({ data }) => {
          // Filter models for the selected make
          const filteredModels = data.filter((row) => row.Make === make);
          const modelCounts = d3.rollup(
            filteredModels,
            (v) => v.length,
            (d) => d.Model
          );
          const modelData = Array.from(modelCounts, ([model, count]) => ({
            model,
            count,
          }));
          resolve(modelData);
        },
      });
    });
  };

  const handleRowClick = async (make) => {
    setSelectedMake(make);
    const models = await fetchModelData(make); // Fetch models for clicked make
    setModelData(models);
  };

  return (
    <Box m="20px">
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: 3,
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#1976d2", // Blue header background
              }}
            >
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Rank</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Car Make</TableCell>
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                Number of Vehicles
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={row.make}
                onClick={() => handleRowClick(row.make)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#bbdefb", // Highlight on hover
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell sx={{ fontWeight: "medium" }}>{index + 1}</TableCell>
                <TableCell>{row.make}</TableCell>
                <TableCell>{row.count}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {selectedMake && (
        <Box mt="20px">
          <Typography variant="h6" mb="10px">
            Models for {selectedMake}
          </Typography>
          <TableContainer
            component={Paper}
            sx={{
              boxShadow: 3,
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <Table>
              <TableHead>
                <TableRow
                  sx={{
                    backgroundColor: "#ff7043", // Orange header background
                  }}
                >
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Model</TableCell>
                  <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>
                    Number of Vehicles
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {modelData.map((row) => (
                  <TableRow key={row.model}>
                    <TableCell>{row.model}</TableCell>
                    <TableCell>{row.count}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </Box>
  );
};

export default TableComponent;
