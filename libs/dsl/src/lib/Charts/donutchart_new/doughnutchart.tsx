import React, {useEffect, useRef, useState} from 'react';
import {ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip,} from 'chart.js';
import {Doughnut, getElementsAtEvent} from 'react-chartjs-2';
import {useTheme} from '@mui/system';
import themes from 'libs/dsl/src/theme';
import WebFont from 'webfontloader';
import {IFontData} from '../barchart/barchart';

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

interface IColorProps {
  [key: string]: string | number | any;
}

export interface DoughnutChartProps {
  data: any;
  legend?: 'top' | 'bottom' | 'left' | 'right' | 'chartArea';
  fontData?: IFontData;
  chartProps?: IColorProps;
  onChartClick?: (data: any) => void;
}

export const DoughnutChart = ({
                                data,
                                legend = 'right',
                                fontData,
                                chartProps,
                                onChartClick,
                              }: DoughnutChartProps) => {
  const theme = useTheme();
  const [optionalChartProps, setOptionalChartProps] = useState<any>(chartProps);
  const themeChart = themes.default;

  const [chartData, setChartData] = useState<any>({
    datasets: [],
    labels: [],
  });

  function addAlpha(color: string, opacity: number) {
    // coerce values so ti is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
  }

  const getRandomColor = (color: string) => {
    const seed = parseInt(color.slice(1, -1), 16);
    return '#' + Math.floor(Math.random() * seed).toString(16);
  };

  // data &&
  //   Array.isArray(data.datasets) &&
  //   data.datasets.forEach((element: any) => {
  //     element.backgroundColor =
  //       theme.palette?.chart.slice(data.datasets?.length) ??
  //       theme.palette.custom.form1;
  //   });
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
        element.backgroundColor = _data.datasets[index].backgroundColor;
        return element;
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
        height: '90%',
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
      <Doughnut
        ref={chartRef}
        data={chartData}
        options={{
          maintainAspectRatio: false,
          // aspectRatio: 2,
          cutout: optionalChartProps?.doughnut_cutout || '80%',
          radius: optionalChartProps?.doughnut_radius || '100%',

          plugins: {
            legend: {
              display: true,
              position: legend || 'right',
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

export default DoughnutChart;
