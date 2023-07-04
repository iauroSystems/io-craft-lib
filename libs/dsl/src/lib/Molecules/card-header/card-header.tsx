/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {
  ClickAwayListener,
  Grow,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
  styled,
} from '@mui/material';
import generateRandomString from 'libs/dsl/src/static/randomString';
import themes from 'libs/dsl/src/theme';
import { useEffect, useRef, useState } from 'react';

import IconComponent, {
  IconType,
} from '../../POC/icon-component/icon-component';
import SearchInput, { ISearchInputTypes } from '../header-component/SearchBox';
export interface IIconProps {
  name: string;
  size: number;
  color?: string;
  label?: string;
  showToolTip?: any;
  style?: IconType;
}
export interface ICardExtraProps {
  [key: string]: any;
}

export interface ISubmenu {
  menu: string;
  icon: IIconProps;
  submenu: ISubmenu[];
}
/* eslint-disable-next-line */
export interface CardHeaderProps {
  title: string;
  cardExtraProps?: ICardExtraProps;
  searchData?: ISearchInputTypes;
  actions: ISubmenu[];
  actionClicked?: (data: ISubmenu) => void;
  searchAction?: (data: any) => void;
}

const StyledIconComponent = styled(Menu)(({ theme }) => {
  return {
    '& .MuiMenu-list': {
      padding: 0,
    },
  };
});

const elementClicked = (data: any) => {};

export function CardHeader(props: CardHeaderProps) {
  const themeChart = themes.default;

  const [menuSelected, setMenuSelected] = useState<any>();
  const [cardExtraProps, setCardExtraProps] = useState<any>(
    props.cardExtraProps
  );
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const StyledCardHeader = styled('div')(({ theme }) => {
    return {
      '&': {
        background:
          cardExtraProps?.background_color ||
          themes.default.palette.background.bacopWhite,
        borderBottom: `1px solid ${
          cardExtraProps?.bottom_border_color ||
          themes.default.palette.neutral.neu100
        }`,
      },
    };
  });

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const inputHandler = (e: any) => {
    props && props.searchAction && props.searchAction(e);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const menuClick = (data: any) => {
    if (data && data.submenu && data.submenu.length === 0) {
      props && props.actionClicked && props.actionClicked(data);
    }
  };

  return (
    <StyledCardHeader>
      <div
        key={generateRandomString()}
        style={{
          height: '48px',
          padding: 16,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div key={generateRandomString()}>
          <Typography
            variant={'body1'}
            sx={{
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              width: '100%',
              color:
                cardExtraProps?.title_color || themeChart.palette.text.tex600,

              fontWeight: 600,
            }}
          >
            {props.title || ''}
          </Typography>
        </div>
        <div
          key={generateRandomString()}
          style={{
            padding: '0px',
            color: cardExtraProps?.title_color,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            gap: 10,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {props && props.searchData && (
              <div style={{ width: '100%' }}>
                <SearchInput
                  label={props.searchData.label || 'Search'}
                  placeholder={props.searchData.placeholder || 'Search'}
                  value={props.searchData.value || ''}
                  chartProps={props.cardExtraProps}
                  onChange={(e: any) => inputHandler(e)}
                />
              </div>
            )}{' '}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
              {props &&
                props.actions &&
                props.actions.map((menu: ISubmenu) => {
                  return (
                    <div
                      style={{
                        position: 'relative',
                        height: '36px',
                        width: '36px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:
                          cardExtraProps?.background_color ||
                          themeChart.palette.background.bacopWhite,
                      }}
                      key={generateRandomString()}
                    >
                      <button
                        key={generateRandomString()}
                        style={{
                          backgroundColor:
                            cardExtraProps?.background_color ||
                            themeChart.palette.background.bacopWhite,
                          border: 'none',
                          padding: 0,
                          margin: 0,
                        }}
                        ref={anchorRef}
                        onClick={(e: any) => {
                          handleToggle();
                          setMenuSelected(menu);
                          menuClick(menu);
                        }}
                      >
                        <IconComponent
                          key={generateRandomString()}
                          name={menu.icon.name}
                          color={
                            menu.icon.color ||
                            themes.default.palette.neutral.neu400
                          }
                          size={25}
                          label={menu.menu}
                        ></IconComponent>
                      </button>

                      <Popper
                        key={generateRandomString()}
                        open={open}
                        anchorEl={anchorRef.current}
                        placement="bottom-start"
                      >
                        {({ TransitionProps, placement }) => (
                          <Grow
                            {...TransitionProps}
                            style={{
                              transformOrigin:
                                placement === 'bottom-start'
                                  ? 'left top'
                                  : 'left bottom',
                            }}
                          >
                            <Paper>
                              <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                  key={generateRandomString()}
                                  autoFocusItem={open}
                                  id="composition-menu"
                                  aria-labelledby="composition-button"
                                  onKeyDown={handleListKeyDown}
                                >
                                  {menuSelected &&
                                    menuSelected.submenu &&
                                    menuSelected.submenu.map(
                                      (submenu: ISubmenu) => {
                                        return (
                                          <MenuItem
                                            key={generateRandomString()}
                                            onClick={(e: any) => {
                                              menuClick(submenu);
                                              handleClose(e);
                                            }}
                                          >
                                            {submenu.icon && (
                                              <IconComponent
                                                key={generateRandomString()}
                                                name={submenu.icon.name}
                                                color={
                                                  cardExtraProps?.title_color ||
                                                  themes.default.palette.text
                                                    .tex600
                                                }
                                                size={25}
                                                label={submenu.menu}
                                              ></IconComponent>
                                            )}
                                            {submenu.menu}
                                          </MenuItem>
                                        );
                                      }
                                    )}
                                </MenuList>
                              </ClickAwayListener>
                            </Paper>
                          </Grow>
                        )}
                      </Popper>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </StyledCardHeader>
  );
}

export default CardHeader;
