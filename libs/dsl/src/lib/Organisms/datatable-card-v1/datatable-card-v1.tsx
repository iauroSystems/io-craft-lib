/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-empty */
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { styled, useTheme } from '@mui/system';
import generateRandomString from 'libs/dsl/src/static/randomString';
import themes from 'libs/dsl/src/theme';
import CardHeader, {
  CardHeaderProps,
} from '../../Molecules/card-header/card-header';
import DataGridV1, { IDataGridV1Props } from '../data-grid-new/data-grid-v1';
import './datatable-card-v1.css';
/* eslint-disable-next-line */

interface IColorProps {
  [key: string]: string | number | any;
}

export interface IDatatableCardV1Props {
  headerData: CardHeaderProps;
  chartData: IDataGridV1Props;
  height?: number;
  width?: number;
  showBorder?: boolean;
  chartProps?: IColorProps;

  actionClicked?: (data: any) => void;
  searchAction?: (data: any) => void;
  rowClicked?: (data: any) => any;
  paginationChanged?: (data: any) => any;
}

export function DatatableCardV1(props: IDatatableCardV1Props) {
  const StyledDatatableCardV1 = styled('div')(({ theme }) => {
    return {
      '&': {
        background:
          props.chartProps?.background_color ||
          themes.default?.palette?.background?.bacopWhite,
      },
    };
  });

  const theme = useTheme();
  const menuClicked = (data: any) => {
    // console.log(data);
    props && props.actionClicked(data);
  };
  return (
    <StyledDatatableCardV1
      style={{
        borderRadius: props && props.showBorder ? 2 : 0,
        border:
          props && props.showBorder
            ? `1px solid ${
                props?.chartProps?.border_color ||
                themes?.default?.palette?.neutral?.neu400
              }`
            : 'none',
        // minHeight: props.height + 'px',
        // minWidth: props.width + 'px',

        height: 'calc(100% - 0px)',
        width: 'calc(100% - 0px)',
        // backgroundColor: '#dadce0',
        overflowY: 'hidden',
        overflowX: 'hidden',
      }}
      key={generateRandomString()}
    >
      {props && props.headerData && (
        <CardHeader
          key={generateRandomString()}
          searchData={props.headerData.searchData}
          title={props.headerData.title}
          actions={props.headerData.actions}
          actionClicked={menuClicked}
          cardExtraProps={props?.headerData?.cardExtraProps}
          searchAction={props.searchAction}
        />
      )}
      <div
        key={generateRandomString()}
        style={{
          height: 'calc(100% - 0px)',
          width: 'calc(100% - 0px)',
          display: 'flex',
          flexDirection: 'row',
          flex: 100,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            flex: 100,
            overflowX: 'auto',
          }}
        >
          <DataGridV1
            key={generateRandomString()}
            columnData={props.chartData.columnData}
            rowData={props.chartData.rowData}
            columnResizable={false}
            pagination={props.chartData.pagination || false}
            height={props.height - 60 || 300}
            width={props.width || 500}
            chartProps={props.chartData.chartProps}
            menuClicked={props.chartData.menuClicked}
            onSearchInput={props.chartData.onSearchInput}
            rowClicked={props.rowClicked}
            paginationChanged={props.paginationChanged}
          />
        </div>
      </div>
    </StyledDatatableCardV1>
  );
}

export default DatatableCardV1;
