import React from "react";
export default function AddCustomerModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl w-96 shadow-2xl border border-gray-100 animate-fadeIn space-y-4">
        <h3 className="font-bold text-slate-800 text-lg">Input Pesanan Furniture</h3>
        {children}
        <button onClick={onClose} className="w-full text-center text-xs font-semibold text-gray-400 hover:text-gray-600 transition-colors pt-2">Batal</button>
      </div>
    </div>
  );
}