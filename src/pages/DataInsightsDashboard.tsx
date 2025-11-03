import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { motion } from "framer-motion";

// ✅ Dummy data
const monthlyData = [
  { month: "Jan", revenue: 42000, expenses: 31000, profit: 11000 },
  { month: "Feb", revenue: 46000, expenses: 34000, profit: 12000 },
  { month: "Mar", revenue: 51000, expenses: 38000, profit: 13000 },
  { month: "Apr", revenue: 56000, expenses: 42000, profit: 14000 },
  { month: "May", revenue: 60000, expenses: 45000, profit: 15000 },
  { month: "Jun", revenue: 63000, expenses: 47000, profit: 16000 },
];

const pieData = [
  { name: "Marketing", value: 30 },
  { name: "Operations", value: 25 },
  { name: "Development", value: 20 },
  { name: "Sales", value: 15 },
  { name: "HR", value: 10 },
];

const COLORS = ["#2563EB", "#F59E0B", "#10B981", "#EF4444", "#8B5CF6"];

const DataInsightsDashboard: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  // 📸 Download charts as PNG
  const handleDownload = async () => {
    if (chartRef.current) {
      const canvas = await html2canvas(chartRef.current);
      const link = document.createElement("a");
      link.download = "data-insights-dashboard.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div className={`${darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"} min-h-screen p-6 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* 🔹 Header + Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Data Insights Dashboard
          </h1>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg bg-green-600 text-white font-medium hover:bg-green-700 transition"
            >
              💾 Download Chart
            </button>
          </div>
        </div>

        {/* 🔸 Top Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            { label: "Total Revenue", value: "₹3.18 L", change: "+8.5%", color: "text-blue-500" },
            { label: "Total Expenses", value: "₹2.37 L", change: "-3.1%", color: "text-red-500" },
            { label: "Net Profit", value: "₹81 K", change: "+6.2%", color: "text-green-500" },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className={`rounded-xl p-6 shadow-md hover:shadow-lg transition bg-white ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              <p className="text-gray-500 dark:text-gray-400 font-semibold text-sm">
                {card.label}
              </p>
              <h2 className={`text-3xl font-bold mt-2 ${card.color}`}>{card.value}</h2>
              <p className="text-sm text-green-500 mt-1">▲ {card.change} vs last month</p>
            </motion.div>
          ))}
        </div>

        {/* 📊 Charts Section */}
        <div ref={chartRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Line Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-xl p-6 border shadow-md ${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4">Revenue vs Expenses</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#E5E7EB"} />
                <XAxis dataKey="month" stroke={darkMode ? "#D1D5DB" : "#374151"} />
                <YAxis stroke={darkMode ? "#D1D5DB" : "#374151"} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#2563EB" strokeWidth={2} />
                <Line type="monotone" dataKey="expenses" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Bar Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-xl p-6 border shadow-md ${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4">Profit Overview</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={darkMode ? "#374151" : "#E5E7EB"} />
                <XAxis dataKey="month" stroke={darkMode ? "#D1D5DB" : "#374151"} />
                <YAxis stroke={darkMode ? "#D1D5DB" : "#374151"} />
                <Tooltip />
                <Bar dataKey="profit" fill="#10B981" barSize={50} radius={[10, 10, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`rounded-xl p-6 border shadow-md col-span-1 lg:col-span-2 ${
              darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
            }`}
          >
            <h2 className="text-lg font-semibold mb-4 text-center">Expense Distribution</h2>
            <div className="flex justify-center">
              <ResponsiveContainer width="60%" height={300}>
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" outerRadius={120} dataKey="value" label>
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DataInsightsDashboard;
