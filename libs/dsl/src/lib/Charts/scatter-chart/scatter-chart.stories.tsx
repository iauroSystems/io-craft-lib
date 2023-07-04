// import { Meta, Story } from '@storybook/react';
// import ScatterChart from './scatter-chart';
// import themes from '../../../theme';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/ScatterChart',
//   component: ScatterChart,
//   decorators: [withDesign],
// } as Meta;

// const Template: Story<any> = (args) => <ScatterChart {...args} />;

// export const BasicScatterChart = Template.bind({});
// BasicScatterChart.args = {
//   labels: ['a', 'b', 'c'],
//   datasets: [
//     {
//       label: 'Red dataset',
//       data: [
//         {
//           x: 40,
//           y: 34,
//           r: 17,
//         },
//       ],
//       backgroundColor: themes.default.palette.systemColor1.sys300Main,
//       pointRadius: 5,
//     },
//     {
//       label: 'Blue dataset',
//       data: [
//         {
//           x: 38,
//           y: 23,
//           r: 14,
//         },
//       ],
//       backgroundColor: themes.default.palette.systemColor2.sys300Main,
//       pointRadius: 5,
//     },
//   ],
//   chartProps: {
//     chartjs_default_color: themes.default.palette.background.bacopWhite,
//     chartjs_grid_color: themes.default.palette.neutral.neu100,
//     axis_border_Color: themes.default.palette.neutral.neu100,
//     display_grid: { x: true, y: false },
//     axis_ticks_color: themes.default.palette.text.tex400,
//     background_color: themes.default.palette.background.bacopWhite,
//     legend_text_color: themes.default.palette.text.tex600,
//   },
// };
// BasicScatterChart.parameters = {
//   design: {
//     type: 'figma',
//     url: '',
//   },
// };
