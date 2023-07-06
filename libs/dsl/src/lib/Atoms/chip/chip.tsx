import {Box, Chip as MuiChip} from '@mui/material';
import {styled} from '@mui/system';
import React from 'react';
import IconComponent, {IconComponentProps,} from '../../POC/icon-component/icon-component';

export interface ChipProps {
  label?: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'default'
    | 'error'
    | 'info'
    | 'success'
    | 'warning'
    | any;
  rightIcon?: any;
  leftIcon?: any;
  shape?: 'rounded' | 'square';
  leftIconProps?: IconComponentProps; // New prop for left icon
  rightIconProps?: IconComponentProps; // New prop for right icon
}

const StyledChip = styled(Box)(({theme}) => ({
  '.chip-wrap': {
    display: 'flex',
    alignItems: 'center',
    borderRadius: (props) => {
      if (props.shape === 'rounded') {
        return '20px';
      } else if (props.shape === 'square') {
        return '4px';
      }
      return null; // Default or undefined shape value
    },
  },
  '.left-icon': {
    cursor: 'pointer',
  },
  '.label': {
    padding: '4px',
  },
  '.right-icon': {
    cursor: 'pointer',
  },
  '.square': {
    borderRadius: '4px',
  },
}));


export function CustomChip({
                             label,
                             color,
                             rightIcon,
                             leftIcon,
                             shape = 'rounded',
                             leftIconProps, // Added prop for left icon
                             rightIconProps, // Added prop for right icon
                           }: ChipProps) {
  return (
    <StyledChip>
      <MuiChip
        label={
          <Box className="chip-wrap">
            <Box className="left-icon">
              <IconComponent
                name={leftIconProps?.name} // Use leftIconProps for left icon
                size={leftIconProps?.size}
                color={leftIconProps?.color}
                label={leftIconProps?.label}
                style={leftIconProps?.style}
              />
            </Box>
            customized
            <Box className="label"> {label} </Box>
            <Box className="right-icon">
              <IconComponent
                name={rightIconProps?.name} // Use rightIconProps for right icon
                size={rightIconProps?.size}
                color={rightIconProps?.color}
                label={rightIconProps?.label}
                style={rightIconProps?.style}
              />
            </Box>
          </Box>
        }
        color={color}
        className={shape === 'square' ? 'square' : ''}
      />
    </StyledChip>
  );
}

export default CustomChip;
