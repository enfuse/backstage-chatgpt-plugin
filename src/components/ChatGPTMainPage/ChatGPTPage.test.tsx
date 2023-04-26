import React from 'react';
import { ChatGPTPage } from './ChatGPTPage';
import { ThemeProvider } from '@material-ui/core';
import { darkTheme } from '@backstage/theme';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  setupRequestMockHandlers,
  renderInTestApp,
} from "@backstage/test-utils";

describe('ChatGPT PAge', () => {
  const server = setupServer();
  // Enable sane handlers for network requests
  setupRequestMockHandlers(server);

  // setup mock response
  beforeEach(() => {
    server.use(
      rest.get('/*', (_, res, ctx) => res(ctx.status(200), ctx.json({}))),
    );
  });

  it('should render', async () => {
    const rendered = await renderInTestApp(
      <ThemeProvider theme={darkTheme}>
        <ChatGPTPage />
      </ThemeProvider>,
    );
    expect(rendered.getByText('Welcome to chatgpt-frontend!')).toBeInTheDocument();
  });
});
