import axios from "axios";

export const getChatGptCompletion = (baseUrl: string, framework: string, functionality:string ,
                                      temperature: number, lentth: number) => {
    return axios.get(`${baseUrl}/api/chatgpt/completion`,{
    params:{
      framework: framework,
      functionality: functionality,
      temperature: temperature,
      lentth: lentth
    }})
    
}