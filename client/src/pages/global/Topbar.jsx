// Import necessary components and functions from Material-UI and the theme file
import { Badge, Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import {
  SearchOutlined,
  LightModeOutlined,
  DarkModeOutlined,
  MessageOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlineOutlined,
  ShoppingCartOutlined,
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

        {/* Messages icon */}
        <IconButton>
          <Badge badgeContent={0} max={9} color="info">
            <MessageOutlined />
          </Badge>
        </IconButton>

        {/* Notification icon */}
        <IconButton>
          <Badge badgeContent={2} max={9} color="info">
            <NotificationsOutlined />
          </Badge>
        </IconButton>

        {/* Cart icon */}
        <IconButton>
          <Badge badgeContent={2} max={9} color="info">
            <ShoppingCartOutlined />
          </Badge>
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

export default Topbar;
