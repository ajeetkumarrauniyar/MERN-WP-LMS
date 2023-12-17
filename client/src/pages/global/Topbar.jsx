// Import necessary components and functions from Material-UI and the theme file
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";

// Import Material-UI icons for various functionalities
import {
  SearchOutlined,
  LightModeOutlined,
  DarkModeOutlined,
  MessageOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlineOutlined,
} from "@mui/icons-material";

const Topbar = () => {
  // Access the current theme and color mode using Material-UI hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Access the color mode toggle function from the context
  const colorMode = useContext(ColorModeContext);

  return (
    // Topbar container with flex layout and space between items
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SearchBar */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        {/* Input field for search with a placeholder */}
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />

        {/* Search icon button */}
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlined />
        </IconButton>
      </Box>

      {/* Icons */}
      <Box display="flex">
        {/* Toggle between light and dark mode */}
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>

        {/* Messages Icon */}
        <IconButton>
          <MessageOutlined />
        </IconButton>

        {/* Notification icon */}
        <IconButton>
          <NotificationsOutlined />
        </IconButton>

        {/* Settings icon */}
        <IconButton>
          <SettingsOutlined />
        </IconButton>

        {/* Person icon */}
        <IconButton>
          <PersonOutlineOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};

// Export the Topbar component as the default export
export default Topbar;
