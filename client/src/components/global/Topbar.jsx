// Import necessary components and functions from Material-UI and the theme file
import { Badge, Box, Button, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "theme";
import InputBase from "@mui/material/InputBase";
import {
  SearchOutlined,
  LightModeOutlined,
  DarkModeOutlined,
  MessageOutlined,
  NotificationsOutlined,
  // ShoppingCartOutlined,
} from "@mui/icons-material";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import { mediaQuery } from "utils/mediaQueries";

import "./Topbar.css";

// SignUpButton component for sign-up action
function SignUpButton() {
  const clerk = useClerk();

  return (
    <Button
      variant="contained"
      className="sign-up-btn"
      onClick={() => clerk.openSignUp({})}
    >
      Sign up
    </Button>
  );
}

// SignInButton component for sign-in action
function SignInButton() {
  const clerk = useClerk();

  return (
    <Button
      variant="contained"
      className="sign-in-btn"
      onClick={() => clerk.openSignIn({})}
    >
      Sign in
    </Button>
  );
}

const Topbar = () => {
  // Access the current theme and color mode using Material-UI hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Access the color mode toggle function from the context
  const colorMode = useContext(ColorModeContext);

  return (
    <header>
      <nav>
        <Box display="flex" justifyContent="space-between" p={2}>
          {/* SearchBar for medium & large devices */}
          <Box
            display={{ sm: "none", md: "flex" }}
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

          {/* Search button for small devices */}
          <IconButton
            type="button"
            className="search-icon-button-small-device"
            sx={{ p: 1, display: { sm: "block", md: "none" } }}
          >
            <SearchOutlined />
          </IconButton>

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
            {/* <IconButton>
              <Badge badgeContent={2} max={9} color="info">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton> */}
            {/* User actions */}
            {/* Renders a "Sign Up" and "Log In" button when the user is signed out. */}
            <SignedOut>
              <ul>
                <li>
                  <SignUpButton />
                </li>
                <li>
                  <SignInButton />
                </li>
              </ul>
            </SignedOut>
            {/* Renders a UserButton component when the user is signed in. */}
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
          </Box>
        </Box>
      </nav>
    </header>
  );
};

export default Topbar;
