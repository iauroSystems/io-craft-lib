import styled from '@emotion/styled';
import { Avatar, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import themes from 'libs/dsl/src/theme';

/* eslint-disable-next-line */
interface IAnyProps {
  [key: string]: string | number | any;
}

export interface IUserAvatarProps {
  text: string;
  chartProps?: IAnyProps;
  image?: string;
  status?: 'available' | 'busy' | 'away' | 'none';
}

export function UserAvatar(props: IUserAvatarProps) {
  const theme = themes.default;
  const stringAvatar = (name: string) => {
    if (name && name.length > 0) {
      return {
        children: (
          <Typography>
            {name.split(' ')[0][0] + name.split(' ')[1][0]}
          </Typography>
        ),
      };
    } else {
      return {
        children: ``,
      };
    }
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: getStatusColor(props.status),
      color: getStatusColor(props.status),
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
      },
    },
  }));

  function getStatusColor(status: 'available' | 'busy' | 'away' | 'none') {
    switch (status) {
      case 'available':
        return `${theme?.palette?.systemColor3?.sys300Main}`;
        break;
      case 'busy':
        return `${theme?.palette?.systemColor1?.sys300Main}`;
        break;
      case 'away':
        return `${theme?.palette?.text?.tex200}`;
        break;
      case 'none':
        return 'transparent';
        break;
      default:
        return 'transparent';
    }
  }

  return (
    <StyledBadge
      overlap="circular"
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      variant="dot"
    >
      {props.image && <img src={props.image} width={'36px'} height={'36px'} />}
      {props?.text && (
        <Avatar
          sx={{
            bgcolor:
              props.chartProps?.background_color ||
              theme?.palette?.primary?.pri100,
            color:
              props.chartProps?.text_color || theme?.palette?.primary?.pri500,
            width: '36px',
            height: '36px',
          }}
          {...stringAvatar(props.text)}
        ></Avatar>
      )}
    </StyledBadge>
  );
}

export default UserAvatar;
