import { Meta, Story } from '@storybook/react';
import themes from 'libs/dsl/src/theme';
import GenericTable from './generic-table';
import { tableJson } from './response_1688625451488';

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
  tableData: tableJson,
  chartProps: {
    background_color:
      '#000000' || themes.default?.palette?.background?.bacopWhite,
    text_color: '#ffffff',
    icon_color: '#131ca2',
    icon_background: 'f2f4f8',
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
