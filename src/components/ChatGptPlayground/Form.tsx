
import React from 'react'
import {Button } from '@material-ui/core';
import { FormProps } from './types';
import { ButtonPanel } from '../common/ButtonPanel';

export const Form = ({onSubmit,setEditorText,setDescription,resetForm, editorText, loading, isSuccess}: FormProps) => {
  const PLACEHOLDER = 'A java spring controler to serve as a payments endpoint for a pet store'
  // const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setEditorText(event.target.value);
    setDescription(event.target.value);
  };

  return <div className='editor'>
        <textarea
          placeholder={PLACEHOLDER}
          rows={25}
          value={editorText}
          onChange={(e)=>handleChange(e)}/>
          <ButtonPanel>
            <Button variant='outlined'
                    color="primary"
                    disabled={isSuccess || loading}
                    onClick={()=>onSubmit()}>
                    {!loading && 'Submit!' }
                    {!!loading && <div className="loading"/>}
            </Button>
            {!loading && !!isSuccess && 
                <Button variant='outlined'
                  color="primary"
                  onClick={()=>resetForm()}>
                  Reset
                </Button>}
          </ButtonPanel>
    </div>
  }
