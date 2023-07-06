import React from 'react';
import CustomCheckbox, {CheckboxProps} from './checkbox';
import {Meta, Story} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';

export default {
  title: 'Atoms/Checkbox',
  component: CustomCheckbox,
  argTypes: {
    actionClick: {
      action: 'clicked',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<CheckboxProps> = (args) => <CustomCheckbox {...args} />;

export const PrimaryCheckbox = Template.bind({});
PrimaryCheckbox.args = {
  color: 'primary',
  checked: true,
};
PrimaryCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const SecondaryCheckbox = Template.bind({});
SecondaryCheckbox.args = {
  color: 'secondary',
  checked: true,
};
SecondaryCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};


export const DisabledCheckbox = Template.bind({});
DisabledCheckbox.args = {
  color: 'primary',
  checked: true,
  disabled: true,
};
DisabledCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const LabeledCheckbox = Template.bind({});
LabeledCheckbox.args = {
  color: 'info',
  defaultChecked: true,
  label: 'Checked Icon',
};
LabeledCheckbox.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
