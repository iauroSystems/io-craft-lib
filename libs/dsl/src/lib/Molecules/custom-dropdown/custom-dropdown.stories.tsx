import { Meta, Story } from '@storybook/react';
import React from 'react';
import CustomDropdown, { CustomDropdownProps } from './custom-dropdown';

export default {
  component: CustomDropdown,
  title: 'Molecules/Custom Dropdown',
  argTypes: {},
} as Meta;

const Template: Story<CustomDropdownProps> = (args) => (
  <CustomDropdown {...args} />
);

export const Dropdown = Template.bind({});
Dropdown.args = {
  data: {
    label: 'Overall Overall Overall',
    icon: {
      name: '',
      size: 25,
      color: '',
    },
    onClick: () => {
      console.log('Overall');
    },
    dropdownList: [
      { label: 'sample1', value: 'sample1' },
      { label: 'sample2', value: 'sample2' },
      { label: 'sample3', value: 'sample3' },
      { label: 'sample4', value: 'sample4' },
      { label: 'sample5', value: 'sample5' },
      { label: 'sample6', value: 'sample6' },
    ],
  },
};

export const DropdownIcon = Template.bind({});
DropdownIcon.args = {
  data: {
    label: 'Overall',
    icon: {
      name: 'Menu-Dataops-Solid',
      size: 25,
      color: '#0458AE',
    },
    onClick: () => {
      console.log('Overall');
    },
    dropdownList: [
      { label: 'sample1', value: 'sample1' },
      { label: 'sample2', value: 'sample2' },
      { label: 'sample3', value: 'sample3' },
      { label: 'sample4', value: 'sample4' },
      { label: 'sample5', value: 'sample5' },
      { label: 'sample6', value: 'sample6' },
    ],
  },
};
