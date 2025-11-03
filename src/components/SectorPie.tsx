import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { motion } from "framer-motion";

const data = [
  { name: "Technology", value: 40 },
  { name: "Finance", value: 25 },
  { name: "Healthcare", value: 20 },
  { name: "Energy", value: 10 },
  { name: "Others", value: 5 },
];


const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6"];

const SectorPie: React.FC = () => {
  return (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-md border border-gray-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
     
      <h2 className="text-xl font-semibold mb-6 text-gray-800 text-center">
        Sector Risk Analysis
      </h2>

      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
       
        <div className="w-full max-w-xs h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={90}
                innerRadius={50}
                paddingAngle={3}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    className="transition-transform duration-200 hover:scale-105"
                  />
                ))}
              </Pie>

              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(17, 24, 39, 0.95)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff",
                }}
                itemStyle={{ color: "#E5E7EB" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

       
        <div className="flex flex-col gap-3">
          {data.map((entry, index) => (
            <motion.div
              key={entry.name}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span
                className="w-4 h-4 rounded-md shadow-sm"
                style={{ backgroundColor: COLORS[index % COLORS.length] }}
              />
              <span className="text-gray-700 text-sm font-medium w-24">
                {entry.name}
              </span>
              <span className="text-gray-500 text-xs">
                {entry.value}% share
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SectorPie;
