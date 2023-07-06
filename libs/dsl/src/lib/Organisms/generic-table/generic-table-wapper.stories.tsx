import { Meta, Story } from '@storybook/react';
import themes from 'libs/dsl/src/theme';
import GenericTableWrapper from './generic-table-wrapper';

export default {
  component: GenericTableWrapper,
  title: 'Organisms/Generic Table wrapper',
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

const Template: Story<any> = (args) => <GenericTableWrapper {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Resource List',
  count: 10,
  canSearch: true,
  canFilter: true,
  canDownload: true,
  pageSizeOptions: [10, 20, 30, 40],
  tableData: {
    rows: [],
    headers: [],
  },
  chartProps: {
    background_color: themes.default?.palette?.background?.bacopWhite,
    text_color: '#000000',
  },

  pageSize: 10,
  isDataloading: false,
  totalCount: 10,
  currentPage: 1,
};
