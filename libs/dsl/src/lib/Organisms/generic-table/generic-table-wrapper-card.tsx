import { styled, useTheme } from '@mui/system';
import generateRandomString from 'libs/dsl/src/static/randomString';
import themes from '../../../theme';
import CardHeader, {
  CardHeaderProps,
} from '../../Molecules/card-header/card-header';
import GenericTableWrapper from './generic-table-wrapper';
/* eslint-disable-next-line */

interface IColorProps {
  [key: string]: string | number | any;
}

export interface IGenericTableWrapperCardProps {
  headerData: CardHeaderProps;
  chartData: any;
  height?: number;
  width?: number;
  showBorder?: boolean;
  chartProps: IColorProps;

  actionClicked?: (data: any) => void;
  searchAction?: (data: any) => void;
  rowClicked?: (data: any) => any;
  paginationChanged?: (data: any) => any;
}

export const GenericTableWrapperCard = (
  props: IGenericTableWrapperCardProps
) => {
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
            height: 'calc(100% - 100px)',
          }}
        >
          <GenericTableWrapper
            {...props.chartData}
            chartProps={props.chartProps}
          />
        </div>
      </div>
    </StyledDatatableCardV1>
  );
};

export default GenericTableWrapperCard;
