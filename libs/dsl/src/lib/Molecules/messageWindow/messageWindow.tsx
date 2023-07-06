import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {DialogTitle} from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import Dialog from '@mui/material/Dialog';
import './messageWindow.module.css';
import Button from '@mui/material/Button';
import {IconComponent} from '../../POC/icon-component/icon-component';

export interface MessageWindowProps {
  onClose: (event: object, reason: string) => void;
  open: boolean;
  actions: {
    name: string;
    value: string;
    primary: boolean;
    handleClick: () => void;
  }[];
  title: string;
  description: string;
  icon: any;
  elevation: number;
}

export function MessageWindow({
                                open,
                                onClose,
                                actions,
                                title,
                                description,
                                icon,
                                elevation,
                              }: MessageWindowProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Box className={'messageWindow'}>
        <Box
          onClick={(e: any) => {
            onClose(e, '');
          }}
          className={'closeBtn'}
        >
          <IconComponent name="close_black_24dp" label="close" size={28}/>
        </Box>
        <Box className={'message'}>
          <Box className={'icon'}> {icon ? icon : null} </Box>
          <Box className={'messageBody'}>
            <DialogTitle sx={{padding: '8px 14px'}}>
              {title ? title : null}
            </DialogTitle>
            <Box component="p" className={'description'}>
              {description ? description : null}
            </Box>
          </Box>
        </Box>
        <Divider sx={{marginBottom: '10px'}}/>
        <DialogActions className={'actions'}>
          {actions
            ? actions.map((action, index) => (
              <Button
                onClick={action.handleClick}
                variant={action.primary ? 'contained' : 'outlined'}
                style={
                  actions.length - 1 !== index ? {marginRight: '10px'} : {}
                }
              >
                {action.name}
              </Button>
            ))
            : null}
        </DialogActions>
      </Box>
    </Dialog>
  );
}

export default MessageWindow;
