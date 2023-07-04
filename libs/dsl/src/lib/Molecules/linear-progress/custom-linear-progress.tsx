import { Box, Typography } from '@mui/material';
import { LinearProgress as MuiLinearProgress } from '@mui/material';
import { styled } from '@mui/system';


const StyledProgressComponent = styled(Box)(({ theme }) => {
  return {
   ".progress-wrapper":{
    display: 'flex', alignItems: 'flex-end', flexDirection: 'column'
   },
   ".other-wrap":{
    width: '100%'
   },'.typography-wrapper':{
    minWidth: 35
   }
  };
});

function LinearProgressWithLabel(props: any) {
  
  return (
    <StyledProgressComponent>
    <Box className='progress-wrapper'>
      <Box className='other-wrap'>
        <MuiLinearProgress
          variant={props.variant}
          color={props.color}
          value={props.value}
          {...props}
        />
      </Box>
      <Box className='typography-wrapper'>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
    </StyledProgressComponent>
  );
}

export type ILProgressProps = {
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  variant?: 'determinate' | 'indeterminate' | 'buffer';
  value?: number;
  valueBuffer?: number;
  showPercentage?: boolean;
};

export function LinearProgress(props: ILProgressProps) {
  return props.showPercentage ? (
    <LinearProgressWithLabel
      color={props.color}
      variant={props.variant}
      value={props.value}
      valueBuffer={props.valueBuffer}
    />
  ) : (
    <MuiLinearProgress
      color={props.color}
      variant={props.variant}
      value={props.value}
      valueBuffer={props.valueBuffer}
    />
  );
}

export default LinearProgress;
