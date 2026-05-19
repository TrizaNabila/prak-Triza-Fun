import React from "react";
import { MdAccessTime } from "react-icons/md";
export default function FurnitureCard({ name, type, price, img }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mt-8">
      <div className="relative -mt-10 mb-4 h-48 bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-white/10">
        <img src={img} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold">{price}</div>
      </div>
      <h6 className="font-bold text-slate-800 text-lg">{name}</h6>
      <p className="text-sm text-gray-500 mb-4">{type}</p>
      <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-400">
        <span className="flex items-center gap-1"><MdAccessTime /> Campaign sent 2 days ago</span>
      </div>
    </div>
  );
}