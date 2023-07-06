import {Meta, Story} from '@storybook/react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import themes from 'libs/dsl/src/theme';
import StatChartCard, {IStatChartCardProps} from './statChartCard';

export default {
  component: StatChartCard,
  title: 'Organisms/Stat Chart Card',
  argTypes: {
    height: {
      control: {type: 'range', min: 4, max: 1000, step: 4},
    },
    width: {
      control: {type: 'range', min: 4, max: 1000, step: 4},
    },
  },
} as Meta;

const Template: Story<IStatChartCardProps> = (args) => (
  <StatChartCard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  headerData: {
    title: 'card header',
    actions: [
      {
        menu: 'Preview',
        icon: {
          name: 'fullscreen_black_24dp',
          size: 25,
          color: '#459ff2',
          label: 'Full Screen',
        },
        submenu: [
          {
            menu: 'Share',
            icon: {
              name: 'share',
              size: 25,
              color: '#459ff2',
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
              color: '#459ff2',
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
          color: '#459ff2',
          label: 'share',
        },
        submenu: [],
      },
      {
        menu: 'Close',
        icon: {
          name: 'close_black_24dp',
          size: 25,
          color: '#459ff2',
          label: 'close_black_24dp',
        },
        submenu: [
          {
            menu: 'Edit',
            submenu: [],
            icon: {
              name: 'share',
              size: 25,
              color: '#459ff2',
              label: 'share',
            },
          },
        ],
      },
    ],
    cardExtraProps: {
      title_color: themes.default.palette.text.tex600,
      bottom_border_color: themes.default.palette.neutral.neu100,
      background_color: themes.default.palette.background.bacopWhite,
    },
  },
  chartData: {
    data: {
      title: 'Number of Payments',
      stat: 600,
      icon: {
        name: 'Search',
        size: 30,
        color: themes.default?.palette?.primary.pri400,
      },
      link: 'View All',
    },
    chartProps: {
      background_color: themes.default?.palette?.background?.bacopWhite,
      icon_bgcolor: themes.default?.palette?.background?.bacmain,
      subtitle_color: themes.default?.palette?.primary.pri400,
      link_color: themes.default?.palette?.systemColor2?.sys400,
    },
  },
};

export const Card1 = Template.bind({});
Card1.args = {
  headerData: {
    title: 'card title',
    actions: [
      {
        menu: 'Preview',
        icon: {
          name: 'fullscreen_black_24dp',
          size: 25,
          color: themes.default.palette.neutral.neu400,
          label: 'Full Screen',
        },
        submenu: [],
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
        menu: 'Edit',
        icon: {
          name: 'edit_black_24dp',
          size: 25,
          color: themes.default.palette.neutral.neu400,
          label: 'edit_black_24dp',
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
        submenu: [],
      },
    ],
  },
  chartData: {
    data: {
      link: 'View All',
      title: 'card title',
      stat: 600,
      icon: {
        name: 'Search',
        size: 30,
        color: themes.default.palette.neutral.neu400,
      },
    },
    chartProps: {
      background_color: themes.default?.palette?.background?.bacopWhite,
      icon_bgcolor: themes.default?.palette?.background?.bacmain,
      subtitle_color: themes.default?.palette?.primary.pri400,
      link_color: themes.default?.palette?.systemColor2?.sys400,
    },
  },
  cardProps: {
    background_color: themes.default.palette.background.bacopWhite,
  },
};
export const Card2 = Template.bind({});
Card2.args = {
  headerData: {
    title: 'card',
    searchData: {
      label: 'Search',
      placeholder: 'Search by Customer Name, SSE ID, Phone Numbe',
      value: '',
    },
    actions: [
      {
        menu: 'Preview',
        icon: {
          name: 'fullscreen_black_24dp',
          size: 25,
          color: '#e6e6e6',
          label: 'Full Screen',
        },
        submenu: [],
      },
      {
        menu: 'Share',
        icon: {
          name: 'share',
          size: 25,
          color: '#e6e6e6',
          label: 'share',
        },
        submenu: [],
      },
      {
        menu: 'Edit',
        icon: {
          name: 'edit_black_24dp',
          size: 25,
          color: '#e6e6e6',
          label: 'edit_black_24dp',
        },
        submenu: [],
      },
      {
        menu: 'Delete',
        icon: {
          name: 'close_black_24dp',
          size: 25,
          color: '#e6e6e6',
          label: 'close_black_24dp',
        },
        submenu: [],
      },
    ],
    chartProps: {
      background_color: '#0F1013',
      icon_bgcolor: '#1e2025',
      subtitle_color: '#E6E6E6',
      link_color: '#1890FF',
    },
  },
  chartData: {
    data: {
      link: 'View All',
      title: 'card',
      stat: '184',
      icon: {
        name: 'Search',
        size: 30,
        color: '#E6E6E6',
      },
    },
    chartProps: {
      background_color: '#0F1013',
      icon_bgcolor: '#1e2025',
      subtitle_color: '#E6E6E6',
      link_color: '#1890FF',
    },
  },
  cardProps: {
    background_color: '#0F1013',
  },
};

const abc = {
  headerData: {
    title: 'card',
    searchData: {
      label: 'Search',
      placeholder: 'Search by Customer Name, SSE ID, Phone Numbe',
      value: '',
    },
    actions: [
      {
        menu: 'Preview',
        icon: {
          name: 'fullscreen_black_24dp',
          size: 25,
          color: '#e6e6e6',
          label: 'Full Screen',
        },
        submenu: [],
      },
      {
        menu: 'Share',
        icon: {
          name: 'share',
          size: 25,
          color: '#e6e6e6',
          label: 'share',
        },
        submenu: [],
      },
      {
        menu: 'Edit',
        icon: {
          name: 'edit_black_24dp',
          size: 25,
          color: '#e6e6e6',
          label: 'edit_black_24dp',
        },
        submenu: [],
      },
      {
        menu: 'Delete',
        icon: {
          name: 'close_black_24dp',
          size: 25,
          color: '#e6e6e6',
          label: 'close_black_24dp',
        },
        submenu: [],
      },
    ],
    chartProps: {
      background_color: '#0F1013',
      icon_bgcolor: '#1e2025',
      subtitle_color: '#E6E6E6',
      link_color: '#1890FF',
    },
  },
  chartData: {
    data: {
      link: 'View All',
      title: 'card',
      stat: '347',
      icon: {
        name: 'Search',
        size: 30,
        color: '#E6E6E6',
      },
    },
    chartProps: {
      background_color: '#0F1013',
      icon_bgcolor: '#1e2025',
      subtitle_color: '#E6E6E6',
      link_color: '#1890FF',
    },
  },
  cardProps: {
    background_color: '#0F1013',
  },
};
