import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { chatgptFrontendPlugin, ChatgptFrontendPage } from '../src/plugin';

createDevApp()
  .registerPlugin(chatgptFrontendPlugin)
  .addPage({
    element: <ChatgptFrontendPage />,
    title: 'Root Page',
    path: '/chatgpt-frontend'
  })
  .render();
