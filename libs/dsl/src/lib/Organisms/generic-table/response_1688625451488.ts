export const tableJson = {
  index_name: '8b75d7c2-814b-4eb2-9698-c96d69e5f128',
  title:
    'Monthly Production of Petroleum Products by Refineries & Fractionators',
  desc: 'Monthly Production of Petroleum Products by Refineries & Fractionators',
  created: 1687433640492,
  updated: 1687434456,
  created_date: '2023-06-22T17:04:43Z',
  updated_date: '2023-06-22T17:17:36Z',
  active: '1',
  visualizable: '1',
  catalog_uuid: 'a042c5b0-c4f2-40ff-8ac0-a003698c33df',
  source: 'data.gov.in',
  org_type: 'Central',
  org: [
    'Ministry of Petroleum and Natural Gas',
    'Petroleum Planning & Analysis Cell (PPAC)',
  ],
  sector: ['Non Renewable'],
  field: [
    {
      name: 'Month',
      id: 'month',
      type: 'keyword',
    },
    {
      name: 'Year',
      id: 'year',
      type: 'double',
    },
    {
      name: 'Products',
      id: 'products',
      type: 'keyword',
    },
    {
      name: 'Quantity (000 Metric Tonnes)',
      id: 'quantity_000_metric_tonnes_',
      type: 'double',
    },
    {
      name: 'last_updated',
      format: 'yyyy-MM-dd HH:mm:ss||yyyy-MM-dd||dd/MM/yyyy',
      id: 'last_updated',
      type: 'date',
    },
  ],
  target_bucket: {
    index: 'api',
    type: 'a042c5b0-c4f2-40ff-8ac0-a003698c33df',
    field: '8b75d7c2-814b-4eb2-9698-c96d69e5f128',
  },
  message: 'Resource lists',
  version: '2.2.0',
  status: 'ok',
  total: 165,
  count: 10,
  limit: '10',
  offset: '0',
  records: [
    {
      month: 'November',
      year: '2022',
      products: 'LPG',
      quantity_000_metric_tonnes_: '979.95',
      last_updated: '2023-07-05',
    },
    {
      month: 'November',
      year: '2022',
      products: 'SKO',
      quantity_000_metric_tonnes_: '66.99',
      last_updated: '2023-07-05',
    },
    {
      month: 'November',
      year: '2022',
      products: 'LDO',
      quantity_000_metric_tonnes_: '57.09',
      last_updated: '2023-07-05',
    },
    {
      month: 'November',
      year: '2022',
      products: 'LUBES',
      quantity_000_metric_tonnes_: '116.29',
      last_updated: '2023-07-05',
    },
    {
      month: 'December',
      year: '2022',
      products: 'MS-VI',
      quantity_000_metric_tonnes_: '2386.63',
      last_updated: '2023-07-05',
    },
    {
      month: 'December',
      year: '2022',
      products: 'MS Others',
      quantity_000_metric_tonnes_: '1302.67',
      last_updated: '2023-07-05',
    },
    {
      month: 'December',
      year: '2022',
      products: 'LSHS',
      quantity_000_metric_tonnes_: '62.23',
      last_updated: '2023-07-05',
    },
    {
      month: 'December',
      year: '2022',
      products: 'BITUMEN',
      quantity_000_metric_tonnes_: '448.90',
      last_updated: '2023-07-05',
    },
    {
      month: 'December',
      year: '2022',
      products: 'RPC/Petcoke',
      quantity_000_metric_tonnes_: '1361.12',
      last_updated: '2023-07-05',
    },
    {
      month: 'January',
      year: '2023',
      products: 'LPG',
      quantity_000_metric_tonnes_: '1119.04',
      last_updated: '2023-07-05',
    },
  ],
};
