// Import necessary components and functions from React, Material-UI, and external libraries
import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import {
  HomeOutlined,
  PeopleOutline,
  ReceiptOutlined,
  ContactsOutlined,
  PersonOutlineOutlined,
  CalendarTodayOutlined,
  HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import {
  Sidebar,
  Menu,
  MenuItem,
  menuClasses,
  sidebarClasses,
} from "react-pro-sidebar";

const SidebarComponent = ({ title, to, selected, setSelected }) => {
  // Access the current theme and color mode using Material-UI hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State to manage the collapse/expand behavior of the sidebar
  const [collapsed, setCollapsed] = useState(false);

  // Function to toggle the collapsed state of the sidebar
  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // Function to render the logo and menu icon section
  const renderLogoAndMenuIcon = () => (
    <Box
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      ml="15px"
      sx={{
        margin: "10px 0 20px 0",
      }}
    >
      {!collapsed && (
        <Typography variant="h3" color={colors.grey[100]}>
          ADMIN
        </Typography>
      )}
      <IconButton onClick={handleToggleCollapse}>
        <MenuOutlined />
      </IconButton>
    </Box>
  );

  // Function to render the item for each menu item in the sidebar
  const renderMenuItem = (itemTitle, itemIcon, itemTo) => (
    <Link to={itemTo} style={{ textDecoration: "none" }}>
      <MenuItem
        icon={itemIcon}
        key={itemTitle}
        onClick={() => setSelected(itemTitle)}
        active={selected === itemTitle}
        style={{
          color: colors.grey[100],
        }}
      >
        <Typography sx={{ color: colors.grey[100] }}>{itemTitle}</Typography>
      </MenuItem>
    </Link>
  );

  // Function to render the header for each category in the sidebar
  const renderCategoryHeader = (categoryLabel) => (
    <Typography
      variant="h6"
      color={colors.grey[300]}
      sx={{ m: "15px 0 5px 20px" }}
      key={categoryLabel}
    >
      {categoryLabel}
    </Typography>
  );

  return (
    <Box backgroundColor={colors.primary[400]}>
      {/* Render the logo and menu icon section */}
      {renderLogoAndMenuIcon()}

      {/* Sidebar component with options for collapse and transition */}
      <Sidebar
        collapsed={collapsed}
        transitionDuration={700}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            backgroundColor: colors.primary[400],
          },
          // [`.${menuClasses.icon}`]: {
          //   backgroundColor: colors.greenAccent[400],
          // },
        }}
      >
        {/* Sidebar menu with categorized and individual menu items */}
        <Menu>
          {renderMenuItem("Dashboard", <HomeOutlined />, "/dashboard")}

          {renderCategoryHeader("Data")}
          {renderMenuItem("Manage Team", <PeopleOutline />, "/team")}
          {renderMenuItem(
            "Contacts Information",
            <ContactsOutlined />,
            "/contacts"
          )}
          {renderMenuItem(
            "Invoices Balances",
            <ReceiptOutlined />,
            "/invoices"
          )}

          {renderCategoryHeader("Pages")}
          {renderMenuItem("Profile Form", <PersonOutlineOutlined />, "/form")}
          {renderMenuItem("Calendar", <CalendarTodayOutlined />, "/calendar")}
          {renderMenuItem("FAQ Page", <HelpOutlineOutlined />, "/faq")}

          {renderCategoryHeader("Charts")}
          {renderMenuItem("Bar Chart", <BarChartOutlined />, "/bar")}
          {renderMenuItem("Pie Chart", <PieChartOutlineOutlined />, "/pie")}
          {renderMenuItem("Line Chart", <TimelineOutlined />, "/line")}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;
