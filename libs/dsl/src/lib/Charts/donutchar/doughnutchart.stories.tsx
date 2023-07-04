// import themes from '../../../theme';
// import { Meta, Story } from '@storybook/react';
// import DoughnutChart, { DoughnutChartProps } from './doughnutchart';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/DoughnutChart[Deleted]',
//   component: DoughnutChart,
//   decorators: [withDesign],
// } as Meta;

// const Template: Story<DoughnutChartProps> = (args) => (
//   <DoughnutChart {...args} />
// );

// export const BasicDoughnutChart = Template.bind({});
// BasicDoughnutChart.args = {
//   height: 400,
//   width: 600,
//   data: {
//     labels: ['Blue', 'Red', 'Purple', 'Green', 'Yello'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: [
//           themes.default.palette.systemColor3.c100,
//           themes.default.palette.systemColor3.c100,
//           themes.default.palette.systemColor3.c100,
//           themes.default.palette.systemColor3.c100,
//           themes.default.palette.systemColor3.c100,
//         ],

//         borderWidth: 1,
//       },
//     ],
//   },
// };
// BasicDoughnutChart.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };

// export const RightsideLegendDoughnutChart = Template.bind({});
// RightsideLegendDoughnutChart.args = {
//   height: 400,
//   width: 600,
//   data: {
//     labels: ['Blue', 'Red', 'Purple', 'Green', 'Yello'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: [
//           themes.default.palette.systemColor3.c100,
//           themes.default.palette.systemColor3.c100,
//           themes.default.palette.systemColor3.c100,
//           themes.default.palette.systemColor3.c100,
//           themes.default.palette.systemColor3.c100,
//         ],

//         borderWidth: 1,
//       },
//     ],
//   },
//   legend: 'right',
// };
// RightsideLegendDoughnutChart.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };
