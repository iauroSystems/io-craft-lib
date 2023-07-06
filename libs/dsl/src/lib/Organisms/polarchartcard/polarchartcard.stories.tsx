import {Meta, Story} from '@storybook/react';
// import themes from 'libs/dsl/src/theme';
import PolarChartCard, {IPolarChartCardProps} from './polarchartcard';
import themes from '../../../theme';

export default {
  component: PolarChartCard,
  title: 'Organisms/Polar Chart Card',
} as Meta;

const Template: Story<IPolarChartCardProps> = (args) => (
  <PolarChartCard {...args} />
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
    fontData: {
      families: ['poppins', 'Indie Flower', 'Raleway'],
      url: [
        'https://fonts.googleapis.com/css?family=Poppins',
        'https://fonts.googleapis.com/css?family=Indie+Flower',
        'https://fonts.googleapis.com/css?family=Raleway',
      ],
      defaultFont: 'poppins',
    },

    chartProps: {
      background_color: themes.default.palette.background.bacopWhite,
      legend_text_color: themes.default.palette.text.tex400,
    },

    labels: [
      'name-a',
      'name-b',
      'name-c',
      'name-d',
      'name-e',
      'name-f',
      'name-g',
      'name-h',
      'name-i',
      'name-j',
      'name-k',
      'name-l',
      'name-m',
      'name-n',
      'name-o',
      'name-p',
      'name-q',
    ],
    datasets: [
      {
        label: 'Red dataset',
        data: [
          17, 33, 41, 13, 44, 22, 37, 22, 12, 11, 28, 10, 26, 50, 42, 50, 36,
        ],
        backgroundColor: [
          themes.default.palette.systemColor1.sys300Main,
          themes.default.palette.systemColor2.sys300Main,
          themes.default.palette.systemColor3.sys300Main,
          themes.default.palette.systemColor4.sys300Main,
          themes.default.palette.systemColor5.sys300Main,
          themes.default.palette.systemColor1.sys100,
          themes.default.palette.systemColor2.sys100,
          themes.default.palette.systemColor3.sys100,
          themes.default.palette.systemColor4.sys100,
          themes.default.palette.systemColor5.sys100,
          themes.default.palette.systemColor1.sys500,
          themes.default.palette.systemColor2.sys500,
          themes.default.palette.systemColor3.sys500,
          themes.default.palette.systemColor4.sys500,
          themes.default.palette.systemColor5.sys500,
          themes.default.palette.systemColor1.sys200,
          themes.default.palette.systemColor2.sys200,
        ],
      },
      // {
      //   label: 'Blue dataset',
      //   data: [
      //     21, 49, 43, 28, 22, 22, 27, 31, 50, 21, 32, 20, 37, 45, 24, 49, 27,
      //   ],
      //   backgroundColor: ['rgba(53, 162, 235, 0.5)'],
      // },
    ],
  },
  cardProps: {
    background_color: themes.default.palette.background.bacopWhite,
  },
};
