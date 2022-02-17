import React from "react";
import './Input.scss';

interface TextAreaProps{
  value : string
}

export const TextArea = ({
  value = "TextArea"
}:TextAreaProps) => {
  return(
    <textarea
    className={'u-textarea'}>
      {value}
    </textarea>
  )
}
