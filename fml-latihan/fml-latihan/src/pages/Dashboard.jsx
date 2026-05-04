import {
  FaShoppingCart,
  FaTruck,
  FaUtensils,
  FaUsers,
} from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";
import PagesHeader from "../components/PagesHeader";

const statCards = [
  {
    icon: FaShoppingCart,
    iconBg: "bg-green-500",
    label: "Total Pesanan",
    value: "75",
    growth: "+12%",
    growthColor: "text-green-600 bg-green-100",
    bar: "bg-green-400",
    barWidth: "w-1/3",
  },
  {
    icon: FaTruck,
    iconBg: "bg-blue-500",
    label: "Total Terkirim",
    value: "175",
    growth: "+23%",
    growthColor: "text-green-600 bg-green-100",
    bar: "bg-blue-400",
    barWidth: "w-2/3",
  },
  {
    icon: FaUtensils,
    iconBg: "bg-orange-400",
    label: "Paket Catering",
    value: "24",
    growth: "+8%",
    growthColor: "text-green-600 bg-green-100",
    bar: "bg-orange-300",
    barWidth: "w-1/4",
  },
  {
    icon: FaUsers,
    iconBg: "bg-purple-500",
    label: "Total Pelanggan",
    value: "320",
    growth: "+18%",
    growthColor: "text-green-600 bg-green-100",
    bar: "bg-purple-400",
    barWidth: "w-1/2",
  },
];

const recentOrders = [
  { id: "#ORD-5001", customer: "Andi Wijaya", menu: "Paket Nasi Box A", status: "Completed", total: "Rp 450.000" },
  { id: "#ORD-5002", customer: "Rina Rose", menu: "Paket Prasmanan", status: "Pending", total: "Rp 2.500.000" },
  { id: "#ORD-5003", customer: "Eko Prasetyo", menu: "Paket Nasi Box B", status: "Completed", total: "Rp 750.000" },
  { id: "#ORD-5004", customer: "Maya Putri", menu: "Paket Snack Box", status: "Cancelled", total: "Rp 300.000" },
  { id: "#ORD-5005", customer: "Gani Malik", menu: "Paket Tumpeng", status: "Pending", total: "Rp 1.200.000" },
];

export default function Dashboard() {
  return (
    <div>
      <PagesHeader title="Dashboard" />

      {/* Greeting */}
      <div className="mt-4 mb-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Selamat Datang, Wilhelm 👨‍🍳</h1>
            <p className="text-green-100 mt-1">
              Kelola pesanan catering Anda hari ini
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-xl">
            <MdTrendingUp className="text-white text-xl" />
            <span className="text-sm font-semibold">Performa Baik!</span>
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
        {statCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className={`${card.iconBg} p-3 rounded-xl`}>
                  <Icon className="text-white text-lg" />
                </div>
                <span className={`text-xs font-bold px-2 py-1 rounded-full ${card.growthColor}`}>
                  {card.growth}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{card.label}</p>
              <p className="text-3xl font-bold text-gray-800 mt-1">{card.value}</p>
              <div className="mt-3 h-1.5 bg-gray-100 rounded-full">
                <div className={`h-1.5 rounded-full ${card.bar} ${card.barWidth}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
        <div className="p-5 border-b border-gray-100">
          <h2 className="font-bold text-gray-800">Pesanan Terbaru</h2>
          <p className="text-sm text-gray-400 mt-0.5">5 pesanan terakhir masuk</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-xs text-gray-500 uppercase">
                <th className="p-4">ID Pesanan</th>
                <th className="p-4">Pelanggan</th>
                <th className="p-4">Paket</th>
                <th className="p-4">Status</th>
                <th className="p-4">Total</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="border-t border-gray-50 hover:bg-gray-50/50 transition-colors"
                >
                  <td className="p-4 text-sm font-bold text-hijau">{order.id}</td>
                  <td className="p-4 text-sm text-gray-700">{order.customer}</td>
                  <td className="p-4 text-sm text-gray-500">{order.menu}</td>
                  <td className="p-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        order.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : order.status === "Pending"
                          ? "bg-blue-100 text-blue-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-semibold text-gray-700">
                    {order.total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
