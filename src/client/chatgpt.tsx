import axios from "axios";

export const getChatGptCompletion = (baseUrl: string, framework: string, functionality:string ) => {
    return axios.get(`${baseUrl}/api/chatgpt/completion`,{
    params:{
      framework: framework,
      functionality: functionality,
    }})
    
}