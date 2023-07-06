import CircularProgress, {ICProgressProps} from './custom-circular-progress';
import {Meta, Story} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';

export default {
  component: CircularProgress,
  title: 'Molecules/CircularProgress',
  argTypes: {
    value: {
      control: {type: 'range', min: 0, max: 100},
    },
    size: {
      control: {type: 'range', min: 40, max: 200},
    },
    thickness: {
      control: {type: 'range', min: 3, max: 8},
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<ICProgressProps> = (args) => (
  <CircularProgress {...args} />
);

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  color: 'primary',
  variant: 'indeterminate',
};
Indeterminate.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=183%3A20701&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const Determinate = Template.bind({});
Determinate.args = {
  color: 'success',
  variant: 'determinate',
  value: 60,
  size: 50,
  thickness: 4,
};
Determinate.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=183%3A20701&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const DeterminateWithPercentage = Template.bind({});
DeterminateWithPercentage.args = {
  color: 'success',
  variant: 'determinate',
  value: 60,
  size: 50,
  thickness: 4,
  showPercentage: true,
};
DeterminateWithPercentage.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=183%3A20701&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
