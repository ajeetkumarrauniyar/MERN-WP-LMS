// Import necessary components and functions from the theme file and Material-UI
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Topbar from "./pages/global/Topbar";

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
          <main className="content">
            <Topbar />
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
