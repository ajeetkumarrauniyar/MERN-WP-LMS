// Import necessary components and functions from React, Material-UI, and external libraries
import { Box } from "@mui/material";
import { useUser } from "@clerk/clerk-react";

const Dashboard = () => {
  // useUser hook to get the details about the logged in user
  const { user } = useUser();
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {user ? (
          <div>
            Hello {user.primaryEmailAddress.emailAddress}
          </div>
        ) : null}
      </Box>
    </Box>
  );
};
export default Dashboard;
