import {
  Alert,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  // Error state
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
    // Get all field data
    const actualData = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
      password_confirmation: data.get("password_confirmation"),
      tc: data.get("tc"),
    };

    // Check if all field empty or not
    if (
      actualData.name &&
      actualData.email &&
      actualData.password &&
      actualData.password_confirmation &&
      actualData.tc !== null
    ) {
      // Check if password match or not
      if (actualData.password === actualData.password_confirmation) {
        // console user date
        console.log(actualData);
        // reset form
        document.getElementById("registration-form").reset();
        // Success message
        setError({
          status: true,
          msg: "Registration Successful",
          type: "success",
        });
        // Navigate to dashboard if user login
        navigate("/dashboard");
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
      {/* Reg Form */}
      <Box
        component="form"
        noValidate
        sx={{ mt: 1 }}
        id="registration-form"
        onSubmit={handleSubmit}
      >
        {/* Name field */}
        <TextField
          margin="normal"
          type="text"
          required
          fullWidth
          id="name"
          name="name"
          label="Name"
        />
        {/* Email field */}
        <TextField
          margin="normal"
          type="email"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
        />
        {/* Password field */}
        <TextField
          margin="normal"
          type="password"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
        />
        {/* Confirm Password field */}
        <TextField
          margin="normal"
          type="password"
          required
          fullWidth
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
        />
        {/* Term & condition checkbox */}
        <FormControlLabel
          control={<Checkbox value="agree" color="primary" name="tc" id="tc" />}
          label="I agree to term and condition."
        />
        {/* Button */}
        <Box textAlign="center">
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2, px: 5 }}
          >
            Join
          </Button>
        </Box>
        {/* Alert */}
        {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""}
      </Box>
    </>
  );
};

export default Registration;
