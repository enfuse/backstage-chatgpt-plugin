import React from 'react';
import {  Grid } from '@material-ui/core';
import {
  Header,
  Page,
  Content,
} from '@backstage/core-components';
import { ChatGptPlayground } from '../ChatGptPlayground';
import  { PlaygroundProvider } from '../ChatGptPlayground/PlaygroundContext';

export const ChatGPTPage = () => {
  const [error , setError] = React.useState<boolean>(false)
  const showErrorMessage = () => {
    setError(true);
    setTimeout(() => setError(false), 2000); 
  }
  return (
        <div className='chatgpt-page'>
          <Header title="ChatGPT Playground" subtitle="Build anything from just a quick description"/>
          <div className={`error ${error ? 'show' : 'hide'}`}>An error occurred. Please try again.</div>

              <PlaygroundProvider >
                <ChatGptPlayground  showErrorMessage={showErrorMessage} />
              </PlaygroundProvider>
        </div>
    )
};
