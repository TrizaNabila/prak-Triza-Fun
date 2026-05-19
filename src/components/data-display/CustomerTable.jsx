import React from "react";
import StatusBadge from "../basic/StatusBadge";
import UserAvatar from "../basic/UserAvatar";

export default function CustomerTable({ data }) {
  return (
    <div className="p-6 overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="text-[11px] text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50">
            <th className="pb-4 font-bold">ID</th>
            <th className="pb-4 font-bold">Customer</th>
            <th className="pb-4 font-bold">Product</th>
            <th className="pb-4 font-bold text-center">Status</th>
            <th className="pb-4 font-bold text-right">Value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {data.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group">
              <td className="py-4 text-sm font-bold text-slate-700">{order.id}</td>
              <td className="py-4 text-sm text-gray-600 font-medium flex items-center gap-2">
                <UserAvatar name={order.customer} /> {order.customer}
              </td>
              <td className="py-4 text-sm text-gray-400 font-light">{order.product}</td>
              <td className="py-4 text-sm text-center"><StatusBadge status={order.status} /></td>
              <td className="py-4 text-sm font-bold text-slate-700 text-right">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}