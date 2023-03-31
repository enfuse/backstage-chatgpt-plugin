import { Dispatch, SetStateAction } from "react"

export interface ButtonPannelProps {
    selected: string
    setFrameworkCallback: (framework: string) => void
}
export interface CodeBoxProps {
    codeSnippet : string
  }
export interface FormProps {
    selectedFramework:string,
    setFrameworkCallback: ButtonPannelProps["setFrameworkCallback"]
    onSubmit:()=>void,
    setFunctionality: Dispatch<SetStateAction<string>>,
    setStyling : Dispatch<SetStateAction<string>>
  }