import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const chatgptFrontendPlugin = createPlugin({
  id: 'chatgpt-frontend',
  routes: {
    root: rootRouteRef,
  },
});

export const ChatGPTFrontendPage = chatgptFrontendPlugin.provide(
  createRoutableExtension({
    name: 'ChatGPTFrontendPage',
    component: () =>
      import('./components/ChatGPTMainPage').then(m => m.ChatGPTPage),
    mountPoint: rootRouteRef,
  }),
);
