/* eslint-disable @typescript-eslint/ban-types */
import { Button } from '@mui/material';
import React, { ReactNode } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export interface DrawerProps {
  anchor: 'top' | 'right' | 'bottom' | 'left';
  variant: 'permanent' | 'persistent' | 'temporary';
  onCloseFunc?: (e: React.SyntheticEvent<{}, Event>) => void;
  children?: ReactNode;
  displayDrawer?: boolean;
}

export function Drawer(props: DrawerProps) {
  const [toggleOpenState, setToggleOpenState] = React.useState(false);

  const toggleDrawer = () => {
    setToggleOpenState(true);
  };

  const closeDrawer = (e: any) => {
    setToggleOpenState(false);
    props.onCloseFunc(e);
  };

  return (
    <SwipeableDrawer
      anchor={props.anchor}
      open={props.displayDrawer || toggleOpenState}
      onClose={closeDrawer}
      onOpen={toggleDrawer}
      variant={props.variant}
    >
      {props.children}
    </SwipeableDrawer>
  );
}

export default Drawer;
