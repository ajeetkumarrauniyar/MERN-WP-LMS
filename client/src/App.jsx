// Import necessary components and functions from the theme file and Material-UI
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
// import Team from "./pages/team";
// import Invoices from "./pages/invoices";
// import Contacts from "./pages/contacts";
// import Bar from "./pages/bar";
// import Form from "./pages/form";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
// import Calender from "./pages/calender";

const App = () => {
  // Retrieve the current theme and color mode using the useMode hook
  const [theme, colorMode] = useMode();

  return (
    // Provide the color mode context to the components
    <ColorModeContext.Provider value={colorMode}>
      {/* Apply the theme to the entire application using ThemeProvider */}
      <ThemeProvider theme={theme}>
        {/* Apply global baseline CSS styles */}
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/team" element={<Team />} /> */}
              {/* <Route path="/invoices" element={<Invoices />} /> */}
              {/* <Route path="/contacts" element={<Contacts />} /> */}
              {/* <Route path="/calender" element={<Calender />} /> */}
              {/* <Route path="/form" element={<Form />} /> */}
              {/* <Route path="/bar" element={<Bar />} /> */}
              {/* <Route path="/pie" element={<Pie />} /> */}
              {/* <Route path="/line" element={<Line />} /> */}
              {/* <Route path="/faq" element={<FAQ />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
