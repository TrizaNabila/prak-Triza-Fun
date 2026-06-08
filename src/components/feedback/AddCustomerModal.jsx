import React from "react";
export default function AddCustomerModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-slate-950/95 p-6 rounded-[32px] w-96 shadow-[0_30px_80px_rgba(15,23,42,0.4)] border border-slate-800 animate-fadeIn space-y-4">
        <h3 className="font-bold text-white text-lg">Input Pesanan Furniture</h3>
        {children}
        <button onClick={onClose} className="w-full text-center text-xs font-semibold text-slate-300 hover:text-white transition-colors pt-2">Batal</button>
      </div>
    </div>
  );
}