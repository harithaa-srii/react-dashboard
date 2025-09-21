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
import { useTheme } from "../../../context/ThemeContext";

const data = [
  { month: "Jan", current: 12, previous: 7 },
  { month: "Feb", current: 8, previous: 14 },
  { month: "Mar", current: 6, previous: 10 },
  { month: "Apr", current: 15, previous: 20 },
  { month: "May", current: 20, previous: 18 },
  { month: "Jun", current: 18, previous: 22 },
];

export default function RevenueLineChart() {
  const { theme } = useTheme();
  return (
    <div className="w-full h-full flex-1">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 16, right: 32, bottom: 4, left: 0 }}
        >
          <CartesianGrid
            vertical={false}
            stroke={theme === "dark" ? "#2F2F2F" : "#F0F2F8"}
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: theme === "dark" ? "#A2A2A2" : "#4B5563", fontSize: 14 }}
            padding={{ left: 15, right: 15 }}
          />
          <YAxis
            tick={{ fill: theme === "dark" ? "#A2A2A2" : "#4B5563", fontSize: 14 }}
            axisLine={false}
            tickLine={false}
            tickCount={6}
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
            cursor={{ stroke: theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)" }}
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
            stroke={theme === "dark" ? "#FFF" : "#000"}
            strokeWidth={3}
            dot={false}
            activeDot={{ r: 6 }}
            strokeDasharray="4 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
