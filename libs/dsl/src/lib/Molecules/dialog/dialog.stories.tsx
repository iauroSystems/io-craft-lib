/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/jsx-no-undef */
import {Meta} from '@storybook/react';
import DialogComponent from './dialog';
import Box from '@mui/material/Box';
import {DialogContent, DialogContentText} from '@mui/material';
import {withDesign} from 'storybook-addon-designs';
import CustomCardHeader from '../custom-card-header/custom-card-header';
import CustomCardFooter from '../custom-card-footer/custom-card-footer';

export default {
  title: 'Molecules/Dailog',
  component: DialogComponent,
  decorators: [withDesign],
} as Meta;

const DialogChildren = () => {
  return (
    <Box component="div" sx={{p: 2}}>
      <CustomCardHeader data={{title: "Hello This is Dialog", dropdown: []}}/>
      {/* <DialogTitle>Hello This is Dialog</DialogTitle> */}
      <DialogContent>
        <DialogContentText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          assumenda fugiat quaerat quos repellat cum quis est in explicabo?
        </DialogContentText>
      </DialogContent>
      <CustomCardFooter onAccept={function (): void {

      }} onReject={function (): void {

      }} acceptLabel={'Save'} rejectLabel={'Exit'}/>
    </Box>
  );
};

export const BasicDailog = () => (
  <DialogComponent open={true}>
    <DialogChildren/>
  </DialogComponent>
);
BasicDailog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=239%3A15100&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
export const ExtraLargeMaxWidthDialog = () => (
  <DialogComponent open={true} maxWidth="xl">
    <DialogChildren/>
  </DialogComponent>
);
ExtraLargeMaxWidthDialog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=239%3A15100&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
export const FullScreenDailog = () => (
  <DialogComponent open={true} fullScreen={true}>
    <DialogChildren/>
  </DialogComponent>
);
FullScreenDailog.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=239%3A15100&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
