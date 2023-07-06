import {Meta, Story} from '@storybook/react';
import Snackbar, {SnackbarProps} from './snackbar';
import {action} from '@storybook/addon-actions';
import {withDesign} from 'storybook-addon-designs';

export default {
  title: 'Molecules/Snackbar',
  component: Snackbar,
  argTypes: {
    type: {
      options: ['error', 'info', 'success', 'warning'].sort(),
      control: {type: 'select'},
    },
    onCloseFunc: {
      action: 'click away',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<SnackbarProps> = (args) => <Snackbar {...args} />;

export const BasicSnackbar = Template.bind({});
BasicSnackbar.args = {
  open: true,
  type: 'success',
  message: 'This is success SnackBar',
  onCloseFunc: () => {
    console.log('closed.');
  },
  actions: [
    {
      name: 'close_black_24dp',
      // color: '#727cad',
      size: 22,
      label: 'close',
      style: 'regular',
      handleClick: action('Close'),
    },
  ],
  // onClose:()=>{ alert("closing the bar") }
};
BasicSnackbar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=225%3A17172&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const InfoSnackbar = Template.bind({});
InfoSnackbar.args = {
  open: true,
  type: 'info',
  message: 'This is info SnackBar',
  actions: [
    {
      name: 'close_black_24dp',
      // color: '#727cad',
      size: 25,
      label: 'close',
      style: 'regular',
      handleClick: action('Close'),
    },
  ],
};
InfoSnackbar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=225%3A17172&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const ErrorSnackbar = Template.bind({});
ErrorSnackbar.args = {
  open: true,
  type: 'error',
  message: 'This is Error SnackBar',
  actions: [
    {
      name: 'close_black_24dp',
      // color: '#727cad',
      size: 25,
      label: 'close',
      style: 'regular',
      handleClick: action('Close'),
    },
  ],
};
ErrorSnackbar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=225%3A17172&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const TopLeftSnackbar = Template.bind({});
TopLeftSnackbar.args = {
  open: true,
  anchorOrigin: {vertical: 'top', horizontal: 'left'},
  message: 'This is Top Left SnackBar',
  actions: [
    {
      name: 'close_black_24dp',
      // color: '#727cad',
      size: 25,
      label: 'close',
      style: 'regular',
      handleClick: action('Close'),
    },
  ],
};
TopLeftSnackbar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=225%3A17172&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const TopRightSnackbar = Template.bind({});
TopRightSnackbar.args = {
  open: true,
  anchorOrigin: {vertical: 'top', horizontal: 'right'},
  message: 'This is Top Right SnackBar',
  actions: [
    {
      name: 'close_black_24dp',
      size: 25,
      label: 'close',
      style: 'regular',
      handleClick: action('Close'),
    },
  ],
};
TopRightSnackbar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=225%3A17172&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const BottomRightSnackbar = Template.bind({});
BottomRightSnackbar.args = {
  open: true,
  anchorOrigin: {vertical: 'bottom', horizontal: 'right'},
  message: 'This is Bottom Right SnackBar',
  actions: [
    {
      name: 'close_black_24dp',
      // color: '#727cad',
      size: 25,
      label: 'close',
      style: 'regular',
      handleClick: action('Close'),
    },
  ],
};
BottomRightSnackbar.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=225%3A17172&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
