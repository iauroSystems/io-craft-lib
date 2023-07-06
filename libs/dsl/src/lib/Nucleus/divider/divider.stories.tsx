// import { Story, Meta } from '@storybook/react';

export default {
  // component: Color,
  title: 'Nucleus/Content Divider',
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
    docs: {
      description: {
        component: `Divider`,
      },
    },
  },
};

// const Template: Story<ColorProps> = (args) => <Color {...args} />;

export {default as Divider} from './divider';
// Default.args = {
//   // title: 'Hello',
// };
