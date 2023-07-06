import LinearProgress, {ILProgressProps} from './custom-linear-progress';
import {Meta, Story} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';

export default {
  component: LinearProgress,
  title: 'Molecules/Linear Progress',
  argTypes: {
    value: {
      control: {type: 'range', min: 0, max: 100},
    },
    valueBuffer: {
      control: {type: 'range', min: 0, max: 100},
    }
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<ILProgressProps> = (args) => <LinearProgress {...args} />;

export const IndeterminateLinearProgress = Template.bind({});
IndeterminateLinearProgress.args = {
  color: "secondary",
  variant: "indeterminate",
};
IndeterminateLinearProgress.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=183%3A20701&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const DeterminateLinearProgress = Template.bind({});
DeterminateLinearProgress.args = {
  color: "primary",
  variant: "determinate",
  value: 50
};
DeterminateLinearProgress.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=183%3A20701&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const BufferLinearProgress = Template.bind({});
BufferLinearProgress.args = {
  color: "primary",
  variant: "buffer",
  value: 40,
  valueBuffer: 60
};
BufferLinearProgress.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=183%3A20701&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const LinearProgressWithPercentage = Template.bind({});
LinearProgressWithPercentage.args = {
  color: "primary",
  variant: "determinate",
  value: 50,
  showPercentage: true
};
LinearProgressWithPercentage.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=183%3A20701&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
