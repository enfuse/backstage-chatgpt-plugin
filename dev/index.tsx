import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { chatgptFrontendPlugin, ChatGPTFrontendPage } from '../src/plugin';

createDevApp()
  .registerPlugin(chatgptFrontendPlugin)
  .addPage({
    element: <ChatGPTFrontendPage />,
    title: 'Root Page',
    path: '/chatgpt-frontend'
  })
  .render();
