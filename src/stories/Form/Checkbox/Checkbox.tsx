import React from "react";
import styled from 'styled-components';

const CheckboxContainer = styled.div`
  min-width: 1.25rem;
  min-height: 1.25rem;
  width:1.25rem;
  height:1.25rem;
  display:block;
`

const Label = styled.label<{checked : boolean}>`
    min-width: 1.25rem;
    min-height: 1.25rem;
    border-radius: 0.25rem;
    border:0.094rem solid #449ffd;
    box-shadow: 0 0 0 0.2rem ${({checked}) => (checked ? `rgba(68, 159, 253, 0.2)` : `#fff`)};
    background-color: ${({checked}) => (checked ? `#449ffd` : `#fff`)};
    width: 100%;
    height:100%;
    display: block;
    cursor:pointer;
    transition: all ease 0.3s 0s;
`

const RealCheckbox = styled.input`
  display: none;
`

interface CheckboxProps{
  checked : boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({checked, onChange}:CheckboxProps) => {
  return(
    <CheckboxContainer className="u-check-div">
      <RealCheckbox
        className={'u-checkbox'}
        type="checkbox"
        onChange={onChange}
        checked = {checked}
      />
      <Label checked={checked}></Label>
    </CheckboxContainer>
  )
}
