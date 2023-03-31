
import React from 'react'
import { ButtonPannel } from './ButtonPannel';
import {Button, TextField } from '@material-ui/core';
import { FormProps } from './types';

export const Form = ({selectedFramework, onSubmit, setFunctionality, setStyling, setFrameworkCallback}: FormProps) => {
    return <>
        <ButtonPannel selected={selectedFramework} setFrameworkCallback={setFrameworkCallback}/>
        <TextField id="standard-basic"
                  label="Functionality"
                  variant="standard"
                  onChange={(e)=>setFunctionality(e.target.value||'')}/>
        <TextField id="standard-basic" 
                    label="Styling" 
                    variant="standard"
                    onChange={(e)=>setStyling(e.target.value||'')} />
        <Button variant='outlined'
                onClick={()=>onSubmit()}>
          Submit!
        </Button>
    </>
  }