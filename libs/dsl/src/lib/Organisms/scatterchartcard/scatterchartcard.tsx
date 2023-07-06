import {styled, useTheme} from '@mui/system';
import generateRandomString from 'libs/dsl/src/static/randomString';
import ScatterChart, {IScatterChartProps,} from '../../Charts/scatter-chart/scatter-chart';
import CardHeader, {CardHeaderProps,} from '../../Molecules/card-header/card-header';
import './scatterchartcard.css';
import themes from 'libs/dsl/src/theme';

/* eslint-disable-next-line */
interface IColorProps {
  [key: string]: string | number | any;
}

export interface IScatterChartCardProps {
  headerData: CardHeaderProps;
  chartData: IScatterChartProps;
  cardProps?: IColorProps;
  actionClicked?: (data: any) => void;
  onChartClick?: (data: any) => void;
}

export function ScatterChartCard(props: IScatterChartCardProps) {
  const theme = useTheme();
  const themeChart = themes;

  const StyledScatterChartCard = styled('div')(({theme}) => {
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
    console.log(data);
    props.onChartClick && props.onChartClick(data);
  };
  return (
    <StyledScatterChartCard
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
        style={{
          padding: 16,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexGrow: 1,
          height: '100%',
        }}
        key={generateRandomString()}
      >
        <ScatterChart {...props.chartData} onChartClick={onChartClick}/>
      </div>
    </StyledScatterChartCard>
  );
}

export default ScatterChartCard;
