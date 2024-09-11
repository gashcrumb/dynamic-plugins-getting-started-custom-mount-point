import {
  createComponentExtension,
  createPlugin,
} from '@backstage/core-plugin-api';

export const simpleTestCardGreenPlugin = createPlugin({
  id: 'simple-test-card-green',
});

export const SimpleTestCardGreen = simpleTestCardGreenPlugin.provide(
  createComponentExtension({
    name: 'SimpleTestCardGreen',
    component: {
      lazy: () =>
        import('./components/SimpleTestCardGreen').then(
          m => m.SimpleTestCardGreen,
        ),
    },
  }),
);
