import React from "react";
import { MdAccessTime } from "react-icons/md";
export default function FurnitureCard({ name, type, price, img }) {
  return (
    <div className="bg-slate-950/95 rounded-2xl shadow-xl border border-slate-800 p-4 mt-8">
      <div className="relative -mt-10 mb-4 h-48 bg-slate-900 rounded-xl overflow-hidden shadow-2xl border border-white/10">
        <img src={img} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-pink-500/90 text-white px-3 py-1 rounded-lg text-xs font-bold">{price}</div>
      </div>
      <h6 className="font-bold text-white text-lg">{name}</h6>
      <p className="text-sm text-slate-400 mb-4">{type}</p>
      <div className="border-t border-slate-800 pt-4 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1"><MdAccessTime /> Campaign sent 2 days ago</span>
      </div>
    </div>
  );
}