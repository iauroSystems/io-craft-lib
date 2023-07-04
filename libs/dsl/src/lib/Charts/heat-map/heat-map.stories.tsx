// import themes from '../../../theme';
// import { Meta, Story } from '@storybook/react';
// import HeatMap, { IHeatMapProps } from './heat-map1';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/HeatMap',
//   component: HeatMap,
//   decorators: [withDesign],
//   argTypes: {
//     threshold: {
//       color: { control: 'color' },
//     },
//   },
// } as Meta;

// const Template: Story<IHeatMapProps> = (args) => <HeatMap {...args} />;

// export const BasicHeatMap = Template.bind({});
// BasicHeatMap.args = {
//   // rows: 4,
//   // columns: 24,
//   colLabel: '',
//   rowLabel: '',
//   columnAxisLabel: ['11', '22', '33', '44', '55', '66'],
//   rowAxisLabel: [['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']],
//   data: [
//     [40, 42, 68, 15, 23, 84, 90, 18, 85, 38],
//     [75, 44, 39, 30, 87, 50, 73, 90, 3, 43],
//     [12, 45, 10, 34, 67, 18, 36, 7, 89, 38],
//     [61, 88, 81, 74, 0, 87, 89, 1, 70, 35],
//     [61, 88, 81, 74, 0, 87, 89, 1, 70, 35],
//     [61, 88, 81, 74, 0, 87, 89, 1, 70, 35],
//   ],
//   threshold: [
//     {
//       name: 'low',
//       value_min: 90,
//       value_max: 100,
//       color: themes.default.palette?.systemColor1?.main,
//     },
//     {
//       name: 'medium',
//       value_min: 75,
//       value_max: 90,
//       color: themes.default.palette?.systemColor2?.main,
//     },
//     {
//       name: 'high',
//       value_min: 0,
//       value_max: 75,
//       color: themes.default.palette?.systemColor3?.main,
//     },
//   ],
// };
// BasicHeatMap.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };
