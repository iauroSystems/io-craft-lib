import { TooltipProps } from './tooltip';
import { Meta, Story } from '@storybook/react';
import React from 'react';
import CustomTooltip from './tooltip';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Atoms/Tooltip',
  component: CustomTooltip,
  decorators: [withDesign],
} as Meta;

const Template: Story<TooltipProps> = (args) => (
  <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
    {' '}
    <CustomTooltip {...args} />{' '}
  </div>
);

export const BottomEndTooltip = Template.bind({});
BottomEndTooltip.args = {
  title: 'Basic Tooltip',
  children: <button> Hello </button>,
  // open:true,
  arrow: true,
  placement: 'bottom-end',
};
BottomEndTooltip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=207%3A16558&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const BottomStartTooltip = Template.bind({});
BottomStartTooltip.args = {
  title: 'Basic Tooltip',
  children: <button> Hello </button>,
  // open:true,
  arrow: true,
  placement: 'bottom-start',
};
BottomEndTooltip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=207%3A16558&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const BottomTooltip = Template.bind({});
BottomTooltip.args = {
  title: 'Basic Tooltip',
  children: <button> Hello </button>,
  // open:true,
  arrow: true,
  placement: 'bottom',
};
BottomTooltip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=207%3A16558&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const LeftStartTooltip = Template.bind({});
LeftStartTooltip.args = {
  title: 'Basic Tooltip',
  children: <button> Hello </button>,
  // open:true,
  arrow: true,
  placement: 'left-start',
};
LeftStartTooltip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=207%3A16558&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const RightStartTooltip = Template.bind({});
RightStartTooltip.args = {
  title: 'Basic Tooltip',
  children: <button> Hello </button>,
  // open:true,
  arrow: true,
  placement: 'right-start',
};
RightStartTooltip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=207%3A16558&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const TopStartTooltip = Template.bind({});
TopStartTooltip.args = {
  title: 'Basic Tooltip',
  children: <button> Hello </button>,
  // open:true,
  arrow: true,
  placement: 'top-start',
};
TopStartTooltip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=207%3A16558&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const TopTooltip = Template.bind({});
TopTooltip.args = {
  title: 'Basic Tooltip',
  children: <button> Hello </button>,
  // open:true,
  arrow: true,
  placement: 'top',
};
TopTooltip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=207%3A16558&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const TopEndTooltip = Template.bind({});
TopEndTooltip.args = {
  title: 'Basic Tooltip',
  children: <button> Hello </button>,
  // open:true,
  arrow: true,
  placement: 'top-end',
};
TopEndTooltip.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=207%3A16558&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

// export const tooltip = ()=>{
//     <CustomTooltip title="basic"> <button> hello </button> </CustomTooltip>
// }
