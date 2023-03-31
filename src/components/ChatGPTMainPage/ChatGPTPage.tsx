import React from 'react';
import {  Grid } from '@material-ui/core';
import {
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
} from '@backstage/core-components';
import { ChatGptPlayground } from '../ChatGptPlayground';

export const ChatGPTPage = () => (
  <Page themeId='tool'>
    <Header title="Welcome to chatgpt-frontend!" subtitle="Optional subtitle">
      <HeaderLabel label="Owner" value="Enfuse" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <Content>
      <ContentHeader title="ChatGPT Playground">
      </ContentHeader>
      <Grid container spacing={3} direction="column">
        <Grid item>
          <ChatGptPlayground />
        </Grid>
      </Grid>
    </Content>
  </Page>
);
