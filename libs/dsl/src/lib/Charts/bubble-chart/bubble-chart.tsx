import {useTheme} from '@mui/system';
import {Chart as ChartJS, Legend, LinearScale, PointElement, ScriptableContext, Tooltip,} from 'chart.js';
import {useEffect, useRef, useState} from 'react';
import {Bubble, getElementsAtEvent} from 'react-chartjs-2';
import themes from '../../../theme';
import {IFontData} from '../barchart/barchart';
// import theme from '../../../../theme/';
import WebFont from 'webfontloader';

/* eslint-disable-next-line */
interface IColorProps {
  [key: string]: string | number | any;
}

export interface IBubbleDataSets {
  label: string;
  data: Array<any>;
  borderColor?: string;
  backgroundColor?: string;
}

export interface IBubbleChartProps {
  labels: string[];
  datasets: IBubbleDataSets[];
  legendPosition?: any;
  xLabel?: string;
  yLabel?: string;
  fontData?: IFontData;
  chartProps?: IColorProps;
  onChartClick?: (data: any) => void;
}

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const BubbleChart = (props: IBubbleChartProps) => {
  const theme = useTheme();
  const [optionalChartProps, setOptionalChartProps] = useState<any>(
    props.chartProps
  );

  const themeChart = themes.default;
  ChartJS.defaults.color =
    optionalChartProps?.chartjs_default_color ||
    themes.default.palette.background.bacopWhite;
  ChartJS.defaults.scale.grid.color =
    optionalChartProps?.chartjs_grid_color ||
    themes.default.palette.neutral.neu100;
  ChartJS.defaults.borderColor =
    optionalChartProps?.axis_border_color ||
    themes.default.palette.neutral.neu100;

  // const theme = theme.default;
  const [chartData, setChartData] = useState<any>({datasets: [], labels: []});
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
        font: {},
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

  const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };

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
        _data.datasets.map((element: any, index: number) => {
          return (element.backgroundColor = (
            context: ScriptableContext<'bubble'>
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
        height: '85%',
        width: '95%',
        display: 'flex',
        alignItems: 'center',
        background:
          optionalChartProps?.background_color ||
          themes.default.palette.background.bacopWhite,
      }}
    >
      <Bubble
        ref={chartRef}
        data={chartData}
        options={{
          maintainAspectRatio: false,
          // aspectRatio: 2,
          scales: _scales,

          plugins: {
            legend: {
              display: true,
              position: props.legendPosition || 'right',
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

export default BubbleChart;
