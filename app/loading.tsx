"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { LinearProgress } from "@mui/material";

export default function LoadingPosts() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "800px",
        bgcolor: "black",
        textAlign: "center",
      }}>
      <LinearProgress />
      <img
        style={{ width: "100px", marginTop: "20px" }}
        src="./images/loadingFlight.png"
        alt="loadingFlight"
      />
    </Box>
  );
}
