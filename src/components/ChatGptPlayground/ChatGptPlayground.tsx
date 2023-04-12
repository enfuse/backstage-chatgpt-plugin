import React from 'react';
import { Slider } from '@material-ui/core';

import { useApi, configApiRef } from '@backstage/core-plugin-api';
import "../common/styles.css"
import {getChatGptCompletion} from '../../client/chatgpt'
import { Form } from './Form';

export const ChatGptPlayground = () => {
  
  const PLACEHOLDER = 'A java spring controler to serve as a payments endpoint for a pet store'
  const DEFAULT_TEMPERATURE = 80 // --> 0.8 after converted
  const DEFAULT_MAX_TOKENS = 6.4 // --> 256 after converted

  const config = useApi(configApiRef)
  const baseUrl = config.getString('backend.baseUrl')

  const [description, setDescription] = React.useState(PLACEHOLDER)
  const [editorText, setEditorText] =  React.useState<string>('')
  const [error , setError] = React.useState<any>(null)
  const [loading , setLoading] = React.useState<boolean>(false)
  const [temperature, setTemperature] = React.useState<number>(DEFAULT_TEMPERATURE);
  const [maxTokens, setMaxTokens] = React.useState<number>(DEFAULT_MAX_TOKENS);
  console.log(editorText)
  const onSubmit = () => {
    setLoading(true)
    getChatGptCompletion(baseUrl, description, temperature, maxTokens)
    .then(response => {
      setEditorText(`${description}\n${response.data?.completion[0].message.content}`)
      setLoading(false)
    })
    .catch( e => {
      setLoading(false)
      setError(e)
    } )
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
                />
            <SettingsPanel temperature={temperature}
                           maxTokens={maxTokens}
                           setTemperature={setTemperature} 
                           setMaxTokens={setMaxTokens} />
         </div>
      {loading && <div className="loading"/>}
      {error && (<div className="error">An error occurred. Please try again.</div>)}
      </>
    )
};

interface SettingsPannelPrpps {
  temperature : number ,
  maxTokens : number,
  setTemperature: React.Dispatch<React.SetStateAction<number>>
  setMaxTokens: React.Dispatch<React.SetStateAction<number>>
}

const SettingsPanel = ({temperature, maxTokens, setTemperature, setMaxTokens}: SettingsPannelPrpps) => {
  const [standardTemperature, setStandardTemperature] = React.useState<number>(0.8)
  const [standardMaxLength, setStandardMaxLength] = React.useState<number>(0.8)
  const handleChange = (callback: React.Dispatch<React.SetStateAction<number>>, value: number | number[]) => {
    callback(value as number);
  };

  const convertTemperature = (regularTemperature:number) => {
    regularTemperature > 0 ? setStandardTemperature( regularTemperature / 100 ) : setStandardTemperature(0) 
  }
  const convertLength = (regularLength:number) => {
    regularLength > 0 ? setStandardMaxLength(regularLength * 40) : setStandardMaxLength(0)
  }

  React.useEffect(() => {
    convertTemperature(temperature)
    convertLength(maxTokens)
  }, [temperature,maxTokens])
  return (
      <div className='settings'>
        <h3>Settings</h3>
        <p><b>Temperature: {standardTemperature}</b></p>
        <Slider aria-label="Volume" value={temperature} onChange={(e,n)=>handleChange(setTemperature,n) }/>
        <p><b>Maximum Length: {standardMaxLength}</b></p>
        <Slider aria-label="Volume" value={maxTokens} onChange={(e,n)=>handleChange(setMaxTokens,n) }/>
    </div>
  )
}
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