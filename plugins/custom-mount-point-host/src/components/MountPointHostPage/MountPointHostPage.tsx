import Grid from '@mui/material/Grid';
import React from 'react';
import { Content, Header, Page } from '@backstage/core-components';
import { useApp } from '@backstage/core-plugin-api';

import { useScalprum } from '@scalprum/react-core';
import { ScalprumApiHolder, ScalprumMountPoint } from '../../types';

function getMountPointData({
  mountPoint,
  api = { dynamicRootConfig: { mountPoints: {} } },
}: {
  mountPoint: string;
  api: ScalprumApiHolder;
}): ScalprumMountPoint[] {
  const mountPointComponents =
    api.dynamicRootConfig.mountPoints[mountPoint] ?? [];
  return mountPointComponents;
}

const MenuIcon = ({ icon }: { icon: string }) => {
  const app = useApp();
  const Icon = app.getSystemIcon(icon) || (() => null);
  return <Icon />;
};

export const MountPointHostPage = () => {
  // Dynamic frontend plugins are loading using Scalprum and
  // therefore have access to the Scalprum API object, obtainable
  // via the `useScalprum()` hook.
  const { api } = useScalprum();
  return (
    <Page themeId="home">
      <Header title="A Page with a mount point" />
      <Content>
        <Grid container direction="row">
          <Grid item xs={9}>
            {getMountPointData({
              mountPoint: 'custom.mount.point',
              api: api as ScalprumApiHolder,
            }).map(({ Component, config }, idx) => {
              const ComponentWithIcon = Component as React.FunctionComponent<{
                title: string;
                icon: React.ReactElement;
              }>;
              const props = config && config.props ? config.props : {};
              return (
                <ComponentWithIcon
                  {...props}
                  title={'foo'}
                  key={`search_results_${idx}`}
                  icon={<MenuIcon icon={props.icon || ''} />}
                />
              );
            })}
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
