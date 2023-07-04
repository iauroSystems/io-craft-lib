import React from 'react';
import Tooltip from '@mui/material/Tooltip';

export interface TooltipProps {
  title: string;
  arrow?: boolean;
  open?: boolean;
  onOpen?: (event: Event | React.SyntheticEvent) => void;
  onClose?: (event: Event | React.SyntheticEvent) => void;
  placement?:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top';
  children: any;
}

export function CustomTooltip({
  title,
  children,
  arrow,
  open,
  onOpen,
  onClose,
  placement,
}: TooltipProps) {
  return (
    <>
      <Tooltip
        title={title}
        arrow={arrow}
        open={open}
        onClose={onClose}
        onOpen={onOpen}
        placement={placement}
      >
        {children}
      </Tooltip>
    </>
  );
}

export default CustomTooltip;
