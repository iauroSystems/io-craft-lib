import {Meta, Story} from '@storybook/react';
import {BarChartCard, IBarChartCardProps} from './barcard';
import themes from '../../../theme';

export default {
  component: BarChartCard,
  title: 'Organisms/Bar Chart Card',
  argTypes: {
    onChartClick: {
      action: 'barClicked',
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<IBarChartCardProps> = (args) => (
  <BarChartCard {...args} />
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
    xLabel: 'price',
    yLabel: 'weight',
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
      bar_thickness: 25,
      axis_border_Color: themes.default.palette.neutral.neu100,
      display_grid: {x: true, y: false},
      axis_ticks_color: themes.default.palette.text.tex400,
      background_color: themes.default.palette.background.bacopWhite,
      legend_text_color: themes.default.palette.text.tex600,
    },

    data: {
      labels: [
        'value1',
        'value2',
        'value3',
        'value4',
        'value5',
        'value6',
        'value7',
        'value8',
      ],
      datasets: [
        {
          label: 'My First Dataset',
          data: [250, 275, 500, 124, 200, 130, 250, 70],
          backgroundColor: 'green',
          borderRadius: 5,
        },
      ],
    },
  },
  cardProps: {
    background_color: themes.default.palette.background.bacopWhite,
  },
};
