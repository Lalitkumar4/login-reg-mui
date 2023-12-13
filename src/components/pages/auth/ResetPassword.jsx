import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
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
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
    };

    // Check if all fields are empty or not
    if (actualData.password && actualData.password_confirmation) {
      // Check if both are same or not
      if (actualData.password === actualData.password_confirmation) {
        // console user data
        console.log(actualData);
        // reset form fields
        document.getElementById("password-reset-form").reset();
        // success message
        setError({
          status: true,
          msg: "Password reset successfully. Redirecting to login page...",
          type: "success",
        });
        // redirect to login page after 3 sec
        setTimeout(() => {
          navigate("/login");
        }, 3000);
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
      setError({
        status: true,
        msg: "All fields are required",
        type: "error",
      });
    }
  };

  return (
    <>
      {/* Form */}
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset Password</h1>
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset-form"
            onSubmit={handleSubmit}
          >
            <TextField
              margin="normal"
              type="password"
              required
              fullWidth
              id="password"
              name="password"
              label="New Password"
            />
            <TextField
              margin="normal"
              type="password"
              required
              fullWidth
              id="password_confirmation"
              name="password_confirmation"
              label="Confirm New Password"
            />
            {/* Button */}
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Save
              </Button>
            </Box>
            {/* Alert */}
            {error.status ? (
              <Alert severity={error.type}>{error.msg}</Alert>
            ) : (
              ""
            )}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default ResetPassword;
