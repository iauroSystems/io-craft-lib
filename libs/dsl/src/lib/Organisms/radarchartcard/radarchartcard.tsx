import {styled, useTheme} from '@mui/system';
import generateRandomString from 'libs/dsl/src/static/randomString';
import RadarChart, {RadarChartProps,} from '../../Charts/radarchart/radarchart';
import CardHeader, {CardHeaderProps,} from '../../Molecules/card-header/card-header';
import './radarchartcard.css';
import themes from 'libs/dsl/src/theme';

/* eslint-disable-next-line */
interface IColorProps {
  [key: string]: string | number | any;
}

export interface IRadarChartCardProps {
  headerData: CardHeaderProps;
  chartData: RadarChartProps;
  cardProps?: IColorProps;
  actionClicked?: (data: any) => void;
  onChartClick?: (data: any) => void;
}

export function RadarChartCard(props: IRadarChartCardProps) {
  const theme = useTheme();
  const themeChart = themes;

  const StyledRadarChartCard = styled('div')(({theme}) => {
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
    <StyledRadarChartCard
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
          height: '90%',
        }}
      >
        <RadarChart {...props.chartData} onChartClick={onChartClick}/>
      </div>
    </StyledRadarChartCard>
  );
}

export default RadarChartCard;
