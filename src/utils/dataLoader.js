import Papa from "papaparse";
import * as d3 from "d3";
const colorPalette = ["#FF5733", "#33FF57", "#3357FF", "#F4D03F", "#8E44AD"]; // 5 Colors for top 5 makes



export const loadEVData = async () => {
  try {
    const response = await fetch('electric_vehicle_data.csv');
    const csvText = await response.text();
    return new Promise((resolve) => {
      Papa.parse(csvText, {
        header: true, 
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: ({ data }) => {
          
          const makeCounts = d3.rollup(
            data,
            (v) => v.length,
            (d) => d.Make
          );

          const chartData = Array.from(makeCounts, ([make, count]) => ({
            make,
            count,
          }));

          resolve(chartData);
        },
      });
    });
  } catch (error) {
    console.error("Error loading CSV:", error);
    return [];
  }
};
export const loadEVDataCarMake = async () => {
    try {
      const response = await fetch("electric_vehicle_data.csv");
      const csvText = await response.text();
  
      return new Promise((resolve) => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: ({ data }) => {
            data = data.filter((row) => row["Model Year"] && row.Make);
  
            const makeYearCounts = d3.rollup(
              data,
              (v) => v.length,
              (d) => d.Make,
              (d) => d["Model Year"]
            );
  
            const formattedData = Array.from(makeYearCounts, ([make, yearData], index) => ({
              id: make, 
              color: colorPalette[index % colorPalette.length], 
              data: Array.from(yearData, ([year, count]) => ({
                x: year.toString(),
                y: count,
              })).sort((a, b) => parseInt(a.x) - parseInt(b.x)), 
            }));
  
            // Select Top 5 Makes
            const top5Makes = formattedData
              .sort((a, b) => d3.sum(b.data, (d) => d.y) - d3.sum(a.data, (d) => d.y))
              .slice(0, 3);
  
            resolve(top5Makes);
          },
        });
      });
    } catch (error) {
      console.error("Error loading CSV:", error);
      return [];
    }
  };

  export const loadEVTypeData = async () => {
    try {
      const response = await fetch("electric_vehicle_data.csv");
      const csvText = await response.text();
  
      return new Promise((resolve) => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: ({ data }) => {
            // Filter valid EV Type entries
            data = data.filter((row) => row["Electric Vehicle Type"]);
  
            // Count occurrences of each EV type
            const evTypeCounts = d3.rollup(
              data,
              (v) => v.length,
              (d) => d["Electric Vehicle Type"]
            );
  
            // Convert to Nivo format
            const formattedData = Array.from(evTypeCounts, ([type, count], index) => ({
              id: type,
              label: type,
              value: count,
              color: colorPalette[index % colorPalette.length],
            }));
  
            resolve(formattedData);
          },
        });
      });
    } catch (error) {
      console.error("Error loading CSV:", error);
      return [];
    }
  };

  export const loadEVGeographyData = async () => {
    try {
      const response = await fetch("electric_vehicle_data.csv");
      const csvText = await response.text();
      return new Promise((resolve) => {
        Papa.parse(csvText, {
          header: true,
          dynamicTyping: true,
          skipEmptyLines: true,
          complete: ({ data }) => {
            data = data.filter((row) => row.State);
  
            const stateCounts = d3.rollup(
              data,
              (v) => v.length,
              (d) => d["Vehicle Location"]
            );
            console.log("11111here datum---", stateCounts)

            const formattedData = Array.from(stateCounts, ([state, count]) => ({
              id: state, 
              value: count,
            }));
  
            resolve(formattedData);
          },
        });
      });
    } catch (error) {
      console.error("Error loading CSV:", error);
      return [];
    }
  };
