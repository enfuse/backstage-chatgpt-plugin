import { Dispatch, SetStateAction } from "react"

export interface ButtonPannelProps {
    children : React.ReactNode
}
export interface CodeBoxProps {
    codeSnippet : string
  }
export interface FormProps {
    selectedFramework:string,
    setFrameworkCallback: ButtonPannelProps["setFrameworkCallback"]
    onSubmit:()=>void,
    functionality:string,
    setFunctionality: Dispatch<SetStateAction<string>>,
  }

export interface CustomButtomProps {
    selected: string
    framework:string,
    setFrameworkCallback: (framework: string) => void
}