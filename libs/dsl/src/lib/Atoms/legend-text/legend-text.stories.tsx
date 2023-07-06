import {Meta, Story} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';
import LegendText, {ILegendProps} from './legend-text';

export default {
  component: LegendText,
  title: 'Atoms/Legend Text',
  argTypes: {},
  decorators: [withDesign],
} as Meta;

const Template: Story<ILegendProps> = (args) => <LegendText {...args} />;

export const PrimaryChip = Template.bind({});
PrimaryChip.args = {
  color: 'red',
  size: 10,
  value: 'title',
};
PrimaryChip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
