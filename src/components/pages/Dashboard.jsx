import { Button, CssBaseline, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ChangePassword from "./auth/ChangePassword";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate("/login");
  };
  return (
    <>
      <CssBaseline />
      <Grid container>
        <Grid
          item
          md={4}
          xs={12}
          sx={{ backgroundColor: "gray", p: 5, color: "white" }}
        >
          {/* User Info */}
          <h1>Dashboard</h1>
          <Typography variant="h5">Email: Jack@gmail.com</Typography>
          <Typography variant="h6">Name: Jack</Typography>
          {/* Logout Button */}
          <Button
            variant="contained"
            color="warning"
            size="large"
            onClick={handleLogout}
            sx={{ mt: 8 }}
          >
            Logout
          </Button>
        </Grid>

        {/* Change Password Form */}
        <Grid item xs={12} md={8}>
          <ChangePassword />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
