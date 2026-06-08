import React from "react";
export default function TableWrapperLayout({ children }) {
  return <div className="bg-slate-950/95 rounded-2xl shadow-xl border border-slate-800 mt-12 overflow-hidden">{children}</div>;
}