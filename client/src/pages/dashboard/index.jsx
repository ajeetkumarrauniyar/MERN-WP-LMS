// Import necessary components and functions from React, Material-UI, and external libraries
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" />
      </Box>
    </Box>
  );
};
export default Dashboard;
