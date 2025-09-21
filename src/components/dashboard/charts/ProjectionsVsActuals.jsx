import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { useTheme } from "../../../context/ThemeContext";

const data = [
  { month: "Jan", actual: 17, projection: 3 },
  { month: "Feb", actual: 21, projection: 5 },
  { month: "Mar", actual: 18, projection: 4 },
  { month: "Apr", actual: 22, projection: 6 },
  { month: "May", actual: 14, projection: 4 },
  { month: "Jun", actual: 19, projection: 6 },
];

export default function ProjectionsVsActualsChart() {
  const { theme } = useTheme();

  return (
    <ResponsiveContainer width="100%" height={180}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
        barCategoryGap="30%"
      >
        <CartesianGrid
          vertical={false}
          stroke={theme === "dark" ? "#2F2F2F" : "#F0F2F8"}
          strokeDasharray="3 3"
        />
        <XAxis
          dataKey="month"
          tick={{ fill: theme === "dark" ? "#A2A2A2" : "#A2A2A2", fontSize: 12 }}
          axisLine={{ stroke: theme === "dark" ? "#444" : "#E9EBF6" }}
          tickLine={false}
          padding={{ left: 15, right: 15 }}
        />
        <YAxis
          tick={{ fill: theme === "dark" ? "#A2A2A2" : "#A2A2A2", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(value) => `${value}M`}
          interval={0}
          domain={[0, 30]}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme === "dark" ? "#1C1F3C" : "#FFF",
            borderRadius: 5,
            borderColor: theme === "dark" ? "#444" : "#DDD",
            padding: "8px 12px",
            fontSize: 12,
          }}
          cursor={{ fill: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
        />
        <Legend
          verticalAlign="top"
          align="left"
          height={36}
          iconType="circle"
          wrapperStyle={{ paddingBottom: 8, color: theme === "dark" ? "#eee" : "#333" }}
          formatter={(value) => (value === "actual" ? "Actual" : "Projection")}
        />
        <Bar
          dataKey="actual"
          fill="#849CFF"
          radius={[6, 6, 0, 0]}
          stackId="a"
          maxBarSize={40}
        />
        <Bar
          dataKey="projection"
          fill="#DAE7F4"
          radius={[6, 6, 0, 0]}
          stackId="a"
          maxBarSize={40}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
