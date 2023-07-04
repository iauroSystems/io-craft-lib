// import { Meta, Story } from '@storybook/react';
// import BubbleChart from './bubble-chart';
// import themes from '../../../theme';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/BubbleChart',
//   component: BubbleChart,
//   decorators: [withDesign],
// } as Meta;

// const Template: Story<any> = (args) => <BubbleChart {...args} />;

// export const BasicBubbleChart = Template.bind({});
// BasicBubbleChart.args = {
//   labels: ['a', 'b', 'c'],
//   datasets: [
//     {
//       label: 'Red dataset',
//       data: [
//         {
//           x: 21,
//           y: 35,
//           r: 13,
//         },
//         {
//           x: 37,
//           y: 23,
//           r: 10,
//         },
//         {
//           x: 14,
//           y: 28,
//           r: 11,
//         },
//         {
//           x: 16,
//           y: 23,
//           r: 11,
//         },
//         {
//           x: 14,
//           y: 25,
//           r: 12,
//         },
//         {
//           x: 28,
//           y: 13,
//           r: 11,
//         },
//         {
//           x: 10,
//           y: 29,
//           r: 12,
//         },
//       ],
//       bgColor: themes.default.palette.systemColor4.sys200,
//       borderColor: themes.default.palette.systemColor4.sys300Main,
//     },
//     {
//       label: 'Blue dataset',
//       data: [
//         {
//           x: 32,
//           y: 25,
//           r: 12,
//         },
//         {
//           x: 23,
//           y: 16,
//           r: 12,
//         },
//         {
//           x: 33,
//           y: 24,
//           r: 15,
//         },
//         {
//           x: 44,
//           y: 20,
//           r: 12,
//         },
//         {
//           x: 45,
//           y: 37,
//           r: 10,
//         },
//         {
//           x: 29,
//           y: 27,
//           r: 11,
//         },
//         {
//           x: 40,
//           y: 13,
//           r: 19,
//         },
//         {
//           x: 10,
//           y: 44,
//           r: 13,
//         },
//         {
//           x: 43,
//           y: 25,
//           r: 17,
//         },
//         {
//           x: 15,
//           y: 38,
//           r: 11,
//         },
//       ],
//       bgColor: themes.default.palette.systemColor5.sys200,
//       borderColor: themes.default.palette.systemColor5.sys300Main,
//     },
//   ],
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
//   fontData: {
//     families: ['poppins', 'Indie Flower', 'Raleway'],
//     url: [
//       'https://fonts.googleapis.com/css?family=Poppins',
//       'https://fonts.googleapis.com/css?family=Indie+Flower',
//       'https://fonts.googleapis.com/css?family=Raleway',
//     ],
//     defaultFont: 'Indie Flower',
//   },
//   xLabel: 'x axis',
//   yLabel: 'yaxis',
// };
// BasicBubbleChart.parameters = {
//   design: {
//     type: 'figma',
//     url: '',
//   },
// };
