import {Box, Button as MuiButton} from '@mui/material';
import {styled, useTheme} from '@mui/system';
import React from 'react';
import IconComponent, {IconComponentProps,} from '../../POC/icon-component/icon-component';
import './button-styling.css';

export interface IButtonProps {
  text?: string;
  size: number;
  leftIcon: IconComponentProps;
  rightIcon: IconComponentProps;
  handleClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  icon: IconComponentProps;
  isDisabled?: boolean;
}

const StyledButtonComponent = styled(Box)(({theme}) => {
  return {
    '.icon-wrapper': {
      marginLeft: 1,
      marginRight: 1,
    },
    MuiButton: {},
  };
});

export function Button(props: IButtonProps) {
  const theme = useTheme();
  return (
    <StyledButtonComponent>
      <MuiButton
        sx={{
          p:
            props.text && props.leftIcon && props.rightIcon
              ? '10px 24px'
              : props.text && props.rightIcon
                ? '10px 24px 10px 24px'
                : props.text && props.leftIcon
                  ? '10px 24px 10px 24px'
                  : props.icon
                    ? '0px'
                    : '10px 24px 10px 24px',
          minWidth: props.icon ? '36px' : '',
        }}

        startIcon={
          props.leftIcon && (
            <IconComponent
              name={props.leftIcon?.name}
              size={props.leftIcon?.size}
              color={props.leftIcon?.color}
              label={props.leftIcon?.label}
              style={props.leftIcon?.style}
            />
          )
        }
        endIcon={
          props.rightIcon && (
            <IconComponent
              name={props.rightIcon?.name}
              size={props.rightIcon?.size}
              color={props.rightIcon?.color}
              label={props.leftIcon?.label}
              style={props.rightIcon?.style}
            />
          )
        }
        color={props.color}
        disabled={props.isDisabled}
        variant={props.variant}
        onClick={(e) => {
          props.handleClick(e);
        }}
      >
        <Box component="span" className="icon-wrapper">
          {props.text ? (
            props.text
          ) : (
            <IconComponent
              name={props.icon?.name}
              size={props.icon?.size}
              color={props.icon?.color}
              label={props.leftIcon?.label}
              style={props.icon?.style}
            />
          )}
        </Box>
      </MuiButton>
    </StyledButtonComponent>
  );
}

export default Button;
