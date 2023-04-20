import axios from "axios";

export const getChatGptCompletion = (baseUrl: string, description:string ,
                                      temperature: number, maxTokens: number) => {
    return axios.get(`${baseUrl}/api/chatgpt/completions`,{
    params:{
      description: description,
      temperature: temperature,
      maxTokens: maxTokens
    }})
    
}