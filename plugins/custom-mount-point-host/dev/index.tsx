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
        // This object must conform to Record<string, Record<string, CustomMountPointItem[]>>
        'custom.mount.point': [
          // This is the mount point name with its items
          {
            Component: SimpleTestCardGreen,
            config: {
              layouts: {
                // prettier-ignore
                lg: { w: 4, h: 3, x: 0, y: 0 }, // lg is the default breakpoint in ResponsiveReactGridLayout
              },
              props: {
                title: 'Green Test Card (Dev)',
                text: 'This card is rendered via Scalprum dev config.',
                icon: 'extension', // Icon name string, handled by CustomMountPointHostPage
              },
            },
          },
          {
            Component: SimpleTestCardBlue,
            config: {
              layouts: {
                // prettier-ignore
                lg: { w: 4, h: 3, x: 4, y: 0 }, // Positioned next to the green card
              },
              props: {
                title: 'Blue Test Card (Dev)',
                text: 'This is another card from Scalprum dev config.',
                icon: 'dashboard', // Another icon name string
              },
            },
          },
          // You can add more components here if needed
        ] as CustomMountPointItem[],
      },
    },
  },
  // No remote applications (dynamic plugins) are configured to be loaded here.
  // The 'config' object below would hold configurations for remote modules.
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
    title: 'Custom Mount Point Host', // This title will appear in the dev app sidebar
    path: '/custom-mount-point', // Matches the path mentioned in your README
  })
  .render();
