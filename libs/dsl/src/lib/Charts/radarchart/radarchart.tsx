import React, { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  ScriptableContext,
} from 'chart.js';
import { getElementsAtEvent, Radar } from 'react-chartjs-2';
import { useTheme } from '@mui/system';
import themes from 'libs/dsl/src/theme';
import WebFont from 'webfontloader';
import { IFontData } from '../barchart/barchart';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface IColorProps {
  [key: string]: string | number | any;
}

export interface RadarChartProps {
  data: any;
  legend?: 'top' | 'bottom' | 'left' | 'right' | 'chartArea';
  fontData?: IFontData;
  chartProps?: IColorProps;
  onChartClick?: (data: any) => void;
}

export function RadarChart({
  data,
  legend = 'right',
  fontData,
  chartProps,
  onChartClick,
}: RadarChartProps) {
  const [chartData, setChartData] = useState<any>({
    datasets: [],
    labels: [],
  });

  function addAlpha(color: string, opacity: number) {
    // coerce values so ti is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
  }
  const theme = useTheme();
  const [optionalChartProps, setOptionalChartProps] = useState<any>(chartProps);
  const themeChart = themes.default;
  ChartJS.defaults.color =
    optionalChartProps?.chartjs_default_color ||
    themeChart.palette?.text?.tex300Main;

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

    if (data && data.datasets && data.datasets.length && data.labels.length) {
      const _data = JSON.parse(JSON.stringify(data));
      _data.datasets.map((element: any, index: number) => {
        return (element.backgroundColor = (
          context: ScriptableContext<'radar'>
        ) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          if (element && element.bgColor) {
            gradient.addColorStop(0, `${hex2rgba(element.bgColor, 0.4)}`);
            gradient.addColorStop(1, `${hex2rgba(element.bgColor, 0.2)}`);
          }
          return gradient;
        });
      });
      setChartData(_data);
    }
  }, [data]);

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
      <Radar
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
              position: legend,
              labels: {
                usePointStyle: true,
                pointStyle: 'rectRounded',
                color:
                  optionalChartProps?.legend_text_color ||
                  themes.default.palette?.text?.tex400,
              },
            },
          },
        }}
        onClick={onClick}
      />
    </div>
  );
}

export default RadarChart;
