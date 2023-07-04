import { Story, Meta } from '@storybook/react';
import { CardHeader, CardHeaderProps } from './card-header';
import themes from '../../../theme';
export default {
  component: CardHeader,
  title: 'Molecules/Card header',
  argTypes: {
    actionClicked: {
      action: 'clicked',
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const Template: Story<CardHeaderProps> = (args) => <CardHeader {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'card header',
  cardExtraProps: {
    title_color: themes.default.palette.text.tex600,
    bottom_border_color: themes.default.palette.neutral.neu100,
    background_color: themes.default.palette.background.bacopWhite,
  },
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
        },
        {
          menu: 'Close',
          icon: {
            name: 'close_black_24dp',
            size: 25,
            color: themes.default.palette.neutral.neu400,
            label: 'close_black_24dp',
            style: 'regular',
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
};
