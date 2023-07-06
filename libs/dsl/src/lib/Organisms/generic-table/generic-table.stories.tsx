import { Meta, Story } from '@storybook/react';
import GenericTable from './generic-table';

export default {
  component: GenericTable,
  title: 'Organisms/Generic Table',
  argTypes: {
    onChartClick: {
      action: 'barClicked',
      table: {
        disable: true,
      },
    },
  },
} as Meta;

const handleChangeRowsPerPage = (val: any) => {
  console.log(val);
};

const handleChangePage = (propPage: any) => {};

const onClickRow = (id: string, data: any) => {};

const Template: Story<any> = (args) => <GenericTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  tableData: {
    rows: [],
    headers: [],
  },

  handleChangeRowsPerPage: handleChangeRowsPerPage,
  handleChangePage: handleChangePage,
  pageSize: 10,
  isDataloading: false,
  totalCount: 10,
  currentPage: 1,
  pageSizeOptions: [10, 20, 30, 40],
  onClickRow: onClickRow,
};
