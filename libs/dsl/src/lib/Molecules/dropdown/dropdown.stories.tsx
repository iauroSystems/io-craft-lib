import Dropdown, { DropdownProps } from './dropdown';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: Dropdown,
  title: 'Molecules/Dropdown',
  argTypes: {
    onChangeFunc: {
      
      action: 'change value',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const SingleSelection = Template.bind({});
SingleSelection.args = {
  dropdownList: [
    { label: 'sample1', value: 'sample1' },
    { label: 'sample2', value: 'sample2' },
    { label: 'sample3', value: 'sample3' },
    { label: 'sample4', value: 'sample4' },
    { label: 'sample5', value: 'sample5' },
    { label: 'sample6', value: 'sample6' },
  ],
  multipleSelection: false,
  enableCheckbox: false,
};
export const MultiSelection = Template.bind({});
MultiSelection.args = {
  dropdownList: [
    { label: 'sample1', value: 'sample1' },
    { label: 'sample2', value: 'sample2' },
    { label: 'sample3', value: 'sample3' },
    { label: 'sample4', value: 'sample4' },
    { label: 'sample5', value: 'sample5' },
    { label: 'sample6', value: 'sample6' },
  ],
  multipleSelection: true,
  enableCheckbox: false,
};
MultiSelection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=245%3A15553&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const SingleSelectionCheckbox = Template.bind({});
SingleSelectionCheckbox.args = {
  dropdownList: [
    { label: 'sample1', value: 'sample1' },
    { label: 'sample2', value: 'sample2' },
    { label: 'sample3', value: 'sample3' },
    { label: 'sample4', value: 'sample4' },
    { label: 'sample5', value: 'sample5' },
    { label: 'sample6', value: 'sample6' },
  ],
  multipleSelection: false,
  enableCheckbox: true,
};
SingleSelectionCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=245%3A15553&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const MultiSelectionCheckbox = Template.bind({});
MultiSelectionCheckbox.args = {
  dropdownList: [
    { label: 'sample1', value: 'sample1' },
    { label: 'sample2', value: 'sample2' },
    { label: 'sample3', value: 'sample3' },
    { label: 'sample4', value: 'sample4' },
    { label: 'sample5', value: 'sample5' },
    { label: 'sample6', value: 'sample6' },
  ],
  multipleSelection: true,
  enableCheckbox: true,
  fullWidth: false,
};
MultiSelectionCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=245%3A15553&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
