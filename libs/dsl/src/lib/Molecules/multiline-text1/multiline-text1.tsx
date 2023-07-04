/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Typography, useTheme } from '@mui/material';
import { Box, styled } from '@mui/system';
import themes from 'libs/dsl/src/theme';

/* eslint-disable-next-line */
export interface MultilineText1Props {
  iconName: string;
  title: string;
  subtitle: string;
  onClickEvent: (data: any) => void;
}

const StyledMultilineText1 = styled(Box)(({ theme }) => {
  const defaultTheme=themes.default;
  return {
    '&': {
      position: 'relative',
      boxSizing: 'border-box',
      color: defaultTheme.palette?.text?.tex300Main,
      height: '92px',
    },
  };
});
export const MultilineText1 = (props: MultilineText1Props) => {
  const defaultTheme = themes.default;
  return (
    <StyledMultilineText1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: 20,
          gap: 10,
        }}
      >
        <div
          style={{
            height: '52px',
            width: '52px',
            borderRadius: '4px',
          }}
        >
          <img
            src={props.iconName}
            height={'52px'}
            width={'52px'}
            style={{
              width: '52px',
              height: '52px',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '90% 90%',
              backgroundPosition: 'center',
              borderRadius: '8px',
              flex: 'none',
            }}
            alt="card-placeholder"
          />{' '}
        </div>
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            overflowX: 'hidden',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            gap: 6,
          }}
        >
          <Typography
            variant={'body1'}
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              width: '100%',
              color: '#E6E6E6' || defaultTheme.palette?.text?.tex300Main,
            }}
          >
            {props.title}
          </Typography>
          <Typography
            variant={'body1'}
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              width: '100%',
              color: '#868686' || defaultTheme.palette?.text?.tex300Main,
            }}
          >
            {props.subtitle}
          </Typography>
        </div>
      </div>
    </StyledMultilineText1>
  );
};

export default MultilineText1;
