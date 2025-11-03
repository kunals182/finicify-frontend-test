import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", value: 4 },
  { month: "Feb", value: 6 },
  { month: "Mar", value: 5 },
  { month: "Apr", value: 7 },
  { month: "May", value: 8 },
  { month: "Jun", value: 9 },
];

const PerformanceChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis dataKey="month" stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#111827",
            border: "1px solid #374151",
            borderRadius: 8,
            color: "#fff",
          }}
        />
        <Line type="monotone" dataKey="value" stroke="#3B82F6" strokeWidth={2} dot={{ r: 2 }} isAnimationActive={true}/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PerformanceChart;
