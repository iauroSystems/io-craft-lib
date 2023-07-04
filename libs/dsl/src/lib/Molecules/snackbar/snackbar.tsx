import { Snackbar as Snack } from '@mui/material';
import Box from '@mui/material/Box';
import {
  IconComponent,
  IconComponentProps,
} from '../../POC/icon-component/icon-component';
import './action.css';

export interface SnackbarProps {
  open: boolean;
  autoHideDuraton: number;
  onCloseFunc: (e: Event | React.SyntheticEvent<any, Event>)=> void;
  children: any;
  actions: IconComponentProps[];
  message: string;
  type: 'success' | 'info' | 'warning' | 'error';
  anchorOrigin: {
    vertical: 'bottom' | 'top';
    horizontal: 'center' | 'left' | 'right';
  };
}

export function Snackbar({
  message,
  open,
  autoHideDuraton,
  onCloseFunc,
  type = 'success',
  anchorOrigin = { vertical: 'bottom', horizontal: 'left' },
  actions = [],
}: SnackbarProps) {
  let typeIcon = 'check_circle_black_24dp';
  if (type === 'success') {
    typeIcon = 'check_circle_black_24dp';
  } else if (type === 'info') {
    typeIcon = 'info_black_24dp';
  } else if (type === 'error') {
    typeIcon = 'error_black_24dp';
  } else if (type === 'warning') {
    typeIcon = 'report_problem_black_24dp';
  }

  return (
    <Snack
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={autoHideDuraton}
      onClose={onCloseFunc}
    >
      <Box className={`actionContainer ${type}Action`}>
        <Box component="span" className="messageContainer">
          <Box component="span" className="iconContainer">
            <IconComponent name={typeIcon} size={25} />
          </Box>
          {message}
        </Box>
        <Box component="span" className="actionIconsContainer">
          {actions.length &&
            actions.map((action: IconComponentProps, index: number) => {
              return (
                <IconComponent
                  name={action.name}
                  color={action.color}
                  label={action.label}
                  size={action.size}
                  handleClick={action.handleClick}
                />
              );
            })}
        </Box>
      </Box>
    </Snack>
  );
}

export default Snackbar;
