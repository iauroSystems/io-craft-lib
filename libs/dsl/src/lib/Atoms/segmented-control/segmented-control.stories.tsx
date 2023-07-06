import {Meta, Story} from '@storybook/react';
import SegmentedControl, {SegmentedControlProps} from './segmented-control';
import {withDesign} from 'storybook-addon-designs';

const handleEvent = () => {
  console.log('onClick');
};

export default {
  component: SegmentedControl,
  title: 'Atoms/Segmented Control',
  argTypes: {
    onClick: {action: handleEvent},
    onChange: {action: handleEvent},
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'standard',
          'error',
          'info',
          'success',
          'warning',
        ],
      },
    },
    onChangeFunc: {
      action: 'change value',
      table: {
        disable: true,
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },

    position: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<SegmentedControlProps> = (args) => (
  <SegmentedControl {...args} />
);

export const SingleSelection = Template.bind({});
SingleSelection.args = {
  disabled: false,
  size: 'small',
  // color: 'primary',
  multiple: false,
  active: ['web'],
  value: ['web', 'android', 'ios', 'ZXZ', 'zxzxz', 'rwefsd'],
  position: 'horizontal',
  togglebtnstyle: {
    background: '#003264',
    color: 'white',
  },
  containerstyle: {},
};
SingleSelection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=227%3A13873&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const MultipleSelection = Template.bind({});
MultipleSelection.args = {
  disabled: false,
  size: 'small',
  // color: 'primary',
  multiple: true,
  active: ['web', 'android'],
  value: ['web', 'android', 'ios', 'ZXZ', 'zxzxz', 'rwefsd'],
  position: 'vertical',
  togglebtnstyle: {
    background: '#003264',
    color: 'white',
  },
  containerstyle: {},
};
MultipleSelection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=227%3A13873&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
