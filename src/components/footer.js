import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    // Add return statement here
    <Box mt="80px" bgcolor="#FFF3F4">
      <Stack
        gap="40px"
        sx={{ alignItems: "center" }}
        flexWrap="wrap"
        px="40px"
        pt="24px"
      >
        <img src={Logo} alt="logo" style={{ width: "200px", height: "41px" }} />
      </Stack>
      <Typography
        sx={{ fontSize: { lg: "15px", xs: "10px" } }}
        mt="41px"
        textAlign="center"
        pb="40px"
      >
        © 2024 All Rights Reserved. Designed by{" "}
        <span style={{ color: "#FF2625" }}>Jobiar Hussain</span>
      </Typography>
    </Box>
  );
};

export default Footer;
