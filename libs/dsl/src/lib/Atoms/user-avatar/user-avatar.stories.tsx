import {Meta, Story} from '@storybook/react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import themes from 'libs/dsl/src/theme';
import {withDesign} from 'storybook-addon-designs';
import UserAvatar, {IUserAvatarProps} from './user-avatar';

export default {
  component: UserAvatar,
  title: 'Atoms/User Avatar',
  argTypes: {},
  decorators: [withDesign],
} as Meta;

const Template: Story<IUserAvatarProps> = (args) => <UserAvatar {...args} />;

export const UserAvatarType = Template.bind({});
UserAvatarType.args = {
  text: 'xyz pqr',
  chartProps: {
    background_color: themes.default?.palette?.primary?.pri100,
    text_color: themes.default?.palette?.primary?.pri500,
  },
  status: 'available',
};
UserAvatarType.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=182%3A17139&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
