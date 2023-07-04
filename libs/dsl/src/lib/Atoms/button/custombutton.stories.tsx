import Button, { IButtonProps } from './custombutton';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: Button,
  title: 'Atoms/Button',
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

const Template: Story<IButtonProps> = (args) => <Button {...args} />;
export const TextButton = Template.bind({});
TextButton.args = {
  text: 'Text',
  fontSize: 16,
};
TextButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=151%3A29607&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const IconTextButton = Template.bind({});
IconTextButton.args = {
  leftIcon: {
    name: 'add',
    color: '#18a0fb',
    size: 20,
    label: 'Add',
  },
  text: 'Text',
  color: 'primary',
};
IconTextButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=151%3A29607&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const TextIconButton = Template.bind({});
TextIconButton.args = {
  rightIcon: {
    name: 'add',
    color: '#18a0fb',
    size: 20,
    label: 'Add',
  },
  text: 'Text',
};
TextIconButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=151%3A29607&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const IconTextIconButton = Template.bind({});
IconTextIconButton.args = {
  rightIcon: {
    name: 'add',
    color: '#18a0fb',
    size: 20,
    label: 'Add',
  },
  leftIcon: {
    name: 'add',
    color: '#18a0fb',
    size: 20,
    label: 'Add',
  },
  text: 'Text',
  fontSize:16
 
};
IconTextIconButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=151%3A29607&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: {
    name: 'add',
    size: 20,
    label: 'Add',
  },
};
IconButton.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=151%3A29607&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
