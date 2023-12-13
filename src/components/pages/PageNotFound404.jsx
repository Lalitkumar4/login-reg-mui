import { Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PageNotFound404 = () => {
  return (
    <Container maxWidth="md">
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item xs={12} align="center">
          <Typography variant="h2" color="primary">
            404 - Not Found
          </Typography>
          <Typography variant="h5" color="textSecondary" marginY={3}>
            The page you are looking for does not exist.
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Go Home
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PageNotFound404;
