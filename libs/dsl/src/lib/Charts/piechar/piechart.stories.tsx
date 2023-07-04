// import themes from '../../../theme';
// import { Meta, Story } from '@storybook/react';
// import PieChart, { PieChartProps } from './piechart';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/PieChart',
//   component: PieChart,
//   decorators: [withDesign],
// } as Meta;

// const Template: Story<PieChartProps> = (args) => <PieChart {...args} />;

// export const EmptyPieChart = Template.bind({});
// EmptyPieChart.args = {
//   height: 400,
//   width: 600,
//   fontData: {
//     families: ['poppins', 'Indie Flower', 'Raleway'],
//     url: [
//       'https://fonts.googleapis.com/css?family=Poppins',
//       'https://fonts.googleapis.com/css?family=Indie+Flower',
//       'https://fonts.googleapis.com/css?family=Raleway',
//     ],
//     defaultFont: 'Indie Flower',
//   },
//   data: {
//     labels: ['Blue', 'Red', 'Purple', 'Green', 'Yello'],
//     datasets: [
//       // {
//       //   label: '# of Votes',
//       //   data: [12, 19, 3, 5, 2],
//       //   backgroundColor: [
//       //     themes.default.palette.systemColor1.sys300Main,
//       //     themes.default.palette.systemColor2.sys300Main,
//       //     themes.default.palette.systemColor3.sys300Main,
//       //     themes.default.palette.systemColor4.sys300Main,
//       //     themes.default.palette.systemColor5.sys300Main,
//       //   ],
//       //   borderWidth: 1,
//       // },
//       // {
//       //   label: '# of Votes',
//       //   data: [12, 19, 12, 5, 2],
//       //   backgroundColor: [
//       //     themes.default.palette.systemColor1.sys200,
//       //     themes.default.palette.systemColor2.sys200,
//       //     themes.default.palette.systemColor3.sys200,
//       //     themes.default.palette.systemColor4.sys200,
//       //     themes.default.palette.systemColor5.sys200,
//       //   ],
//       //   borderWidth: 1,
//       // },
//     ],
//   },
//   chartProps: {
//     chartjs_default_color: themes.default.palette.background.bacopWhite,
//     chartjs_grid_color: themes.default.palette.neutral.neu100,
//     background_color: themes.default.palette.background.bacopWhite,
//     legend_text_color: themes.default.palette.text.tex600,
//   },
// };
// EmptyPieChart.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };

// export const BasicPieChart = Template.bind({});
// BasicPieChart.args = {
//   height: 400,
//   width: 600,
//   fontData: {
//     families: ['poppins', 'Indie Flower', 'Raleway'],
//     url: [
//       'https://fonts.googleapis.com/css?family=Poppins',
//       'https://fonts.googleapis.com/css?family=Indie+Flower',
//       'https://fonts.googleapis.com/css?family=Raleway',
//     ],
//     defaultFont: 'Indie Flower',
//   },
//   data: {
//     labels: ['Blue', 'Red', 'Purple', 'Green', 'Yello'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: [
//           themes.default.palette.systemColor1.sys300Main,
//           themes.default.palette.systemColor2.sys300Main,
//           themes.default.palette.systemColor3.sys300Main,
//           themes.default.palette.systemColor4.sys300Main,
//           themes.default.palette.systemColor5.sys300Main,
//         ],

//         borderWidth: 1,
//       },
//       {
//         label: '# of Votes',
//         data: [12, 19, 12, 5, 2],
//         backgroundColor: [
//           themes.default.palette.systemColor1.sys200,
//           themes.default.palette.systemColor2.sys200,
//           themes.default.palette.systemColor3.sys200,
//           themes.default.palette.systemColor4.sys200,
//           themes.default.palette.systemColor5.sys200,
//         ],

//         borderWidth: 1,
//       },
//     ],
//   },
//   chartProps: {
//     chartjs_default_color: themes.default.palette.background.bacopWhite,
//     chartjs_grid_color: themes.default.palette.neutral.neu100,
//     background_color: themes.default.palette.background.bacopWhite,
//     legend_text_color: themes.default.palette.text.tex600,
//   },
// };
// BasicPieChart.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };

// export const RightSideLegendPieChart = Template.bind({});
// RightSideLegendPieChart.args = {
//   height: 400,
//   width: 600,
//   legend: 'right',
//   chartProps: {
//     chartjs_default_color: themes.default.palette.background.bacopWhite,
//     chartjs_grid_color: themes.default.palette.neutral.neu100,
//     background_color: themes.default.palette.background.bacopWhite,
//     legend_text_color: themes.default.palette.text.tex600,
//   },

//   data: {
//     labels: ['Blue', 'Red', 'Purple', 'Green', 'Yello'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: [
//           themes.default.palette.systemColor1.sys200,
//           themes.default.palette.systemColor2.sys200,
//           themes.default.palette.systemColor3.sys200,
//           themes.default.palette.systemColor4.sys200,
//           themes.default.palette.systemColor5.sys200,
//         ],

//         borderWidth: 1,
//       },
//     ],
//   },
// };
// RightSideLegendPieChart.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };
