import React from 'react';
import './Input.scss';

interface InputTextProps {
  value : string
}

export const InputText = ({
  value = "Text"
}:InputTextProps) => {
  return(
    <input
    className={'u-input'}
    type="text"
    readOnly
    value={ value }
    />
  )
}
