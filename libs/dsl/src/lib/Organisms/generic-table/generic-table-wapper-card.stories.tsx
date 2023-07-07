import { Meta, Story } from '@storybook/react';
import themes from 'libs/dsl/src/theme';
import GenericTableWrapperCard from './generic-table-wrapper-card';
import { tableJson } from './response_1688625451488';

export default {
  component: GenericTableWrapperCard,
  title: 'Organisms/Generic Table wrapper Card',
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

const Template: Story<any> = (args) => <GenericTableWrapperCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headerData: {
    title: 'card header',
    cardExtraProps: {
      title_color: themes.default.palette.text.tex600,
      bottom_border_color: themes.default.palette.neutral.neu100,
      background_color: themes.default.palette.background.bacopWhite,
    },

    actions: [
      {
        menu: 'Download',
        icon: {
          name: 'file_upload_black_24dp-1',
          size: 25,
          color: themes.default.palette.neutral.neu400,
          label: 'Download',
        },
        submenu: [],
      },
    ],
  },
  chartProps: {
    background_color:
      '#0F1013' || themes.default?.palette?.background?.bacopWhite,
    text_color: '#101425',
    icon_color: '#131ca2',
  },

  chartData: {
    title: 'Resource List',
    canSearch: true,
    canFilter: true,
    canDownload: true,
    pageSizeOptions: [10, 20, 30, 40],
    chartProps: {
      background_color:
        '#0F1013' || themes.default?.palette?.background?.bacopWhite,
    },

    tableData: tableJson,
    pageSize: 10,
    isDataloading: false,
    totalCount: 10,
    currentPage: 1,
  },
};
