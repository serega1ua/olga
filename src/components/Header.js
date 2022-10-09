import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <Stack
      bgcolor="orange"
      display="flex"
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
    >
      <Typography fontSize="20px" variant="h1" component="h1">
        Home
      </Typography>
      <Typography fontSize="20px" variant="h2" component="h2">
        About
      </Typography>
      <Typography fontSize="20px" variant="p" component="p">
        This is example
      </Typography>
    </Stack>
  );
};

export default Header;
