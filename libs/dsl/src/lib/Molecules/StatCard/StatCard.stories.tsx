/* eslint-disable @typescript-eslint/no-empty-function */
import { Story, Meta } from '@storybook/react';
import themes from 'libs/dsl/src/theme';
// import theme from 'libs/dsl/src/theme';
import { withDesign } from 'storybook-addon-designs';
import StatCard, { StatCardProps } from './StatCard';

export default {
  component: StatCard,
  title: 'Molecules/StatCard',
  argTypes: {},
  decorators: [withDesign],
} as Meta;

const Template: Story<StatCardProps> = (args) => <StatCard {...args} />;

export const PlainInputFile = Template.bind({});
PlainInputFile.args = {
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
};

export const StatCardWithChip = Template.bind({});
StatCardWithChip.args = {
  data: {
    title: 'Number of Payments',
    chipData: {
      chipColor: themes.default.palette?.systemColor1?.sys100,
      icon: {
        name: 'Notification_24dp',
        size: 25,
        color: themes.default.palette?.systemColor1?.sys300Main,
      },
      textData: {
        text: '15%',
        color: themes.default.palette?.systemColor1?.sys300Main,
      },
    },
    stat: 600,
    icon: {
      name: 'Search',
      size: 30,
      color: theme.default.palette?.primary?.pri400,
    },
    link: 'View All',
  },
};
