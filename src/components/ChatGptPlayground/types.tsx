import { Dispatch, SetStateAction } from "react"

export interface ButtonPannelProps {
    children : React.ReactNode
}
export interface CodeBoxProps {
    codeSnippet : string
  }
export interface FormProps {
  editorText:string,
  loading:boolean,
  isSuccess:boolean,
  onSubmit:()=>void,
  setDescription: Dispatch<SetStateAction<string>>,
  setEditorText: Dispatch<SetStateAction<string>>,
  resetForm: ()=>void,
}

export interface CustomButtomProps {
    selected: string
    framework:string,
    setFrameworkCallback: (framework: string) => void
}

export interface SettingsPannelPrpps {
  temperature : number ,
  maxTokens : number,
  setTemperature: React.Dispatch<React.SetStateAction<number>>
  setMaxTokens: React.Dispatch<React.SetStateAction<number>>
}