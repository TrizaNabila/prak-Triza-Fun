import React from "react";
import { FaEllipsisV } from "react-icons/fa";
import { MdUpdate } from "react-icons/md";
import DealStageSelect from "../form/DealStageSelect";

export default function LeadManagementSection({ children }) {
  return (
    <>
      <div className="relative mx-4 -mt-6 p-6 bg-[#343a40] rounded-xl shadow-xl flex justify-between items-center text-white">
        <div>
          <h2 className="font-bold tracking-wide uppercase text-sm">Recent Orders</h2>
          <p className="text-[11px] text-white/50 flex items-center gap-1 mt-1 font-light">
            <MdUpdate className="text-pink-500" /> 30 projects done this month
          </p>
        </div>
        <div className="flex items-center gap-3">
          <DealStageSelect />
          <FaEllipsisV className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
        </div>
      </div>
      {children}
    </>
  );
}