import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { motion, AnimatePresence } from "framer-motion";
import CompanyComparisonCard from "../components/CompanyComparisonCard";
import RiskHeatmap from "../components/RiskHeatmap";
import SectorPie from "../components/SectorPie";
import InternalComparisonChart from "../components/InternalComparisonChart";

const Dashboard: React.FC = () => {
  const [mode, setMode] = useState<"sector" | "company">("sector");
  const [darkMode, setDarkMode] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);

  // 📸 Download the dashboard as an image
  const handleDownload = async () => {
    if (dashboardRef.current) {
      const canvas = await html2canvas(dashboardRef.current);
      const link = document.createElement("a");
      link.download = "company-dashboard.png";
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div ref={dashboardRef} className="p-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left">
            Company Internal Comparison
          </h1>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700 transition"
            >
              💾 Download
            </button>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setMode("sector")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition ${
              mode === "sector"
                ? "bg-blue-600 text-white shadow"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Compare with Sector
          </button>

          <button
            onClick={() => setMode("company")}
            className={`px-6 py-2 rounded-lg text-sm font-semibold transition ${
              mode === "company"
                ? "bg-blue-600 text-white shadow"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            Compare Within Company
          </button>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <CompanyComparisonCard title="Revenue Growth" value="12.4%" change="+1.2%" />
          <CompanyComparisonCard title="Profit Margin" value="8.9%" change="-0.3%" />
          <CompanyComparisonCard title="Return on Assets" value="10.1%" change="+0.5%" />
        </div>

        {/* Charts Section */}
        <AnimatePresence mode="wait">
          {mode === "sector" ? (
            <motion.div
              key="sector"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              <div
                className={`p-6 rounded-xl shadow-md border ${
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                }`}
              >
                <h2 className="text-lg font-semibold mb-4">Risk Metrics Heatmap</h2>
                <RiskHeatmap />
              </div>

              <div
                className={`p-6 rounded-xl shadow-md border ${
                  darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
                }`}
              >
                <h2 className="text-lg font-semibold mb-4">Sector Risk Analysis</h2>
                <SectorPie />
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="company"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className={`p-6 rounded-xl shadow-md border mt-6 ${
                darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
              }`}
            >
              <InternalComparisonChart />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Dashboard;
