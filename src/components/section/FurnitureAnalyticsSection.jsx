import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const FurnitureAnalyticsSection = () => {
  // Data penjualan furniture per bulan
  const salesData = [
    { month: "Jan", "Penjualan (Juta)": 15, "Terjual (Pcs)": 8 },
    { month: "Feb", "Penjualan (Juta)": 18, "Terjual (Pcs)": 12 },
    { month: "Mar", "Penjualan (Juta)": 20, "Terjual (Pcs)": 14 },
    { month: "Apr", "Penjualan (Juta)": 19, "Terjual (Pcs)": 13 },
    { month: "May", "Penjualan (Juta)": 22, "Terjual (Pcs)": 16 },
    { month: "Jun", "Penjualan (Juta)": 25, "Terjual (Pcs)": 18 },
  ];

  const completionPercent = 65;
  const totalOrders = 12;
  const completedOrders = Math.round((completionPercent / 100) * totalOrders);

  const CircularProgress = ({ percent = 65 }) => {
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percent / 100) * circumference;

    return (
      <svg width="180" height="180" viewBox="0 0 220 220" className="mx-auto">
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="#334155"
          strokeWidth="12"
        />
        <circle
          cx="110"
          cy="110"
          r={radius}
          fill="none"
          stroke="#ec4899"
          strokeWidth="12"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.6s ease" }}
          transform="rotate(-90 110 110)"
        />
        <text
          x="110"
          y="102"
          textAnchor="middle"
          fontSize="13"
          fontWeight="600"
          fill="#94a3b8"
        >
          SELESAI
        </text>
        <text
          x="110"
          y="135"
          textAnchor="middle"
          fontSize="44"
          fontWeight="800"
          fill="#f8fafc"
        >
          {percent}%
        </text>
      </svg>
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
      <div className="h-full bg-slate-950/95 rounded-[32px] border border-slate-800 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
        <div className="mb-6">
          <span className="inline-flex rounded-full bg-pink-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-pink-300">
            Furniture Analytics
          </span>
          <h3 className="mt-4 text-2xl font-semibold text-white">Penjualan Furniture</h3>
          <p className="mt-2 text-sm text-slate-400">Tren pendapatan & performa produk per bulan</p>
        </div>

        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={salesData}>
              <defs>
                <linearGradient id="salesGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ec4899" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#ec4899" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="4 4" stroke="#334155" vertical={false} />
              <XAxis dataKey="month" stroke="#64748b" tickLine={false} axisLine={false} />
              <YAxis stroke="#64748b" tickLine={false} axisLine={false} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0f172a",
                  border: "1px solid #334155",
                  borderRadius: "14px",
                  color: "#f8fafc",
                }}
                labelStyle={{ color: "#94a3b8" }}
                formatter={(value) => [`Rp ${value}M`, "Nilai"]}
              />
              <Line
                type="monotone"
                dataKey="Penjualan (Juta)"
                stroke="#ec4899"
                strokeWidth={3}
                dot={{ fill: "#fff", stroke: "#ec4899", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 2, stroke: "#ec4899" }}
              />
              <Line
                type="monotone"
                dataKey="Terjual (Pcs)"
                stroke="#f8fafc"
                strokeWidth={3}
                dot={{ fill: "#0f172a", stroke: "#f8fafc", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, strokeWidth: 2, stroke: "#f8fafc" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-3xl bg-slate-900/80 p-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Penjualan</p>
            <p className="mt-1 text-lg font-semibold text-white">Rp 25M</p>
          </div>
          <div className="rounded-3xl bg-slate-900/80 p-3">
            <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Unit Terjual</p>
            <p className="mt-1 text-lg font-semibold text-white">18 Pcs</p>
          </div>
        </div>
      </div>

      <div className="h-full bg-slate-950/95 rounded-[32px] border border-slate-800 p-5 shadow-[0_16px_30px_rgba(15,23,42,0.12)]">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pink-300">Status Order</p>
            <h3 className="mt-3 text-2xl font-semibold text-white">Hari Ini</h3>
          </div>
          <span className="rounded-full bg-pink-500/10 px-3 py-1 text-sm font-semibold text-pink-300">Furniture</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 py-2">
          <div className="rounded-full bg-slate-900/80 p-1.5 shadow-[0_10px_20px_rgba(236,72,153,0.12)]">
            <CircularProgress percent={completionPercent} />
          </div>
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-slate-500">Proses</p>
            <p className="mt-1 text-2xl font-bold text-white">{completionPercent}%</p>
          </div>
        </div>

        <div className="space-y-3 border-t border-slate-800 pt-5">
          <div className="flex items-center justify-between rounded-3xl bg-slate-900/70 px-4 py-3">
            <div>
              <p className="text-sm text-slate-400">Total Order</p>
              <p className="text-sm text-slate-500">Update terbaru</p>
            </div>
            <p className="text-2xl font-semibold text-white">{totalOrders}</p>
          </div>
          <div className="flex items-center justify-between rounded-3xl bg-slate-900/70 px-4 py-3">
            <div>
              <p className="text-sm text-slate-400">Selesai</p>
              <p className="text-sm text-slate-500">Performa baik</p>
            </div>
            <p className="text-2xl font-semibold text-pink-300">{completedOrders}</p>
          </div>
          <div className="flex items-center justify-between rounded-3xl bg-slate-900/70 px-4 py-3">
            <div>
              <p className="text-sm text-slate-400">Pending</p>
              <p className="text-sm text-slate-500">Perlu perhatian</p>
            </div>
            <p className="text-2xl font-semibold text-amber-400">{totalOrders - completedOrders}</p>
          </div>
        </div>

        <div className="mt-3 rounded-[28px] bg-gradient-to-r from-pink-500 to-[#972f6c] px-4 py-2 text-center text-white text-sm font-semibold shadow-[0_10px_20px_rgba(236,72,153,0.14)]">
          Status pesanan stabil
        </div>
      </div>
    </div>
  );
};

export default FurnitureAnalyticsSection;
