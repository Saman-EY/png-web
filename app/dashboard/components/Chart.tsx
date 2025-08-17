"use client";
import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart() {
  return (
    <section className="bg-white w-full max-w-[950px] mx-auto shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] rounded-2xl p-5 mb-20 pr-10">
      <h6 className="mb-10 font-bold">Total Download and View Chart</h6>
      <div className="flex justify-end mb-2 text-gray-500 text-sm">Yearly ▼</div>
      <ResponsiveContainer className={"!outline-none !border-0"} width={"100%"} height={300}>
        <AreaChart className={"!outline-none !border-0"} data={data}>
          <CartesianGrid strokeDasharray="1" vertical={false} />
          <XAxis
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y + 20} // push tick down
                textAnchor="middle"
                fontSize={14}
                fill="#374151"
                fontWeight={600}
              >
                {payload.value}
              </text>
            )}
            dataKey="year"
          />
          <YAxis
            // tick={{ fontSize: 14, fontFamily: "Inter, sans-serif", fill: "#374151", fontWeight: "600" }}
            tick={({ x, y, payload }) => (
              <text
                x={x - 20}
                y={y} // push tick down
                textAnchor="middle"
                fontSize={14}
                fill="#374151"
                fontWeight={600}
              >
                {payload.value}
              </text>
            )}
            dataKey={"download"}
          />
          <Tooltip />
          <Legend />

          {/* Green Download area */}
          <Area type="monotone" dataKey="download" stroke="#22C55E" fill="#22C55E" fillOpacity={0.2} />

          {/* Blue View area */}
          <Area type="monotone" dataKey="view" stroke="#2563EB" fill="#2563EB" fillOpacity={0.2} />

          {/* Optional: add dots on lines */}
          <Line type="monotone" dataKey="download" stroke="transparent" dot={{ r: 5, fill: "#22C55E" }} />
          <Line type="monotone" dataKey="view" stroke="transparent" dot={{ r: 5, fill: "#2563EB" }} />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Chart;

const data = [
  { year: 2009, download: 10, view: 5 },
  { year: 2010, download: 30, view: 15 },
  { year: 2011, download: 15, view: 12 },
  { year: 2012, download: 20, view: 10 },
  { year: 2013, download: 100, view: 80 },
  { year: 2014, download: 50, view: 30 },
];
