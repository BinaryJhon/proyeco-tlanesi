// app/statistics/score/Linechart.tsx 
'use client';

import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

interface Serie {

  label: string;
  key: string;
  color: string;
  backgroundColor: string;

}

interface Props {
  titulo: string;
  datos: any[];
  series: serie[];
}

const LineChart: React.FC<Props> = ({ titulo, datos, series }) => {

  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    const ctx = chartRef.current?.getContext('2d');
    if (!ctx) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
      
    }
    chartInstanceRef.current = new Chart (ctx, {
        type: 'line',
        data: {
          labels: datos.map((d) => d.hora),
          datasets: series.map((serie) => ({
            label: serie.label,
            data: datos.map((d) => d[serie.key]),
            borderColor: serie.color,
            backgroundColor: serie.backgroundColor,
            tension: 0.4,

          })),
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
          },
        },
      });
    }, [datos, series]);
  return (
    <div className="bg-white p-4 shadow-md rounded-lg">
      <h2 className="text-green-600 text-2xl font-semibold mb-4">{titulo}</h2>
       <canvas ref={chartRef} />
    </div>
  );
};
export default LineChart;
