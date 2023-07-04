import { styled } from '@mui/system';
import { useTheme } from '@mui/system';
import generateRandomString from 'libs/dsl/src/static/randomString';
import themes from 'libs/dsl/src/theme';
import BubbleChart, {
  IBubbleChartProps,
} from '../../Charts/bubble-chart/bubble-chart';
import CardHeader, {
  CardHeaderProps,
} from '../../Molecules/card-header/card-header';
import './bubblechartcard.css';
/* eslint-disable-next-line */
interface IColorProps {
  [key: string]: string | number | any;
}
export interface IBubbleChartCardProps {
  headerData: CardHeaderProps;
  chartData: IBubbleChartProps;
  cardProps?: IColorProps;
  actionClicked?: (data: any) => void;
  onChartClick?: (data: any) => void;
}

export function BubbleChartCard(props: IBubbleChartCardProps) {
  const theme = useTheme();
  const themeChart = themes;
  const StyledBubbleChartCard = styled('div')(({ theme }) => {
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
    <StyledBubbleChartCard
      style={{ height: '100%', width: '100%' }}
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
        <BubbleChart {...props.chartData} onChartClick={onChartClick} />
      </div>
    </StyledBubbleChartCard>
  );
}

export default BubbleChartCard;
