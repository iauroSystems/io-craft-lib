import { ExpandLess, ExpandMore } from '@mui/icons-material';
import {
  Collapse,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { IMenuData } from './Menu2';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import styled from '@mui/system/styled';
import IconComponent from '../../POC/icon-component/icon-component';

export interface IMenulist2Props {
  compressedIcon: boolean;
  data: IMenuData[];
}
// eslint-disable-next-line react-hooks/rules-of-hooks
const StyledMenuList = styled('div')(({ theme }) => {
  return {
    '.css-1fzmbpm-MuiListItemText-root': {
      WebkitFlex: '1 1 auto',
      MsFlex: '1 1 auto',
      flex: '1 1 auto',
      minWidth: '0',
      marginTop: '4px',
      marginBottom: '4px',
      paddingLeft: '0px',
    },
    ' .MuiListItemButton-root': {
      paddingLeft: '0px !important',
      paddingRight: '0px !important',
    },
  };
});

const Menulist2 = (props: IMenulist2Props) => {
  const theme = useTheme();
  const [state, setState] = React.useState({});
  const [selectedIndex, setSelectedIndex] = React.useState('');

  function handleClick(item: any) {
    setState((prevState) => ({ ...state, [item]: !prevState[item] }));
    setSelectedIndex(item);
  }
  const handler = (children: any, props: any) => {
    const { classes } = props;
    // const { state } = state
    return children.map((subOption, index) => {
      if (!subOption.children) {
        return (
          <div key={subOption.id}>
            <ListItemButton
              key={subOption.id}
              selected={selectedIndex === subOption.id}
              style={{
                backgroundColor:
                  selectedIndex === subOption.id ? '#A9D4FF80' : '',
                borderRadius: '5px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: props.compressedIcon
                  ? 'center'
                  : 'space-between',
                alignItems: 'center',
              }}
              classes={{ root: 'MuiListItemButton-root' }}
              onClick={() => handleClick(subOption.id)}
            >
              {/* <Link to={subOption.url} className={classes.links}> */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '10px',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div>
                  {subOption.icon && (
                    <div>
                      <IconComponent
                        name={subOption.icon.name}
                        style={subOption.icon.style}
                        color={
                          selectedIndex === subOption.id
                            ? '#0458AE'
                            : theme.palette.mode === 'light'
                            ? '#877878'
                            : theme.palette.text.primary
                        }
                        label={subOption.icon.label}
                        size={subOption.icon.size}
                      />
                    </div>
                  )}
                </div>
                {!props.compressedIcon && (
                  <ListItemText
                    inset
                    primary={subOption.label}
                    style={{
                      fontSize: 14,
                      color:
                        selectedIndex === subOption.id
                          ? '#0458AE'
                          : theme.palette.mode === 'light'
                          ? '#877878'
                          : theme.palette.text.primary,
                    }}
                  />
                )}
                {/* </Link> */}
              </div>
            </ListItemButton>
          </div>
        );
      }
      return (
        <div key={subOption.id} style={{ gap: '10px' }}>
          <ListItemButton
            style={{
              backgroundColor:
                selectedIndex === subOption.id ? '#A9D4FF80' : '',
              borderRadius: '5px',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: props.compressedIcon ? 'center' : 'space-between',
              alignItems: 'center',
            }}
            selected={selectedIndex === subOption.id}
            onClick={() => handleClick(subOption.id)}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}
            >
              {subOption.icon && (
                <IconComponent
                  name={subOption.icon.name}
                  style={subOption.icon.style}
                  color={
                    selectedIndex === subOption.id
                      ? '#0458AE'
                      : theme.palette.mode === 'light'
                      ? '#877878'
                      : theme.palette.text.primary
                  }
                  label={subOption.icon.label}
                  size={subOption.icon.size}
                />
              )}
              {!props.compressedIcon && (
                <ListItemText
                  inset
                  primary={subOption.label}
                  style={{
                    fontSize: 14,
                    color:
                      selectedIndex === subOption.id
                        ? '#0458AE'
                        : theme.palette.mode === 'light'
                        ? '#877878'
                        : theme.palette.text.primary,
                  }}
                />
              )}
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}
            >
              {!props.compressedIcon && (
                <> {state[subOption.id] ? <ExpandLess /> : <ExpandMore />}</>
              )}
            </div>
          </ListItemButton>
          <Collapse in={state[subOption.id]}>
            {handler(subOption.children, props)}
          </Collapse>
        </div>
      );
    });
  };
  return (
    <StyledMenuList>
      <Box
        sx={{ width: props.compressedIcon ? 80 : 220 }}
        role="presentation"
        //   onClick={toggleDrawer(anchor, false)}
        //   onKeyDown={toggleDrawer(anchor, false)}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {handler(props.data, props)}
        </div>
      </Box>
    </StyledMenuList>
  );
};

export default Menulist2;
