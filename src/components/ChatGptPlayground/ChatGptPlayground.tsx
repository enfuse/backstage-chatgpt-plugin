import React from 'react';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import "../common/styles.css"
import {getChatGptCompletion} from '../../client/chatgpt'
import { Form } from './Form';
import { SettingsPanel } from './SettingsPannel';

export const ChatGptPlayground = () => {
  const DEFAULT_TEMPERATURE = 80 // --> 0.8 after converted
  const DEFAULT_MAX_TOKENS = 6.4 // --> 256 after converted

  const config = useApi(configApiRef)
  const baseUrl = config.getString('backend.baseUrl')

  const [description, setDescription] = React.useState('')
  const [editorText, setEditorText] =  React.useState<string>('')
  const [error , setError] = React.useState<any>(null)
  const [loading , setLoading] = React.useState<boolean>(false)
  const [isSuccess , setIsSuccess] = React.useState<boolean>(false)
  const [temperature, setTemperature] = React.useState<number>(DEFAULT_TEMPERATURE);
  const [maxTokens, setMaxTokens] = React.useState<number>(DEFAULT_MAX_TOKENS);
  const onSubmit = () => {
    setLoading(true)
    getChatGptCompletion(baseUrl, description, temperature, maxTokens)
    .then(response => {
      setEditorText(`${description}\n\n${response.data?.completion[0].message.content}`)
      setLoading(false)
      setIsSuccess(true)
    })
    .catch( e => {
      setLoading(false)
      setIsSuccess(false)
      setError(e)
    } )
  }
  const resetPage = () => {
    setLoading(false)
    setIsSuccess(false)
    setEditorText('')
  }

  return (
      <>
        <div className='chatgpt-playground'>
          <GetStartedGuide/>
          <Form onSubmit={onSubmit}
                editorText={editorText}
                setDescription={setDescription}
                setEditorText={setEditorText}
                loading={loading}
                isSuccess={isSuccess}
                resetForm={()=>resetPage()}
                />
            <SettingsPanel temperature={temperature}
                           maxTokens={maxTokens}
                           setTemperature={setTemperature} 
                           setMaxTokens={setMaxTokens} />
         </div>

        {error && (<div className="error">An error occurred. Please try again.</div>)}
      </>
    )
};


const GetStartedGuide = () => {
  return (
    <div className='get-started'>
        <h3>Get Started</h3>
        <p>ChatGPT is an incredibly advanced Large Language Model (LLM) auto-complete engine. You can use this playground to explore it’s functionality. You can try asking it to create components, services, sql queries and more. It can help write user-stories, design architectures, create documentation and tests. </p>
        <p>Try playing with the settings and see how temperature (randomness) and max tokens (max length of input + output) affect the output. </p>
        <p><b>Keep in mind</b> </p>
        <p>More descriptive prompts will generate better results, i.e. specify the language the you want the model to respond with. </p>
        <p>Larger prompts can take significantly more time. </p>
    </div>
  )
}