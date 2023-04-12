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

  const [functionality, setFunctionality] = React.useState(PLACEHOLDER)
  const [codeSnippet , setCodeSnippet] = React.useState<string|null>(null)
  const [selectedFramework, setFramework] = React.useState('react')
  const [error , setError] = React.useState<any>(null)
  const [loading , setLoading] = React.useState<boolean>(false)
  const [temperature, setTemperature] = React.useState<number>(DEFAULT_TEMPERATURE);
  const [length, setLength] = React.useState<number>(DEFAULT_MAX_TOKENS);

  const onSubmit = () => {
    setLoading(true)
    getChatGptCompletion(baseUrl, selectedFramework, functionality, temperature, length)
    .then(response => {
      setCodeSnippet(response.data?.completion)
      setLoading(false)
    })
    .catch( e => {
      setLoading(false)
      setError(e)
    } )
  }

  return (
      <>
      {!codeSnippet  && 
        <div className='chatgpt-playground'>
          <GetStartedGuide/>
          <Form selectedFramework={selectedFramework}
                setFrameworkCallback={setFramework}
                onSubmit={onSubmit}
                functionality={functionality}
                setFunctionality={setFunctionality}
                />
            <SettingsPanel temperature={temperature}
                           maxLength={length}
                           setTemperature={setTemperature} 
                           setLength={setLength} />
         </div>}
      {loading && <div className="loading"/>}
      {error && (<div className="error">An error occurred. Please try again.</div>)}
      </>
    )
};

interface SettingsPannelPrpps {
  temperature : number ,
  maxLength : number,
  setTemperature: React.Dispatch<React.SetStateAction<number>>
  setLength: React.Dispatch<React.SetStateAction<number>>
}

const SettingsPanel = ({temperature, maxLength, setTemperature, setLength}: SettingsPannelPrpps) => {
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
    convertLength(maxLength)
  }, [temperature,maxLength])
  return (
      <div className='settings'>
        <p><b>Temperature: {standardTemperature}</b></p>
        <Slider aria-label="Volume" value={temperature} onChange={(e,n)=>handleChange(setTemperature,n) }/>
        <p><b>Maximum Length: {standardMaxLength}</b></p>
        <Slider aria-label="Volume" value={maxLength} onChange={(e,n)=>handleChange(setLength,n) }/>
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