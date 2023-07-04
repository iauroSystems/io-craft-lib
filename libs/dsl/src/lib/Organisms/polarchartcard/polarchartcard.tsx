import { styled } from '@mui/system';
import { useTheme } from '@mui/system';
import generateRandomString from 'libs/dsl/src/static/randomString';
import PolarChart, {
  IPolarChartProps,
} from '../../Charts/polar-chart/polar-chart';
import CardHeader, {
  CardHeaderProps,
} from '../../Molecules/card-header/card-header';
import './polarchartcard.css';
import themes from 'libs/dsl/src/theme';
/* eslint-disable-next-line */
interface IColorProps {
  [key: string]: string | number | any;
}
export interface IPolarChartCardProps {
  headerData: CardHeaderProps;
  chartData: IPolarChartProps;
  cardProps?: IColorProps;
  actionClicked?: (data: any) => void;
  onChartClick?: (data: any) => void;
}

export function PolarChartCard(props: IPolarChartCardProps) {
  const theme = useTheme();
  const themeChart = themes;

  const StyledPolarChartCard = styled('div')(({ theme }) => {
    return {
      '&': {
        background: theme.palette?.light?.c50,
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
    <StyledPolarChartCard
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
          height: '90%',
        }}
      >
        <PolarChart {...props.chartData} onChartClick={onChartClick} />
      </div>
    </StyledPolarChartCard>
  );
}

export default PolarChartCard;
