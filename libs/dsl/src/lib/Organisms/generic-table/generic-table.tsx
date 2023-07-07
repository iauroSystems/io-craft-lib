import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  makeStyles,
  withStyles,
} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
//import './GenericTable.css';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/system';
import moment from 'moment';
// import { ITheme } from '../../../../../application/src/theme';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import CircularProgress from '@mui/material/CircularProgress';
import TableSortLabel from '@mui/material/TableSortLabel';
import { MuiAvatar } from '../../Molecules/custom-avatar/custom-avatar';
import PaginationBar from '../generic-pagination/generic-pagination';
//ToDo
const useStyles = makeStyles((theme: any) => ({
  root: {
    width: '100%',
    textTransform: 'capitalize',
  },
  head: {
    // padding: 2,
    borderBottom: 'none',
    fontWeight: 600,
  },
  tableContainer: {
    width: '100%',
    backgroundColor: theme?.palette?.background?.default,
    maxHeight: '100%',
    overflow: 'auto',
  },
  body: {
    border: '1px solid red',
  },
  cell: {
    minWidth: '200px',
    maxWidth: '420px',
    textTransform: 'capitalize',
    overflow: 'hidden',
    borderBottomColor: '#00000020',
    // display: 'flex',
    // justifyContent: 'between',
  },
  ul: {
    '& .MuiPaginationItem-root': {
      color: '#877878',
      backgroundColor: 'grey !important',
      '&.Mui-selected': {
        background: '#131CA2 ',
        color: 'white',
        height: 27,
        // borderRadius: '50%',
      },
    },
  },
}));

const StickyTableCell = withStyles((theme: any) => ({
  head: {
    backgroundColor: theme?.palette?.background?.paper || 'white',
    padding: '1px 0px 5px 8px',
    // margin: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1000,
    fontSize: 14,
    borderRight: '1px solid #E2E7EF20',
    borderBottom: '1px solid #E2E7EF20',
  },
  body: {
    backgroundColor: 'green' || 'white',
    left: 0,
    position: 'sticky',
    borderRight: '1px solid #E2E7EF20',
    width: '280px',
    zIndex: 1000,
    cursor: 'pointer',
    textTransform: 'capitalize',
  },
}))(TableCell);

const StyledTableCell = withStyles((theme: any) => ({
  head: {
    backgroundColor: theme?.palette?.background?.paper || 'white',
    padding: '1px 0px 4px 10px',
    fontSize: 12,
  },
  cell: {
    minWidth: '200px',
    maxWidth: '420px',
    textTransform: 'capitalize',
    overflow: 'hidden',
    borderBottomColor: '#00000020',
    // display: 'flex',
    // justifyContent: 'between',
  },

  body: {
    backgroundColor: theme?.palette?.background?.paper || 'white',
    // margin: 0,
    padding: '1px 0px 0px 10px',
    fontSize: 12,
    color: '#636A75',
    borderTop: '1px solid #E2E7EF20',
    cursor: 'pointer',
    textTransform: 'capitalize',
  },
}))(TableCell);

const StyledTableRow = withStyles((theme: any) => ({
  root: {
    background: theme?.palette?.background?.paper,
    '&:nth-of-type(odd)': {},
  },
}))(TableRow);

function descendingComparator(element1: any, element2: any, orderBy: any) {
  const bData = element2?.[orderBy];
  const aData = element1?.[orderBy];
  if (String(bData?.value) < String(aData?.value)) {
    return -1;
  }
  if (String(bData?.value) > String(aData?.value)) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  element1: { [key in Key]: number | string },
  element2: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (element1, element2) => descendingComparator(element1, element2, orderBy)
    : (element1, element2) =>
        -descendingComparator(element1, element2, orderBy);
}

function stableSort<T>(
  array: any[],
  comparator: (element1: T, element2: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((element1, element2) => {
    const order = comparator(element1[0], element2[0]);
    if (order !== 0) {
      return order;
    }
    return element1[1] - element2[1];
  });

  return stabilizedThis.map((el) => el[0]);
}

// To change header style

function EnhancedTableHead(props: any) {
  const { order, orderBy, onRequestSort, _tableData } = props;
  const createSortHandler =
    (property: keyof any) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };
  const classes = useStyles();
  // const theme: ITheme = useTheme();
  return (
    <TableHead
      style={{
        backgroundColor: props?.chartProps?.background_color || 'green',
      }}
    >
      <TableRow
        style={{
          background: props?.chartProps?.background_color || 'red',
        }}
      >
        {_tableData.headers?.map((headCell: any) => {
          return headCell.sticky ? (
            <StickyTableCell
              className={classes.head}
              key={headCell.field}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.field ? order : false}
              style={{
                backgroundColor: props?.chartProps?.background_color || 'green',
                color: props?.chartProps?.text_color || '#dadce0',
              }}
            >
              <Stack
                direction="row"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{
                    textTransform: 'capitalize ',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                  variant="caption"
                >
                  {headCell.name}
                </Typography>

                <TableSortLabel
                  active={true}
                  IconComponent={UnfoldMoreIcon}
                  direction={orderBy === headCell.field ? order : 'asc'}
                  onClick={createSortHandler(headCell.field)}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      color:
                        (props?.chartProps?.text_color || '#dadce0') +
                        ' !important',
                    },
                  }}
                ></TableSortLabel>
              </Stack>
            </StickyTableCell>
          ) : (
            <StyledTableCell
              className={classes.head}
              key={headCell.field}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.field ? order : false}
              style={{
                backgroundColor: props?.chartProps?.background_color || 'green',
                color: props?.chartProps?.text_color || '#dadce0',
              }}
            >
              <Stack
                direction="row"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  sx={{
                    textTransform: 'capitalize ',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                  variant="caption"
                >
                  {headCell.name}
                </Typography>
                <TableSortLabel
                  IconComponent={UnfoldMoreIcon}
                  active={true}
                  direction={orderBy === headCell.field ? order : 'asc'}
                  onClick={createSortHandler(headCell.field)}
                  sx={{
                    '& .MuiTableSortLabel-icon': {
                      color:
                        (props?.chartProps?.text_color || '#dadce0') +
                        ' !important',
                    },
                  }}
                ></TableSortLabel>
                {/* ) : null} */}
              </Stack>
            </StyledTableCell>
          );
        })}
        {/* <StyledTableActionCell align="left" className={classes.head}>
          <MoreVertIcon />
        </StyledTableActionCell> */}
      </TableRow>
    </TableHead>
  );
}

export const GenericTable = ({
  onClickRow,
  tableData,
  handleChangeRowsPerPage,
  handleChangePage,
  pageSize,
  isDataloading = false,
  totalCount = 0,
  currentPage,
  pageSizeOptions,
  chartProps,
  setTotalCountFunc,
}: {
  onClickRow: (_rowId: string, _data: string) => void;
  setTotalCountFunc: (total: number) => void;
  tableData: {
    rows: Array<{
      element: any;
      value: string | number | null;
    }>;
    headers: string[];
  };
  handleChangeRowsPerPage: any;
  handleChangePage: any;
  pageSize: number;
  chartProps: any;
  isDataloading: boolean;
  totalCount: number;
  currentPage: any;
  pageSizeOptions: any;
}) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof any>('');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [page, setPage] = React.useState(1);
  const [rowPerPage, setRowPerPage] = useState<number>(pageSize);
  const [_tableData, setTableData] = useState({
    rows: [],
    headers: [],
  });

  // const theme: ITheme = useTheme();
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof any
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() => {
    if (Math.ceil(parseFloat(`${totalCount / pageSize}`)) >= page) {
      handleChangePage(page);
    } else {
      handleChangePage(1);
    }
  }, [totalCount]);

  // const defaultPageSize = 10;
  // const currentPage = 1;
  // const pageSizeOptions = [10, 20, 50, 100];

  const onChangePage = (newPage: number) => {
    setPage(newPage);

    handleChangePage(newPage);
  };

  const onChangeRowsPerPage = (pageSize: any) => {
    setRowPerPage(parseInt(pageSize));
    handleChangeRowsPerPage(parseInt(pageSize));
  };

  useEffect(() => {
    try {
      const sampleData = JSON.parse(JSON.stringify(tableData));
      if (sampleData && sampleData?.records?.length) {
        const keyObj = {
          year: 'text',
          month: 'text',
          source: 'avatar',
          products: 'chip',
          quantity_000_metric_tonnes_: 'text',
          last_updated: 'text',
        };

        let totalCount = 0;

        const rowData = {
          rows: [],
          headers: [
            { name: 'year', field: 'year', sticky: true },
            { name: 'month', field: 'month' },
            {
              name: 'source',
              field: 'source',
            },
            {
              name: 'products',
              field: 'products',
            },
            {
              name: 'quantity_000_metric_tonnes_',
              field: 'quantity_000_metric_tonnes_',
            },
            {
              name: 'last_updated',
              field: 'last_updated',
            },
          ],
        };
        const uniqueCustomers = [];
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        totalCount = sampleData?.records?.length;
        sampleData &&
          sampleData?.records?.forEach((row, index) => {
            const rowToAdd = {
              id: index,
              rowColor: '',
            };
            rowData?.headers?.forEach((column) => {
              rowToAdd[column.field] = {
                value: row?.[column.field],
                type: keyObj[column.field],
              };
            });
            if (!uniqueCustomers.includes(row.customer_id)) {
              uniqueCustomers.push(row.customer_id);
            }

            rowData.rows.push(rowToAdd);
          });
        setTableData(rowData);
      }
    } catch (error) {}
  }, [currentPage, tableData]);

  const rowRepresenter = (
    fieldName: string,
    type: string,
    value: string,
    desc: any = '',
    css?: any
  ) => {
    switch (type) {
      case 'avatar':
        return (
          <Stack direction="row">
            <Box sx={{ position: 'relative', width: '40px', height: '40px' }}>
              <Box sx={{ display: 'block', width: '100%', height: '100%' }}>
                {value ? <MuiAvatar name={value} /> : 'NA'}
              </Box>
            </Box>

            <Stack direction="column">
              <Typography
                sx={{ textTransform: 'capitalize ', color: '#636A75' }}
                variant="body2"
              >
                {value ? value : 'NA'}
              </Typography>
              <Stack direction="row">
                <Typography
                  sx={{
                    textTransform: 'capitalize ',
                    color: '#848B96',
                    marginTop: '6px',
                  }}
                  variant="overline"
                >
                  {desc || 'NA'}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        );
      case 'title-subtitle':
        return (
          <Stack direction="column">
            <Typography
              sx={{
                color: '#363E45',
                fontSize: '14px',
                textTransform: 'capitalize ',
              }}
              variant="body2"
            >
              {value ? value : 'NA'}
            </Typography>

            <Typography
              sx={{
                textTransform: 'capitalize',
                color: '#71777B',
                marginTop: '6px',
              }}
              variant="overline"
            >
              {desc || 'NA'}
            </Typography>
          </Stack>
        );
      case 'date':
        return (
          <Typography
            sx={{ textTransform: 'capitalize ', color: '#636A75' }}
            variant="body2"
          >
            {value ? moment(value).format('DD MMMM YYYY') : 'NA'}
          </Typography>
        );
      case 'chip':
        return (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2px 8px',
              gap: '8px',
              width: 'fit-content',
              height: '24px',
              background: value === 'todo' ? '#D6E4FF' : '#D9F7BE',
              borderRadius: '4px',
            }}
          >
            <Typography
              sx={{
                color: value === 'todo' ? '#1D39C4' : '#2F6E14',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '20px',
              }}
            >
              {value || 'NA'}
            </Typography>
          </Box>
        );
      case 'text':
        return (
          <Typography
            sx={{
              color: '#363E45',
              fontSize: '14px',
              textTransform: 'capitalize',
            }}
            variant="caption"
          >
            {value || 'NA'}
          </Typography>
        );
        break;

      default:
        if (css) {
          return (
            <Box
              sx={{
                background: css.background || 'inherit',
                color: css.color || 'inherit',
                borderRadius: '2px',
                width: 'fit-content',
                padding: '5px 10px',
              }}
            >
              <Typography
                sx={{
                  textTransform: 'capitalize',
                  color: '#363E45',
                  fontSize: '14px',
                }}
                variant="caption"
              >
                {value}
              </Typography>
            </Box>
          );
        } else {
          return (
            <Typography
              sx={{
                color: '#363E45',
                fontSize: '14px',
                textTransform: 'capitalize',
              }}
              variant="caption"
            >
              {value || 'NA'}
            </Typography>
          );
        }
    }
  };

  const classes = useStyles();

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected([]);
  };

  return (
    <Box sx={{ height: '100%', flexDirection: 'column', display: 'flex' }}>
      <Box
        sx={{
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        {isDataloading ? (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '30px',
              height: '100%',
            }}
          >
            <CircularProgress />
          </Box>
        ) : _tableData?.rows?.length > 0 ? (
          <TableContainer
            className="scrollbox"
            style={{
              backgroundColor: chartProps?.background_color || '#ffffff',
            }}
          >
            <MuiTable
              stickyHeader
              aria-label="sticky table"
              style={{
                backgroundColor: chartProps?.background_color || '#ffffff',
              }}
            >
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={_tableData.rows.length}
                _tableData={_tableData}
                chartProps={chartProps || {}}
              />
              <TableBody
                style={{
                  backgroundColor: chartProps?.background_color || '#ffffff',
                }}
              >
                {stableSort(_tableData.rows, getComparator(order, orderBy)).map(
                  (data: any) => {
                    return (
                      <StyledTableRow
                        key={data.id}
                        onClick={() => onClickRow(data.id, data)}
                        style={{
                          backgroundColor:
                            chartProps?.background_color || '#ffffff',
                        }}
                      >
                        {_tableData.headers.map((col: any, index: number) =>
                          col.sticky ? (
                            <StickyTableCell
                              key={col.field}
                              align="left"
                              className={classes.cell}
                              style={{
                                backgroundColor:
                                  chartProps?.background_color || '#ffffff',
                              }}
                            >
                              {rowRepresenter(
                                col.field,
                                data[col.field].type,
                                data[col.field].value
                              )}
                              {/* {data[col.field].element || data[col.field].value} */}
                            </StickyTableCell>
                          ) : (
                            <StyledTableCell
                              key={col.field}
                              align="left"
                              className={classes.cell}
                              style={{
                                backgroundColor:
                                  data.rowColor ||
                                  chartProps?.background_color ||
                                  'white',
                              }}
                            >
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'space-between',
                                }}
                              >
                                {rowRepresenter(
                                  col.field,
                                  data[col.field].type,
                                  data[col.field].value
                                )}

                                {/* {data[col.field].element ||
                                  data[col.field].value} */}
                              </div>
                            </StyledTableCell>
                          )
                        )}
                      </StyledTableRow>
                    );
                  }
                )}
              </TableBody>
            </MuiTable>
          </TableContainer>
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pt: '20px',
              flexDirection: 'column',
              height: '100%',
            }}
          >
            {/* <img
              src={surface1}
              alt={'Data Not Found'}
              height={500}
              width={500}
            /> */}
            <Typography sx={{ fontSize: '22px', fontWeight: 700 }}>
              No Data Available
            </Typography>
          </Box>
        )}
      </Box>

      <PaginationBar
        isDataloading={isDataloading}
        totalCount={totalCount}
        pageSize={rowPerPage}
        currentPage={currentPage}
        pageSizeOptions={pageSizeOptions}
        onChangePage={onChangePage}
        onChangeRowsPerPage={onChangeRowsPerPage}
        page={page}
        tableData={_tableData}
        chartProps={chartProps}
      />
      {/* </Box> */}
    </Box>
  );
};

export default GenericTable;
