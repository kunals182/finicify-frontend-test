import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";

// Example internal comparison data
const data = [
  { department: "Sales", performance: 85, target: 75 },
  { department: "Marketing", performance: 70, target: 65 },
  { department: "Operations", performance: 60, target: 70 },
  { department: "HR", performance: 78, target: 80 },
  { department: "Finance", performance: 88, target: 85 },
];

const InternalComparisonChart: React.FC = () => {
  return (
    <motion.div
      className="bg-white p-6 rounded-2xl shadow-md border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <h2 className="text-lg font-semibold mb-6 text-gray-800 text-center">
        Internal Department Comparison
      </h2>

      {/* Chart Container */}
      <div className="w-full h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 20, left: 0, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="department" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(17,24,39,0.9)",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
            />
            <Legend verticalAlign="bottom" height={36} />
            <Bar
              dataKey="performance"
              fill="#3B82F6"
              name="Performance"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="target"
              fill="#F59E0B"
              name="Target"
              radius={[6, 6, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default InternalComparisonChart;
