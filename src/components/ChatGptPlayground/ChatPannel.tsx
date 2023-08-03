
import React, {useContext} from 'react'
import {Button } from '@material-ui/core';
import { FormProps } from './types';
import { ButtonPanel } from '../common/ButtonPanel';
import PlaygroundContext, { UPDATE_USER_MESSAGE } from './PlaygroundContext';

export const ChatPannel = ({onSubmit,resetForm, loading, isSuccess}: FormProps) => {
  const { state, dispatch } = useContext(PlaygroundContext);
  const PLACEHOLDER = 'Add message...'

  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    dispatch({type: UPDATE_USER_MESSAGE, payload: {userMessage: event.target.value}})
  };

  const onSubmitHandler = () => {
    onSubmit()
    dispatch({type: UPDATE_USER_MESSAGE, payload: {userMessage: ''}})
  }

  return <div className='chat-pannel'>
            <div className = "chat-pannel-input">
              <div className='user-input'>
                <textarea  onChange={(e)=>handleChange(e)}
                            value={state.userMessage}
                            placeholder={PLACEHOLDER}/>
                            
                  <div className='button-pannel'>
                    <Button variant='outlined'
                            color="primary"
                            disabled={isSuccess || loading}
                            onClick={()=>onSubmitHandler()}>
                            {!loading && 'Submit' }
                            {!!loading && <div className="loading"/>}
                    </Button>
                    
                    <Button variant='outlined'
                    color="primary"
                    onClick={()=>resetForm()}>
                      Reset
                    </Button>

                  </div>
              </div>
            </div>
            <div className='messages'>
              {state.messages?.length > 0 && state.isChatStarted && state.messages.map(message => {
                return <Message key={message.content} role={message.role} content={message.content} />
              })}
            </div>
          </div>
  }

interface MessageProps {
  role : string,
  content :  string ,
}
const Message = ({role, content}: MessageProps) => {
  return (
    <div className="chat-message">
      <div
        contentEditable={false}
        role="textbox"
        tabIndex={0}
        aria-multiline={true}
      >
      <p><b>{role.charAt(0).toUpperCase() + role.slice(1)}</b> : {content}</p>
      </div>
    </div>
  );
}