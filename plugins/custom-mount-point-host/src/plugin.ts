import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const customMountPointHostPlugin = createPlugin({
  id: 'custom-mount-point-example',
  routes: {
    root: rootRouteRef,
  },
});

export const CustomMountPointHostPage = customMountPointHostPlugin.provide(
  createRoutableExtension({
    name: 'CustomMountPointHostPage',
    component: () =>
      import('./components/MountPointHostPage').then(m => m.MountPointHostPage),
    mountPoint: rootRouteRef,
  }),
);
