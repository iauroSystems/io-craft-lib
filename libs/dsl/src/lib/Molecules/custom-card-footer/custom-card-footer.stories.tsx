/* eslint-disable @typescript-eslint/no-empty-function */
import { Meta, Story } from '@storybook/react';
import React from 'react';
import CustomCardFooter, { CustomCardFooterProps } from './custom-card-footer';

export default {
  component: CustomCardFooter,
  title: 'Molecules/Modal Footer',
  argTypes: {
    onAccept: { action: 'accepted' },
    onReject: { action: 'rejected' },
  },
} as Meta;

const Template: Story<CustomCardFooterProps> = (args) => (
  <CustomCardFooter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onAccept: () => {},
  onReject: () => {},
  acceptLabel: 'Accept',
  rejectLabel: 'Reject',
};


