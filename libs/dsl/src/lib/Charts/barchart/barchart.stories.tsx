// import { Meta, Story } from '@storybook/react';
// import { Barchart } from './barchart';
// import themes from '../../../theme';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/BarChart',
//   component: Barchart,
//   decorators: [withDesign],
//   argTypes: {
//     onChartClick: {
//       action: 'barClicked',
//       table: {
//         disable: true,
//       },
//     },
//   },
// } as Meta;

// const Template: Story<any> = (args) => <Barchart {...args} />;

// // export const BasicBarChartFont = Template.bind({});
// // BasicBarChartFont.args = {
// //   xLabel: 'price',
// //   yLabel: 'weight',
// //   fontData: {
// //     families: ['poppins', 'Indie Flower', 'Raleway'],
// //     url: [
// //       'https://fonts.googleapis.com/css?family=Poppins',
// //       'https://fonts.googleapis.com/css?family=Indie+Flower',
// //       'https://fonts.googleapis.com/css?family=Raleway',
// //     ],
// //     defaultFont: 'Indie Flower',
// //   },

// //   data: {
// //     labels: [
// //       'value1',
// //       'value2',
// //       'value3',
// //       'value4',
// //       'value5',
// //       'value6',
// //       'value7',
// //       'value8',
// //     ],
// //     datasets: [
// //       {
// //         label: 'My First Dataset',
// //         data: [250, 275, 500, 124, 200, 130, 250, 70],
// //         backgroundColor: 'green',
// //         borderRadius: 5,
// //       },
// //     ],
// //   },
// // };
// // BasicBarChartFont.parameters = {
// //   design: {
// //     type: 'figma',
// //     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
// //   },
// // };

// // export const BasicBarChart = Template.bind({});
// // BasicBarChart.args = {
// //   xLabel: 'price',
// //   yLabel: 'weight',

// //   data: {
// //     labels: [
// //       'value1',
// //       'value2',
// //       'value3',
// //       'value4',
// //       'value5',
// //       'value6',
// //       'value7',
// //       'value8',
// //     ],
// //     datasets: [
// //       {
// //         label: 'My First Dataset',
// //         data: [250, 275, 500, 124, 200, 130, 250, 70],
// //         backgroundColor: 'green',
// //         borderRadius: 5,
// //       },
// //     ],
// //   },
// // };
// // BasicBarChart.parameters = {
// //   design: {
// //     type: 'figma',
// //     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
// //   },
// // };

// // export const MultiBarChart = Template.bind({});
// // MultiBarChart.args = {
// //   data: {
// //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //     datasets: [
// //       {
// //         label: 'Dataset 1',
// //         data: [500, 200, 100, 700, 300, 550, 230],
// //         backgroundColor: themes.default.palette.systemColor3.c100,
// //         borderRadius: 5,
// //       },
// //       {
// //         label: 'Dataset 2',
// //         data: [200, 900, 350, 520, 1000, 330, 440],
// //         backgroundColor: themes.default.palette.systemColor5.dark,
// //         borderRadius: 5,
// //       },
// //     ],
// //   },
// // };
// // MultiBarChart.parameters = {
// //   design: {
// //     type: 'figma',
// //     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
// //   },
// // };

// // export const StackedBarChart = Template.bind({});
// // StackedBarChart.args = {
// //   data: {
// //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //     datasets: [
// //       {
// //         label: 'Dataset 1',
// //         data: [500, 200, 100, 700, 300, 550, 230],
// //         backgroundColor: themes.default.palette.systemColor3.c100,
// //         borderRadius: 5,
// //       },
// //       {
// //         label: 'Dataset 2',
// //         data: [200, 900, 350, 520, 1000, 330, 440],
// //         backgroundColor: themes.default.palette.systemColor1.main,
// //         borderRadius: 5,
// //       },
// //       {
// //         label: 'Dataset 3',
// //         data: [200, 900, 350, 520, 1000, 330, 440],
// //         backgroundColor: themes.default.palette.systemColor6.light,
// //         borderRadius: 5,
// //       },
// //       {
// //         label: 'Dataset 4',
// //         data: [200, 900, 350, 520, 1000, 330, 440],
// //         backgroundColor: themes.default.palette.systemColor2.main,
// //         borderRadius: 5,
// //       },
// //     ],
// //   },
// //   stacked: true,
// // };
// // StackedBarChart.parameters = {
// //   design: {
// //     type: 'figma',
// //     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
// //   },
// // };

// // // horizontal bar charts ...............

// // export const BasicHorizontalBarChart = Template.bind({});
// // BasicHorizontalBarChart.args = {
// //   height: 100,
// //   width: 1600,
// //   horizontal: true,
// //   fontData: {
// //     families: ['poppins', 'Indie Flower', 'Raleway'],
// //     url: [
// //       'https://fonts.googleapis.com/css?family=Poppins',
// //       'https://fonts.googleapis.com/css?family=Indie+Flower',
// //       'https://fonts.googleapis.com/css?family=Raleway',
// //     ],
// //     defaultFont: 'Indie Flower',
// //   },
// //   data: {
// //     horizontal: true,
// //     labels: ['value1', 'value2', 'value3', 'value4', 'value5', 'value6'],
// //     datasets: [
// //       {
// //         label: '# of Votes',
// //         data: [12, 19, 3, 5, 2, 3],
// //         backgroundColor: [themes.default.palette.systemColor1.c100],
// //         borderColor: [themes.default.palette.systemColor1.c100],
// //         borderWidth: 1,
// //         borderRadius: 5,
// //       },
// //     ],
// //   },
// // };
// // BasicHorizontalBarChart.parameters = {
// //   design: {
// //     type: 'figma',
// //     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
// //   },
// // };

// // export const MultiHorizontalBarChart = Template.bind({});
// // MultiHorizontalBarChart.args = {
// //   data: {
// //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
// //     datasets: [
// //       {
// //         label: 'Dataset 1',
// //         data: [500, 200, 100, 700, 300, 550, 230],
// //         backgroundColor: themes.default.palette.systemColor3.c100,
// //         borderRadius: 5,
// //       },
// //       {
// //         label: 'Dataset 2',
// //         data: [200, 900, 350, 520, 1000, 330, 440],
// //         backgroundColor: themes.default.palette.systemColor5.dark,
// //         borderRadius: 5,
// //       },
// //     ],
// //   },
// //   horizontal: true,
// // };
// // MultiHorizontalBarChart.parameters = {
// //   design: {
// //     type: 'figma',
// //     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
// //   },
// // };

// export const StackedHorizontalBarChart = Template.bind({});
// StackedHorizontalBarChart.args = {
//   data: {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//     datasets: [
//       {
//         label: 'Dataset 1',
//         data: [500, 200, 100, 700, 300, 550, 230],
//         backgroundColor: themes.default.palette.systemColor1.sys300Main,
//         borderRadius: 5,
//       },
//       {
//         label: 'Dataset 2',
//         data: [200, 900, 350, 520, 1000, 330, 440],
//         backgroundColor: themes.default.palette.systemColor2.sys300Main,
//         borderRadius: 5,
//       },
//       // {
//       //   label: 'Dataset 3',
//       //   data: [200, 900, 350, 520, 1000, 330, 440],
//       //   backgroundColor: themes.default.palette.systemColor3.sys300Main,
//       //   borderRadius: 5,
//       // },
//       // {
//       //   label: 'Dataset 3',
//       //   data: [200, 900, 350, 520, 1000, 330, 440],
//       //   backgroundColor: themes.default.palette.systemColor4.sys300Main,
//       //   borderRadius: 5,
//       // },
//     ],
//   },
//   stacked: true,
//   horizontal: false,
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
// StackedHorizontalBarChart.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };
