import React, {useState, useEffect} from 'react';
import {  CssBaseline, Grid } from '@material-ui/core';
import { ThemeProvider, useMediaQuery } from '@material-ui/core';
import { lightTheme } from '@backstage/theme';
import {
  Header,
  Page,
  Content,
  HeaderLabel,
} from '@backstage/core-components';
import { ChatGptPlayground } from '../ChatGptPlayground';
import  { PlaygroundProvider } from '../ChatGptPlayground/PlaygroundContext';
import { darkerTheme } from '../common/darkerTheme';


export const ChatGPTPage = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeSet, setTheme] = useState(prefersDarkMode ? darkerTheme : lightTheme);

  useEffect(() => {
    setTheme(prefersDarkMode ? darkerTheme : lightTheme);
  }, [prefersDarkMode]);

  return (
    <ThemeProvider theme ={themeSet}>
      <CssBaseline/>{
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
      }
      </ThemeProvider>
    )
};
