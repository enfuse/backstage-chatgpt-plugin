import React, { createContext, Dispatch, useReducer } from "react";

export interface Message {
    role : string,
    content : string
}
export interface PlaygroundState {
    temperature : number,
    maxTokens : number,
    userMessage : string,
    messages : Message []
}
 const initialState : PlaygroundState = {
    temperature : 0.8,
    maxTokens : 256,
    userMessage : '',
    messages : []
}

export const UPDATE_TEMPERATURE = 'UPDATE_TEMPERATURE'
export const UPDATE_MAX_TOKENS = 'UPDATE_MAX_TOKENS'
export const UPDATE_USER_MESSAGE = 'UPDATE_USER_MESSAGE'
export const UPDATE_MESSAGE_CHAT = 'UPDATE_MESSAGE_CHAT'
export const RESET_MESSAGE_CHAT = 'RESET_MESSAGE_CHAT'

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
        message: Message;
    };
}
interface ResetMessageChat {
    type: typeof RESET_MESSAGE_CHAT;
}

export type PlayGroundActionTypes = EditTemperatureAction | UpdateMaxTokens | UpdateUserMessage | UpdateMessageChat | ResetMessageChat

export const  playgroundReducer  = (state: PlaygroundState , action : PlayGroundActionTypes) : PlaygroundState => {
   console.log('state updating...')
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
                messages: [...state.messages, action.payload.message]
            }
        case RESET_MESSAGE_CHAT:
            return {
                ...state,
                messages: []
            }
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

export const PlaygroundProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(playgroundReducer, initialState);
  return (
    <PlaygroundContext.Provider value={{ state, dispatch }}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundContext;
