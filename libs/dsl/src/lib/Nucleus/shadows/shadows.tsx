import { styled, useTheme } from '@mui/system';
import { Box, Typography } from '@mui/material';
import './shadows.css';

export function Shadow(props: any) {
  const shadowData = [
    {
      key: 'ELevation -1',
      value: '0 0.5px 4px 0 rgb(113, 112, 112, 0.30)',
    },
    {
      key: 'ELevation 0',
      value: '0 0px 0px 0 #000000',
    },
    {
      key: 'ELevation 1',
      value:
        '0 0px 1px 0  rgb(18, 17, 17, 0.08), 0 0.5px 2px 0 rgb(113, 112, 112, 0.16)',
    },
    {
      key: 'ELevation 2',
      value:
        '0 0 1px  0  rgb(18, 17, 17, 0.04), 0 2px 4px 0 rgb(113, 112, 112, 0.16)',
    },
    {
      key: 'ELevation 3',
      value:
        '0 0px 2px 0 rgb(18, 17, 17, 0.04),  0px 4px 8 px 0px rgb(113, 112, 112, 0.16)',
    },
    {
      key: 'ELevation 4',
      value:
        '0 2px 4px 0 rgb(18, 17, 17, 0.04),  0px 8px 16px 0px rgb(113, 112, 112, 0.16)',
    },
    {
      key: 'ELevation 5',
      value:
        '0 2px 8px 0 rgb(18, 17, 17, 0.04),  0px 16px 24px 0px rgb(113, 112, 112, 0.16)',
    },
    {
      key: 'ELevation 6',
      value:
        '0 2px 8px 0 rgb(18, 17, 17, 0.08),  0px 20px 32px 0px rgb(113, 112, 112, 0.24)',
    },
  ];

  return (
    <Box className="main-container">
      {shadowData.map(({ key, value }) => {
        return (
          <Box key={key} className="sub-container">
            <Box
              style={{
                boxShadow: value,
              }}
              className="container"
            ></Box>
            <Typography>{key}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Shadow;
