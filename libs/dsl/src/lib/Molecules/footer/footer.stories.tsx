import Footer, {FooterProps} from './footer';
import {Meta, Story} from '@storybook/react';
import IauroLogo from '../../../static/assets/iauroLogo.png';
import {withDesign} from 'storybook-addon-designs';

export default {
  component: Footer,
  title: 'Molecules/Footer',
  decorators: [withDesign],
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;
export const FooterSection = Template.bind({});
FooterSection.args = {
  footerActions: [
    {label: 'About', link: ''},
    {label: 'Terms', link: ''},
    {label: 'Contact Us', link: ''},
    {label: 'Terms', link: ''},
    {label: 'Terms', link: ''},
  ],
  copyRightText: 'iauro System Private Limited',
  versionText: 'Version 2.0',
  icon: IauroLogo,
  actionsVariant: 'caption',
};
FooterSection.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=799%3A26715&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
