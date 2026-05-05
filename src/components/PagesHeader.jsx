import { MdHome, MdSettings, MdNotifications } from "react-icons/md";

export default function PageHeader({ title }) {
  return (
    <div className="flex items-center justify-between mb-8 px-2">
      {/* Breadcrumbs */}
      <div>
        <nav className="flex text-sm text-gray-500 mb-1">
          <span className="flex items-center gap-1 opacity-60">
            <MdHome className="text-base" /> /
          </span>
          <span className="ml-1 opacity-60">Pages /</span>
          <span className="ml-1 text-slate-700 font-medium capitalize">{title}</span>
        </nav>
        <h1 className="text-xl font-bold text-slate-800 tracking-tight">{title}</h1>
      </div>

      {/* Quick Action Icons */}
      <div className="flex items-center gap-4 text-gray-500">
        <div className="relative group cursor-pointer">
          <input 
            type="text" 
            placeholder="Search here..." 
            className="border-b border-gray-300 bg-transparent text-sm py-1 focus:border-pink-500 outline-none transition-all w-40"
          />
        </div>
        <MdSettings className="text-xl cursor-pointer hover:text-pink-500" />
        <MdNotifications className="text-xl cursor-pointer hover:text-pink-500" />
      </div>
    </div>
  );
}