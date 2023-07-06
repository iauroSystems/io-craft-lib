import {Typography} from '@mui/material';
import React from 'react';
import IconComponent, {IconComponentProps,} from '../../POC/icon-component/icon-component';

interface IText {
  text: string;
  color: string;
}

export interface ISquareChipProps {
  chipColor: string;
  icon?: IconComponentProps;
  textData: any;
  variant?: any;
}

export const SquareChip = (props: ISquareChipProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        minWidth: '10px',
        alignItems: 'center',
        height: 'auto',
        padding: 0,
        backgroundColor: props.chipColor || '#DADDFB',
        borderRadius: '2px',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        // width: 'auto',
      }}
    >
      <Typography
        variant={props.variant || 'body2'}
        sx={{
          textOverflow: 'ellipsis',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}
      >
        <div
          style={{
            color: props.textData.color || '#131CA2',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
          }}
        >
          {props.textData.text}
        </div>
        {props && props.icon && (
          <div>
            <IconComponent
              name={props.icon.name}
              color={props.icon.color || props.textData.color || '#131CA2'}
              size={props.icon.size}
            ></IconComponent>
          </div>
        )}
      </Typography>
    </div>
  );
};

export default SquareChip;
