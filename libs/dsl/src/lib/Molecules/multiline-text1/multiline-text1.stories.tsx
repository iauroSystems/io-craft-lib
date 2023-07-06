/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import {Meta, Story} from '@storybook/react';
import MultilineText1, {MultilineText1Props} from './multiline-text1';

export default {
  component: MultilineText1,
  title: 'Molecules/Multiline Text',
  onClickEvent: {
    action: 'clicked',
    table: {
      disable: true,
    },
  },
} as Meta;

const Template: Story<MultilineText1Props> = (args) => (
  <MultilineText1 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  iconName:
    'https://gessa-fileservice.s3.eu-central-1.amazonaws.com/Safeimagekit-resized-imgpng.png',
  title: 'Iauro Keka ',
  subtitle: 'Created on Jun 23, 2022 9:00AM',
};
