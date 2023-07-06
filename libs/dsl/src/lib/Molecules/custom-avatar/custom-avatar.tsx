import { Avatar } from '@mui/material';
import { memo } from 'react';

export const MuiAvatar = (props: { name: string }) => {
  const randomColor = () => {
    const colorArr = ['#00BDFF', '#FA8C16', '#52C41A', '#2F54EB'];
    const randomIndex = Math.floor(Math.random() * colorArr.length);
    const color: any = [];
    let i;
    /* eslint-disable no-bitwise */
    for (i = 0; i < colorArr?.length; i += 1) {
      color.push(colorArr[randomIndex]);
    }

    return color;
  };

  const stringAvatar = (name: string) => {
    return {
      sx: {
        width: '30px',
        height: '30px',
        fontSize: '12px',
        bgcolor: randomColor,
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')?.[1]?.[0] || ''}`,
    };
  };

  return <Avatar {...stringAvatar(props.name)} />;
};

export default memo(MuiAvatar);
