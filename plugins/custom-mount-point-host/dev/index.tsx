import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import {
  customMountPointHostPlugin,
  CustomMountPointHostPage,
} from '../src/plugin';
import { ScalprumContext, ScalprumState } from '@scalprum/react-core';
import { PluginStore } from '@openshift/dynamic-plugin-sdk';

// Minimal Scalprum configuration for the development environment.
// This mock allows components within CustomMountPointHostPage that use Scalprum hooks
// (e.g., to discover or render mount points) to function without erroring,
// even though no actual remote modules will be loaded in this isolated setup.
const scalprumState: ScalprumState = {
  initialized: true,
  api: {
    dynamicRootConfig: {
      mountPoints: {
        'custom.mount.point': [], // Define the mount point expected by MountPointHostPage
      },
    },
  },
  // No remote applications (dynamic plugins) are configured to be loaded here.
  // The 'config' object below would hold configurations for remote modules.
  config: {},
  pluginStore: new PluginStore(),
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
