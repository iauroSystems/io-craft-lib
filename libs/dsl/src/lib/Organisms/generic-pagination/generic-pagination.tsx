import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import React from 'react';
// import { ITheme } from '../../../../../application/src/theme';
import { useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface PaginationBarProps {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  pageSizeOptions: number[];
  onChangePage: (page: number) => void;
  onChangeRowsPerPage: (pageSize: number) => void;
  isDataloading?: any;
  page?: any;
  tableData?: any;
  chartProps: any;
}

export const PaginationBar: React.FC<PaginationBarProps> = ({
  totalCount,
  pageSize,
  currentPage,
  pageSizeOptions,
  onChangePage,
  onChangeRowsPerPage,
  isDataloading,
  page,
  tableData,
  chartProps,
}) => {
  const theme: any = useTheme();
  const useStyles = makeStyles({
    root: {
      background: 'blue',
      padding: '0px !important',
    },

    customMenuItem: {
      backgroundColor: 'red', // Replace with the desired color
    },
  });
  const classes = useStyles();

  return (
    <Box
      sx={{
        border: '1px solid #E2E7EF',
        padding: '18px 10px 8px 10px',
        display: 'flex',
        justifyContent: 'flex-end',
        background: chartProps?.background_color || theme?.palette?.light?.c50,
        color: chartProps?.text_color,
        width: '100%%',
      }}
    >
      {/* {!isDataloading && (
        <Typography
          variant="caption"
          sx={{
            padding: '5px 10px 15px 10px',
            color: theme?.palette?.dark?.c100,
            fontWeight: '400',
          }}
        >
          {Math.ceil(parseFloat(`${totalCount / pageSize}`)) >= page
            ? page * pageSize - pageSize + 1
            : 1 * pageSize - pageSize + 1}{' '}
          -{' '}
          {!(Math.ceil(parseFloat(`${totalCount / pageSize}`)) === page)
            ? Math.ceil(parseFloat(`${totalCount / pageSize}`)) > page
              ? page * tableData.rows.length
              : 1 * tableData.rows.length
            : totalCount}{' '}
          of {totalCount}
        </Typography>
      )} */}
      <Pagination
        shape="rounded"
        color="primary"
        style={{ color: chartProps?.text_color }}
        count={Math.ceil(totalCount / pageSize)}
        page={currentPage}
        showFirstButton
        sx={{
          '& MuiMenu-list': {
            backgroundColor: 'blue',
          },
        }}
        showLastButton
        onChange={(event, page) => onChangePage(page)}
        renderItem={(item) => (
          <PaginationItem
            sx={{
              color: chartProps?.text_color,
              backgroundColor: chartProps?.background_color,
            }}
            components={{
              first: KeyboardDoubleArrowLeftIcon,
              previous: KeyboardArrowLeftIcon,
              next: KeyboardArrowRightIcon,
              last: KeyboardDoubleArrowRightIcon,
            }}
            {...item}
          />
        )}
      />
      <Typography
        variant="caption"
        sx={{
          padding: '8px 10px 8px 10px',
          // color: '#101425',
          fontWeight: '400',
          color: chartProps?.text_color,
        }}
      >
        Show &nbsp;
      </Typography>
      <FormControl
        sx={{
          '& MuiMenu-list': {
            backgroundColor: 'blue',
          },
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={pageSize}
          onChange={(event) => onChangeRowsPerPage(Number(event.target.value))}
          label=""
          style={{ backgroundColor: chartProps?.background_color || '#101425' }}
          sx={{
            border: '1px solid #101425',
            width: 'fit-content',
            height: '32px',
            borderRadius: '4px',
            padding: '8px 8px 8px 8px',
            backgroundColor: chartProps?.background_color || '#101425',
            color: chartProps?.text_color || '#101425',
          }}
        >
          {pageSizeOptions.map((option) => (
            <MenuItem
              key={option}
              value={option}
              sx={{
                color: chartProps?.text_color,
              }}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography
        variant="caption"
        sx={{
          padding: '10px 10px 8px 10px',
          color: chartProps?.text_color,
          fontWeight: '400',
        }}
      >
        &nbsp; Entries
      </Typography>
    </Box>
  );
};

export default PaginationBar;
