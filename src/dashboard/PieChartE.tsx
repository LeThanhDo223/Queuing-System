import React from 'react';
import { RadialBar } from '@ant-design/plots';

interface DataPoint {
  name: string;
  star: number;
}

const PieChartE: React.FC = () => {
  const data: DataPoint[] = [
    {
      name: '',
      star: 297,
    },
    {
      name: 'G',
      star: 188,
    },
  ];

  const config = {
    data,
    xField: 'name',
    yField: 'star',
    radius: 0.35,
    innerRadius: 0.7,
    colorField: 'name', // Use the 'name' field to determine color
    color: ['#7E7D88', '#FF7506'], // Set colors based on order
    tooltip: {
      formatter: (datum: any) => {
        return {
          name: 'A',
          value: datum.star,
        };
      },
    },
  };

  return <RadialBar {...config} />;
};

export default PieChartE;
