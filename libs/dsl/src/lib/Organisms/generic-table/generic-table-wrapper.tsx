import { Box, Typography, debounce, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import { ITheme } from 'libs/dsl/src/theme';
import { useState } from 'react';
import IconComponent from '../../POC/icon-component/icon-component';
import SearchInputTable from './SearchBox';
import GenericTable from './generic-table';

interface Props {
  title: string;
  tableData: any;
  count: number;
  canSearch?: boolean;
  canDownload?: boolean;
  pageSizeOptions: any;
  canFilter?: boolean;
  chartProps?: any;
}

export const GenericTableWrapper = (props: Props) => {
  const [title, setTitle] = useState<string>(props.title || '');
  const [count, setCount] = useState<number>(props.count || 0);
  const [pageSizeOptions, setPageSizeOptions] = [10, 20, 30, 40];
  const [inputText, setInputText] = useState('');

  const theme: ITheme = useTheme();
  const inputHandler = (
    currentPage = 0,
    currentSize = 10
    // searchParams = []
  ) => {
    // Convert input text to lowercase
  };

  const processChange = debounce(() => inputHandler(0));

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px',
          background:
            props?.chartProps?.background_color || theme.palette.light?.c50,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: theme.palette.text?.primary,
            }}
            variant="h5"
          >
            {title} ({count})
          </Typography>
        </Box>
        <Stack
          sx={{
            flex: '0 0 auto',
            alignSelf: 'flex-end',
            marginLeft: 'auto',
          }}
          direction="row"
        >
          {props?.canSearch && (
            <Box
              sx={{
                flex: '0 0 auto',
                marginRight: '10px',
                width: '500px',
              }}
            >
              <SearchInputTable
                label="Search"
                value={''}
                chartProps={props.chartProps}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Search by Customer Name, SSE ID, Phone Number"
              />
            </Box>
          )}
          {props?.canFilter && (
            <Box
              sx={{
                width: '36px',
                height: '36px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '4px',
                background: theme?.palette?.background?.default,
                marginLeft: '10px',
              }}
              onClick={() => {}}
            >
              <IconComponent
                name="filter_alt_black_24dp"
                label="Filter"
                size={30}
              />
            </Box>
          )}
          {props?.canDownload && (
            <Box
              sx={{
                width: '36px',
                height: '36px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '4px',
                background: theme?.palette?.background?.default,
                marginLeft: '10px',
              }}
            >
              <IconComponent
                name="file_download_black_24dp-1-1"
                label="Download"
                size={30}
              />
            </Box>
          )}
        </Stack>
      </Box>
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <GenericTable
          onClickRow={function (_rowId: string, _data: string): void {
            throw new Error('Function not implemented.');
          }}
          tableData={{ headers: [], rows: [] }}
          handleChangeRowsPerPage={() => {}}
          handleChangePage={() => {}}
          pageSize={1}
          isDataloading={false}
          totalCount={110}
          currentPage={1}
          chartProps={props?.chartProps || {}}
          pageSizeOptions={props.pageSizeOptions}
          setTotalCountFunc={setCount}
        />
      </Box>
    </Box>
  );
};

export default GenericTableWrapper;
