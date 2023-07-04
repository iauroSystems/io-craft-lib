import { styled } from '@mui/system';
import { useTheme } from '@mui/system';
import generateRandomString from 'libs/dsl/src/static/randomString';
import CardHeader, {
  CardHeaderProps,
} from '../../Molecules/card-header/card-header';
import StatCard, { StatCardProps } from '../../Molecules/StatCard/StatCard';
/* eslint-disable-next-line */
export interface IStatChartCardProps {
  height?: number;
  width?: number;
  headerData: CardHeaderProps;
  chartData: StatCardProps;
  actionClicked?: (data: any) => void;
  onChartClick?: (data: any) => void;
}

const StyledStatChartCard = styled('div')(({ theme }) => {
  return {
    '&': {
      background: theme.palette?.light?.c50,
    },
  };
});
export function StatChartCard(props: IStatChartCardProps) {
  const theme = useTheme();
  const menuClicked = (data: any) => {
    props && props.actionClicked(data);
  };
  const onChartClick = (data: any) => {
    console.log(data);
  };
  return (
    <StyledStatChartCard
      style={{
        minHeight: '100px',
        height: props.height + 'px',
        width: props.width + 'px',
      }}
      key={generateRandomString()}
    >
      {props && props.headerData && (
        <CardHeader
          key={generateRandomString()}
          title={props.headerData.title}
          actions={props.headerData.actions}
          cardExtraProps={props.headerData.cardExtraProps}
          actionClicked={menuClicked}
        />
      )}
      <div
        key={generateRandomString()}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        {props && props.chartData && props.chartData.data && (
          <StatCard
            data={props.chartData.data}
            chartProps={props.chartData.chartProps}
            onChartClick={onChartClick}
          />
        )}
      </div>
    </StyledStatChartCard>
  );
}

export default StatChartCard;
