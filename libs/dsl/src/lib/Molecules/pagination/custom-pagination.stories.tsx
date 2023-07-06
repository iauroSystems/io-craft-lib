import {Meta, Story} from '@storybook/react';
import Pagination, {PaginationProps} from './custom-pagination';
import {SelectChangeEvent} from '@mui/material';
import {withDesign} from 'storybook-addon-designs';

export default {
  component: Pagination,
  title: 'Molecules/Pagination',
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'standard'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    variant: {
      control: {
        type: 'select',
        options: ['outlined', 'text'],
      },
    },
    onChangeFunc: {
      action: 'records updated',
      table: {
        disable: true,
      },
    },
    onChangePage: {
      action: 'page changed',
      table: {
        disable: true,
      },
    },
  },
  decorators: [withDesign],
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const RoundedPagination = Template.bind({});
RoundedPagination.args = {
  totalRows: 100,
  shape: 'rounded',
  listPerPage: [5, 10, 20, 25],
  disabled: false,
  onChange: (event: SelectChangeEvent, rowPerPage: string): void => {
    console.log('rows per page has changed to ', rowPerPage);
  },
};
RoundedPagination.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=294%3A60551&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};

export const CircularPagination = Template.bind({});
CircularPagination.args = {
  shape: 'circular',
  disabled: false,
  onChange: (event: SelectChangeEvent, rowPerPage: string): void => {
    console.log('rows per page has changed to ', rowPerPage);
  },
};
CircularPagination.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=294%3A60551&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
  },
};
