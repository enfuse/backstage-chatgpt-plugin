import React from 'react';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import "../common/styles.css"
import {getChatGptCompletion} from '../../client/chatgpt'
import { Form } from './Form';
import { SettingsPanel } from './SettingsPannel';

export const ChatGptPlayground = () => {
  const PLACEHOLDER = 'A Java Spring controller to serve as a payments endpoint for a pet store'

  const DEFAULT_TEMPERATURE = 80 // --> 0.8 after converted
  const DEFAULT_MAX_TOKENS = 6.4 // --> 256 after converted

  const config = useApi(configApiRef)
  const baseUrl = config.getString('backend.baseUrl')

  const [description, setDescription] = React.useState(PLACEHOLDER)
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
                description={description}
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
        <p>Enter a description for file of any kind in any format (a react component in jsx or tsx, spring bean definition in java or kotlin, a Dockerfile definition, etc) </p>
        <p>Tweak around with the settings pannel to create different kinds of responses </p>
        <p><b>Keep in mind</b> </p>
        <p>More descriptive prompts will generate better results, i.e. specify a library version to use or a format for your build file. </p>
        <p>Larger prompts can take significatnly more time. Sit back and let chatGPT do the work for you! </p>
    </div>
  )
}