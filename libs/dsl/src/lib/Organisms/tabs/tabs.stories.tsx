import Tabs, {TabsProps} from './tabs';
import {Meta, Story} from '@storybook/react';
import {withDesign} from 'storybook-addon-designs';

export default {
  component: Tabs,
  title: 'Organisms/Tabs',
  argTypes: {
    onChangeFunc: {
      action: 'Selected Tab',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<TabsProps> = (args) => <Tabs {...args} />;
const tablist = [
  {label: 'sample1', value: 'sample1'},
  {label: 'sample2', value: 'sample2'},
  {label: 'sample3', value: 'sample3'},
  {label: 'sample4', value: 'sample4'},
  {label: 'sample5', value: 'sample5'},
  {label: 'sample6', value: 'sample6'},
  {label: 'sample7', value: 'sample7'},
  {label: 'sample8', value: 'sample8'},
  {label: 'sample9', value: 'sample9'},
  {label: 'sample10', value: 'sample10'},
  {label: 'sample11', value: 'sample11'},
  {label: 'sample12', value: 'sample12'},
  {label: 'sample13', value: 'sample13'},
  {label: 'sample14', value: 'sample14'},
]
export const HorizontalTabs = Template.bind({});
HorizontalTabs.args = {
  tabsList: tablist,
  tabsOrientation: 'horizontal',
  selectedTabColor: 'primary',
};
HorizontalTabs.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=294%3A34831&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const VerticalTabs = Template.bind({});
VerticalTabs.args = {
  tabsList: tablist,
  tabsOrientation: 'vertical',
  selectedTabColor: 'primary',
  verticalHeight: 500,
};
VerticalTabs.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=294%3A34831&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
