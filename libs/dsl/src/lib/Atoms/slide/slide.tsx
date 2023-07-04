import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

export interface SlideProps {
  checked: boolean;
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'warning'
    | 'info'
    | 'error'
    | undefined;
  defaultChecked: boolean;
  disabled: boolean;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  size: 'small' | 'medium' | undefined;
  value: any;
  label: string;
  //   icon?:any;
  //   checkedIcon?:any
}

export function Slide({
  checked,
  defaultChecked,
  color,
  disabled,
  size,
  value,
  label,
  handleClick,
}: //   icon,
//   checkedIcon
SlideProps) {
  return (
    <>
      {label ? (
        <FormControlLabel
          control={
            <Switch
              checked={checked}
              color={color}
              defaultChecked={defaultChecked}
              disabled={disabled}
              size={size}
              value={value}
              onClick={(e) => {
                handleClick(e);
              }}
            />
          }
          label={label}
        />
      ) : (
        <Switch
          checked={checked}
          color={color}
          defaultChecked={defaultChecked}
          disabled={disabled}
          size={size}
          value={value}
          onClick={(e) => {
            handleClick(e);
          }}
        />
      )}
    </>
  );
}

export default Slide;
