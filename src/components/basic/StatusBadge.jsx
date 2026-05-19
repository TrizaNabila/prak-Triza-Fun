import React from "react";
export default function StatusBadge({ status }) {
  const styles = status === "Completed" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600";
  return <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase ${styles}`}>{status}</span>;
}