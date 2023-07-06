import {Meta, Story} from '@storybook/react';
import ScatterChartCard, {IScatterChartCardProps} from './scatterchartcard';
import themes from '../../../theme';

export default {
  component: ScatterChartCard,
  title: 'Organisms/Scatter Chart Card',
} as Meta;

const Template: Story<IScatterChartCardProps> = (args) => (
  <ScatterChartCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  headerData: {
    title: 'card header',
    cardExtraProps: {
      title_color: themes.default.palette.text.tex600,
      bottom_border_color: themes.default.palette.neutral.neu100,
      background_color: themes.default.palette.background.bacopWhite,
    },
    actions: [
      {
        menu: 'Preview',
        icon: {
          name: 'fullscreen_black_24dp',
          size: 25,
          color: themes.default.palette.neutral.neu400,
          label: 'Full Screen',
        },
        submenu: [
          {
            menu: 'Share',
            icon: {
              name: 'share',
              size: 25,
              color: themes.default.palette.neutral.neu400,
              label: 'share',
            },
            submenu: [],
          },
          {
            menu: 'Close',
            submenu: [],
            icon: {
              name: 'close_black_24dp',
              size: 25,
              color: themes.default.palette.neutral.neu400,
              label: 'close_black_24dp',
            },
          },
        ],
      },
      {
        menu: 'Share',
        icon: {
          name: 'share',
          size: 25,
          color: themes.default.palette.neutral.neu400,
          label: 'share',
        },
        submenu: [],
      },
      {
        menu: 'Close',
        icon: {
          name: 'close_black_24dp',
          size: 25,
          color: themes.default.palette.neutral.neu400,
          label: 'close_black_24dp',
        },
        submenu: [
          {
            menu: 'Edit',
            submenu: [],
            icon: {
              name: 'share',
              size: 25,
              color: themes.default.palette.neutral.neu400,
              label: 'share',
            },
          },
        ],
      },
    ],
  },
  chartData: {
    labels: ['a', 'b', 'c'],
    datasets: [
      {
        label: 'Red dataset',
        data: [
          {
            x: 21,
            y: 35,
            r: 13,
          },
          {
            x: 37,
            y: 23,
            r: 10,
          },
          {
            x: 14,
            y: 28,
            r: 11,
          },
          {
            x: 16,
            y: 23,
            r: 11,
          },
          {
            x: 14,
            y: 25,
            r: 12,
          },
          {
            x: 28,
            y: 13,
            r: 11,
          },
          {
            x: 10,
            y: 29,
            r: 12,
          },
        ],
        backgroundColor: '#ffff00',
      },
      {
        label: 'Blue dataset',
        data: [
          {
            x: 32,
            y: 25,
            r: 12,
          },
          {
            x: 23,
            y: 16,
            r: 12,
          },
          {
            x: 33,
            y: 24,
            r: 15,
          },
          {
            x: 44,
            y: 20,
            r: 12,
          },
          {
            x: 45,
            y: 37,
            r: 10,
          },
          {
            x: 29,
            y: 27,
            r: 11,
          },
          {
            x: 40,
            y: 13,
            r: 19,
          },
          {
            x: 10,
            y: 44,
            r: 13,
          },
          {
            x: 43,
            y: 25,
            r: 17,
          },
          {
            x: 15,
            y: 38,
            r: 11,
          },
        ],
        backgroundColor: '#ff00ff',
      },
    ],
    chartProps: {
      chartjs_default_color: themes.default.palette.background.bacopWhite,
      chartjs_grid_color: themes.default.palette.neutral.neu100,
      axis_border_Color: themes.default.palette.neutral.neu100,
      display_grid: {x: true, y: false},
      axis_ticks_color: themes.default.palette.text.tex400,
      background_color: themes.default.palette.background.bacopWhite,
      legend_text_color: themes.default.palette.text.tex600,
    },
    fontData: {
      families: ['poppins', 'Indie Flower', 'Raleway'],
      url: [
        'https://fonts.googleapis.com/css?family=Poppins',
        'https://fonts.googleapis.com/css?family=Indie+Flower',
        'https://fonts.googleapis.com/css?family=Raleway',
      ],
      defaultFont: 'poppins',
    },
    xLabel: 'x axis',
    yLabel: 'yaxis',
  },
  cardProps: {
    background_color: themes.default.palette.background.bacopWhite,
  },
};
