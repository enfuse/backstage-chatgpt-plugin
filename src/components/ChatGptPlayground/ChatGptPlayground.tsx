import React from 'react';
import { useApi, configApiRef } from '@backstage/core-plugin-api';
import "../common/styles.css"
import {getChatGptCompletion} from '../../client/chatgpt'
import { ChatPannel } from './ChatPannel';
import { SettingsPanel } from './SettingsPannel';
import SystemPrompt from './SystemPrompt'
import PlaygroundContext, {Message, RESET_MESSAGE_CHAT, UPDATE_MESSAGE_CHAT} from './PlaygroundContext';


export const ChatGptPlayground = () => {
  const config = useApi(configApiRef)
  const baseUrl = config.getString('backend.baseUrl')
  const {state, dispatch} = React.useContext(PlaygroundContext);

  const [error , setError] = React.useState<any>(null)
  const [loading , setLoading] = React.useState<boolean>(false)
  const [isSuccess , setIsSuccess] = React.useState<boolean>(false)

  const onSubmit = async () => {
    setLoading(true)

    const userMessge : Message = {role: 'user', content : state.userMessage}
    const messageHistory = [...state.messages, userMessge]
    getChatGptCompletion(baseUrl, state.model, messageHistory, state.temperature, state.maxTokens)
        .then(response => {
            const systemContent = response.data?.completion[0].message.content;
            const assistantMessage: Message =  {role: 'Assistant', content : systemContent}
            dispatch({ type: UPDATE_MESSAGE_CHAT, payload: {newMessages: [userMessge,assistantMessage]} });
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
          <SystemPrompt/>
          <ChatPannel onSubmit={onSubmit}
                loading={loading}
                isSuccess={isSuccess}
                resetForm={()=>resetPage()}
                />
          <SettingsPanel/>
          {error && (<div className="error">An error occurred. Please try again.</div>)}
      </div>
    )
};

