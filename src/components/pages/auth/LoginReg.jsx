import { Box, Card, Grid, Tab, Tabs } from "@mui/material";
import Image from "../../../images/image.png";
import { useState } from "react";
import UserLogin from "./UserLogin";
import Registration from "./Registration";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

// For Handling Tab
const TabPanel = (props) => {
  const { children, value, index } = props;
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

const LoginReg = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Grid container sx={{ height: "90vh" }}>
        {/* Image */}
        <Grid
          item
          lg={7}
          sm={4}
          sx={{
            backgroundImage: `url(${Image})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>
        <Grid item lg={5} sm={8} justifyContent="center">
          <Card sx={{ width: "100%", height: "100%" }}>
            {/* Tabs */}
            <Box sx={{ mx: 3, height: 530 }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange}>
                  {/* Login Tab */}
                  <Tab
                    label="Login"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                  {/* Reg Tab */}
                  <Tab
                    label="Registration"
                    sx={{ textTransform: "none", fontWeight: "bold" }}
                  ></Tab>
                </Tabs>
              </Box>

              {/* Tab Panels */}
              <TabPanel value={value} index={0}>
                <UserLogin />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Registration />
              </TabPanel>
            </Box>
            {/* Shopping Logo */}
            <Box textAlign="center" sx={{ mt: 2 }}>
              <ShoppingCartIcon sx={{ color: "#2196f3", fontSize: 150 }} />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginReg;
