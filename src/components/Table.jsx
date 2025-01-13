import { useState, useEffect } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import { loadEVData } from "../utils/dataLoader";

const TableComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const chartData = await loadEVData(); // Load data
      setData(chartData.slice(0, 10)); // Extract top 10
    };
    fetchData();
  }, []);

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
              <TableCell sx={{ color: "#fff", fontWeight: "bold" }}>Number of Vehicles</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={row.make}
                sx={{
                  "&:hover": {
                    backgroundColor: "#bbdefb", // Highlight on hover
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
    </Box>
  );
};

export default TableComponent;
