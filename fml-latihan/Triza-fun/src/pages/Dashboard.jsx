import {
  FaChair, FaShoppingCart, FaUsers, FaEllipsisV, FaPlus
} from "react-icons/fa";
import { MdUpdate, MdAccessTime } from "react-icons/md";
import PageHeader from "../components/PagesHeader";

const statCards = [
  /* WARNA ICON DISAMAKAN DENGAN SIDEBAR (#343a40) */
  { icon: FaShoppingCart, iconBg: "bg-[#343a40]", label: "Total Orders", value: "182", growth: "+12%", desc: "than yesterday" },
  { icon: FaUsers, iconBg: "bg-[#e91e63]", label: "Today's Users", value: "2,300", growth: "+3%", desc: "than last month" },
  { icon: FaChair, iconBg: "bg-green-500", label: "Stock Items", value: "452", growth: "+5%", desc: "just updated" },
  { icon: FaPlus, iconBg: "bg-blue-500", label: "New Leads", value: "95", growth: "+15%", desc: "in last 24h" },
];

const furnitureGallery = [
  { name: "Scandinavian Chair", type: "Living Room", price: "Rp 1.2M", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=500" },
  { name: "Modern Sofa Pink", type: "Bedroom", price: "Rp 4.5M", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500" },
  { name: "Wooden Dining Table", type: "Kitchen", price: "Rp 3.8M", img: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=500" },
];

const recentOrders = [
  { id: "#ORD-5001", customer: "Alya Maharani", product: "Minimalist Sofa", status: "Completed", total: "Rp 4.500.000" },
  { id: "#ORD-5002", customer: "Bayu Prasetyo", product: "Office Chair", status: "Pending", total: "Rp 1.542.000" },
];

export default function Dashboard() {
  return (
    <div className="space-y-10 pb-10">
      <PageHeader title="Dashboard" />

      {/* 1. STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-6">
        {statCards.map((card, i) => {
          const Icon = card.icon;
          return (
            <div key={i} className="relative bg-white rounded-2xl shadow-sm p-4 border border-gray-100 transition-all hover:-translate-y-1">
              <div className={`absolute -top-6 left-4 w-16 h-16 ${card.iconBg} rounded-xl shadow-lg flex items-center justify-center text-white text-2xl`}>
                <Icon />
              </div>
              <div className="text-right pt-2">
                <p className="text-sm font-light text-gray-500">{card.label}</p>
                <h4 className="text-2xl font-bold text-slate-700">{card.value}</h4>
              </div>
              <div className="border-t border-gray-100 mt-4 pt-4 flex items-center gap-1 text-xs">
                <span className="text-green-500 font-bold">{card.growth}</span>
                <span className="text-gray-400 italic">{card.desc}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. FURNITURE VISUAL GALLERY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {furnitureGallery.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
            <div className="relative -mt-10 mb-4 h-48 bg-gray-200 rounded-xl overflow-hidden shadow-lg border border-white/10">
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs font-bold">
                {item.price}
              </div>
            </div>
            <h6 className="font-bold text-slate-800 text-lg">{item.name}</h6>
            <p className="text-sm text-gray-500 mb-4">{item.type}</p>
            <div className="border-t border-gray-100 pt-4 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1"><MdAccessTime /> Campaign sent 2 days ago</span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. RECENT ORDERS TABLE - WARNA HEADER DISAMAKAN DENGAN SIDEBAR */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 mt-10 overflow-hidden">
        {/* HEADER: Ganti gradasi dari slate ke bg-[#343a40] */}
        <div className="relative mx-4 -mt-6 p-6 bg-[#343a40] rounded-xl shadow-xl flex justify-between items-center text-white">
          <div>
            <h2 className="font-bold text-lg tracking-wide uppercase text-sm">Recent Orders</h2>
            <p className="text-[11px] text-white/50 flex items-center gap-1 mt-1 font-light">
              <MdUpdate className="text-pink-500" /> 30 projects done this month
            </p>
          </div>
          <FaEllipsisV className="cursor-pointer opacity-50 hover:opacity-100 transition-opacity" />
        </div>
        
        <div className="p-6 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-[11px] text-gray-400 uppercase tracking-[0.2em] border-b border-gray-50">
                <th className="pb-4 font-bold">ID</th>
                <th className="pb-4 font-bold">Customer</th>
                <th className="pb-4 font-bold">Product</th>
                <th className="pb-4 font-bold text-center">Status</th>
                <th className="pb-4 font-bold text-right">Value</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {recentOrders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="py-4 text-sm font-bold text-slate-700">{order.id}</td>
                  <td className="py-4 text-sm text-gray-600 font-medium">{order.customer}</td>
                  <td className="py-4 text-sm text-gray-400 font-light">{order.product}</td>
                  <td className="py-4 text-sm text-center">
                    <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-bold uppercase shadow-none ${
                        order.status === "Completed" 
                        ? "bg-green-100 text-green-600" 
                        : "bg-blue-100 text-blue-600"
                      }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="py-4 text-sm font-bold text-slate-700 text-right">{order.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}