import React from "react";
export default function TableWrapperLayout({ children }) {
  return <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-12 overflow-hidden">{children}</div>;
}