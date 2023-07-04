// import React from 'react';
// import Heatmap, { HeatmapProps } from './heatmapchart';
// import { Meta, Story } from '@storybook/react';
// import themes from '../../../theme';

// function generateData(count: Number, yrange: any) {
//   let i = 0;
//   let series = [];
//   while (i < count) {
//     const x = (i + 1).toString();
//     const y =
//       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

//     series.push({
//       x: x,
//       y: y,
//     });
//     i++;
//   }
//   return series;
// }

// const data3 = [
//   {
//     name: 'W1',
//     data: generateData(8, {
//       min: 0,
//       max: 90,
//     }),
//   },
//   {
//     name: 'W2',
//     data: generateData(8, {
//       min: 0,
//       max: 90,
//     }),
//   },
//   {
//     name: 'W3',
//     data: generateData(8, {
//       min: 0,
//       max: 90,
//     }),
//   },
//   {
//     name: 'W4',
//     data: generateData(8, {
//       min: 0,
//       max: 90,
//     }),
//   },
//   {
//     name: 'W5',
//     data: generateData(8, {
//       min: 0,
//       max: 90,
//     }),
//   },
//   {
//     name: 'W6',
//     data: generateData(8, {
//       min: 0,
//       max: 90,
//     }),
//   },
// ];

// const xLabels = [
//   '10:00',
//   '10:30',
//   '11:00',
//   '11:30',
//   '12:00',
//   '12:30',
//   '01:00',
//   '01:30',
//   '10:00',
//   '10:30',
//   '11:00',
//   '11:30',
//   '12:00',
//   '12:30',
//   '01:00',
//   '01:30',
//   '10:00',
//   '10:30',
//   '11:00',
//   '11:30',
//   '12:00',
//   '12:30',
//   '01:00',
//   '01:30',
// ];

// export default {
//   title: 'Charts/Heatmap',
//   component: Heatmap,
// } as Meta;

// const Template: Story<HeatmapProps> = (args) => <Heatmap {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   data: data3,
//   xLabels,
//   showToolbar: false,

//   rangeColors: [
//     {
//       from: -30,
//       to: 33,
//       color: themes.default.palette.systemColor1.c50,
//       name: 'Low',
//     },
//     {
//       from: 33,
//       to: 66,
//       color: themes.default.palette.systemColor1.light,
//       name: 'Medium',
//     },
//     {
//       from: 66,
//       to: 100,
//       color: themes.default.palette.systemColor1.dark,
//       name: 'High',
//     },
//   ],
// };
