import { Story, Meta } from '@storybook/react';
import { ChipProps, CustomChip } from './chip';
import { IconComponent } from '../../POC/icon-component/icon-component';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: CustomChip,
  title: 'Atoms/Chip',
  argTypes: {
    color: {
      options: [
        'primary',
        'secondary',
        'default',
        'error',
        'info',
        'success',
        'warning',
      ].sort(),
      control: { type: 'select' },
    },
    shape: {
      options: ['rounded', 'square'].sort(),
      control: { type: 'select' },
    },
    
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<ChipProps> = (args) => <CustomChip {...args} />;

export const PrimaryChip = Template.bind({});
PrimaryChip.args = {
  color: 'primary',
  label: 'Primary Chip',
  shape: 'rounded',
  leftIconProps: {
    name: 'add', // Replace with actual left icon name
    size: 20, // Replace with actual left icon size
    color: 'black', // Replace with actual left icon color
    label: 'left_icon', // Replace with actual left icon label
    style: {} // Replace with actual left icon style
  },
  rightIconProps: { 
    name: 'add', // Replace with actual right icon name
    size: 20, // Replace with actual right icon size
    color: 'black', // Replace with actual right icon color
    label: 'right_icon', // Replace with actual right icon label
    style: {} // Replace with actual right icon style
  },
};
PrimaryChip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const IconTextChip = Template.bind({});
IconTextChip.args = {
  color: 'primary',
  label: 'Icon Text Chip',
  shape: 'rounded',
  
  leftIconProps: {
    name: 'help_outline_black_24dp', 
    size: 20, 
    color: 'black', 
    label: 'left_icon', 
    style: {},
  },
  rightIconProps: {
    name: 'close_black_24dp', 
    size: 20,
    color: 'black',
    label: 'right_icon',
    style: {},
  },
};
PrimaryChip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const ChipAndIcon = Template.bind({});
ChipAndIcon.args = {
  color: 'primary',
  label: 'Right Icon',
  rightIcon: <IconComponent size={17} name="close_black_24dp" label="close" />,
  shape: 'rounded',
};
ChipAndIcon.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

