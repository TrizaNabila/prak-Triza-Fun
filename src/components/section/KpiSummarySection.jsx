import React from "react";
import { FaChair, FaShoppingCart, FaUsers, FaPlus } from "react-icons/fa";
import AnalyticsCard from "../data-display/AnalyticsCard";
import DashboardGridLayout from "../layout/DashboardGridLayout";

const statCards = [
  { icon: FaShoppingCart, iconBg: "bg-[#ec4899]", label: "Total Orders", value: "182", growth: "+12%", desc: "than yesterday" },
  { icon: FaUsers, iconBg: "bg-[#d946ef]", label: "Today's Users", value: "2,300", growth: "+3%", desc: "than last month" },
  { icon: FaChair, iconBg: "bg-[#f472b6]", label: "Stock Items", value: "452", growth: "+5%", desc: "just updated" },
  { icon: FaPlus, iconBg: "bg-[#fb7185]", label: "New Leads", value: "95", growth: "+15%", desc: "in last 24h" },
];

export default function KpiSummarySection() {
  return (
    <DashboardGridLayout>
      {statCards.map((card, i) => <AnalyticsCard key={i} {...card} />)}
    </DashboardGridLayout>
  );
}