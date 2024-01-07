// Import necessary components and functions from React, Material-UI, and external libraries
import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "theme";
import {
  HomeOutlined,
  PeopleOutline,
  ReceiptOutlined,
  ContactsOutlined,
  PersonOutlineOutlined,
  CalendarTodayOutlined,
  // HelpOutlineOutlined,
  BarChartOutlined,
  PieChartOutlineOutlined,
  TimelineOutlined,
  MenuOutlined,
  HorizontalRuleOutlined,
  MessageOutlined,
  Groups2Outlined,
  ForumOutlined,
  PeopleOutlined,
} from "@mui/icons-material";
import {
  Sidebar,
  Menu,
  MenuItem,
  // menuClasses,
  sidebarClasses,
} from "react-pro-sidebar";

const SidebarComponent = () => {
  // Access the current theme and color mode using Material-UI hooks
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // State to manage the collapse/expand behavior of the sidebar and track the selected menu item
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

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
          Hi! AJEET
        </Typography>
      )}
      <IconButton onClick={handleToggleCollapse}>
        <MenuOutlined />
      </IconButton>
    </Box>
  );

  // Function to render the header for each category in the sidebar
  const renderCategoryHeader = (categoryLabel) =>
    !collapsed ? (
      // Render the categoryLabel when expanded
      <Typography
        variant="h6"
        color={colors.grey[300]}
        sx={{ m: "15px 0 5px 20px" }}
        key={categoryLabel}
      >
        {categoryLabel}
      </Typography>
    ) : (
      // Render the icon when collapsed
      <HorizontalRuleOutlined
        sx={{
          margin: "0 auto",
          fontSize: "20px",
          color: colors.primary[200],
          display: "block",
        }}
      />
    );

  // Function to render the item for each menu item in the sidebar
  const renderMenuItem = (itemTitle, itemIcon, itemTo) => (
    <Link
      to={itemTo}
      style={{ textDecoration: "none", color: colors.grey[100] }}
    >
      <MenuItem
        icon={itemIcon}
        key={itemTitle}
        onClick={() => setSelected(itemTitle)}
        active={selected === itemTitle}
        style={{
          color: colors.grey[100],
          backgroundColor:
            selected === itemTitle ? colors.primary[600] : "transparent",
        }}
      >
        <Typography>{itemTitle}</Typography>
      </MenuItem>
    </Link>
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
          {renderMenuItem("Dashboard", <HomeOutlined />, "/")}

          {renderCategoryHeader("E-LEARNING")}
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
          {renderMenuItem(
            "Edit Profile",
            <PersonOutlineOutlined />,
            "/edit-profile"
          )}
          {renderMenuItem("Calendar", <CalendarTodayOutlined />, "/calendar")}

          {renderCategoryHeader("COMMUNITY")}
          {renderMenuItem("Activity", <TimelineOutlined />, "/activity")}
          {renderMenuItem("Messages", <MessageOutlined />, "/messages")}
          {renderMenuItem("Members", <PeopleOutlined />, "/members")}
          {renderMenuItem("Groups", <Groups2Outlined />, "/groups")}
          {renderMenuItem("Forums", <ForumOutlined />, "/forums")}

          {renderCategoryHeader("RESOURCES")}
          {renderMenuItem("Bar Chart", <BarChartOutlined />, "/bar")}
          {renderMenuItem("Pie Chart", <PieChartOutlineOutlined />, "/pie")}
          {renderMenuItem("Line Chart", <TimelineOutlined />, "/line")}
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default SidebarComponent;
