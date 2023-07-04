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
import { getElementsAtEvent, Scatter } from 'react-chartjs-2';
import { IFontData } from '../barchart/barchart';
import WebFont from 'webfontloader';

/* eslint-disable-next-line */

const StyledScatterChart = styled.div`
  color: pink;
`;

interface IColorProps {
  [key: string]: string | number | any;
}

export interface IScatterDataSets {
  label: string;
  data: Array<any>;
  borderColor?: string;
  backgroundColor?: string;
}
export interface IScatterChartProps {
  labels: string[];
  datasets: IScatterDataSets[];
  xLabel?: string;
  yLabel?: string;
  chartProps?: IColorProps;
  fontData?: IFontData;
  onChartClick?: (data: any) => void;
}

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const ScatterChart = (props: IScatterChartProps) => {
  const themeChart = themes.default;
  const [optionalChartProps, setOptionalChartProps] = useState<any>(
    props.chartProps
  );
  const theme = useTheme();

  ChartJS.defaults.color =
    optionalChartProps?.chartjs_default_color ||
    themes.default.palette.background.bacopWhite;
  ChartJS.defaults.scale.grid.color =
    optionalChartProps?.chartjs_grid_color ||
    themes.default.palette.neutral.neu100;
  ChartJS.defaults.borderColor =
    optionalChartProps?.axis_border_color ||
    themes.default.palette.neutral.neu100;

  const [chartData, setChartData] = useState<any>({
    datasets: [],
    labels: [],
  });
  const [_scales, setScales] = useState({
    x: {
      grid: {
        borderDash: [3, 3],
        display: optionalChartProps?.display_grid?.x || false,
      },
      ticks: {
        color:
          optionalChartProps?.axis_ticks_color ||
          themes.default.palette?.text?.tex400,
      },
      title: {
        display: true,
        text: props.xLabel,
        color:
          optionalChartProps?.axis_ticks_color ||
          themes.default.palette?.text?.tex400,
      },
    },
    y: {
      grid: {
        borderDash: [3, 3],
        display: optionalChartProps?.display_grid?.y || false,
      },
      ticks: {
        color:
          optionalChartProps?.axis_ticks_color ||
          themes.default.palette?.text?.tex400,
      },
      title: {
        display: true,
        text: props.yLabel,
        color:
          optionalChartProps?.axis_ticks_color ||
          themes.default.palette?.text?.tex400,
      },
    },
  });
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
      _data.datasets.map((element: any, index: number) => {
        element.backgroundColor = _data.datasets[index].backgroundColor;
        // element.backgroundColor = addAlpha(
        //   themeChart.palette['chart'][index] ??
        //     themeChart.palette['custom'].form1,
        //   1
        // );
        return element;
      });
      setChartData(_data);
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
        top: 0,
        height: '85%',
        width: '95%',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Scatter
        ref={chartRef}
        data={chartData}
        options={{
          maintainAspectRatio: false,
          // aspectRatio: 2,
          scales: _scales,

          plugins: {
            legend: {
              display: true,
              position: 'right',
              labels: {
                usePointStyle: true,
                pointStyle: 'rectRounded',
                color:
                  optionalChartProps?.legend_text_color ||
                  themes.default.palette?.text?.tex600,
              },
            },
            title: {
              display: true,
              // text: 'Doughnut Chart',
            },
          },
        }}
        onClick={onClick}
      />
    </div>
  );
};

export default ScatterChart;
