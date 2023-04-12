
import React from 'react'
import {Button, TextField } from '@material-ui/core';
import { FormProps } from './types';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  root: {
    background: '#f1f1f1',
  },
});
export const Form = ({onSubmit,setEditorText,setDescription, editorText}: FormProps) => {
  const PLACEHOLDER = 'A java spring controler to serve as a payments endpoint for a pet store'
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setEditorText(event.target.value);
    setDescription(event.target.value);
  };
  return <div className='editor'>
        <TextField 
                  className={classes.root}
                  label="Playground"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  placeholder={PLACEHOLDER}
                  multiline
                  minRows={25}
                  value={editorText}
                  onChange={(e)=>handleChange(e)}/>
        <Button variant='outlined'
                color="primary"
                onClick={()=>onSubmit()}>
                Submit!
        </Button>
    </div>
  }
