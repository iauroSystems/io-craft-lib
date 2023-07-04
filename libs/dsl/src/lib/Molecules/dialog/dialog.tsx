/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Dialog as DialogBox } from '@mui/material';

export interface DialogProps {
  open: boolean;
  children: React.ReactNode;
  fullScreen?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onClose?: (event: object, reason: string) => void;
}

export function DialogComponent({
  open,
  children,
  fullScreen,
  maxWidth,
  onClose,
}: DialogProps) {
  
  return (

    <DialogBox
      open={open}
      onClose={onClose}
      fullScreen={fullScreen}
      maxWidth={maxWidth}
    >
     
      {children}
      
    </DialogBox>
   

  );
}

export default DialogComponent;
