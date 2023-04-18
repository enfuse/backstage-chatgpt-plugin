import React from 'react';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import "../common/styles.css"
import {getChatGptCompletion} from '../../client/chatgpt'
import { Editor } from './Editor';
import { SettingsPanel } from './SettingsPannel';
import PlaygroundContext, {Message, RESET_MESSAGE_CHAT, UPDATE_MESSAGE_CHAT} from './PlaygroundContext';


export const ChatGptPlayground = () => {
  const config = useApi(configApiRef)
  const baseUrl = config.getString('backend.baseUrl')
  const {state, dispatch} = React.useContext(PlaygroundContext);

  const [error , setError] = React.useState<any>(null)
  const [loading , setLoading] = React.useState<boolean>(false)
  const [isSuccess , setIsSuccess] = React.useState<boolean>(false)

  const onSubmit = () => {
    setLoading(true)

    const userMessge : Message = {role: 'User', content : state.userMessage}
    dispatch({ type: UPDATE_MESSAGE_CHAT, payload: {message: userMessge } });
    getChatGptCompletion(baseUrl, state.userMessage, state.temperature, state.maxTokens)
        .then(response => {
            const systemContent = response.data?.completion[0].message.content;
            // console.log(systemContent)
            // console.log(response.data?.completion[0].message)
            const assistantMessage: Message =  {role: 'Assistant', content : systemContent}
            dispatch({ type: UPDATE_MESSAGE_CHAT, payload: {message: assistantMessage} });
            setLoading(false)
            setIsSuccess(true)
        })
        .catch( e => {
            setLoading(false)
            setIsSuccess(false)
            setError(e)
        })
  }

  const resetPage = () => {
    setLoading(false)
    setIsSuccess(false)
    dispatch({type: RESET_MESSAGE_CHAT})
  }

  return (
      <div className='chatgpt-playground'>
          <GetStartedGuide/>
          <Editor onSubmit={onSubmit}
                loading={loading}
                isSuccess={isSuccess}
                resetForm={()=>resetPage()}
                />
          <SettingsPanel/>
          {error && (<div className="error">An error occurred. Please try again.</div>)}
      </div>
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