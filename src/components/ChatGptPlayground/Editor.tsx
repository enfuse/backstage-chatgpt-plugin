
import React, {useContext} from 'react'
import {Button } from '@material-ui/core';
import { FormProps } from './types';
import { ButtonPanel } from '../common/ButtonPanel';
import PlaygroundContext, { UPDATE_USER_MESSAGE } from './PlaygroundContext';

export const Editor = ({onSubmit,resetForm, loading, isSuccess}: FormProps) => {
  const { state, dispatch } = useContext(PlaygroundContext);
  const PLACEHOLDER = 'A Java spring controller to serve as a payments endpoint for a pet store'

  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    dispatch({type: UPDATE_USER_MESSAGE, payload: {userMessage: event.target.value}})
  };

  return <div className='editor'>
            <div className='chat-box'>
              {state.messages?.length > 0 && state.messages.map(message => {
                return <Message key={message.content} role={message.role} content={message.content} />
              })}
            </div>
            {!loading && !isSuccess && 
                <textarea  onChange={(e)=>handleChange(e)}
                placeholder={PLACEHOLDER}></textarea>
            }
            <ButtonPanel>
              <Button variant='outlined'
                      color="primary"
                      disabled={isSuccess || loading}
                      onClick={()=>onSubmit()}>
                      {!loading && 'Submit!' }
                      {!!loading && <div className="loading"/>}
              </Button>
              {!loading && !!isSuccess && 
                  <Button variant='outlined'
                    color="primary"
                    onClick={()=>resetForm()}>
                    Reset
              </Button>}
            </ButtonPanel>
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
        <p><b>{role}</b> : {content}</p>
      </div>
    </div>
  );
}