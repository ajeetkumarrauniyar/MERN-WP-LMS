import { Box, Grid } from "@mui/material";
// import Item from "@mui/material";
// import Header from "../Header";
// import CommonHeader from "./headerToolbar";

const MonthView = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        sx={{
          border: "1px solid",
          borderColor: "divider",
          "& > div": {
            borderRight: "1px solid",
            borderBottom: "1px solid",
            borderColor: "divider",
          },
        }}
      >
        <Grid item xs={6}>
          hello
        </Grid>
        <Grid item xs={6}>
          Hi
        </Grid>
      </Grid>
    </Box>
  );
};

export default MonthView;
