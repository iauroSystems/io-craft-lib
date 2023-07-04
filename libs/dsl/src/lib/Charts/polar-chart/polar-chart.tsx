import styled from '@emotion/styled';
import { useTheme } from '@mui/system';
import {
  Chart as ChartJS,
  Legend,
  LinearScale,
  PointElement,
  Tooltip,
} from 'chart.js';
import themes from 'libs/dsl/src/theme';
import { useEffect, useRef, useState } from 'react';
import { getElementsAtEvent, PolarArea } from 'react-chartjs-2';
import WebFont from 'webfontloader';
import { IFontData } from '../barchart/barchart';

/* eslint-disable-next-line */

const StyledPolarChart = styled.div`
  color: pink;
`;

export interface IColorProps {
  [key: string]: string | number | any;
}
export interface IPolarDataSets {
  label: string;
  data: Array<number>;
  borderColor?: string;
  backgroundColor?: string[];
}
export interface IPolarChartProps {
  labels: string[];
  datasets: IPolarDataSets[];
  fontData?: IFontData;
  chartProps?: IColorProps;
  onChartClick?: (data: any) => void;
}

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const PolarChart = (props: IPolarChartProps) => {
  const theme = useTheme();
  const [optionalChartProps, setOptionalChartProps] = useState<any>(
    props.chartProps
  );
  const themeChart = themes.default;
  ChartJS.defaults.color = themeChart.palette?.text?.tex300Main;
  ChartJS.defaults.scale.grid.color = theme.palette?.light?.c100;
  ChartJS.defaults.borderColor = '#E2E7EF';
  const [chartData, setChartData] = useState<any>({
    datasets: [],
    labels: [],
  });
  // const [_scales, setScales] = useState({
  //   x: {
  //     grid: {
  //       display: false,
  //     },
  //     ticks: { color: themeChart.palette?.text?.primary },
  //     title: {
  //       display: true,
  //       color: themeChart.palette?.text?.primary,
  //     },
  //   },
  //   y: {
  //     grid: { display: false },
  //     ticks: {
  //       color: themeChart.palette?.text?.primary,
  //     },
  //     title: {
  //       display: true,
  //       color: themeChart.palette?.text?.primary,
  //     },
  //   },
  // });

  function addAlpha(color: string, opacity: number) {
    // coerce values so ti is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
  }

  useEffect(() => {
    if (props && props.fontData && props.fontData.defaultFont) {
      const WebFontConfig = {
        custom: {
          families: props.fontData.families,
          urls: props.fontData.url,
        },
      };
      WebFont.load(WebFontConfig);
      ChartJS.defaults.font.family = props.fontData.defaultFont;
    } else {
      ChartJS.defaults.font.family = 'Roboto';
    }
    if (
      props &&
      props.datasets &&
      props.labels &&
      props.datasets.length &&
      props.labels.length
    ) {
      const _data = JSON.parse(JSON.stringify(props));
      if (_data && _data.datasets && _data.datasets.length > 0) {
        for (let i = 0; i < _data.datasets.length; i += 1) {
          if (
            _data &&
            _data.datasets &&
            _data.datasets[i].data &&
            _data.datasets[i].data.length > 0
          ) {
            // _data.datasets[i].backgroundColor = [];
            for (let j = 0; j < _data.datasets[i].data.length; j += 1) {
              _data.datasets[i].backgroundColor =
                _data.datasets[i].backgroundColor;
              // _data.datasets[i].backgroundColor=
              // _data.datasets[i].backgroundColor.push(
              //   addAlpha(
              //     themeChart.palette?.chart[j] ??
              //       themeChart.palette?.systemColor1?.main,
              //     1
              //   )
              // );
            }
          }
        }
        setChartData(_data);
      }
    }
  }, [props]);

  const chartRef = useRef();
  const onClick = (event: any) => {
    const clickedElement: any = getElementsAtEvent(chartRef.current, event);
    const payload = {
      event: clickedElement,
      data: event,
    };
    props.onChartClick && props.onChartClick(payload);
  };

  return (
    <div
      style={{
        height: '80%',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          optionalChartProps?.background_color ||
          themes.default.palette.background.bacopWhite,
      }}
    >
      <PolarArea
        ref={chartRef}
        data={chartData}
        options={{
          maintainAspectRatio: false,
          // aspectRatio: 2,
          scales: {
            r: {
              grid: {
                color: '#e2e7ef' || themeChart.palette?.text?.tex300Main,
              },
              angleLines: {
                color: '#e2e7ef' || themeChart.palette?.text?.tex300Main,
              },
              pointLabels: {
                color: themeChart.palette?.text?.tex300Main,
              },
            },
          },

          plugins: {
            legend: {
              display: true,
              position: 'right',
              labels: {
                usePointStyle: true,
                pointStyle: 'rectRounded',
                color:
                  optionalChartProps?.legend_text_color ||
                  themes.default.palette?.text?.tex400,
              },
            },
            title: {
              // display: true,
              // text: 'Doughnut Chart',
            },
          },
        }}
        onClick={onClick}
      />
    </div>
  );
};

export default PolarChart;
