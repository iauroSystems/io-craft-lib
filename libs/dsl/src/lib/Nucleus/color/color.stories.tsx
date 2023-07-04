import { Story, Meta } from '@storybook/react';
import Color from './color';
export default {
  title: 'Nucleus/Colors',
  component: Color,
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
    docs: {
      description: {
        component: `Color`,
      },
    },
  },
};
export { default as Color } from './color';
