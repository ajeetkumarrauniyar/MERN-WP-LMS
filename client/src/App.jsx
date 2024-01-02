// Import necessary components and functions from the theme file and Material-UI
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./components/global/Topbar";
import SidebarComponent from "./components/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import EditProfileForm from "./pages/edit-profile";
import CalenderScene from "./pages/calender";
// import Bar from "./pages/bar";
// import Form from "./pages/form";
// import Line from "./pages/line";
// import Pie from "./pages/pie";
// import FAQ from "./pages/faq";
import { SignedOut, SignedIn, SignInButton } from "@clerk/clerk-react";

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
          <SignedOut>
            <p>This content is public. Only signed out users can see this.</p>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <SidebarComponent />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/edit-profile" element={<EditProfileForm />} />
                <Route path="/calendar" element={<CalenderScene />} />
                {/* <Route path="/form" element={<Form />} /> */}
                {/* <Route path="/bar" element={<Bar />} /> */}
                {/* <Route path="/pie" element={<Pie />} /> */}
                {/* <Route path="/line" element={<Line />} /> */}
                {/* <Route path="/faq" element={<FAQ />} /> */}
              </Routes>
            </main>
          </SignedIn>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
