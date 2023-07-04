/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, getElementsAtEvent } from 'react-chartjs-2';
import { useTheme } from '@mui/system';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import themes from 'libs/dsl/src/theme';
import { Paper } from '@mui/material';
import WebFont from 'webfontloader';

export interface IFontData {
  families: string[];
  url: string[];
  defaultFont: string;
}
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
interface IColorProps {
  [key: string]: string | number | any;
}

export interface BarChartProps {
  data: any;
  stacked: boolean;
  horizontal: boolean;
  xLabel?: string;
  yLabel?: string;
  fontData?: IFontData;
  chartProps?: IColorProps;
  onChartClick?: (data: any) => void;
}

export function Barchart({
  data,
  stacked = false,
  horizontal = false,
  xLabel = '',
  yLabel = '',
  fontData,
  chartProps,
  onChartClick,
}: BarChartProps) {
  const theme = useTheme();
  const [optionalChartProps, setOptionalChartProps] = useState<any>(chartProps);
  const themeChart = themes.default;

  ChartJS.defaults.color =
    optionalChartProps?.chartjs_default_color ||
    themes.default.palette.background.bacopWhite;
  ChartJS.defaults.scale.grid.color =
    optionalChartProps?.chartjs_grid_color ||
    themes.default.palette.neutral.neu100;
  ChartJS.defaults.datasets.bar.maxBarThickness =
    optionalChartProps?.bar_thickness || 25;
  ChartJS.defaults.borderColor =
    optionalChartProps?.axis_border_color ||
    themes.default.palette.neutral.neu100;

  // ChartJS.defaults.borderColor =
  //   themeChart.palette?.text?.c100 || theme.palette?.text?.c100 || '#e2e7ef';

  const [barChartData, setBarchartData] = useState<any>({
    datasets: [],
    labels: [],
  });

  const [_scales, setScales] = useState({
    x: {
      stacked: stacked,

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
      stacked: stacked,
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
          _data.datasets.map((element: any, index: any) => {
            element.backgroundColor = _data.datasets[index].backgroundColor;
            return element;
          });
        setBarchartData(_data);
      }
    }
  }, [data, fontData]);
  const chartRef = useRef();
  const onClick = (event: any) => {
    const clickedElement: any = getElementsAtEvent(chartRef.current, event);
    const payload = {
      event: clickedElement,
      data: event,
    };
    onChartClick && onChartClick(payload);
  };

  return (
    barChartData && (
      <div
        style={{
          top: 0,
          height: '85%',
          width: '95%',
          display: 'flex',
          flexDirection: 'row',
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
          background:
            optionalChartProps?.background_color ||
            themes.default.palette.background.bacopWhite,
        }}
      >
        <Bar
          ref={chartRef}
          data={barChartData}
          options={{
            indexAxis: horizontal ? ('y' as const) : ('x' as const),
            responsive: true,
            maintainAspectRatio: false,
            // aspectRatio: 1,
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
            },
          }}
          onClick={onClick}
        />
      </div>
    )
  );
}

export default Barchart;
