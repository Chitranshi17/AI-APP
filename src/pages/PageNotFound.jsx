import { Container, Typography } from "@mui/material";
import React from "react";

const PageNotFound = () => {
  return (
    <Container sx={{ padding: "50px" }}>
      <Typography variant="h1" align="center">
        404 Page Not Found!
      </Typography>
    </Container>
  );
};

export default PageNotFound;
