import {Box, Typography} from '@mui/material';
import {styled, useTheme} from '@mui/system';
import Chart from 'react-apexcharts';
import './heatmap.css';

interface rangeColor {
  from: number;
  to: number;
  color?: string;
  name: string;
}

export interface HeatmapProps {
  size: {
    width: number;
    height: number;
  };
  showToolbar?: boolean;
  data: Array<Array<Number>> | any;
  xLabels: Array<string | any>;
  rangeColors: Array<rangeColor>;
}

const Legend = styled(Box)`
  background-color: ${(props: any) => props.bgcolor};
`;

const colorPlates = (colors: Array<rangeColor>) => {
  return (
    <>
      <Box className="apex__legendContainer">
        {colors.map((item) => {
          return (
            <>
              <Legend
                className="apex__legendItem"
                bgcolor={item.color}
              ></Legend>
              <Typography variant="subtitle2">{item.name}</Typography>
            </>
          );
        })}
      </Box>
    </>
  );
};

export function Heatmap({
                          size,
                          data,
                          xLabels,
                          showToolbar,
                          rangeColors,
                        }: HeatmapProps) {
  const themes: any = useTheme();
  let screenWidth = screen.width;
  let minwidth = 800;
  let defaultHeight = 300;
  let defaultWidth = 800;

  const configure = {
    series: data,
    options: {
      plotOptions: {
        heatmap: {
          colorScale: {
            ranges: rangeColors,
          },
        },
      },

      chart: {
        toolbar: {
          show: showToolbar,
          offsetX: 0,
          offsetY: 0,
        },
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: xLabels,
        labels: {
          show: true,
          style: {
            colors: themes.palette.primary.dark,
            fontFamily: themes.typography['caption'].fontFamily,
            fontSize: themes.typography['caption'].fontSize,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: themes.palette.primary.dark,
            fontFamily: themes.typography['caption'].fontFamily,
            fontSize: themes.typography['caption'].fontSize,
          },
        },
      },
      tooltip: {
        enabled: true,
        theme: themes.palette.mode == 'light' ? 'light' : 'dark',
        // fillSeriesColor: true,
        style: {
          fontFamily: themes.typography['caption'].fontFamily,
          fontSize: themes.typography['caption'].fontSize,
          color: themes.palette.primary.dark,
        },
        onDatasetHover: {
          highlightDataSeries: true,
        },
      },
      grid: {
        padding: {
          right: 20,
        },
      },
    },
  };
  return (
    <Box>
      {colorPlates(rangeColors!)}
      <Chart
        options={configure.options}
        series={configure.series}
        type="heatmap"
        width={size?.width}
        height={defaultHeight || size?.height}
      />
    </Box>
  );
}

export default Heatmap;
