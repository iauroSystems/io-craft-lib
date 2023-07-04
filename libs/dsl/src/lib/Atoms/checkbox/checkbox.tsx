import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export type CheckboxProps = {
  checked: boolean;
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  defaultChecked: boolean;
  size: 'small' | 'medium' | undefined;
  checkedIcon: any;
  value: any;
  icon: any;
  disabled: boolean;
  label: string;
  actionClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export function CustomCheckbox({
  checked,
  color,
  defaultChecked,
  size,
  checkedIcon,
  value,
  icon,
  disabled,
  label,
  actionClick,
}: CheckboxProps) {
  return (
    <>
      {label ? (
        <FormControlLabel
          control={
            <Checkbox
              checkedIcon={checkedIcon}
              checked={checked}
              color={color}
              defaultChecked={defaultChecked}
              size={size}
              value={value}
              icon={icon}
              disabled={disabled}
              onClick={(e) => actionClick(e)}
            />
          }
          color={color}
          label={label}
        />
      ) : (
        <Checkbox
          checkedIcon={checkedIcon}
          checked={checked}
          color={color}
          defaultChecked={defaultChecked}
          size={size}
          value={value}
          icon={icon}
          disabled={disabled}
          onClick={(e) => actionClick(e)}
        />
      )}
    </>
  );
}

export default CustomCheckbox;
