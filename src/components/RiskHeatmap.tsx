import React, { useState } from "react";

const sample = {
  metrics: [
    { fund: "Atlas Portföy Yönetimi Fonu", values: [6.65, 6.42, 6.31, 5.98, 5.88] },
    { fund: "Deniz Portföy Yönetimi Fonu", values: [6.22, 6.18, 5.97, 5.61, 5.43] },
    { fund: "Yapı Kredi Portföy Yönetimi Fonu", values: [6.55, 6.30, 6.15, 5.82, 5.74] },
  ],
  scale: [0, 10],
};

function valueToColor(v: number, min = 0, max = 10) {
  const t = Math.max(0, Math.min(1, (v - min) / (max - min)));
  const hue = (1 - t) * 120;
  return `hsl(${hue}, 75%, 55%)`;
}

const RiskHeatmap: React.FC = () => {
  const [tip, setTip] = useState<{ x: number; y: number; text: string } | null>(null);

  return (
    <div className="relative w-full">
      <div className="overflow-x-auto">
        <div className="min-w-[720px] bg-white rounded-xl shadow-inner p-4 border border-gray-200">
          <div className="grid grid-cols-[250px_repeat(5,1fr)] gap-2 items-center text-sm">
           
            <div className="font-semibold text-gray-700">Fund</div>
            {["M1", "M2", "M3", "M4", "M5"].map((m) => (
              <div
                key={m}
                className="font-semibold text-gray-600 text-center bg-gray-50 py-1 rounded-md"
              >
                {m}
              </div>
            ))}

           
            {sample.metrics.map((row) => (
              <React.Fragment key={row.fund}>
                <div className="font-medium text-gray-800 py-2 pr-2">
                  {row.fund}
                </div>
                {row.values.map((v, i) => (
                  <div
                    key={i}
                    className="h-10 rounded-md cursor-pointer transition-transform transform hover:scale-105 hover:ring-2 hover:ring-offset-2 hover:ring-blue-400"
                    style={{
                      background: valueToColor(v, 0, 10),
                    }}
                    onMouseEnter={(e) =>
                      setTip({
                        x: e.clientX,
                        y: e.clientY,
                        text: `${row.fund} — ${v.toFixed(2)}`,
                      })
                    }
                    onMouseLeave={() => setTip(null)}
                  />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      
      <div className="mt-6 flex justify-center items-center gap-3">
        <span className="text-sm text-gray-600">Low Risk</span>
        <div
          className="w-64 h-3 rounded-full border border-gray-300 shadow-inner"
          style={{
            background: "linear-gradient(to right, #22c55e, #facc15, #ef4444)",
          }}
        />
        <span className="text-sm text-gray-600">High Risk</span>
      </div>

    
      {tip && (
        <div
          className="fixed z-50 px-3 py-1.5 text-sm text-white rounded-lg backdrop-blur-md bg-gray-800/90 shadow-lg border border-white/10"
          style={{
            left: tip.x + 10,
            top: tip.y + 10,
            pointerEvents: "none",
          }}
        >
          {tip.text}
        </div>
      )}
    </div>
  );
};

export default RiskHeatmap;
