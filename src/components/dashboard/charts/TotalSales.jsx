import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#b9eac3" },
  { name: "Sponsored", value: 154.02, color: "#bbc9ff" },
  { name: "E-mail", value: 48.96, color: "#a8d9ff" },
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return percent > 0.1 ? (
    <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={12}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  ) : null;
};

export default function TotalSalesDonutChart() {
  return (
    <ResponsiveContainer width="100%" height={96}>
      <PieChart>
        <Pie
          data={data}
          innerRadius="50%"
          outerRadius="80%"
          paddingAngle={6}
          dataKey="value"
          stroke="none"
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip 
          formatter={(value) => `$${value.toFixed(2)}`} 
          contentStyle={{ fontSize: 12, borderRadius: 8, padding: 6 }}
          cursor={{ fill: "rgba(0,0,0,0.1)" }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
