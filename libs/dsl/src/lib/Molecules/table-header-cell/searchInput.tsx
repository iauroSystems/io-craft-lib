import {IconButton, InputBase} from '@mui/material';
import React from 'react';
import {IconComponentProps} from '../../POC/icon-component/icon-component';
import SearchIcon from '@mui/icons-material/Search';
import styled from '@mui/system/styled';

export interface ISearchProps {
  searchText: string;
  placeholder: string;
  searchIcon: IconComponentProps;
  onSearchInput: (data: any) => any;
}

const StyledSearchInput = styled('div')(({theme}) => {
  return {};
});

const SearchInput = (props: ISearchProps) => {
  const [value, setValue] = React.useState('');

  return (
    <StyledSearchInput
      style={{
        width: 'auto',
        border: '1px solid #dadce0',
        borderRadius: '5px',
      }}
    >
      <InputBase
        fullWidth
        sx={{ml: 1, fontSize: '12px'}}
        placeholder={props.placeholder}
        defaultValue={props.searchText}
        inputProps={{'aria-label': 'search google maps'}}
        onKeyUp={(e: any) => {
          setValue(e.target.value);
          props.onSearchInput(e.target.value);
        }}
        endAdornment={
          <IconButton
            sx={{mr: 1}}
            size="small"
            onClick={() => {
              setValue('');
            }}
          >
            <SearchIcon/>
          </IconButton>
        }
      />
    </StyledSearchInput>
  );
};

export default SearchInput;
