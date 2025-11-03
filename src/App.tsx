import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DataInsightsDashboard from "./pages/DataInsightsDashboard";

function App() {
  return (
    <Router>
      <nav className="flex gap-6 p-4 bg-white shadow-md">
        <Link to="/" className="text-blue-600 font-semibold">Task 1 – Company Comparison</Link>
        <Link to="/insights" className="text-blue-600 font-semibold">Task 2 – Data Insights</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/insights" element={<DataInsightsDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
