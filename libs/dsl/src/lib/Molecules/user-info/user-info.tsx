/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React from 'react';
import {Avatar, Box, Typography} from '@mui/material';

import SquareChip, {ISquareChipProps,} from '../../Atoms/square-chip/SquareChip';
import {IAvatar} from '../table-cell-component-v2/table-cell-component-v2';
import generateRandomString from 'libs/dsl/src/static/randomString';
import themes from 'libs/dsl/src/theme';

export interface UserInfoProps {
  userAvatar: IAvatar;
  subTitle?: string;
  chipData?: ISquareChipProps[];
}

export const UserInfo = (props: UserInfoProps) => {
  const theme = themes.default;
  return (
    <Box
      sx={{
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '10px',
        // border: `1px solid ${theme.palette?.text?.primary}`,
        backgroundColor: theme.palette?.light?.c50,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {props && props.userAvatar && (
          <>
            <Avatar
              alt={props.userAvatar.value}
              src={props.userAvatar.path}
              sx={{height: 24, width: 24, fontSize: 16}}
            />
            <div
              style={{display: 'flex', flexDirection: 'column', gap: '1px'}}
            >
              <Typography variant={'body2'}>
                {props.userAvatar.value}
              </Typography>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  gap: '14px',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}
              >
                {props && props.subTitle && (
                  <Typography variant={'overline'}>{props.subTitle}</Typography>
                )}
                {props &&
                props.chipData &&
                props.chipData.length > 0 &&
                props.chipData.map((chip: ISquareChipProps) => {
                  return (
                    <SquareChip
                      key={generateRandomString()}
                      chipColor={chip.chipColor}
                      textData={chip.textData}
                      icon={chip.icon}
                    />
                  );
                })}
              </div>
            </div>
          </>
        )}
      </div>
    </Box>
  );
};

export default UserInfo;
