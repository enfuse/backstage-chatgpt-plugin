

interface Message {
    role : string,
    content : string
}
interface PlaygroundState {
    temperature : number,
    maxTokens : number,
    userMessage : string,
    messages : Message []
}
export const defaultState : PlaygroundState = {
    temperature : 80,
    maxTokens : 6.4,
    userMessage : '',
    messages : []
}  

export const UPDATE_TEMPERATURE = 'UPDATE_TEMPERATURE';
export const UPDATE_MAX_TOKENS = 'UPDATE_MAX_TOKENS';
export const UPDATE_USER_MESSAGE = 'UPDATE_USER_MESSAGE';
export const UPDATE_MESSAGE_CHAT = 'UPDATE_MESSAGE_CHAT';

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

export type PlayGroundActionTypes = EditTemperatureAction | UpdateMaxTokens | UpdateUserMessage | UpdateMessageChat
export const  playgroundReducer  = (state: PlaygroundState = defaultState, action : PlayGroundActionTypes) : PlaygroundState => {
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
        default:
            return {...state}
   }
  }