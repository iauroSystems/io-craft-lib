/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Stack } from '@mui/system';
import React, { useEffect, useState } from 'react';
import UserAvatar from '../../Atoms/user-avatar/user-avatar';
import IconComponent, {
  IconComponentProps,
} from '../../POC/icon-component/icon-component';
import SearchInput, { ISearchInputTypes } from './SearchBox';

import { Popover, Typography } from '@mui/material';
import themes from 'libs/dsl/src/theme';
import './header-component.css';
interface IAnyProps {
  [key: string]: string | number | any;
}
export interface IHeaderComponentProps {
  logoImagePath?: string;
  searchData: ISearchInputTypes;
  headerBackgroundColor?: string;
  userData: any;
  notificationData: IconComponentProps;
  chartProps?: IAnyProps;
  searchdivEvent?: (data?: any) => any;
  notificationClickEvent?: (data?: any) => any;
  headerLogoClickEvent?: (data?: any) => any;
  logoutClickAction?: (data?: any) => any;
}

export const HeaderComponent = (props: IHeaderComponentProps) => {
  const [inputText, setInputText] = useState('');
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [open, setOpen] = useState<any>(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(!open);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const id = open ? 'simple-popover' : undefined;

  const inputHandler = (e: any) => {};

  const notificationClicked = () => {
    props.notificationClickEvent();
  };

  useEffect(() => {}, [props]);

  const theme = themes.default;

  return (
    <div
      style={{
        width: '100%',
        boxSizing: 'border-box',
        minHeight: '7vh',
        height: '7vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background:
          props.headerBackgroundColor ||
          themes.default?.palette?.background?.bacopWhite,
        borderBottom: `1px solid ${theme.palette?.neutral?.neu100}`,
      }}
    >
      <div
        style={{
          height: '100%',
          justifyContent: 'flex-start',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            background:
              props.headerBackgroundColor ||
              themes.default?.palette?.background?.bacopWhite,
            height: '22px',
            paddingLeft: '10px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
          onClick={() => {
            props.headerLogoClickEvent();
          }}
        >
          {props.logoImagePath && <img src={props.logoImagePath} />}
        </div>
      </div>
      <div
        style={{
          width: '30%',
          // height: '100%',
          margin: '12px',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: themes.default?.palette?.background?.bacopWhite,
        }}
      >
        {props && props.searchData && (
          <SearchInput
            label={props.searchData.label || 'Search'}
            placeholder={props.searchData.placeholder || 'Search'}
            value={props.searchData.value || ''}
            chartProps={props.chartProps}
            onChange={(e: any) => inputHandler(e)}
          />
        )}
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '8px',
          justifyContent: 'flex-end',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          onClick={() => {
            notificationClicked();
          }}
        >
          <IconComponent
            name={props.notificationData.name}
            size={props.notificationData.size}
            label={props.notificationData.label}
            color={props.notificationData.color}
          />
        </div>
        <div
          style={{
            // paddingBottom: '18px',

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          onClick={(e: any) => handleClick(e)}
        >
          <UserAvatar
            text={props.userData.text || ''}
            image={props.userData.image}
          />
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                width: '274px',
                height: '137px',
                backgroundColor:
                  props?.chartProps?.background_color ||
                  themes.default?.palette?.background?.bacopWhite,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  backgroundColor:
                    props?.chartProps?.background_color ||
                    themes.default?.palette?.background?.bacopWhite,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                  gap: '14px',
                  width: '205px',
                  marginTop: '16px',
                  marginLeft: '15px',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '47px',
                    height: '47px',
                    minWidth: '47px',
                    minHeight: '47px',
                    background: themes.default?.palette?.background?.bacmain,
                    borderRadius: '50%',
                  }}
                >
                  <CameraAltIcon
                    sx={{ color: themes.default?.palette?.text?.tex300Main }}
                  />
                </div>
                <Stack direction={'column'} spacing={-0.5} flex={80}>
                  <Typography
                    sx={{
                      maxWidth: '200px',
                      width: '200px',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',

                      fontStyle: 'normal',
                      fontWeight: '600',
                      fontSize: '16px',
                      color: themes.default?.palette?.text?.tex300Main,
                    }}
                  >
                    {props.userData?.text || ''}
                  </Typography>
                  <Typography
                    sx={{
                      maxWidth: '200px',
                      width: '200px',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',

                      fontStyle: 'normal',
                      fontWeight: '400',
                      fontSize: '14px',
                      color: theme.palette?.text?.tex300Main,
                    }}
                  >
                    {props.userData?.email || ''}
                  </Typography>
                </Stack>
              </div>
              <div
                style={{
                  width: '100%',
                  borderWidth: '1px',
                  marginTop: '16px',
                  marginBottom: '10px',
                  borderBottom: `1px solid ${themes.default?.palette?.neutral?.neu100}`,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: '18px',
                  alignItems: 'center',
                }}
                onClick={() =>
                  props.logoutClickAction && props.logoutClickAction()
                }
              >
                <IconComponent
                  name={'logout_black_24dp'}
                  size={30}
                  label={''}
                  color={theme.palette?.text?.tex300Main}
                />
                <Typography
                  variant={'caption'}
                  sx={{
                    fontWeight: '600',
                    cursor: 'pointer',
                    color: theme.palette?.text?.tex300Main,
                  }}
                >
                  Log Out
                </Typography>
              </div>
            </div>{' '}
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
