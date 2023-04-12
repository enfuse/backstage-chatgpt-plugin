
import React from 'react'
import {Button, TextField } from '@material-ui/core';
import { FormProps } from './types';

export const Form = ({onSubmit,functionality, setFunctionality}: FormProps) => {
  return <div className='editor'>
        <TextField id="standard-basic"
                  label="Playground"
                  placeholder={functionality}
                  multiline
                  minRows={25}
                  onChange={(e)=>setFunctionality(e.target.value||'')}/>
        <Button variant='outlined'
                color="primary"
                onClick={()=>onSubmit()}>
                Submit!
        </Button>
    </div>
  }
