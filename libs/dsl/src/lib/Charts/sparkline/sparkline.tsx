import { useTheme } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import { SparklinesCurve, Sparklines } from 'react-sparklines';
import { Box } from '@mui/system';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface SparklineProps {
  data: Array<number>;
}

export const Sparkline = (Props: SparklineProps) => {
  return (
    <Box sx={{}}>
      <Sparklines height={40} data={Props.data}>
        <SparklinesCurve color="#3EF888" />
      </Sparklines>
    </Box>
  );
};

export default Sparkline;
