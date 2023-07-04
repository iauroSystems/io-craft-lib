import { useTheme } from '@mui/material';
import { styled } from '@mui/system';
import React from 'react';
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

/* eslint-disable-next-line */
export interface ProgressProps {
  percentage: number;
}

// const StyledChip = styled('div')(({ theme }) => {
//   return {
//     '.chip-component': {
//       display: 'flex',
//       boxSizing: 'border-box',
//       position: 'relative',
//       flexDirection: 'row',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '42px',
//       maxWidth: '100px',
//       margin: '5px',
//       padding: '5px 7px',
//       backgroundColor: theme.palette.primary.main,
//       borderRadius: '4px',
//       textOverflow: 'ellipsis',
//       overflow: 'hidden',
//       whiteSpace: 'nowrap',

//       '.chip': {
//         padding: '5px',
//         fontSize: '12px',
//         width: 'inherit',
//         lineClamp: 'inherit',
//         color: theme.palette.getContrastText(theme.palette.primary.main),
//         textOverflow: 'ellipsis',
//         overflow: 'hidden',
//         whiteSpace: 'nowrap',
//       },
//     },
//   };
// });

export function Progress(props: ProgressProps) {
  const theme = useTheme();

  return (
    <div style={{ marginBottom: '10vh' }}>
      <div style={{ marginTop: '3vh', display: 'flex' }}>
        {/* <div style={{ width: '30%', marginRight: 30 }}></div> */}
        <div
          style={{
            display: 'inline',
            padding: '2%',
            margin: '5%',
            textAlign: 'center',
          }}
        ></div>
        <div style={{ width: '40%' }}>
          {/* <CircularProgressbar value={percentage} text={`${percentage}%`}   strokeWidth={15}  
      /> */}
          <CircularProgressbarWithChildren
            value={66}
            text={`${props.percentage}%`}
            strokeWidth={12}
            styles={buildStyles({
              textColor: '#FFFFFF',
              pathColor: '#3EF888',
              trailColor: '#AB1301',
            })}
          >
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}

            <div
              style={{ fontSize: '12px', marginTop: '5vh', color: '#FFFFFF' }}
            >
              Done
            </div>
          </CircularProgressbarWithChildren>
        </div>
      </div>
    </div>
  );
}

export default Progress;
