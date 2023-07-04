import { Story, Meta } from '@storybook/react';
// import themes from 'libs/dsl/src/theme';
import { IRadarChartCardProps, RadarChartCard } from './radarchartcard';
import themes from '../../../theme';
export default {
  component: RadarChartCard,
  title: 'Organisms/Radar Chart Card',
} as Meta;

const Template: Story<IRadarChartCardProps> = (args) => (
  <RadarChartCard {...args} />
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
    chartProps: {
      chartjs_default_color: themes.default.palette.background.bacopWhite,
      background_color: themes.default.palette.background.bacopWhite,
      legend_text_color: themes.default.palette.text.tex600,
    },
    data: {
      labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
      ],
      datasets: [
        {
          label: '1st Dataset',
          data: [2, 9, 3, 5, 2, 3],
          bgColor: themes.default.palette.systemColor4.sys300Main,
          borderColor: themes.default.palette.systemColor1.sys300Main,
          borderWidth: 1,
        },
        {
          label: '2nd Dataset',
          data: [9, 2, 7, 8, 1, 5],
          bgColor: themes.default.palette.systemColor5.sys300Main,
          borderColor: themes.default.palette.systemColor3.sys300Main,
          borderWidth: 1,
        },
      ],
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
  },
  cardProps: {
    background_color: themes.default.palette.background.bacopWhite,
  },
};
