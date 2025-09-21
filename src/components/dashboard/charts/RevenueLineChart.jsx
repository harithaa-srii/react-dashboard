import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", current: 12, previous: 7 },
  { month: "Feb", current: 8, previous: 14 },
  { month: "Mar", current: 6, previous: 10 },
  { month: "Apr", current: 15, previous: 20 },
  { month: "May", current: 20, previous: 18 },
  { month: "Jun", current: 18, previous: 22 },
];

export default function RevenueLineChart() {
  return (
    <ResponsiveContainer width="100%" height={132}>
      <LineChart data={data} margin={{ top: 10, right: 40, bottom: 10, left: 0 }}>
        <CartesianGrid vertical={false} stroke="#F0F2F8" strokeDasharray="3 3" />
        <XAxis
          dataKey="month"
          tick={{ fill: "#A2A2A2", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          padding={{ left: 15, right: 15 }}
        />
        <YAxis
          tick={{ fill: "#A2A2A2", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickCount={6}
          domain={[0, 30]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: "#FFF",
            borderRadius: 5,
            borderColor: "#DDD",
            padding: "8px 12px",
            fontSize: 12,
          }}
          cursor={{ stroke: "rgba(0,0,0,0.1)" }}
        />
        <Legend
          verticalAlign="top"
          align="left"
          height={36}
          iconType="circle"
          wrapperStyle={{ paddingBottom: 8 }}
          formatter={(value) =>
            value === "current" ? "Current Week" : "Previous Week"
          }
        />
        <Line
          type="monotone"
          dataKey="previous"
          stroke="#90a9d6"
          strokeWidth={3}
          dot={false}
          activeDot={{ r: 5 }}
        />
        <Line
          type="monotone"
          dataKey="current"
          stroke="#000"
          strokeWidth={3}
          dot={{ r: 3 }}
          activeDot={{ r: 6 }}
          strokeDasharray="4 2"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
