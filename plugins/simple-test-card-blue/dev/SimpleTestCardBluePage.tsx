import React from 'react';
import { Content, Header, Page } from '@backstage/core-components';
import { useApp } from '@backstage/core-plugin-api';
import Grid from '@mui/material/Grid';
import { SimpleTestCardBlue } from '../src/components/SimpleTestCardBlue/SimpleTestCardBlue';

// Helper to resolve icon string to a component, similar to MountPointHostPage
const MenuIcon = ({ iconName }: { iconName: string }) => {
  const app = useApp();
  const IconComponent = app.getSystemIcon(iconName);
  return IconComponent ? <IconComponent /> : null;
};

export const SimpleTestCardBluePage = () => {
  return (
    <Page themeId="tool">
      <Header title="Dev: SimpleTestCardBlue" />
      <Content>
        <p>This page renders the SimpleTestCardBlue component for development and testing.</p>
        <Grid container spacing={3} style={{ marginTop: '20px' }}>
          <Grid item xs={12} sm={6} md={4}>
            <SimpleTestCardBlue
              title="Blue Card Example"
              icon={<MenuIcon iconName="extension" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <SimpleTestCardBlue title="Another Blue Card (No Icon)" icon={<></>} />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};