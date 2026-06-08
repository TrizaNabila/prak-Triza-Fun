import { MdHome, MdSettings, MdNotifications } from "react-icons/md";

export default function PageHeader({ title }) {
  return (
    <div className="flex items-center justify-between mb-8 px-2 text-slate-200">
      {/* Breadcrumbs */}
      <div>
        <nav className="flex text-sm text-slate-500 mb-1">
          <span className="flex items-center gap-1 opacity-60">
            <MdHome className="text-base" /> /
          </span>
          <span className="ml-1 opacity-60">Pages /</span>
          <span className="ml-1 text-white font-medium capitalize">{title}</span>
        </nav>
        <h1 className="text-xl font-bold text-white tracking-tight">{title}</h1>
      </div>

      {/* Quick Action Icons */}
      <div className="flex items-center gap-4 text-slate-400">
        <div className="relative group cursor-pointer">
          <input 
            type="text" 
            placeholder="Search here..." 
            className="border-b border-slate-700 bg-transparent text-sm py-1 text-slate-100 placeholder:text-slate-500 focus:border-pink-500 outline-none transition-all w-40"
          />
        </div>
        <MdSettings className="text-xl cursor-pointer text-slate-300 hover:text-pink-500" />
        <MdNotifications className="text-xl cursor-pointer text-slate-300 hover:text-pink-500" />
      </div>
    </div>
  );
}