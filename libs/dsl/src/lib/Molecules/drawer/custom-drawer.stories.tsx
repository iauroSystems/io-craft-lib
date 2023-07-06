/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-undef */
import Drawer, {DrawerProps} from './custom-drawer';
import {Meta, Story} from '@storybook/react';
import Box from '@mui/material/Box';
import {withDesign} from 'storybook-addon-designs';
import CustomCardHeader from '../custom-card-header/custom-card-header';
import CustomCardFooter from '../custom-card-footer/custom-card-footer';

export default {
  component: Drawer,
  title: 'Molecules/Drawer',
  argTypes: {
    onCloseFunc: {
      action: 'drawer closed',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<DrawerProps> = (args) => (
  <Drawer {...args}>

    <CustomCardHeader data={{title: "Hello This is Dialog", dropdown: []}}/>
    <Box>Demo Drawer</Box>
    <CustomCardFooter onAccept={function (): void {

    }} onReject={function (): void {

    }} acceptLabel={'Yes'} rejectLabel={'No'}/>
  </Drawer>
);

export const DrawerSelection = Template.bind({});
DrawerSelection.args = {
  anchor: 'top',
  variant: 'temporary',
  displayDrawer: true,
};
DrawerSelection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=247%3A16117&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
