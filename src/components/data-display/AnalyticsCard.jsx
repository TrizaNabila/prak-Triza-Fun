import React from "react";
export default function AnalyticsCard({ icon: Icon, iconBg, label, value, growth, desc }) {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm p-4 border border-gray-100 transition-all hover:-translate-y-1">
      <div className={`absolute -top-6 left-4 w-16 h-16 ${iconBg} rounded-xl shadow-lg flex items-center justify-center text-white text-2xl`}>
        <Icon />
      </div>
      <div className="text-right pt-2">
        <p className="text-sm font-light text-gray-500">{label}</p>
        <h4 className="text-2xl font-bold text-slate-700">{value}</h4>
      </div>
      <div className="border-t border-gray-100 mt-4 pt-4 flex items-center gap-1 text-xs">
        <span className="text-green-500 font-bold">{growth}</span>
        <span className="text-gray-400 italic">{desc}</span>
      </div>
    </div>
  );
}