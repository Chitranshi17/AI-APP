import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Startup Notion
        </Typography>
        <Typography variant="h5">V 1.0</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
