import { Meta, Story } from '@storybook/react';
import React from 'react';
import CustomCardHeader, { CustomCardHeaderProps } from './custom-card-header';

export default {
  component: CustomCardHeader,
  title: 'Molecules/Modal Header',
  argTypes: {},
} as Meta;

const Template: Story<CustomCardHeaderProps> = (args) => (
  <CustomCardHeader {...args} />
);

export const Header = Template.bind({});
Header.args = {
  data: {
    title: 'Top 5 Liked Taxonomy',
    dropdown: [],
  },
};

export const HeaderIcon = Template.bind({});
HeaderIcon.args = {
  data: {
    title: 'Taxonomy Domain',
    dropdown: [
      {
        label: 'OverAll',
        icon: {
          name: 'Menu-Dataops-Solid',
          size: 25,
          color: '#0458AE',
        },
        onClick: () => console.log('Cliked'),
        dropdownList: [
          { label: 'sample1', value: 'sample1' },
          { label: 'sample2', value: 'sample2' },
          { label: 'sample3', value: 'sample3' },
          { label: 'sample4', value: 'sample4' },
          { label: 'sample5', value: 'sample5' },
          { label: 'sample6', value: 'sample6' },
        ],
      },
      {
        label: 'OverAll',
        icon: {
          name: '',
          size: 0,
          color: '',
        },
        onClick: () => console.log('Cliked'),
        dropdownList: [
          { label: 'sample1', value: 'sample1' },
          { label: 'sample2', value: 'sample2' },
          { label: 'sample3', value: 'sample3' },
          { label: 'sample4', value: 'sample4' },
          { label: 'sample5', value: 'sample5' },
          { label: 'sample6', value: 'sample6' },
        ],
      },
    ],
  },
};
