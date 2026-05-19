import React from "react";
export default function UserAvatar({ name }) {
  return <div className="w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-[10px] shadow-sm">{name ? name.charAt(0) : "U"}</div>;
}