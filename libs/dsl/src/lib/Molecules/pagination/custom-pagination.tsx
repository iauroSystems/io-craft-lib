/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import * as React from 'react';
import { styled } from '@mui/system';
import { Pagination as MuiPagination, Typography } from '@mui/material';
import { Menu, MenuItem } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './custom-pagination.css';
import themes from 'libs/dsl/src/theme';
export interface PaginationProps {
  color?: 'primary' | 'secondary' | 'standard';
  defaultPage?: string;
  disabled?: boolean;
  shape?: 'circular' | 'rounded';
  variant?: 'outlined' | 'text';
  size?: 'small' | 'medium' | 'large';
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  listPerPage?: Array<number>;
  onChange?: (event: SelectChangeEvent, rowPerPage: string) => void;
  Page?: string;
  selected?: boolean;
  count?: number;
  totalRows?: number;
}

const StyledPagination = styled('div')(({ theme }: any) => {
  const defaultTheme=themes.default
  return {
    '&': {
      width: '568px',
      height: '489px',
    },
    '& .MuiPaginationItem-root.Mui-selected': {
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
    },

    '& .MuiPaginationItem-root': {
      color: theme.palette.text.primary,
      fontFamily: theme?.typography?.caption?.fontFamily,
      fontStyle: 'normal',
      fontWeight: theme?.typography?.caption?.fontWeight,
      fontSize: theme?.typography?.caption?.fontSize,
      lineHeight: theme?.typography?.caption?.lineHeight,
    },
    '.text-color': {
      color: theme.palette.text.primary,
      fontFamily: theme?.typography?.caption?.fontFamily,
      fontStyle: 'normal',
      fontWeight: theme?.typography?.caption?.fontWeight,
      fontSize: theme?.typography?.caption?.fontSize,
      lineHeight: theme?.typography?.caption?.lineHeight,
    },
    '& .MuiOutlinedInput-root': {
      color: theme.palette.text.primary,
      fontFamily: theme?.typography?.caption?.fontFamily,
      fontStyle: 'normal',
      fontWeight: theme?.typography?.caption?.fontWeight,
      fontSize: theme?.typography?.caption?.fontSize,
      lineHeight: theme?.typography?.caption?.lineHeight,
    },
  };
});

export function Pagination(props: PaginationProps) {
  const [rowPerPage, setRowPerPage] = React.useState(10);
  const [page, setPage] = React.useState(1);

  const handleChange = (event: SelectChangeEvent) => {
    const { value } = event.target;
    setRowPerPage(parseInt(value));
    props.onChange?.(event, value);
  };

  const onChangePage = (event: React.ChangeEvent<unknown>, pages: number) => {
    setPage(pages);
  };

  const totalRecords = React.useMemo(() => {
    setPage(1);
    setRowPerPage(10);
    return props.totalRows || 0;
  }, [props.totalRows]);

  const totalPages = React.useMemo(() => {
    const pages: number = totalRecords / rowPerPage;
    return pages % 1 !== 0 ? pages + 1 : pages;
  }, [totalRecords, rowPerPage]);

  const pageString = React.useMemo(() => {
    const from = page * rowPerPage - rowPerPage + 1;
    let to = from + rowPerPage - 1;
    if (to > totalRecords) {
      to = totalRecords;
    }
    return `${from} - ${to}`;
  }, [page, rowPerPage, totalRecords]);

  const MenuProps = {
    PaperProps: {
      style: {
        backgroundColor: 'red',
      },
    },
  };

  return (
    <StyledPagination className="main-container">
      <Typography className="text-color">
        ({pageString} of {totalRecords})
      </Typography>

      <MuiPagination
        className="text-color"
        onChange={onChangePage}
        count={totalPages}
        shape={props.shape}
        color={props.color}
        disabled={props.disabled}
        showFirstButton
        showLastButton
        page={page}
        variant={props.variant}
        hideNextButton={props.hideNextButton}
        hidePrevButton={props.hidePrevButton}
        size="small"
      />
      <Typography className="text-color">Show</Typography>
      <FormControl sx={{ m: 1, minWidth: 59, minHeight: 32 }}>
        <Select
          value={rowPerPage.toString()}
          onChange={handleChange}
          displayEmpty
          size="small"
          inputProps={{ 'aria-label': 'Without label' }}
          // MenuProps={MenuProps}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
      <Typography className="text-color">Entries</Typography>
    </StyledPagination>
  );
}

export default Pagination;
