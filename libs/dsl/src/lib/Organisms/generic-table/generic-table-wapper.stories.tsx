import { Meta, Story } from '@storybook/react';
import themes from 'libs/dsl/src/theme';
import GenericTableWrapper from './generic-table-wrapper';
import { tableJson } from './response_1688625451488';

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

const handleChangeRowsPerPage = (val: any) => {};

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
  tableData: tableJson,
  chartProps: {
    background_color:
      '#ffffff' || themes.default?.palette?.background?.bacopWhite,
    text_color: 'red',
    icon_color: '#131ca2',
    icon_background: 'f2f4f8',
  },

  pageSize: 10,
  isDataloading: false,
  totalCount: 10,
  currentPage: 1,
};
