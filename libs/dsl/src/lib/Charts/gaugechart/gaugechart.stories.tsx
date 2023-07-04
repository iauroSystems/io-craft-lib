// import React from 'react';
// import { Meta, Story } from '@storybook/react';
// import GaugeChart, { GaugeChartProps } from './gaugechrt';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/GaugeChart',
//   component: GaugeChart,
//   argTypes: {
//     barThickness: {
//       control: { type: 'range', min: 1, max: 10 },
//     },
//     needleArc: {
//       control: { type: 'range', min: 1, max: 20 },
//     },
//   },
//   decorators: [withDesign],
// } as Meta;

// const Template: Story<GaugeChartProps> = (args) => <GaugeChart {...args} />;

// export const Default = Template.bind({});
// Default.args = {
//   needleValue: 50,
//   needleColor: '#003264',
//   needleLength: 20,
//   //   colors: ['green', 'orange', 'red'],
// };
// Default.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };

// export const ColorGaugeChart = Template.bind({});
// ColorGaugeChart.args = {
//   needleValue: 50,
//   needleColor: '#800080',
//   needleLength: 40,
//   barColor: 'pink',
//   needleArc: 10,
//   colors: ['pink', '#BA55D3', '#663399'],
//   barThickness: 4,
// };
// ColorGaugeChart.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/proto/ByIvCrteT7rhSlgkX1wYxE/IAURO---DSL?node-id=751%3A26112&scaling=min-zoom&page-id=142%3A5528&starting-point-node-id=294%3A41952',
//   },
// };
