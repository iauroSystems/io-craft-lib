import {SwipeableDrawer} from '@mui/material';

import * as React from 'react';
import {IconComponentProps} from '../../POC/icon-component/icon-component';
import HeaderIcon from './HeaderIcon';
import Menulist2 from './Menulist2';
import {useTheme} from '@mui/system';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export interface IMenuData {
  id: string;
  label: string;
  icon?: IconComponentProps;
  link: string;
  children?: IMenuData[];
}

export interface IMenu2Props {
  anchor: Anchor;
  openDrawer: boolean;
  data: IMenuData[];
  sidebarCompressed: boolean;
}

export function Menu2(props: IMenu2Props) {
  const theme = useTheme();
  const [state, setState] = React.useState<any>({
    left: props.openDrawer,
  });

  React.useEffect(() => {
    setState({[props.anchor]: props.openDrawer});
  }, [props]);

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event &&
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({...state, [anchor]: open});
      };

  return (
    <SwipeableDrawer
      anchor={props.anchor}
      open={state[props.anchor]}
      onClose={toggleDrawer(props.anchor, false)}
      onOpen={toggleDrawer(props.anchor, true)}
      sx={{
        '& .MuiDrawer-paper': {
          backgroundColor: theme.palette['background'].default,
          boxSizing: 'border-box',
          padding: '0px 5px 0px 15px',
        },
      }}
    >
      <div>
        <HeaderIcon compressedIcon={props.sidebarCompressed}/>
      </div>
      {/* <Menulist compressedIcon={props.sidebarCompressed} data={props.data} /> */}
      <div style={{maxHeight: 'calc(100% - 0px)', overflowY: 'auto'}}>
        <Menulist2 compressedIcon={props.sidebarCompressed} data={props.data}/>
      </div>
    </SwipeableDrawer>
  );
}

export default Menu2;
