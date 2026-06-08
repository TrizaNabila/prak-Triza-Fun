import React from "react";
import StatusBadge from "../basic/StatusBadge";
import UserAvatar from "../basic/UserAvatar";

export default function CustomerTable({ data }) {
  return (
    <div className="p-6 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[11px] text-slate-500 uppercase tracking-[0.2em] border-b border-slate-800">
            <th className="pb-4 font-bold text-slate-300">ID</th>
            <th className="pb-4 font-bold text-slate-300">Customer</th>
            <th className="pb-4 font-bold text-slate-300">Product</th>
            <th className="pb-4 font-bold text-center text-slate-300">Status</th>
            <th className="pb-4 font-bold text-right text-slate-300">Value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {data.map((order) => (
            <tr key={order.id} className="hover:bg-slate-900/70 transition-colors group">
              <td className="py-4 text-sm font-bold text-white">{order.id}</td>
              <td className="py-4 text-sm text-slate-300 font-medium flex items-center gap-2">
                <UserAvatar name={order.customer} /> {order.customer}
              </td>
              <td className="py-4 text-sm text-slate-400 font-light">{order.product}</td>
              <td className="py-4 text-sm text-center"><StatusBadge status={order.status} /></td>
              <td className="py-4 text-sm font-bold text-white text-right">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}