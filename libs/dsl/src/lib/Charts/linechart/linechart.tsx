import React, { useEffect, useRef, useState } from 'react';

import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  CategoryScale,
  LinearScale,
  Filler,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ScriptableContext,
} from 'chart.js';
import { getDatasetAtEvent, getElementsAtEvent, Line } from 'react-chartjs-2';
import { useTheme } from '@mui/system';
import themes from 'libs/dsl/src/theme';
import { IFontData } from '../barchart/barchart';
import WebFont from 'webfontloader';

ChartJS.register(
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Filler,
  Tooltip,
  Legend
);
interface IColorProps {
  [key: string]: string | number | any;
}
export interface LineChartProps {
  data: any;
  legendPosition?: any;
  xLabel?: string;
  yLabel?: string;
  fontData?: IFontData;
  chartProps?: IColorProps;
  onChartClick?: (data: any) => void;
}

export function LineChart({
  data,
  xLabel,
  yLabel,
  legendPosition = 'right',
  fontData,
  chartProps,
  onChartClick,
}: LineChartProps) {
  const theme: any = useTheme();
  const themeChart: any = themes.default;
  const [optionalChartProps, setOptionalChartProps] = useState<any>(chartProps);

  ChartJS.defaults.color =
    optionalChartProps?.chartjs_default_color ||
    themes.default.palette.background.bacopWhite;
  ChartJS.defaults.scale.grid.color =
    optionalChartProps?.chartjs_grid_color ||
    themes.default.palette.neutral.neu100;
  ChartJS.defaults.borderColor =
    optionalChartProps?.axis_border_color ||
    themes.default.palette.neutral.neu100;

  const [lineChartData, setLinechartData] = useState<any>({
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
        font: {},
      },
      title: {
        display: true,
        text: xLabel,
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
        font: {},
      },
      title: {
        display: true,
        text: yLabel,
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

  // data &&
  //   Array.isArray(data.datasets) &&
  //   data.datasets.forEach((element: any, index: number) => {
  //     element.borderColor = theme.palette.chart[index];
  //     element.backgroundColor = addAlpha(
  //       theme.palette.chart[index] ?? theme.palette.custom.form1,
  //       0.6
  //     );
  //   });

  const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };

  useEffect(() => {
    if (fontData && fontData.defaultFont) {
      const WebFontConfig = {
        custom: {
          families: fontData.families,
          urls: fontData.url,
        },
      };
      WebFont.load(WebFontConfig);
      ChartJS.defaults.font.family = fontData.defaultFont;
    } else {
      ChartJS.defaults.font.family = 'Roboto';
    }
    if (
      data &&
      data.datasets &&
      data.datasets.length > 0 &&
      data.labels &&
      data.labels.length > 0
    ) {
      const _data = JSON.parse(JSON.stringify(data));
      if (_data) {
        _data &&
          _data.datasets.map((element: any, index: number) => {
            return (element.backgroundColor = (
              context: ScriptableContext<'line'>
            ) => {
              const ctx = context.chart.ctx;
              const gradient = ctx.createLinearGradient(0, 0, 0, 200);
              if (element && element.bgColor) {
                gradient.addColorStop(0, `${hex2rgba(element.bgColor, 0.5)}`);
                gradient.addColorStop(1, `${hex2rgba(element.bgColor, 0.3)}`);
              }
              return gradient;
            });

            // element.backgroundColor = _data.datasets[index].backgroundColor;
            // return element;
          });
        setLinechartData(_data);
      }
    }
  }, [data]);

  const chartRef = useRef();
  const onClick = (event: any) => {
    const clickedElement: any = getDatasetAtEvent(chartRef.current, event);
    const payload = {
      event: clickedElement,
      data: event,
    };
    onChartClick && onChartClick(payload);
  };

  return (
    <div
      style={{
        height: '85%',
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background:
          optionalChartProps?.background_color ||
          themes.default.palette.background.bacopWhite,
      }}
    >
      <Line
        ref={chartRef}
        data={lineChartData}
        options={{
          maintainAspectRatio: false,
          scales: _scales,

          plugins: {
            filler: {
              propagate: true,
            },
            legend: {
              display: true,
              position: legendPosition,
              labels: {
                usePointStyle: true,
                pointStyle: 'rectRounded',
                color:
                  optionalChartProps?.legend_text_color ||
                  themes.default.palette?.text?.tex600,
              },
            },
          },
        }}
        onClick={onClick}
      />
    </div>
  );
}

export default LineChart;
