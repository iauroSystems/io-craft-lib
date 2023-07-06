/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {Box} from '@mui/material';
import {useTheme} from '@mui/system';
import styled from '@mui/system/styled';
import {DataGrid, GridColDef, GridFilterModel} from '@mui/x-data-grid';
import {escapeRegExp} from '@mui/x-data-grid/utils/utils';
import generateRandomString from 'libs/dsl/src/static/randomString';
import themes from 'libs/dsl/src/theme';
import React, {useEffect, useState} from 'react';
import TableCellComponentV2 from '../../Molecules/table-cell-component-v2/table-cell-component-v2';
import TableHeaderCell from '../../Molecules/table-header-cell/table-header-cell';
import './data-grid-v1.css';

interface IColorProps {
  [key: string]: string | number | any;
}

export interface IDataGridV1Props {
  rowData: any;
  columnData: any;
  columnResizable: boolean;
  pagination: boolean;
  height: number;
  width: number;
  chartProps?: IColorProps;

  onSearchInput?: (data: any) => any;
  menuClicked?: (data: any) => any;
  rowClicked?: (data: any) => any;
  paginationChanged?: (data: any) => any;
}

// const StyledDataGridV1 = styled('div')({
//   // display: 'none',
//   root: {
//     display: 'inline-flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: 48,
//     paddingLeft: 20,
//   },
// });

const StyledGridOverlay = styled('div')(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  '& .ant-empty-img-1': {
    fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
  },
  '& .ant-empty-img-2': {
    fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
  },
  '& .ant-empty-img-3': {
    fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
  },
  '& .ant-empty-img-4': {
    fill: theme.palette.mode === 'light' ? '#fff' : '#1c1c1c',
  },
  '& .ant-empty-img-5': {
    fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
    fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-5"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
          <path
            className="ant-empty-img-3"
            d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
          />
          <g className="ant-empty-img-4" transform="translate(149.65 15.383)">
            <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"/>
            <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"/>
          </g>
        </g>
      </svg>
      <Box sx={{mt: 1}}>No Rows</Box>
    </StyledGridOverlay>
  );
}

const StyledDataGridV1 = styled('div')(({theme}) => {
  return {
    '&': {
      // backgroundColor: theme.palette?.light?.c50,
    },
    root: {
      display: 'inline-flex',
      flexDirection: 'row',
      alignItems: 'center',
      height: 48,
      innerWidth: '100%',
      paddingLeft: '250 !important',
      backgroundColor: 'green !important',
    },
    '.css-i4bv87-MuiSvgIcon-root': {
      height: '0px !important',
    },
  };
});

export function DataGridV1(props: IDataGridV1Props) {
  const theme = useTheme();
  const themesChart = themes.default;
  const [searchText, setSearchText] = useState('');

  const [columns, setColumns] = useState<GridColDef[]>([]);
  const [rows, setRows] = useState<GridColDef[]>(props.rowData);
  const [pageSize, setPageSize] = useState(5);
  const [filterValue, setFilterValue] = useState();
  const [filterButtonEl, setFilterButtonEl] = useState(null);
  const [columnToSearch, setColumnToSearch] = useState('');
  const [rowsPerPageOptions, setrowsPerPageOptions] = useState([
    5, 10, 25, 50, 100, 150, 200, 500, 1000,
  ]);

  const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
    items: [
      {columnField: 'Status', value: 'Active', operatorValue: 'contains'},
    ],
  });

  useEffect(() => {
    setColumns(getColumnsRender());
  }, [props.columnData]);

  // useEffect(() => {
  //   setRows(getRowsRender());
  // }, [props.rowData]);
  useEffect(() => {
    if (columnToSearch) {
      requestSearch(searchText);
    }
  }, [searchText]);

  useEffect(() => {
  }, [columns]);

  const getRowsRender = () => {
    if (props.rowData && props.rowData.length > 0) {
      const rowObj: any = [];
      for (let i = 0; i < props.rowData.length; i += 1) {
        rowObj.push({
          ...props.rowData[i],
        });
      }
      return rowObj;
    }
  };

  const getColumnsRender = (): any => {
    const colObj: GridColDef[] = [];
    if (props && props.columnData && props.columnData.length > 0) {
      for (let i = 0; i < props.columnData.length; i += 1) {
        colObj.push({
          ...props.columnData[i],
          pinnable: i === 2,
          minWidth: 100,

          flex: 1,
          renderHeader: (values: any) => {
            const onSearchInput = (data: any) => {
            };
            return (
              <div style={{display: 'flex', flex: 100, width: '100%'}}>
                <TableHeaderCell
                  title={values.colDef.headerName}
                  actions={[
                    {
                      label: 'Menu1',
                      value: 'menu1',
                    },
                    {
                      label: 'Menu2',
                      value: 'menu2',
                    },
                    {
                      label: 'Menu3',
                      value: 'menu3',
                    },
                    {
                      label: 'Menu4',
                      value: 'menu4',
                    },
                  ]}
                  onSearchInput={function (data: any) {
                    setSearchText(data);
                    props.onSearchInput && props.onSearchInput(data);
                  }}
                  menuClicked={function (data: any) {
                    props.menuClicked && props.menuClicked({menu: data});
                  }}
                ></TableHeaderCell>
              </div>
            );
          },
          renderCell: (values: any) => {
            return (
              <div style={{display: 'flex', flex: 100, width: '100%'}}>
                <TableCellComponentV2
                  userInfo={values?.value?.userInfo || {}}
                  sqchip={values?.value?.sqchip || {}}
                  text={values?.value?.text || {}}
                  leftAvatar={values?.value?.leftAvatar || {}}
                  chartProps={props.chartProps}
                ></TableCellComponentV2>
              </div>
            );
          },
        });
      }
    }

    return colObj;
  };

  const requestSearch = (searchValue: string) => {
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = props.rowData.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        if (row && row[columnToSearch] && row[columnToSearch].status) {
          return searchRegex.test(row[columnToSearch].status.value.toString());
        }
        if (row && row[columnToSearch] && row[columnToSearch].text) {
          const result = searchRegex.test(
            row[columnToSearch].text.value.toString()
          );
          if (result) {
            return result;
          }
        }
        if (row && row[columnToSearch] && row[columnToSearch].tags) {
          const result = row[columnToSearch].tags.find(
            (o: any) => o.label === searchText
          );
          if (result) {
            return result;
          }
        }

        if (
          row &&
          row[columnToSearch] &&
          row[columnToSearch].primaryAvatar &&
          row[columnToSearch].primaryAvatar.label
        ) {
          if (row[columnToSearch].primaryAvatar.label) {
            return searchRegex.test(
              row[columnToSearch].primaryAvatar.label.value.toString()
            );
          }
          if (row[columnToSearch].leftAvatar) {
            return searchRegex.test(
              row[columnToSearch].leftAvatar.label.value.toString()
            );
          }
          if (row[columnToSearch].rightAvatar) {
            return searchRegex.test(
              row[columnToSearch].rightAvatar.label.value.toString()
            );
          }
        }

        if (row && row[columnToSearch] && row[columnToSearch].value) {
          if (row[columnToSearch].value) {
            return searchRegex.test(row[columnToSearch].value.toString());
          }
        }
        if (row[columnToSearch]) {
          return searchRegex.test(row[columnToSearch].toString());
        } else {
        }
      });
    });
    setRows(filteredRows);
  };

  return (
    <div
      style={{
        minHeight: props.height + 'px',
        minWidth: props.width + 'px',

        height: 'calc(100% - 50px)',
        width: 'calc(100% - 10px)',
        display: 'flex',
        flexDirection: 'row',
        flex: 100,
        // height: props && props.height ? props.height + 'px' : '90vh',
        // width: props && props.width ? props.width + 'px' : '90vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flex: 100,
          // height: '100%',
          // width: '100%',
          padding: '16px',
          backgroundColor:
            props.chartProps?.background_color ||
            themesChart?.palette?.background?.bacopWhite,
          color: themesChart?.palette?.text?.tex300Main,
        }}
      >
        <DataGrid
          style={{
            backgroundColor:
              props.chartProps?.background_color ||
              themesChart?.palette?.background?.bacopWhite,
            color: themesChart?.palette?.text?.tex300Main,
            bottom: 0,
          }}
          sx={{
            backgroundColor:
              props.chartProps?.background_color ||
              themesChart?.palette?.background?.bacopWhite,
            '& .MuiDataGrid-cell:hover': {
              color: themesChart?.palette?.text?.tex300Main,
            },
            '& .MuiDataGrid-cellContent': {
              color: themesChart?.palette?.text?.tex300Main,
            },
            '&.Mui-selected': {
              backgroundColor: 'red',
              color: 'yellow',
              '&:hover': {
                backgroundColor: 'purple',
              },
            },
            '& MuiMenu-list': {
              backgroundColor:
                props.chartProps?.background_color ||
                themesChart?.palette?.background?.bacopWhite,
            },
            '& .MuiSelect-select': {
              backgroundColor:
                props.chartProps?.background_color ||
                themesChart?.palette?.background?.bacopWhite,
            },
            '& .MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper': {
              backgroundColor:
                props.chartProps?.background_color ||
                themesChart?.palette?.background?.bacopWhite,
            },
            '.MuiTablePagination-selectLabel': {
              color: themesChart?.palette?.text?.tex300Main,
            },
            '.MuiTablePagination-displayedRows': {
              color: themesChart?.palette?.text?.tex300Main,
            },
            '.MuiTablePagination-toolbar': {
              color: themesChart?.palette?.text?.tex300Main || '#8c9194',
              backgroundColor:
                props.chartProps?.background_color ||
                themesChart?.palette?.background?.bacopWhite,
            },
            '.Mui-disabled': {
              color: themesChart?.palette?.text?.tex300Main || '#8c9194',
            },
            '.MuiTablePagination-actions': {
              color: themesChart?.palette?.text?.tex300Main || '#8c9194',
            },
            // borderRadius: 2,
            border: `1px solid ${themesChart?.palette?.neutral?.neu100}`,
            '& .MuiDataGrid-columnHeaders': {
              borderBottom: `1px solid ${themesChart?.palette?.neutral?.neu100} !important`,
            },
            '& .MuiDataGrid-cell': {
              borderBottom: `1px solid ${themesChart?.palette?.neutral?.neu100} !important`,
            },
            '& .MuiDataGrid-footerContainer': {
              borderTop: `1px solid ${themesChart?.palette?.neutral?.neu100} !important`,
            },
            '& MuiTablePagination-select': {
              color: themesChart?.palette?.text?.tex300Main || '#8c9194',
              backgroundColor:
                props.chartProps?.background_color ||
                themesChart?.palette?.background?.bacopWhite,
            },
            '& .-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper': {
              color:
                'red' || themesChart?.palette?.text?.tex300Main || '#8c9194',
              backgroundColor:
                'red' ||
                props.chartProps?.background_color ||
                themesChart?.palette?.background?.bacopWhite,
            },
          }}
          pageSize={pageSize}
          rowsPerPageOptions={[5, 10, 20, 25, 100]}
          // hideFooterPagination={props.pagination}
          components={{
            NoRowsOverlay: CustomNoRowsOverlay,
          }}
          rows={rows}
          columns={columns}
          headerHeight={50}
          filterModel={filterModel}
          getRowId={(row) => generateRandomString()}
          onFilterModelChange={(model) => setFilterModel(model)}
          onPageSizeChange={(newPage) => {
            setPageSize(newPage);
            props.paginationChanged(newPage);
          }}
          onColumnHeaderClick={(event: any) => {
            setColumnToSearch(event.field);
          }}
          pagination
          disableColumnMenu
          disableColumnFilter
          // componentsProps={{
          //   pagination: {
          //     labelRowsPerPage: 'Show Entries',
          //   },
          // }}
          onRowClick={(row: any) => {
            props.rowClicked(row);
          }}
        />
      </div>
    </div>
  );
}

export default DataGridV1;
