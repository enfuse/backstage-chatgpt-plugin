import React, { createContext, Dispatch, useReducer } from "react";
import SystemPrompt from "./SystemPrompt";

export interface Message {
    role : string,
    content : string
}
export interface PlaygroundState {
    model: string;
    temperature : number,
    maxTokens : number,
    userMessage : string,
    systemPrompt : string,
    isChatStarted : boolean,
    messages : Message []
}
 const initialState : PlaygroundState = {
    model: 'gpt-3.5-turbo',
    temperature : 0.8,
    maxTokens : 256,
    userMessage : '',
    systemPrompt : '',
    isChatStarted : false,
    messages : [{"role":"system", "content":""}]
}

export const UPDATE_TEMPERATURE = 'UPDATE_TEMPERATURE'
export const UPDATE_MAX_TOKENS = 'UPDATE_MAX_TOKENS'
export const UPDATE_USER_MESSAGE = 'UPDATE_USER_MESSAGE'
export const UPDATE_MESSAGE_CHAT = 'UPDATE_MESSAGE_CHAT'
export const RESET_MESSAGE_CHAT = 'RESET_MESSAGE_CHAT'
export const UPDATE_SYSTEM_PROMPT = 'UPDATE_SYSTEM_PROMPT'

interface EditTemperatureAction {
    type: typeof UPDATE_TEMPERATURE;
    payload: {
      temperature: number;
    };
}
interface UpdateMaxTokens {
    type: typeof UPDATE_MAX_TOKENS;
    payload: {
      maxTokens: number;
    };
}
interface UpdateUserMessage {
    type: typeof UPDATE_USER_MESSAGE;
    payload: {
      userMessage: string;
    };
}
interface UpdateMessageChat {
    type: typeof UPDATE_MESSAGE_CHAT;
    payload: {
        newMessages: Message[];
    };
}
interface ResetMessageChat {
    type: typeof RESET_MESSAGE_CHAT;
}

interface UpdateSystemPrompt {
    type: typeof UPDATE_SYSTEM_PROMPT;
    payload: {
        systemPrompt: string;
    };
}

export type PlayGroundActionTypes = EditTemperatureAction | UpdateMaxTokens | UpdateUserMessage | UpdateMessageChat | ResetMessageChat | UpdateSystemPrompt

export const  playgroundReducer  = (state: PlaygroundState , action : PlayGroundActionTypes) : PlaygroundState => {
    switch(action.type) {
        case UPDATE_TEMPERATURE:
            return {
                ...state,
                temperature: action.payload.temperature
            }
        case UPDATE_MAX_TOKENS:
            return {
                ...state,
                maxTokens: action.payload.maxTokens
            }
        case UPDATE_USER_MESSAGE:
            return {
                ...state,
                userMessage: action.payload.userMessage
            }
        case UPDATE_MESSAGE_CHAT:
            return {
                ...state,
                messages: [...state.messages, ...action.payload.newMessages],
                isChatStarted: true
            }
        case RESET_MESSAGE_CHAT:
            return {
                ...state,
                messages: [],
                isChatStarted: false
            }
        case UPDATE_SYSTEM_PROMPT:
            const systemMessage = {"role":"system", "content":action.payload.systemPrompt}
            const newState = {
                ...state,
                systemPrompt: action.payload.systemPrompt,
            }
            newState.messages[0] = systemMessage
            return newState

        default:
            return {...state}
   }
  }
interface PlaygroundContextValue {
  state: PlaygroundState;
  dispatch: Dispatch<PlayGroundActionTypes>;
}

const PlaygroundContext = createContext<PlaygroundContextValue>({
  state: initialState,
  dispatch: () => null,
});

export const PlaygroundProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(playgroundReducer, initialState);
  return (
    <PlaygroundContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundContext;
