import React from "react";
export default function DashboardGridLayout({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-6">{children}</div>;
}