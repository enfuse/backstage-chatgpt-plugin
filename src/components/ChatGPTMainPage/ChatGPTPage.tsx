import React from 'react';
import {  Grid } from '@material-ui/core';
import {
  Header,
  Page,
  Content,
  HeaderLabel,
} from '@backstage/core-components';
import { ChatGptPlayground } from '../ChatGptPlayground';
import  { PlaygroundProvider } from '../ChatGptPlayground/PlaygroundContext';

export const ChatGPTPage = () => {

  return (
        <Page themeId='tool'>
        <Header title="ChatGPT Playground" subtitle="Build anything from just a quick description">
          <HeaderLabel label="Owner" value="Enfuse" />
          <HeaderLabel label="Lifecycle" value="Alpha" />
        </Header>
        <Content>
          <Grid container spacing={3} direction="column">
            <PlaygroundProvider >
              <ChatGptPlayground />
              </PlaygroundProvider>

          </Grid>
        </Content>
        </Page>
    )
};
