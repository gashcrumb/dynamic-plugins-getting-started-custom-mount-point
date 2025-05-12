import React from "react";
import { Box, Typography } from "@mui/material";
import { InfoCard } from "@backstage/core-components";

export type TestInfoProps = {
  title?: string;
  text?: string;
  icon?: React.ReactElement;
};

export const SimpleTestCardGreen = ({ title, text = "Some Text", icon }: TestInfoProps) => (
  <InfoCard title={title} divider={false}>
    <Box
      sx={{
        background: "#6ca100",
        border: "1px solid #486b00",
        color: "#253600",
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
