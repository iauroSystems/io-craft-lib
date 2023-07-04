// import { Meta, Story } from '@storybook/react';
// import LineChart from './linechart';
// import themes from '../../../theme';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/LineChart',
//   component: LineChart,
//   decorators: [withDesign],
//   argTypes: {
//     onChartClick: {
//       action: 'lineClicked',
//       table: {
//         disable: true,
//       },
//     },
//   },
// } as Meta;

// const Template: Story<any> = (args) => <LineChart {...args} />;

// // export const BasicLineChart = Template.bind({});
// // BasicLineChart.args = {
// //   data: {
// //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black'],
// //     datasets: [
// //       {
// //         label: 'My First Dataset',
// //         data: [65, 59, 80, 81, 56, 55, 40],
// //         borderColor: themes.default.palette.systemColor1.main,
// //         pointRadius: 2,
// //         backgroundColor: 'red',
// //         pointStyle: 'circle',
// //         borderWidth: 1,
// //       },
// //     ],
// //   },
// //   fontData: {
// //     families: ['poppins', 'Indie Flower', 'Raleway'],
// //     url: [
// //       'https://fonts.googleapis.com/css?family=Poppins',
// //       'https://fonts.googleapis.com/css?family=Indie+Flower',
// //       'https://fonts.googleapis.com/css?family=Raleway',
// //     ],
// //     defaultFont: 'Indie Flower',
// //   },
// // };
// // BasicLineChart.parameters = {
// //   design: {
// //     type: 'figma',
// //     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
// //   },
// // };

// // export const MultiAxisLineChart = Template.bind({});
// // MultiAxisLineChart.args = {
// //   data: {
// //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black'],
// //     datasets: [
// //       {
// //         label: 'Dataset 1',
// //         data: [65, 59, 80, 81, 56, 55, 40],
// //         borderColor: themes.default.palette.systemColor2.main,
// //         pointRadius: 2,
// //         pointStyle: 'circle',
// //         borderWidth: 1,
// //       },
// //       {
// //         label: 'Dataset 2',
// //         data: [70, 51, 85, 71, 46, 59, 48],
// //         borderColor: themes.default.palette.systemColor1.main,
// //         pointRadius: 2,
// //         pointStyle: 'circle',
// //         borderWidth: 1,
// //       },
// //     ],
// //   },
// // };
// // MultiAxisLineChart.parameters = {
// //   design: {
// //     type: 'figma',
// //     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
// //   },
// // };

// // export const CurvyAxisLineChart = Template.bind({});
// // CurvyAxisLineChart.args = {
// //   data: {
// //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black'],
// //     datasets: [
// //       {
// //         label: 'Dataset 1',
// //         data: [65, 59, 80, 81, 56, 55, 40],
// //         borderColor: themes.default.palette.systemColor1.main,
// //         pointRadius: 2,
// //         pointStyle: 'circle',
// //         borderWidth: 1,
// //         tension: 0.5,
// //       },
// //       {
// //         label: 'Dataset 2',
// //         data: [70, 51, 85, 71, 46, 59, 48],
// //         borderColor: themes.default.palette.systemColor2.main,
// //         pointRadius: 2,
// //         pointStyle: 'circle',
// //         borderWidth: 1,
// //         tension: 0.5,
// //       },
// //     ],
// //   },
// // };
// // CurvyAxisLineChart.parameters = {
// //   design: {
// //     type: 'figma',
// //     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
// //   },
// // };

// export const FilledLineChart = Template.bind({});
// FilledLineChart.args = {
//   data: {
//     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', 'Black'],
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         borderColor: themes.default.palette.systemColor4.sys300Main,
//         fill: true,
//         // backgroundColor: `linear-gradient(180deg, rgba(${themes.default.palette.systemColor3.sys300Main},0.28), 5.1%, rgba(${themes.default.palette.systemColor3.sys300Main}, 0) 113.73%);`,
//         bgColor: themes.default.palette.systemColor4.sys100,
//         pointRadius: 2,
//         pointStyle: 'circle',
//         borderWidth: 1,
//         tension: 0.5,
//       },
//       {
//         label: 'Dataset 2',
//         data: [70, 51, 85, 71, 46, 59, 48],
//         borderColor: themes.default.palette.systemColor3.sys300Main,
//         pointRadius: 2,
//         fill: true,
//         bgColor: themes.default.palette.systemColor3.sys100,
//         pointStyle: 'circle',
//         borderWidth: 1,
//         tension: 0.5,
//       },
//     ],
//   },
//   chartProps: {
//     chartjs_default_color: themes.default.palette.background.bacopWhite,
//     chartjs_grid_color: themes.default.palette.neutral.neu100,
//     bar_thickness: 25,
//     axis_border_Color: themes.default.palette.neutral.neu100,
//     display_grid: { x: true, y: false },
//     axis_ticks_color: themes.default.palette.text.tex400,
//     background_color: themes.default.palette.background.bacopWhite,
//     legend_text_color: themes.default.palette.text.tex600,
//   },
// };
// FilledLineChart.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };
