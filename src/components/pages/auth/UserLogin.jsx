import { Alert, Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  const navigate = useNavigate();

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // User data
    const data = new FormData(e.currentTarget);
    // Get user data
    const actualData = {
      email: data.get("email"),
      password: data.get("password"),
    };

    // Check if both are empty or not
    if (actualData.email && actualData.password) {
      // console user data
      console.log(actualData);
      // Reset form data
      document.getElementById("login-form").reset();
      // Success message
      setError({ status: true, msg: "Login Success", type: "success" });
      // Navigate to dashboard after login
      navigate("/dashboard");
    } else {
      // Error message
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };

  return (
    <>
      {/* Form */}
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="login-form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          type="email"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        <TextField
          margin="normal"
          type="password"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
        />
        {/* Button */}
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Login
          </Button>
        </Box>
        {/* Forgot psw link */}
        <NavLink to="/sendpswrestemail">Forgot Password ?</NavLink>
        {/* ALert */}
        {error.status ? (
          <Alert sx={{ mt: 4 }} severity={error.type}>
            {error.msg}
          </Alert>
        ) : (
          ""
        )}
      </Box>
    </>
  );
};

export default UserLogin;
