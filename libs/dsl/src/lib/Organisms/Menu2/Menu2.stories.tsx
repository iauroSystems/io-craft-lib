import {Meta, Story} from '@storybook/react';
import Menu2, {IMenu2Props} from './Menu2';
import {withDesign} from 'storybook-addon-designs';

export default {
  component: Menu2,
  title: 'Organisms/Side Navigation',
  argTypes: {
    anchor: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<IMenu2Props> = (args) => <Menu2 {...args} />;

export const CompressedSideNav = Template.bind({});
CompressedSideNav.args = {
  anchor: 'left',
  data: [
    {
      id: '1',
      label: 'Home',
      icon: {
        name: 'home_black_24dp',
        size: 35,
        label: 'home',
        style: 'regular',
      },
      link: '/mydashboard',
    },
    {
      id: '2',
      label: 'Dashboard',
      icon: {
        name: 'dashboard_black_24dp',
        size: 35,
        label: 'Dashboard',
        style: 'regular',
      },
      link: '/soul-central',
      children: [
        {
          id: '2.0',
          label: 'Taxonomy',
          icon: {
            name: 'Taxonomy',
            size: 35,
            label: 'Taxonomy',
            style: 'regular',
          },

          link: '/taxonomy',
        },
        {
          id: '2.1',
          label: 'Dashboard',
          link: '/dasboard',
          icon: {
            name: '',
            size: 35,
            label: '',
            style: 'regular',
          },
        },
        {
          id: '2.2',
          label: 'Maintainance',
          link: '/maintainence',
          icon: {
            name: '',
            size: 35,
            label: '',
            style: 'regular',
          },
        },
        {
          id: '2.3',
          label: 'Terminology',
          icon: {
            name: 'Terminology',
            size: 35,
            label: 'Terminology',
            style: 'regular',
          },

          link: '/terminology',
        },
        {
          id: '2.4',
          label: 'Mapping',
          icon: {
            name: 'Mapping',
            size: 35,
            label: 'Mapping',
            style: 'regular',
          },

          link: '/mapping',
        },
        {
          id: '2.5',
          label: 'Profiles',
          icon: {
            name: 'Profiles',
            size: 35,
            label: 'Profiles',
            style: 'regular',
          },

          link: '/profiles',
        },
        {
          id: '2.6',
          label: "EBG's",
          icon: {
            name: 'EBGs',
            size: 35,
            label: 'EBGs',
            style: 'regular',
          },

          link: '/ebgs',
        },
        {
          id: '2.7',
          label: 'Regulations',
          icon: {
            name: 'Regulations',
            size: 35,
            label: 'refresh_black_24dp',
            style: 'regular',
          },

          link: '/customers',
        },
      ],
    },
    {
      id: '3',
      label: 'Projects',
      icon: {
        name: 'perm_media_black_24dp',
        size: 35,
        label: 'Projects',
        style: 'regular',
      },

      link: '/safety-decision-support',
    },
    {
      id: '4',
      label: 'Tasks',
      link: '/Surveillance',
      icon: {
        name: 'task_alt_black_24dp',
        size: 35,
        label: 'Tasks',
        style: 'regular',
      },
      path: '',
    },
    {
      id: '5',
      label: 'Reporting',
      icon: {
        name: 'donut_small_black_24dp',
        size: 35,
        label: 'Reporting',
        style: 'regular',
      },
      path: '',
    },
    {
      id: '6',
      label: 'Mind Gap',
      link: '/reports',
      icon: {
        name: 'Mind-the-gap',
        size: 35,
        label: 'Mind-the-gap',
        style: 'regular',
      },
    },
    {
      id: '7',
      label: 'Safety Insights',
      link: '/reports',
      icon: {
        name: 'Safety-Insight',
        size: 35,
        label: 'Safety-Insight',
        style: 'regular',
      },
    },
    {
      id: '8',
      label: 'System Wide',
      link: '/reports',
      icon: {
        name: 'System-Wide',
        size: 35,
        label: 'System Wide',
        style: 'regular',
      },
    },
  ],
  openDrawer: true,
  sidebarCompressed: true,
};
CompressedSideNav.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=317%3A30466&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const FullSizeSideNav = Template.bind({});
FullSizeSideNav.args = {
  anchor: 'left',
  data: [
    {
      id: '1',
      label: 'Home',
      icon: {
        name: 'home_black_24dp',
        size: 35,
        label: 'home',
        style: 'regular',
      },
      link: '/mydashboard',
    },
    {
      id: '2',
      label: 'Dashboard',
      icon: {
        name: 'dashboard_black_24dp',
        size: 35,
        label: 'Dashboard',
        style: 'regular',
      },
      link: '/soul-central',
      children: [
        {
          id: '2.0',
          label: 'Taxonomy',
          icon: {
            name: 'Taxonomy',
            size: 35,
            label: 'Taxonomy',
            style: 'regular',
          },

          link: '/taxonomy',
        },
        {
          id: '2.1',
          label: 'Dashboard',
          link: '/dasboard',
          icon: {
            name: '',
            size: 35,
            label: '',
            style: 'regular',
          },
        },
        {
          id: '2.2',
          label: 'Maintainance',
          link: '/maintainence',
          icon: {
            name: '',
            size: 35,
            label: '',
            style: 'regular',
          },
        },
        {
          id: '2.3',
          label: 'Terminology',
          icon: {
            name: 'Terminology',
            size: 35,
            label: 'Terminology',
            style: 'regular',
          },

          link: '/terminology',
        },
        {
          id: '2.4',
          label: 'Mapping',
          icon: {
            name: 'Mapping',
            size: 35,
            label: 'Mapping',
            style: 'regular',
          },

          link: '/mapping',
        },
        {
          id: '2.5',
          label: 'Profiles',
          icon: {
            name: 'Profiles',
            size: 35,
            label: 'Profiles',
            style: 'regular',
          },

          link: '/profiles',
        },
        {
          id: '2.6',
          label: "EBG's",
          icon: {
            name: 'EBGs',
            size: 35,
            label: 'EBGs',
            style: 'regular',
          },

          link: '/ebgs',
        },
        {
          id: '2.7',
          label: 'Regulations',
          icon: {
            name: 'Regulations',
            size: 35,
            label: 'refresh_black_24dp',
            style: 'regular',
          },

          link: '/customers',
        },
      ],
    },
    {
      id: '3',
      label: 'Projects',
      icon: {
        name: 'perm_media_black_24dp',
        size: 35,
        label: 'Projects',
        style: 'regular',
      },

      link: '/safety-decision-support',
    },
    {
      id: '4',
      label: 'Tasks',
      link: '/Surveillance',
      icon: {
        name: 'task_alt_black_24dp',
        size: 35,
        label: 'Tasks',
        style: 'regular',
      },
      path: '',
    },
    {
      id: '5',
      label: 'Reporting',
      icon: {
        name: 'donut_small_black_24dp',
        size: 35,
        label: 'Reporting',
        style: 'regular',
      },
      path: '',
    },
    {
      id: '6',
      label: 'Mind Gap',
      link: '/reports',
      icon: {
        name: 'dns_black_24dp',
        size: 35,
        label: 'Mind-the-gap',
        style: 'regular',
      },
    },
    {
      id: '7',
      label: 'Safety Insights',
      link: '/reports',
      icon: {
        name: 'event_black_24dp',
        size: 35,
        label: 'Safety-Insight',
        style: 'regular',
      },
    },
    {
      id: '8',
      label: 'System Wide',
      link: '/reports',
      icon: {
        name: 'fact_check_black_24dp',
        size: 35,
        label: 'System Wide',
        style: 'regular',
      },
    },
  ],
  openDrawer: true,
  sidebarCompressed: false,
};
FullSizeSideNav.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=317%3A30466&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const RightAnchorCompressedSizeSideNav = Template.bind({});
RightAnchorCompressedSizeSideNav.args = {
  anchor: 'right',
  data: [
    {
      id: '1',
      label: 'Home',
      icon: {
        name: 'home_black_24dp',
        size: 35,
        label: 'home',
        style: 'regular',
      },
      link: '/mydashboard',
    },
    {
      id: '2',
      label: 'Dashboard',
      icon: {
        name: 'dashboard_black_24dp',
        size: 35,
        label: 'Dashboard',
        style: 'regular',
      },
      link: '/soul-central',
      children: [
        {
          id: '2.0',
          label: 'Taxonomy',
          icon: {
            name: 'Taxonomy',
            size: 35,
            label: 'Taxonomy',
            style: 'regular',
          },

          link: '/taxonomy',
        },
        {
          id: '2.1',
          label: 'Dashboard',
          link: '/dasboard',
          icon: {
            name: '',
            size: 35,
            label: '',
            style: 'regular',
          },
        },
        {
          id: '2.2',
          label: 'Maintainance',
          link: '/maintainence',
          icon: {
            name: '',
            size: 35,
            label: '',
            style: 'regular',
          },
        },
        {
          id: '2.3',
          label: 'Terminology',
          icon: {
            name: 'Terminology',
            size: 35,
            label: 'Terminology',
            style: 'regular',
          },

          link: '/terminology',
        },
        {
          id: '2.4',
          label: 'Mapping',
          icon: {
            name: 'Mapping',
            size: 35,
            label: 'Mapping',
            style: 'regular',
          },

          link: '/mapping',
        },
        {
          id: '2.5',
          label: 'Profiles',
          icon: {
            name: 'Profiles',
            size: 35,
            label: 'Profiles',
            style: 'regular',
          },

          link: '/profiles',
        },
        {
          id: '2.6',
          label: "EBG's",
          icon: {
            name: 'EBGs',
            size: 35,
            label: 'EBGs',
            style: 'regular',
          },

          link: '/ebgs',
        },
        {
          id: '2.7',
          label: 'Regulations',
          icon: {
            name: 'Regulations',
            size: 35,
            label: 'refresh_black_24dp',
            style: 'regular',
          },

          link: '/customers',
        },
      ],
    },
    {
      id: '3',
      label: 'Projects',
      icon: {
        name: 'perm_media_black_24dp',
        size: 35,
        label: 'Projects',
        style: 'regular',
      },

      link: '/safety-decision-support',
    },
    {
      id: '4',
      label: 'Tasks',
      link: '/Surveillance',
      icon: {
        name: 'task_alt_black_24dp',
        size: 35,
        label: 'Tasks',
        style: 'regular',
      },
      path: '',
    },
    {
      id: '5',
      label: 'Reporting',
      icon: {
        name: 'donut_small_black_24dp',
        size: 35,
        label: 'Reporting',
        style: 'regular',
      },
      path: '',
    },
    {
      id: '6',
      label: 'Mind Gap',
      link: '/reports',
      icon: {
        name: 'Mind-the-gap',
        size: 35,
        label: 'Mind-the-gap',
        style: 'regular',
      },
    },
    {
      id: '7',
      label: 'Safety Insights',
      link: '/reports',
      icon: {
        name: 'Safety-Insight',
        size: 35,
        label: 'Safety-Insight',
        style: 'regular',
      },
    },
    {
      id: '8',
      label: 'System Wide',
      link: '/reports',
      icon: {
        name: 'System-Wide',
        size: 35,
        label: 'System Wide',
        style: 'regular',
      },
    },
  ],
  openDrawer: true,
  sidebarCompressed: true,
};
RightAnchorCompressedSizeSideNav.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=317%3A30466&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const RightAnchorFullSizeSideNav = Template.bind({});
RightAnchorFullSizeSideNav.args = {
  anchor: 'right',
  data: [
    {
      id: '1',
      label: 'Home',
      icon: {
        name: 'home_black_24dp',
        size: 35,
        label: 'home',
        style: 'regular',
      },
      link: '/mydashboard',
    },
    {
      id: '2',
      label: 'Dashboard',
      icon: {
        name: 'dashboard_black_24dp',
        size: 35,
        label: 'Dashboard',
        style: 'regular',
      },
      link: '/soul-central',
      children: [
        {
          id: '2.0',
          label: 'Taxonomy',
          icon: {
            name: 'Taxonomy',
            size: 35,
            label: 'Taxonomy',
            style: 'regular',
          },

          link: '/taxonomy',
        },
        {
          id: '2.1',
          label: 'Dashboard',
          link: '/dasboard',
          icon: {
            name: '',
            size: 35,
            label: '',
            style: 'regular',
          },
        },
        {
          id: '2.2',
          label: 'Maintainance',
          link: '/maintainence',
          icon: {
            name: '',
            size: 35,
            label: '',
            style: 'regular',
          },
        },
        {
          id: '2.3',
          label: 'Terminology',
          icon: {
            name: 'Terminology',
            size: 35,
            label: 'Terminology',
            style: 'regular',
          },

          link: '/terminology',
        },
        {
          id: '2.4',
          label: 'Mapping',
          icon: {
            name: 'Mapping',
            size: 35,
            label: 'Mapping',
            style: 'regular',
          },

          link: '/mapping',
        },
        {
          id: '2.5',
          label: 'Profiles',
          icon: {
            name: 'Profiles',
            size: 35,
            label: 'Profiles',
            style: 'regular',
          },

          link: '/profiles',
        },
        {
          id: '2.6',
          label: "EBG's",
          icon: {
            name: 'EBGs',
            size: 35,
            label: 'EBGs',
            style: 'regular',
          },

          link: '/ebgs',
        },
        {
          id: '2.7',
          label: 'Regulations',
          icon: {
            name: 'Regulations',
            size: 35,
            label: 'refresh_black_24dp',
            style: 'regular',
          },

          link: '/customers',
        },
      ],
    },
    {
      id: '3',
      label: 'Projects',
      icon: {
        name: 'perm_media_black_24dp',
        size: 35,
        label: 'Projects',
        style: 'regular',
      },

      link: '/safety-decision-support',
    },
    {
      id: '4',
      label: 'Tasks',
      link: '/Surveillance',
      icon: {
        name: 'task_alt_black_24dp',
        size: 35,
        label: 'Tasks',
        style: 'regular',
      },
      path: '',
    },
    {
      id: '5',
      label: 'Reporting',
      icon: {
        name: 'donut_small_black_24dp',
        size: 35,
        label: 'Reporting',
        style: 'regular',
      },
      path: '',
    },
    {
      id: '6',
      label: 'Mind Gap',
      link: '/reports',
      icon: {
        name: 'dns_black_24dp',
        size: 35,
        label: 'Mind-the-gap',
        style: 'regular',
      },
    },
    {
      id: '7',
      label: 'Safety Insights',
      link: '/reports',
      icon: {
        name: 'event_black_24dp',
        size: 35,
        label: 'Safety-Insight',
        style: 'regular',
      },
    },
    {
      id: '8',
      label: 'System Wide',
      link: '/reports',
      icon: {
        name: 'fact_check_black_24dp',
        size: 35,
        label: 'System Wide',
        style: 'regular',
      },
    },
  ],
  openDrawer: true,
  sidebarCompressed: false,
};
RightAnchorFullSizeSideNav.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=317%3A30466&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};


