// import themes from '../../../theme';
// import { Meta, Story } from '@storybook/react';
// import RadarChart, { RadarChartProps } from './radarchart';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/RadarChart',
//   component: RadarChart,
//   decorators: [withDesign],
// } as Meta;

// const Template: Story<RadarChartProps> = (args) => <RadarChart {...args} />;

// export const BasicRadarChart = Template.bind({});
// BasicRadarChart.args = {
//   data: {
//     labels: [
//       'Eating',
//       'Drinking',
//       'Sleeping',
//       'Designing',
//       'Coding',
//       'Cycling',
//     ],
//     datasets: [
//       {
//         label: '1st Dataset',
//         data: [2, 9, 3, 5, 2, 3],
//         bgColor: themes.default.palette.systemColor4.sys300Main,
//         borderColor: themes.default.palette.systemColor1.sys300Main,
//         borderWidth: 1,
//       },
//       {
//         label: '2nd Dataset',
//         data: [9, 2, 7, 8, 1, 5],
//         bgColor: themes.default.palette.systemColor5.sys300Main,
//         borderColor: themes.default.palette.systemColor3.sys300Main,
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
//   chartProps: {
//     chartjs_default_color: themes.default.palette.background.bacopWhite,
//     background_color: themes.default.palette.background.bacopWhite,
//     legend_text_color: themes.default.palette.text.tex600,
//   },
//   // legend:'top'
// };
// BasicRadarChart.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };
