import { Dispatch, SetStateAction } from "react"

export interface ButtonPannelProps {
    children : React.ReactNode
}
export interface CodeBoxProps {
    codeSnippet : string
  }
export interface FormProps {
  description:string,
  editorText:string,
  onSubmit:()=>void,
  setDescription: Dispatch<SetStateAction<string>>,
  setEditorText: Dispatch<SetStateAction<string>>,
}

export interface CustomButtomProps {
    selected: string
    framework:string,
    setFrameworkCallback: (framework: string) => void
}