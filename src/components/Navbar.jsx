import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="info">
          <Toolbar>
            {/* Brand Logo */}
            <ShoppingCartIcon sx={{ fontSize: "50px" }} />
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Shop
            </Typography>
            {/* Nav Links */}
            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#00b0ff" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/contact"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#00b0ff" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Contact
            </Button>
            <Button
              component={NavLink}
              to="/login"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "#00b0ff" : "" };
              }}
              sx={{ color: "white", textTransform: "none" }}
            >
              Login/Registration
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
