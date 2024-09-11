import {
  createComponentExtension,
  createPlugin,
} from '@backstage/core-plugin-api';

export const simpleTestCardBluePlugin = createPlugin({
  id: 'simple-test-card-blue',
});

export const SimpleTestCardBlue = simpleTestCardBluePlugin.provide(
  createComponentExtension({
    name: 'SimpleTestCardBlue',
    component: {
      lazy: () =>
        import('./components/SimpleTestCardBlue').then(
          m => m.SimpleTestCardBlue,
        ),
    },
  }),
);
