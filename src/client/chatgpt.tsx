import axios from "axios";

export const getChatGptCompletion = (baseUrl: string, description:string ,
                                      temperature: number, maxTokens: number) => {
    return axios.get(`${baseUrl}/api/chatgpt/completion`,{
    params:{
      description: description,
      temperature: temperature,
      maxTokens: maxTokens
    }})
    
}