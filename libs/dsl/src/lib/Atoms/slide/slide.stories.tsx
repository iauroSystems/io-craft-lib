import React from 'react';
import Slide, {SlideProps} from './slide';
import {Meta, Story} from '@storybook/react';
// import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
// import Favorite from '@mui/icons-material/Favorite';
import {withDesign} from 'storybook-addon-designs';

export default {
  title: 'Atoms/Toggle',
  component: Slide,
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

const Template: Story<SlideProps> = (args) => <Slide {...args} />;

export const BasicSlide = Template.bind({});
BasicSlide.args = {
  color: 'primary',
  defaultChecked: true,
};
BasicSlide.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const SuccessSlide = Template.bind({});
SuccessSlide.args = {
  color: 'success',
  defaultChecked: true,
};
SuccessSlide.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const DisabledSlide = Template.bind({});
DisabledSlide.args = {
  color: 'success',
  defaultChecked: true,
  disabled: true,
};
DisabledSlide.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const LabeledSlide = Template.bind({});
LabeledSlide.args = {
  color: 'warning',
  defaultChecked: true,
  label: 'Slide Button',
};
LabeledSlide.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
