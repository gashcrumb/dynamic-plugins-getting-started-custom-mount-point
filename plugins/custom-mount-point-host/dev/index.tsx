import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import {
  customMountPointHostPlugin,
  CustomMountPointHostPage,
} from '../src/plugin';
import { ScalprumContext, ScalprumState } from '@scalprum/react-core';
import { PluginStore } from '@openshift/dynamic-plugin-sdk';
import { SimpleTestCardGreen } from '@dynamic-plugins-examples/backstage-plugin-simple-test-card-green';
import { SimpleTestCardBlue } from '@dynamic-plugins-examples/backstage-plugin-simple-test-card-blue';

type CustomMountPointItem = {
  Component: React.ComponentType<any>;
  config?: { layouts?: any; props?: any };
};

// Minimal Scalprum configuration for the development environment.
// This mock allows components within CustomMountPointHostPage that use Scalprum hooks
// (e.g., to discover or render mount points) to function without erroring,
// even though no actual remote modules will be loaded in this isolated setup.
const scalprumState: ScalprumState = {
  api: {
    dynamicRootConfig: {
      mountPoints: {
        'custom.mount.point': [
          {
            Component: SimpleTestCardGreen,
            config: {
              layouts: {
                lg: { w: 4, h: 3, x: 0, y: 0 },
              },
              props: {
                title: 'Green Test Card (Dev)',
                text: 'This card is rendered via Scalprum dev config.',
                icon: 'extension',
              },
            },
          },
          {
            Component: SimpleTestCardBlue,
            config: {
              layouts: {
                lg: { w: 4, h: 3, x: 4, y: 0 },
              },
              props: {
                title: 'Blue Test Card (Dev)',
                text: 'This is another card from Scalprum dev config.',
                icon: 'dashboard',
              },
            },
          },
          // You can add more components here if needed
        ] as CustomMountPointItem[],
      },
    },
  },
  config: {},
  pluginStore: new PluginStore(),
  initialized: true,
};

createDevApp()
  .registerPlugin(customMountPointHostPlugin)
  .addPage({
    element: (
      <ScalprumContext.Provider value={scalprumState}>
        <CustomMountPointHostPage />
      </ScalprumContext.Provider>
    ),
    title: 'Custom Mount Point Host',
    path: '/custom-mount-point',
  })
  .render();
