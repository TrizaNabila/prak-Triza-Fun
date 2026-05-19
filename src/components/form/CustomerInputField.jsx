import React from "react";
export default function CustomerInputField({ label, placeholder, value, onChange }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase text-gray-500 mb-1">{label}</label>
      <input type="text" placeholder={placeholder} value={value} onChange={onChange} className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:ring-1 focus:ring-gray-700 outline-none transition-all" />
    </div>
  );
}