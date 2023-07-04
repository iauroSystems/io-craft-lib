import { Story, Meta } from '@storybook/react';
import themes from 'libs/dsl/src/theme';
import PieChartCard, { IPieChartCardProps } from './piechartcard';

export default {
  component: PieChartCard,
  title: 'Organisms/Pie Chart Card',
} as Meta;

const Template: Story<IPieChartCardProps> = (args) => (
  <PieChartCard {...args} />
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
    height: 400,
    width: 600,
    chartProps: {
      chartjs_default_color: themes.default.palette.background.bacopWhite,
      chartjs_grid_color: themes.default.palette.neutral.neu100,
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
      defaultFont: 'Indie Flower',
    },
    data: {
      labels: ['HR8270', 'TECH1860', 'TECH6390', 'SAL6191', 'HR6734'],
      datasets: [
        {
          label: 'present',
          data: ['80', '79', '76', '71', '73'],
          backgroundColor: [
            themes.default.palette.systemColor1.sys400,
            themes.default.palette.systemColor2.sys400,
            themes.default.palette.systemColor3.sys400,
            themes.default.palette.systemColor4.sys400,
            themes.default.palette.systemColor5.sys400,
          ],

          borderWidth: 1,
        },
        {
          label: 'absent',
          data: ['8', '8', '10', '14', '11'],
          backgroundColor: [
            themes.default.palette.systemColor1.sys400,
            themes.default.palette.systemColor2.sys400,
            themes.default.palette.systemColor3.sys400,
            themes.default.palette.systemColor4.sys400,
            themes.default.palette.systemColor5.sys400,
          ],

          borderWidth: 1,
        },
      ],
    },
  },
};
