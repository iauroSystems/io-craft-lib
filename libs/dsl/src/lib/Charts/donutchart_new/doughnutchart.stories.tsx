// import themes from '../../../theme';
// import { Meta, Story } from '@storybook/react';
// import DoughnutChart, { DoughnutChartProps } from './doughnutchart';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/DoughnutChart',
//   component: DoughnutChart,
//   decorators: [withDesign],
// } as Meta;

// const Template: Story<DoughnutChartProps> = (args) => (
//   <DoughnutChart {...args} />
// );

// export const BasicDoughnutChart = Template.bind({});
// BasicDoughnutChart.args = {
//   data: {
//     labels: ['Blue', 'Red', 'Purple', 'Green', 'Yello'],
//     datasets: [
//       {
//         label: '# of Votes',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: [
//           themes.default?.palette?.systemColor1?.sys300Main,
//           themes.default?.palette?.systemColor2?.sys300Main,
//           themes.default?.palette?.systemColor3?.sys300Main,
//           themes.default?.palette?.systemColor4?.sys300Main,
//           themes.default?.palette?.systemColor5?.sys300Main,
//         ],

//         borderWidth: 1,
//       },
//     ],
//   },

//   fontData: {
//     families: ['poppins', 'Indie Flower', 'Raleway'],
//     url: [
//       'https://fonts.googleapis.com/css?family=Poppins',
//       'https://fonts.googleapis.com/css?family=Indie+Flower',
//       'https://fonts.googleapis.com/css?family=Raleway',
//     ],
//     defaultFont: 'poppins',
//   },
//   legend: 'bottom',
//   chartProps: {
//     doughnut_cutout: '80%',
//     doughnut_radius: '70%',
//     background_color: themes.default.palette.background.bacopWhite,
//     legend_text_color: themes.default.palette.text.tex400,
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
//     ],
//   },
//   legend: 'right',
//   chartProps: {
//     doughnut_cutout: '80%',
//     doughnut_radius: '70%',
//     background_color: themes.default.palette.background.bacopWhite,
//     legend_text_color: themes.default.palette.text.tex400,
//   },
// };
// RightsideLegendDoughnutChart.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };
