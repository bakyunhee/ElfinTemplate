import React from 'react';
import './Button.scss';

interface ButtonProps {
  disabled?: boolean;
  width?: number;
  variant?: 'default' | 'white' | 'blue' | 'skyblue';
  label: string;
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  disabled = false,
  width = 4.25,
  variant = 'default',
  label,
  ...props
}: ButtonProps) => {
  const mode = disabled;
  let backgroundColor, minWidth, color;
  const minHeight = '1.688rem';

  if(width == 0 || width < 0){
    minWidth = '4.25rem'
  }else{
    minWidth = width + 'rem'
  }

  return (
    <button
      type="button"
      className={['u-button' ,`u-button-${variant}`, mode].join(' ')}
      style={{ backgroundColor, minWidth , minHeight, color}}
      {...props}
    >
      {label}
    </button>
  );
};
