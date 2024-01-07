// Import necessary components and functions from the theme file and Material-UI
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "theme";
import { mockDataInvoices } from "mockData/mockData";
import Header from "components/Header";

const Invoices = () => {
  // Access the current theme and color mode using Material-UI hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Define columns for the DataGrid
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "date",
      headerName: "Invoice Date",
      flex: 1,
      cellClassName: "date-column-cell",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column-cell",
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
      field: "cost",
      headerName: "Invoice Amount",
      flex: 1,
      cellClassName: "cost-column-cell",
      renderCell: (params) => {
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>;
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Invoices" />
      
      {/* DataGrid component displaying invoice information */}
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
        {/* DataGrid component with checkbox selection, rows, and columns */}
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
