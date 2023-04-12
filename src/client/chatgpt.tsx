import axios from "axios";

export const getChatGptCompletion = (baseUrl: string, framework: string, description:string ,
                                      temperature: number, maxLength: number) => {
    return axios.get(`${baseUrl}/api/chatgpt/completion`,{
    params:{
      framework: framework,
      description: description,
      temperature: temperature,
      maxLength: maxLength
    }})
    
}