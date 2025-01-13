import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header
          title="EV DASHBOARD"
          subtitle="Analyze and visualize insights about Electric Vehicle trends"
        />
         <Button
          variant="contained"
          color="primary"
          href="https://github.com/vedant-patil-mapup/analytics-dashboard-assessment/blob/main/data-to-visualize/Electric_Vehicle_Population_Data.csv"
          target="_blank"
          startIcon={<DownloadOutlinedIcon />}
          sx={{
            backgroundColor: colors.greenAccent[600],
            color: colors.grey[100],
            "&:hover": {
              backgroundColor: colors.greenAccent[500],
            },
          }}
        >
          Download Dataset
        </Button>
      </Box>

      <Box mt="20px">
        <Typography variant="h5" fontWeight="bold" color={colors.greenAccent[400]}>
          Overview
        </Typography>
        <Typography variant="body1" color={colors.grey[100]} mt="10px">
          This dashboard provides insights into the trends and distribution of Electric Vehicles (EVs) 
          based on the provided dataset. Use the visualizations below to explore key metrics such as 
          top car makes, yearly trends, and state-wise distribution of EVs.
        </Typography>
      </Box>

      <Box mt="30px" display="grid" gridTemplateColumns="repeat(12, 1fr)" gap="20px">
      <Box gridColumn="span 12" backgroundColor={colors.primary[400]} p="20px" borderRadius="8px">
        <Link to="/bar" style={{ textDecoration: "none" }}>
          <Typography variant="h6" fontWeight="bold" color={colors.grey[100]} mb="10px">
            Top 10 Car Makes by Number of Vehicles
          </Typography>
        </Link>
      </Box>

      <Box gridColumn="span 12" backgroundColor={colors.primary[400]} p="20px" borderRadius="8px" mt="20px">
        <Link to="/line" style={{ textDecoration: "none" }}>
          <Typography variant="h6" fontWeight="bold" color={colors.grey[100]} mb="10px">
            EV Trends Over the Years
          </Typography>
        </Link>
      </Box>

      <Box gridColumn="span 12" backgroundColor={colors.primary[400]} p="20px" borderRadius="8px" mt="20px">
        <Link to="/table" style={{ textDecoration: "none" }}>
          <Typography variant="h6" fontWeight="bold" color={colors.grey[100]} mb="10px">
            Detailed View: Top 10 Car Makes
          </Typography>
        </Link>
      </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
