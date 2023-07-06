import React from 'react';
import {Meta, Story} from '@storybook/react';
import CustomRadio, {RadioProps} from './radio';
import {withDesign} from 'storybook-addon-designs';

export default {
  title: 'Atoms/Radio',
  component: CustomRadio,
  argTypes: {
    handleClick: {
      action: 'clicked',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<RadioProps> = (args) => <CustomRadio {...args} />;

export const BasicRadio = Template.bind({});
BasicRadio.args = {
  color: 'primary',
  checked: true,
};
BasicRadio.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const SuccessRadio = Template.bind({});
SuccessRadio.args = {
  color: 'success',
  checked: true,
};
SuccessRadio.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const DisabledRadio = Template.bind({});
DisabledRadio.args = {
  color: 'success',
  checked: true,
  disabled: true,
};
DisabledRadio.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const LabeledRadio = Template.bind({});
LabeledRadio.args = {
  color: 'error',
  checked: true,
  label: 'Radio Button',
};
LabeledRadio.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
