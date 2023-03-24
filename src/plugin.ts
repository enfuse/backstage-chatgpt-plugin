import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const chatgptFrontendPlugin = createPlugin({
  id: 'chatgpt-frontend',
  routes: {
    root: rootRouteRef,
  },
});

export const ChatgptFrontendPage = chatgptFrontendPlugin.provide(
  createRoutableExtension({
    name: 'ChatgptFrontendPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
