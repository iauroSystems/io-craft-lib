/* eslint-disable @nrwl/nx/enforce-module-boundaries */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {Box, Menu, MenuItem, Typography} from '@mui/material';
import SearchInput, {ISearchProps} from './searchInput';
import './table-header-cell.css';
import * as React from 'react';
import styled from '@mui/system/styled';
import themes from 'libs/dsl/src/theme';

export interface IOptions {
  label: string;
  value: string;
}

/* eslint-disable-next-line */
export interface ITableHeaderCellProps {
  title: string;
  searchData?: ISearchProps;
  actions?: IOptions[];
  onSearchInput?: (data: any) => any;
  menuClicked: (data: any) => any;
}

const StyledTablecell = styled(Box)(({theme}) => {
  return {
    '&': {
      backgroundColor: theme.palette?.light?.c50,
    },
    '.css-51elaj-MuiInputBase-root': {
      fontSize: '1rem',
      lineHeight: '0',
      letterSpacing: '0',
      fontWeight: '400',
      color: 'rgb(17, 24, 39)',
      boxSizing: 'border-box',
      position: 'relative',
      cursor: 'text',
      display: 'inline-flex',
      WebkitAlignItems: 'center',
      WebkitBoxAlign: 'center',
      MsFlexAlign: 'center',
      alignItems: 'center',
      width: '100%',
      height: '30px',
      marginLeft: '8px',
    },
    '.typography-wrapper': {
      marginLeft: '5px',
    },
    '.icon-wrapper': {
      marginRight: '5px',
    },
  };
});

export function TableHeaderCell(props: ITableHeaderCellProps) {
  const theme = themes.default;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: any, menu: string) => {
    setAnchorEl(null);
    props.menuClicked(menu);
  };
  const onSearchText = (text: string) => {
    props.onSearchInput && props.onSearchInput(text);
  };

  return (
    <StyledTablecell>
      <div
        className="title-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 'calc(100% - 1px)',
          flexGrow: 1,
        }}
      >
        <div
          className="typography-wrapper"
          style={{width: 'calc(100% - 20%)'}}
        >
          <Typography
            color={theme.palette?.text?.tex300Main}
            sx={{fontSize: '12px', fontWeight: 600}}
          >
            {props.title}
          </Typography>
        </div>
        {/* <div className="icon-wrapper" style={{ width: 'calc(100% - 80%)' }}>
          <IconComponent
            name={'more_vert_black_24dp'}
            size={20}
            color={'#877878'}
            handleClick={(e) => {
              handleClick(e);
            }}
          />
        </div> */}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          {props.actions &&
          props.actions.length &&
          props.actions.map((action, index) => {
            return (
              <MenuItem
                key={index}
                onClick={(e) => {
                  handleClose(e, action.value);
                }}
              >
                {action.label}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
      {props && props.searchData && (
        <Box>
          <SearchInput
            searchText={props.searchData.searchText || ''}
            searchIcon={props.searchData.searchIcon}
            placeholder={props.searchData.placeholder || 'Search Text'}
            onSearchInput={onSearchText}
          />
        </Box>
      )}
    </StyledTablecell>
  );
}

export default TableHeaderCell;
