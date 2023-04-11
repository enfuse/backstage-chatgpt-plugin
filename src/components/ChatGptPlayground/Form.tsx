
import React from 'react'
import { ButtonPanel } from '../common/ButtonPanel';
import {Button, TextField } from '@material-ui/core';
import { CustomButtomProps, FormProps } from './types';

export const Form = ({selectedFramework, onSubmit,functionality, setFunctionality, setFrameworkCallback}: FormProps) => {
  const supportedFrameworks  = ['react', 'angular', 'vue']

  return <>
        <ButtonPanel>
          {
            supportedFrameworks.map(framework => 
              <CustomButton selected={selectedFramework}
                            framework={framework}  
                            setFrameworkCallback={setFrameworkCallback}
                              />)
          }
        </ButtonPanel>
        <TextField id="standard-basic"
                  label="Functionality"
                  variant="standard"
                  placeholder={functionality}
                  onChange={(e)=>setFunctionality(e.target.value||'')}/>
        <Button variant='outlined'
                color="primary"
                onClick={()=>onSubmit()}>
                Submit!
        </Button>
    </>
  }

  const CustomButton = ({framework , selected, setFrameworkCallback } : CustomButtomProps) => {
    return  (
        <Button variant={selected == framework? "contained" : "outlined"}
                color="primary"
                onClick={()=>setFrameworkCallback(framework)}> {framework}</Button>
    ) 
}