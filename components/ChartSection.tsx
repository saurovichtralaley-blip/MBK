import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Текущ. выручка', value: 1.2, fill: '#94a3b8' },
  { name: 'Потенциал (Оптимизация)', value: 2.5, fill: '#0055a5' },
  { name: 'Потенциал (Масштаб)', value: 4.8, fill: '#003366' },
];

const ChartSection: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Потенциал роста выручки (млн руб/мес)</h3>
      <p className="text-sm text-gray-500 mb-6">
        При реализации точек роста и использовании текущей базы инвесторов.
      </p>
      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={true} />
            <XAxis type="number" unit="M" />
            <YAxis dataKey="name" type="category" width={120} tick={{fontSize: 12}} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              cursor={{fill: 'transparent'}}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartSection;