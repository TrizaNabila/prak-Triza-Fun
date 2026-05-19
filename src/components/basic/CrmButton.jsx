import React from "react";
import { FaPlus } from "react-icons/fa";
export default function CrmButton({ onClick }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2 bg-[#343a40] hover:bg-slate-800 text-white text-xs font-bold uppercase px-4 py-2.5 rounded-xl shadow-md transition-all">
      <FaPlus /> Tambah Pesanan
    </button>
  );
}