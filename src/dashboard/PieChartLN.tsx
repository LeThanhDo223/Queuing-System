import React from 'react';
import { RadialBar } from '@ant-design/plots';

interface DataPoint {
  name: string;
  star: number;
}

const PieChartNL: React.FC = () => {
  const data: DataPoint[] = [
    {
      name: '',
      star: 100,
    },
    {
      name: 'G',
      star: 188,
    },
    {
      name: 'B',
      star: 300,
    },
  ];

  const config = {
    data,
    xField: 'name',
    yField: 'star',
    radius: 0.35,
    innerRadius: 0.7,
    colorField: 'name', // Use the 'name' field to determine color
    color: ['#F178B6', '#7E7D88','#35C75A'], // Set colors based on order
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

export default PieChartNL;
