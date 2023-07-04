import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box } from '@mui/material';

export interface RadioProps {
  checked: boolean;
  checkedIcon: any;
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'default'
    | undefined;
  disabled: boolean;
  icon: any;
  size?: 'small' | 'medium' | undefined;
  value: string;
  defaultChecked: boolean;
  label: string;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export function CustomRadio({
  checked,
  checkedIcon,
  color,
  disabled,
  icon,
  size,
  value,
  defaultChecked,
  label,
  handleClick,
}: RadioProps) {
  return (
    <Box>
      {label ? (
        <FormControlLabel
          control={
            <Radio
              defaultChecked={defaultChecked}
              checked={checked}
              checkedIcon={checkedIcon}
              color={color}
              disabled={disabled}
              icon={icon}
              size={size}
              value={value}
            />
          }
          label={label}
        />
      ) : (
        <Radio
          defaultChecked={defaultChecked}
          checked={checked}
          checkedIcon={checkedIcon}
          color={color}
          disabled={disabled}
          icon={icon}
          size={size}
          value={value}
          onClick={(e) => {
            handleClick(e);
          }}
        />
      )}
    </Box>
  );
}

export default CustomRadio;
