// Import necessary components and functions from the theme file and Material-UI
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";

const Contacts = () => {
  // Access the current theme and color mode using Material-UI hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define the columns for the DataGrid
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrationId", headerName: "Reg. ID" },
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
      cellClassName: "email-column-cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
      cellClassName: "phone-column-cell",
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
      cellClassName: "city-column-cell",
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
      cellClassName: "address-column-cell",
    },
    {
      field: "zipCode",
      headerName: "ZIP Code",
      flex: 1,
      cellClassName: "zipCode-column-cell",
    },
  ];

  return (
    <Box m="20px">
      <Header title="Team Contacts Info" />
      
      {/* Container for the DataGrid with specified styles */}
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
          // Style for the toolbar container in the DataGrid
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {/* DataGrid component with rows, columns, and toolbar */}
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
