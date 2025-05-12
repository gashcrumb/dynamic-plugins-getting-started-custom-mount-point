import React from 'react';
import { Content, Header, Page } from '@backstage/core-components';
import { useApp } from '@backstage/core-plugin-api';
import Grid from '@mui/material/Grid';
import { SimpleTestCardGreen } from '../src/components/SimpleTestCardGreen/SimpleTestCardGreen';

// Helper to resolve icon string to a component
const MenuIcon = ({ iconName }: { iconName: string }) => {
  const app = useApp();
  const IconComponent = app.getSystemIcon(iconName);
  return IconComponent ? <IconComponent /> : null;
};

export const SimpleTestCardGreenPage = () => {
  return (
    <Page themeId="tool">
      <Header title="Dev: SimpleTestCardGreen" />
      <Content>
        <p>This page renders the SimpleTestCardGreen component for development and testing.</p>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} md={4}>
            <SimpleTestCardGreen
              title="Green Card Example"
              icon={<MenuIcon iconName="extension" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SimpleTestCardGreen title="Another Green Card (No Icon)" icon={<></>} />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};