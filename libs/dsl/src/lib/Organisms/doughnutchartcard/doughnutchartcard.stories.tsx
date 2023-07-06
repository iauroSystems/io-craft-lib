import {Meta, Story} from '@storybook/react';
import themes from 'libs/dsl/src/theme';
import {DoughnutChartCard, IDoughnutChartCardProps,} from './doughnutchartcard';

export default {
  component: DoughnutChartCard,
  title: 'Organisms/Doughnut Chart Card',
} as Meta;

const Template: Story<IDoughnutChartCardProps> = (args) => (
  <DoughnutChartCard {...args} />
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
    data: {
      labels: ['Blue', 'Red', 'Purple', 'Green', 'Yello'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2],
          backgroundColor: [
            themes.default.palette.systemColor1.sys300Main,
            themes.default.palette.systemColor2.sys300Main,
            themes.default.palette.systemColor3.sys300Main,
            themes.default.palette.systemColor4.sys300Main,
            themes.default.palette.systemColor5.sys300Main,
          ],

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
      defaultFont: 'Indie Flower',
    },
    chartProps: {
      chartjs_default_color: themes.default.palette.background.bacopWhite,
      chartjs_grid_color: themes.default.palette.neutral.neu100,
      axis_border_Color: themes.default.palette.neutral.neu100,
      display_grid: {x: true, y: false},
      axis_ticks_color: themes.default.palette.text.tex400,
      background_color: themes.default.palette.background.bacopWhite,
      legend_text_color: themes.default.palette.text.tex600,
    },
  },
  cardProps: {
    background_color: themes.default.palette.background.bacopWhite,
  },
};
