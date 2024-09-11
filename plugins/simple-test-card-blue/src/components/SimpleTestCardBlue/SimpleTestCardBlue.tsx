import React from "react";
import { Box } from "@mui/material";
import { InfoCard } from "@backstage/core-components";

export type TestInfoProps = {
  text?: string;
};

export const SimpleTestCardBlue = ({ text = "Some Text" }) => (
  <InfoCard divider={false}>
    <Box
      sx={{
        background: "#00516c",
        border: "1px solid #003b48",
        color: "#003325",
        "text-align": "center",
        width: "100%",
        margin: "auto",
      }}
    >
      <br />
      <br />
      {text}
      <br />
      <br />
      <br />
    </Box>
  </InfoCard>
);
