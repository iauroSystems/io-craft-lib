// import { Meta, Story } from '@storybook/react';
// import PolarChart from './polar-chart';
// import themes from '../../../theme';
// import { withDesign } from 'storybook-addon-designs';

// export default {
//   title: 'Charts/PolarChart',
//   component: PolarChart,
//   decorators: [withDesign],
// } as Meta;

// const Template: Story<any> = (args) => <PolarChart {...args} />;

// export const BasicPolarChart = Template.bind({});
// BasicPolarChart.args = {
//   fontData: {
//     families: ['poppins', 'Indie Flower', 'Raleway'],
//     url: [
//       'https://fonts.googleapis.com/css?family=Poppins',
//       'https://fonts.googleapis.com/css?family=Indie+Flower',
//       'https://fonts.googleapis.com/css?family=Raleway',
//     ],
//     defaultFont: 'Raleway',
//   },

//   labels: [
//     'name-a',
//     'name-b',
//     'name-c',
//     'name-d',
//     'name-e',
//     'name-f',
//     'name-g',
//     'name-h',
//     'name-i',
//     'name-j',
//     'name-k',
//     'name-l',
//     'name-m',
//     'name-n',
//     'name-o',
//     'name-p',
//     'name-q',
//   ],
//   datasets: [
//     {
//       label: 'Red dataset',
//       data: [
//         17, 33, 41, 13, 44, 22, 37, 22, 12, 11, 28, 10, 26, 50, 42, 50, 36,
//       ],
//       backgroundColor: [
//         themes.default.palette.systemColor1.sys300Main,
//         themes.default.palette.systemColor2.sys300Main,
//         themes.default.palette.systemColor3.sys300Main,
//         themes.default.palette.systemColor4.sys300Main,
//         themes.default.palette.systemColor5.sys300Main,
//         themes.default.palette.systemColor1.sys100,
//         themes.default.palette.systemColor2.sys100,
//         themes.default.palette.systemColor3.sys100,
//         themes.default.palette.systemColor4.sys100,
//         themes.default.palette.systemColor5.sys100,
//         themes.default.palette.systemColor1.sys400,
//         themes.default.palette.systemColor2.sys400,
//         themes.default.palette.systemColor3.sys400,
//         themes.default.palette.systemColor4.sys400,
//         themes.default.palette.systemColor5.sys400,
//         themes.default.palette.systemColor1.sys600,
//         themes.default.palette.systemColor2.sys600,
//       ],
//     },
//     // {
//     //   label: 'Blue dataset',
//     //   data: [
//     //     21, 49, 43, 28, 22, 22, 27, 31, 50, 21, 32, 20, 37, 45, 24, 49, 27,
//     //   ],
//     //   backgroundColor: ['rgba(53, 162, 235, 0.5)'],
//     // },
//   ],
//  chartProps: {
//     background_color: themes.default.palette.background.bacopWhite,
//     legend_text_color: themes.default.palette.text.tex400,
//   },
// };
// BasicPolarChart.parameters = {
//   design: {
//     type: 'figma',
//     url: '',
//   },
// };
