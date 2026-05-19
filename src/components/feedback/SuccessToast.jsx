import React from "react";
export default function SuccessToast({ show }) {
  if (!show) return null;
  return <div className="fixed bottom-6 right-6 bg-[#343a40] text-white text-xs font-bold uppercase px-5 py-3.5 rounded-xl shadow-2xl z-50 animate-slideUp">✓ Data Sinkron Ke Sistem Furniture CRM!</div>;
}