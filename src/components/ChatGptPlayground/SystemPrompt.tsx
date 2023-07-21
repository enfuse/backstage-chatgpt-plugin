import React, { useContext } from 'react';
import PlaygroundContext, { UPDATE_SYSTEM_PROMPT } from './PlaygroundContext';

const SystemPrompt = () => {
    const { state, dispatch } = useContext(PlaygroundContext);
    const PLACEHOLDER = 'Act as a Spring expert assistant'
    const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        dispatch({type: UPDATE_SYSTEM_PROMPT, payload: {systemPrompt: event.target.value}})
      };
    return (
        <div className='system-prompt'>
            <h2>System Prompt</h2>
            <textarea  onChange={(e)=>handleChange(e)}
                    placeholder={PLACEHOLDER}
                    disabled={state.isChatStarted}
                    ></textarea>
        </div>
    )
}

export default SystemPrompt;