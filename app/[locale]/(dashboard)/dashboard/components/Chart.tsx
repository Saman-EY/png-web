"use client";
import React from "react";
import { Area, AreaChart, CartesianGrid, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function Chart({ data }: any) {
  return (
    <section className="bg-white w-full max-w-[950px] mx-auto shadow-[0px_1px_3px_0px_#0000004D,0px_4px_8px_3px_#00000026] rounded-2xl p-5 mb-20 pr-10">
      <h6 className="mb-10 font-bold">Total Download and View Chart</h6>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="1" vertical={false} />

          <XAxis
            dataKey="title"
            tick={({ x, y, payload }) => (
              <text x={x} y={y + 20} textAnchor="middle" fontSize={10} fill="#374151">
                {/* Shorten long titles */}
                {/* {payload.value.length > 10 ? payload.value.slice(0, 10) + "..." : payload.value} */}
              </text>
            )}
          />

          <YAxis
            tick={({ x, y, payload }) => (
              <text x={x - 20} y={y} textAnchor="middle" fontSize={14} fill="#374151" fontWeight={600}>
                {payload.value}
              </text>
            )}
          />

          <Tooltip />
          <Legend />

          <Area type="monotone" dataKey="download" stroke="#22C55E" fill="#22C55E" fillOpacity={0.2} />

          <Area type="monotone" dataKey="view" stroke="#2563EB" fill="#2563EB" fillOpacity={0.2} />

          <Line type="monotone" dataKey="download" stroke="transparent" dot={{ r: 5, fill: "#22C55E" }} />
          <Line type="monotone" dataKey="view" stroke="transparent" dot={{ r: 5, fill: "#2563EB" }} />
        </AreaChart>
      </ResponsiveContainer>
    </section>
  );
}

export default Chart;
