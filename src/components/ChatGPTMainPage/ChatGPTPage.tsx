import React from 'react';
import {  Grid } from '@material-ui/core';
import {
  Header,
  Page,
  Content,
  HeaderLabel,
} from '@backstage/core-components';
import { ChatGptPlayground } from '../ChatGptPlayground';

export const ChatGPTPage = () => (
  <Page themeId='tool'>
    <Header title="ChatGPT Playground" subtitle="Select a frontend framework and describe the component you'd like to build ">
      <HeaderLabel label="Owner" value="Enfuse" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <ChatGptPlayground />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
