import { Story, Meta } from '@storybook/react';
import errorImg from './error.png';
import Typography from './typography'
export default {
  title: 'Nucleus/Typography',
  parameters: {
    previewTabs: {
      canvas: {
        hidden: true,
      },
    },
    viewMode: 'docs',
    docs: {
      description: {
        component: `Typography`,
      },
    },
  },
};
export { default as Typography } from './typography';
