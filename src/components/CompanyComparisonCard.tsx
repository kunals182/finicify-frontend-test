import React from "react";
import PerformanceChart from "./PerformanceChart";

interface Props {
  title: string;
  value: string;
  change: string;
}

const CompanyComparisonCard: React.FC<Props> = ({ title, value, change }) => {
  const isPositive = change.startsWith("+");

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 hover:shadow-lg transition-transform hover:-translate-y-1">
      <h3 className="text-md font-semibold text-gray-800 mb-1">{title}</h3>
      <p className={`text-sm font-medium ${isPositive ? "text-green-600" : "text-red-600"}`}>
        {change}
      </p>
      <p className="text-2xl font-bold text-gray-800 mb-4">{value}</p>

      <div className="chart-card">
        <PerformanceChart />
      </div>
    </div>
  );
};

export default CompanyComparisonCard;
