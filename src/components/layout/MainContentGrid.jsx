import React from "react";
export default function MainContentGrid({ children }) {
  return <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">{children}</div>;
}