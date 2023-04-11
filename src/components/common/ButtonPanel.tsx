
import React from 'react';
import './styles.css'
import { ButtonPannelProps } from '../ChatGptPlayground/types';


export  const ButtonPanel: React.FC<ButtonPannelProps> = ({ children }) => {
    return <div className='button-pannel'>{children}</div>;
  };

