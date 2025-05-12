import React from "react";
import { Box, Typography } from "@mui/material";
import { InfoCard } from "@backstage/core-components";

export type SimpleTestCardBlueProps = {
  title?: string;
  text?: string;
  icon?: React.ReactElement;
};

export const SimpleTestCardBlue = ({ title, text = "Default Blue Content", icon }: SimpleTestCardBlueProps) => (
  <InfoCard title={title} divider={false}>
    <Box
      sx={{
        background: "#3983B6", // A nice blue, consistent with previous attempts
        border: "1px solid #2A628F",
        color: "#FFFFFF", // White text for better contrast on blue
        width: "100%",
        margin: "auto",
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        minHeight: '100px', // Ensure some minimum height
      }}
    >
      {icon && <Box mb={1}>{icon}</Box>}
      <Typography variant="body1">
        {text}
      </Typography>
    </Box>
  </InfoCard>
);
