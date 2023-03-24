import React from 'react';
import { Button, Input, Paper, TextField } from '@material-ui/core';
import { useStyles } from '../common/styles';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import axios from 'axios'
// import { CopyBlock } from "react-code-blocks";

export const ChatGptPlayground = () => {
  const [frameworkSelected, setFramework] = React.useState('react')
  const [functionality, setFunctionality] = React.useState('')
  const [stylying, setStyling] = React.useState('')
  const [codeSnippets , setCodeSnippets] = React.useState({})
  const [currentSnippet , setCurrentSnippet] = React.useState('')
  const classes = useStyles()
  const config = useApi(configApiRef)
  const baseUrl = config.getString('backend.baseUrl')
  const getChatGptCompletion = (framework: string, functionality:string, styling: string ) => {
    axios.get(`${baseUrl}/api/chatgpt/completion`,{
    params:{
      framework: framework,
      functionality: functionality,
      styling: styling
    }})
    .then(response => {
      console.log("ChatGPT response:", response.data)
      setCurrentSnippet(response.data?.completion)
    })
    .catch(e=>console.log(e))
    
}
  return <>
    <Button variant={frameworkSelected == "react" ? "contained" : "outlined"}
      color="primary"
      onClick={()=>setFramework('react')}> React</Button>
    <Button variant={frameworkSelected == "angular" ? "contained" : "outlined"}
      color="primary"
      onClick={()=>setFramework('angular')}> Angular</Button>
    <Button variant={frameworkSelected == "vue" ? "contained" : "outlined"}
      color="primary"
      onClick={()=>setFramework('vue')}> Vue</Button>
      <br/>
    <TextField id="standard-basic"
               label="Functionality"
               variant="standard"
               onChange={(e)=>setFunctionality(e.target.value||'')}/>
      <br/>
    <TextField id="standard-basic" 
                label="Styling" 
                variant="standard"
                onChange={(e)=>setStyling(e.target.value||'')} />
    <br/>
    <Button variant='outlined'
        classes={{root: classes.buttonSubmit}}
            onClick={()=>{
              console.log(`functionality: ${functionality}\n styling: ${stylying}`)
              getChatGptCompletion(frameworkSelected, functionality, stylying)
            }
            
            }>
      Submit!
    </Button>
    <Paper elevation={3}>
      <code>

            {currentSnippet?.split("\n").map(function(item, idx) {
              return (
                <span key={idx}>
                {item}
                <br/>
            </span>
         )
        })}
        </code>
    </Paper>

    {Object.entries(codeSnippets).map(snippet => {
        return <Paper elevation={3} >
                  {snippet}
                  </Paper>
    })}
  </>;
};
