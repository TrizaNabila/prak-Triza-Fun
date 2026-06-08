import React from "react";
export default function CustomerInputField({ label, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase text-slate-400 mb-1">{label}</label>
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} className="w-full px-3 py-2 border border-slate-800 rounded-2xl bg-slate-900 text-sm text-slate-100 placeholder:text-slate-500 focus:ring-1 focus:ring-pink-500 outline-none transition-all" />
    </div>
  );
}