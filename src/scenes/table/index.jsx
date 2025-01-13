import { Box } from "@mui/material";
import Header from "../../components/Header";
import Table from "../../components/Table";

const TableChart = () => {
  return (
    <Box m="20px">
      <Header title="Table" subtitle="Top 10 Car makes" />
      <Box height="75vh">
        <Table />
      </Box>
    </Box>
  );
};

export default TableChart;
