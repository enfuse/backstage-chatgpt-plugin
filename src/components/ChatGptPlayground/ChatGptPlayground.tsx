import React from 'react';
import { Button, Paper } from '@material-ui/core';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import "./ChatGptPlayground.css"
import {getChatGptCompletion} from '../../client/chatgpt'
import { Form } from './Form';
import { CodeBoxProps } from './types';


export const ChatGptPlayground = () => {

  const config = useApi(configApiRef)
  const [functionality, setFunctionality] = React.useState('')
  const [stylying, setStyling] = React.useState<string>('')
  const [codeSnippet , setCurrentSnippet] = React.useState<string|null>(null)
  const [selectedFramework, setFramework] = React.useState('react')
  const [error , setError] = React.useState<any>(null)
  const [loading , setLoading] = React.useState<boolean>(false)
  const baseUrl = config.getString('backend.baseUrl')

  const onSubmit = () => {
    setLoading(true)
    getChatGptCompletion(baseUrl, selectedFramework, functionality, stylying)
    .then(response => {
      setCurrentSnippet(response.data?.completion)
      setLoading(false)
    })
    .catch( e => {
      setLoading(false)
      setError(e)
    } )
  }

  return (
    <div className='chatgpt-playground'>
      {!codeSnippet && !loading && <Form selectedFramework={selectedFramework}
                                          setFrameworkCallback={setFramework}
                                          onSubmit={onSubmit}
                                          setFunctionality={setFunctionality}
                                          setStyling={setFramework}
            />}

      {codeSnippet && <>
        <CodeBox codeSnippet={codeSnippet}/>
         <Button onClick={()=>setCurrentSnippet(null)}>Reset</Button>
          </>
          }

      {loading && <div className="loading"/>}
      {error && (<div className="error">An error occurred while contacting the server. Please try again.</div>)}
    </div>)
};


const CodeBox = ({codeSnippet}: CodeBoxProps) => {
  return (
      <Paper elevation={3}>
          {codeSnippet?.split("\n").map(function(item, idx) {
            return (<span key={idx}> {item} <br/> </span>)})}
      </Paper>
  )
}

