
import React from 'react';
import { Button } from '@material-ui/core';
import './ChatGptPlayground.css'
import { ButtonPannelProps } from './types';

const supportedFrameworks  = ['react', 'angular', 'vue']


interface CustomButtomProps {
    selected: string
    framework:string,
    setFrameworkCallback: (framework: string) => void
}
export const ButtonPannel = ({selected,setFrameworkCallback}:ButtonPannelProps) => {
    return (
        <div className='button-pannel'>
            {
            supportedFrameworks.map(framework => 
                <CustomButton selected={selected}
                              framework={framework}  
                              setFrameworkCallback={setFrameworkCallback}
                                />
                 )
            }
        </div> 
    )
}

const CustomButton = ({framework , selected, setFrameworkCallback } : CustomButtomProps) => {
    return  (
        <Button variant={selected == framework? "contained" : "outlined"}
                color="primary"
                onClick={()=>setFrameworkCallback(framework)}> {framework}</Button>
    ) 
}