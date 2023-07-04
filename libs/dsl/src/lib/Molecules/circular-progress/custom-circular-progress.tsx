import { Box, Typography } from '@mui/material';
import {
  circularProgressClasses,
  CircularProgress as MuiCircularProgress,
} from '@mui/material';
import defaultTheme from '../../../theme/index';
import { useTheme } from '@mui/material';
import { styled } from '@mui/system';
import themes from '../../../theme/index';

export type ICProgressProps = {
  color: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant: 'determinate' | 'indeterminate';
  value?: number;
  showPercentage?: boolean;
  size?: number;
  thickness?: number;
};

function CircularProgressWithLabel(props: any) {
  const dslTheme = themes.default;
  const StyledCustomCircular = styled(Box)(({ theme }) => {
    return {
      '.circle-container': {
        position: 'relative',
        display: 'inline-flex',
      },
      '.typography-wrapper': {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    };
  });

  return (
    <StyledCustomCircular>
      <Box className="circle-container">
        <MuiCircularProgress
          variant="determinate"
          sx={{
            color: dslTheme.palette.text.tex300Main,
          }}
          size={props.size}
          thickness={props.thickness}
          value={100}
        />
        <MuiCircularProgress
          variant={props.variant}
          color={props.color}
          value={props.value}
          {...props}
          sx={{
            color: props.color,
            animationDuration: '550ms',
            position: 'absolute',
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: 'round',
            },
          }}
        />
        <Box className="typography-wrapper">
          <Typography
            sx={{ fontSize: 0.75 * props.size * 0.025 + 'rem' }}
            variant="caption"
            component="div"
            color={dslTheme.palette.text.tex300Main}
          >
            {`${Math.round(props.value)}%`}
          </Typography>
        </Box>
      </Box>
    </StyledCustomCircular>
  );
}

export function CircularProgress({
  color,
  variant,
  value,
  showPercentage,
  size = 40,
  thickness,
}: ICProgressProps) {
  const dslTheme = defaultTheme.default;
  return showPercentage && variant === 'determinate' ? (
    <CircularProgressWithLabel
      color={color}
      variant={variant}
      value={value || 0}
      thickness={thickness}
      size={size}
    />
  ) : (
    <Box sx={{ position: 'relative' }}>
      <MuiCircularProgress
        variant="determinate"
        sx={{
          color: dslTheme.palette.text.tex300Main,
        }}
        size={size}
        thickness={thickness}
        value={100}
      />
      <MuiCircularProgress
        variant={variant}
        sx={{
          animationDuration: '550ms',
          position: 'absolute',
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        color={color}
        size={size}
        thickness={thickness}
        value={value}
      />
    </Box>
  );
}

export default CircularProgress;
