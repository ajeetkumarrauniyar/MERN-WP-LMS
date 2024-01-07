// Import necessary components and functions from the theme file and Material-UI
import { Box, Hidden, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "theme";
import { mockDataTeam } from "mockData/mockData";
import Header from "components/Header";
import {
  AdminPanelSettingsOutlined,
  LockOutlined,
  SecurityOutlined,
} from "@mui/icons-material";

const Team = () => {
  // Access the current theme and color mode using Material-UI hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define columns for the DataGrid
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "email",
      headerName: "Email Address",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Access Level",
      headerAlign: "center",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          minWidth="auto"
          width="80%"
          m="0 auto"
          p="5px 10px"
          display="flex"
          justifyContent="center"
          backgroundColor={
            access === "admin"
              ? colors.greenAccent[600]
              : access === "manager"
              ? colors.blueAccent[500]
              : colors.redAccent[500]
          }
          borderRadius="4px"
          textTransform="capitalize"
        >
          {/* Only show icons on mobile devices */}
          <Hidden mdUp>
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOutlined />}
          </Hidden>
          {/* Show icons & text on larger screens */}
          <Hidden mdDown>
            {access === "admin" && <AdminPanelSettingsOutlined />}
            {access === "manager" && <SecurityOutlined />}
            {access === "user" && <LockOutlined />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
          </Hidden>
        </Box>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="Manage Team" />
      
      {/* DataGrid component displaying team information */}
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          // Style for the root of the DataGrid
          "& .MuiDataGrid-root": {
            border: "none",
          },
          // Style for individual cells in the DataGrid
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          // Style for cells in the "name" column
          "& .name-column-cell": {
            color: colors.greenAccent[300],
          },
          // Style for the column headers in the DataGrid
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          // Style for the virtual scroller in the DataGrid
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          // Style for the footer container in the DataGrid
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          // Style for the checkbox in the DataGrid
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* DataGrid component with rows and columns */}
        <DataGrid rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
