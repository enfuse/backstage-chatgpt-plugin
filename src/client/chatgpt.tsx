import axios from "axios";
import { Message } from "../components/ChatGptPlayground/PlaygroundContext";

export const getChatGptCompletion = (baseUrl: string, model: string, messages : Message[],
                                      temperature: number, maxTokens: number) => {
    console.log(messages)
    console.log(typeof(messages))
    return axios.get(`${baseUrl}/api/chatgpt/completions`,{
    params:{
      model: model,
      messages: messages,
      temperature: temperature,
      maxTokens: maxTokens
    }})
    
}