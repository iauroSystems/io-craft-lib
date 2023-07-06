/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import {styled} from '@mui/system';
import themes from 'libs/dsl/src/theme';

const CardFooterContainer = styled('div')({
  minWidth: '90%',
  height: '64px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  backgroundColor: 'white',
  borderRadius: '0px 0px 4px 4px',
  padding: '12px 16px',
});

const Button = styled('button')(({theme}) => ({
  height: '40px',
  width: '70px',
  marginRight: '10px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '20px',
}));

const CustomCardFooter = ({
                            onAccept,
                            onReject,
                            acceptLabel,
                            rejectLabel,
                          }) => {
  const dslTheme = themes.default;
  return (
    <CardFooterContainer>
      <Button
        style={{
          color: dslTheme.palette.primary.pri300Main,
          border: `1px solid ${dslTheme.palette.primary.pri300Main}`,
          backgroundColor: 'white',
        }}
        onClick={onReject}
      >
        {rejectLabel}
      </Button>
      <Button
        style={{
          backgroundColor: dslTheme.palette.primary.pri300Main,
          color: 'white',
          border: 'none',
        }}
        onClick={onAccept}
      >
        {acceptLabel}
      </Button>
    </CardFooterContainer>
  );
};

export default CustomCardFooter;
