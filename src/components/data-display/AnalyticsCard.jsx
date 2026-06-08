import React from "react";
export default function AnalyticsCard({ icon: Icon, iconBg, label, value, growth, desc }) {
  return (
    <div className="relative bg-slate-950 rounded-2xl shadow-xl p-4 border border-slate-800 transition-all hover:-translate-y-1">
      <div className={`absolute -top-6 left-4 w-16 h-16 ${iconBg} rounded-xl shadow-lg flex items-center justify-center text-white text-2xl`}>
        <Icon />
      </div>
      <div className="text-right pt-2">
        <p className="text-sm font-light text-slate-400">{label}</p>
        <h4 className="text-2xl font-bold text-white">{value}</h4>
      </div>
      <div className="border-t border-slate-800 mt-4 pt-4 flex items-center gap-1 text-xs">
        <span className="text-pink-400 font-bold">{growth}</span>
        <span className="text-slate-500 italic">{desc}</span>
      </div>
    </div>
  );
}