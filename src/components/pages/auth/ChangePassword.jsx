import { Alert, Box, Button, TextField } from "@mui/material";
import { useState } from "react";

const ChangePassword = () => {
  // Error state
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form data
    const data = new FormData(e.currentTarget);
    // Getting form data
    const actualData = {
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };

    // Check if empty or not
    if (actualData.password && actualData.password_confirmation) {
      // Check is match or not
      if (actualData.password === actualData.password_confirmation) {
        // console user data
        console.log(actualData);
        // Reset form data
        document.getElementById("password-change-form").reset();
        // success message
        setError({
          status: true,
          msg: "Password Changed Successful",
          type: "success",
        });
      } else {
        // Error message
        setError({
          status: true,
          msg: "Password and Confirm Password doesn't match",
          type: "error",
        });
      }
    } else {
      // Error message
      setError({ status: true, msg: "All fields are required", type: "error" });
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexWrap: "wrap",
          maxWidth: 600,
          mx: 4,
        }}
      >
        <h1>Change Password</h1>
        {/* Form */}
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          id="password-change-form"
        >
          <TextField
            type="password"
            margin="normal"
            required
            fullWidth
            name="password"
            id="password"
            label="New Password"
          />
          <TextField
            type="password"
            margin="normal"
            required
            fullWidth
            name="password_confirmation"
            id="password_confirmation"
            label="Confirm New Password"
          />
          {/* Button */}
          <Box textAlign="center">
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2, px: 5 }}
            >
              Change
            </Button>
          </Box>
          {/* Alert */}
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
        </Box>
      </Box>
    </>
  );
};

export default ChangePassword;
