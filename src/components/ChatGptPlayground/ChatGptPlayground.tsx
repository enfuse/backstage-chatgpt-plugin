import React from 'react';
import { Button } from '@material-ui/core';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import "../common/styles.css"
import {getChatGptCompletion} from '../../client/chatgpt'
import { Form } from './Form';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ButtonPanel } from '../common/ButtonPanel';

export const ChatGptPlayground = () => {
  const functionailitySample = 'connects to a database with a button that changes color to green when on hover, transitions into a loading icon and transitions into a green check when connected'
  const config = useApi(configApiRef)
  const [functionality, setFunctionality] = React.useState(functionailitySample)
  const [codeSnippet , setCodeSnippet] = React.useState<string|null>(null)
  const [selectedFramework, setFramework] = React.useState('react')
  const [error , setError] = React.useState<any>(null)
  const [loading , setLoading] = React.useState<boolean>(false)
  const baseUrl = config.getString('backend.baseUrl')
  const onSubmit = () => {
    setLoading(true)
    getChatGptCompletion(baseUrl, selectedFramework, functionality)
    .then(response => {
      setCodeSnippet(response.data?.completion)
      setLoading(false)
    })
    .catch( e => {
      setLoading(false)
      setError(e)
    } )
  }
  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet ? codeSnippet : '');
  };
  return (
    <div className='chatgpt-playground'>
      {!codeSnippet && !loading && 
        <Form selectedFramework={selectedFramework}
                                          setFrameworkCallback={setFramework}
                                          onSubmit={onSubmit}
                                          functionality={functionality}
                                          setFunctionality={setFunctionality}
        />}
      {codeSnippet && 
        <>
          <ButtonPanel >
            <Button onClick={copyToClipboard} color='primary'>Copy</Button>
            <Button onClick={()=>setCodeSnippet(null)} color='primary'>Reset</Button>
          </ButtonPanel>

          <SyntaxHighlighter  wrapLongLines wrapLines>
              {codeSnippet} 
          </SyntaxHighlighter>
         </>}
      {loading && <div className="loading"/>}
      {error && (<div className="error">An error occurred. Please try again.</div>)}
    </div>)
};