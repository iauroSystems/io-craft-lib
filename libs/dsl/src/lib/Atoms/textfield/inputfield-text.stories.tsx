import TextInputField, { TextfieldProps } from './inputfield-text';
import { Story, Meta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  component: TextInputField,
  title: 'Atoms/Text Fields',
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'filled', 'standard'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'error',
          'info',
          'success',
          'warning',
        ],
      },
    },
    autoFocus: {
      control: 'boolean',
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<TextfieldProps> = (args) => <TextInputField {...args} />;
export const InputFieldText = Template.bind({});
InputFieldText.args = {
  label: 'Demo',
  variant: 'outlined',
  color: 'primary',
};
InputFieldText.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const NormalInputFieldTextStory = Template.bind({})
NormalInputFieldTextStory.args = {
  variant: 'outlined',
  color: 'primary',
  placeholder: 'Enter your text',
};
NormalInputFieldTextStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=223%3A15984&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};