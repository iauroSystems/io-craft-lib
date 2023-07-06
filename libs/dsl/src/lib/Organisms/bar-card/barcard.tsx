import {styled, useTheme} from '@mui/system';
import generateRandomString from 'libs/dsl/src/static/randomString';
import Barchart, {BarChartProps} from '../../Charts/barchart/barchart';
import CardHeader, {CardHeaderProps,} from '../../Molecules/card-header/card-header';
import './barcard.css';
import themes from 'libs/dsl/src/theme';

/* eslint-disable-next-line */
interface IColorProps {
  [key: string]: string | number | any;
}

export interface IBarChartCardProps {
  headerData: CardHeaderProps;
  chartData: BarChartProps;
  cardProps?: IColorProps;
  actionClicked?: (data: any) => void;
  onChartClick?: (data: any) => void;
}

export function BarChartCard(props: IBarChartCardProps) {
  const theme = useTheme();
  const themeChart = themes;

  const StyledBarcard = styled('div')(({theme}) => {
    return {
      '&': {
        background:
          props?.cardProps?.background_color ||
          themeChart.default.palette.background.bacopWhite,
      },
    };
  });

  const menuClicked = (data: any) => {
    props && props.actionClicked(data);
  };

  const onChartClick = (data: any) => {
    props.onChartClick && props.onChartClick(data);
  };
  return (
    <StyledBarcard
      style={{height: '100%', width: '100%'}}
      key={generateRandomString()}
    >
      {props && props.headerData && (
        <CardHeader
          key={generateRandomString()}
          title={props.headerData.title}
          actions={props.headerData.actions}
          actionClicked={menuClicked}
          cardExtraProps={props.headerData.cardExtraProps}
        />
      )}
      <div
        key={generateRandomString()}
        style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          height: '100%',
        }}
      >
        <Barchart {...props.chartData} onChartClick={onChartClick}/>
      </div>
    </StyledBarcard>
  );
}

export default BarChartCard;
