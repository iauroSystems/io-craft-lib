import React, {useEffect, useState} from 'react';
import {ArcElement, CategoryScale, Chart as ChartJS, Legend, Title, Tooltip,} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import themes from 'libs/dsl/src/theme';

ChartJS.register(CategoryScale, ArcElement, Title, Tooltip, Legend);

export interface DoughnutChartProps {
  data: any;
  legend?: 'top' | 'bottom' | 'left' | 'right' | 'chartArea';
}

export function DoughnutChart({data, legend = 'bottom'}: DoughnutChartProps) {
  const theme = themes.default;
  const [chartData, setChartData] = useState<any>({
    datasets: [],
    labels: [],
  });

  function addAlpha(color: string, opacity: number) {
    // coerce values so ti is between 0 and 1.
    const _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
    return color + _opacity.toString(16).toUpperCase();
  }

  const getRandomColor = (color: string) => {
    const seed = parseInt(color.slice(1, -1), 16);
    return '#' + Math.floor(Math.random() * seed).toString(16);
  };

  // data &&
  //   Array.isArray(data.datasets) &&
  //   data.datasets.forEach((element: any) => {
  //     element.backgroundColor =
  //       theme.palette?.chart.slice(data.datasets?.length) ??
  //       theme.palette.custom.form1;
  //   });
  useEffect(() => {
    if (
      data &&
      data.datasets &&
      data.datasets.length > 0 &&
      data.labels.length > 0
    ) {
      const _data = JSON.parse(JSON.stringify(data));
      _data.datasets.map((element: any, index: number) => {
        // element.backgroundColor =
        //   theme.palette?.['chart']?.slice(data.datasets?.length) ??
        //   theme.palette['custom'].form1;
        return element;
      });
      setChartData(_data);
    }
  }, [data]);

  return (
    <div
      style={{
        height: '95%',
        width: '95%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette?.light?.c50,
      }}
    >
      <Doughnut
        data={chartData}
        options={{
          maintainAspectRatio: true,
          aspectRatio: 1,

          plugins: {
            legend: {
              display: true,
              position: legend,
              labels: {
                usePointStyle: true,
                pointStyle: 'rectRounded',
                // color: theme.palette?.text?.primary,
              },
            },
            title: {
              display: true,
              // text: 'Doughnut Chart',
            },
          },
        }}
      />
    </div>
  );
}

export default DoughnutChart;
