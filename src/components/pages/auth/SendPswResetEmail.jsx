import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

const SendPswResetEmail = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: "",
  });

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // User data
    const data = new FormData(e.currentTarget);
    // Get user data
    const actualData = {
      email: data.get("email"),
    };

    // Check if empty or not
    if (actualData.email) {
      // console user data
      console.log(actualData);
      // reset form fields
      document.getElementById("password-reset-email-form").reset();
      // success message
      setError({
        status: true,
        msg: "Password reset email sent check your email !!",
        type: "success",
      });
    } else {
      // Error message
      setError({
        status: true,
        msg: "Please provide valid email",
        type: "error",
      });
    }
  };

  return (
    <>
      <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
          <h1>Reset Password</h1>
          {/* Form */}
          <Box
            component="form"
            noValidate
            sx={{ mt: 1 }}
            id="password-reset-email-form"
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
            <Box textAlign="center">
              <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2, px: 5 }}
              >
                Send
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

export default SendPswResetEmail;
