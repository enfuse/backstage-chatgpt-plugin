
import React from 'react'
import {Button } from '@material-ui/core';
import { FormProps } from './types';
import { ButtonPanel } from '../common/ButtonPanel';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

export const Editor = ({onSubmit,setEditorText,setDescription,resetForm, editorText, loading, isSuccess}: FormProps) => {
  const PLACEHOLDER = 'A Java spring controller to serve as a payments endpoint for a pet store'

  const handleChange = (event: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
    setEditorText(event.target.value);
    setDescription(event.target.value);
  };

  return <div className='editor'>
        {/* <textarea
          placeholder={PLACEHOLDER}
          rows={25}
          value={editorText}
          onChange={(e)=>handleChange(e)}/> */}
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

interface MessageProps {
  role : string,
  content :  string ,
}
const Message = ({role, content}: MessageProps) => {
  return (
    <textarea
      rows={25}
      value={`${role} : ${content}`}/>
  )
}