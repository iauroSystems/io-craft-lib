import {action} from '@storybook/addon-actions';
import {Meta, Story} from '@storybook/react';
import MessageWindow, {MessageWindowProps} from './messageWindow';
import {IconComponent} from '../../POC/icon-component/icon-component';
import {withDesign} from 'storybook-addon-designs';

export default {
  title: 'Molecules/MessageWindow',
  component: MessageWindow,
  argTypes: {
    onClose: {
      action: 'dialog closed',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<MessageWindowProps> = (args) => (
  <MessageWindow {...args} />
);

export const BasicMessageWindow = Template.bind({});
BasicMessageWindow.args = {
  open: true,
  title: 'File 1.pdf',
  description: 'Are you sure want delete this ?',
  icon: (
    <IconComponent
      name="delete_black_24dp"
      color="#727cad"
      size={27}
      label="App"
    />
  ),
  actions: [
    {
      name: 'Cancel',
      value: 'Cancel',
      primary: false,
      handleClick: action('Cancel'),
    },
    {
      name: 'Delete',
      value: 'delete',
      primary: true,
      handleClick: action('Delete'),
    },
  ],
};

BasicMessageWindow.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=239%3A15100&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
