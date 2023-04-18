
export interface ButtonPannelProps {
    children : React.ReactNode
}
export interface CodeBoxProps {
    codeSnippet : string
  }
export interface FormProps {
  loading:boolean,
  isSuccess:boolean,
  onSubmit:()=>void,
  resetForm: ()=>void,
}

export interface CustomButtomProps {
    selected: string
    framework:string,
    setFrameworkCallback: (framework: string) => void
}