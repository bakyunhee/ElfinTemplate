import React from "react";
import './Input.scss'

interface InputNumberProps {
  value : number;
}

export const InputNumber = ({
  value = 1
}:InputNumberProps) => {
  return(
    <input
      className={'u-input'}
      type="number"
      readOnly
      value={value}
    />
  )
}
