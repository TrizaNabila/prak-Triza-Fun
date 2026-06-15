import { MdHome, MdSettings, MdNotifications } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

export default function PageHeader({ title }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`flex items-center justify-between mb-8 px-2 ${isDark ? "text-slate-200" : "text-slate-900"}`}>
      {/* Breadcrumbs */}
      <div>
        <nav className={`flex text-sm ${isDark ? "text-slate-500" : "text-slate-600"} mb-1`}>
          <span className="flex items-center gap-1 opacity-60">
            <MdHome className="text-base" /> /
          </span>
          <span className="ml-1 opacity-60">Pages /</span>
          <span className={`ml-1 font-medium capitalize ${isDark ? "text-white" : "text-slate-900"}`}>{title}</span>
        </nav>
        <h1 className={`text-xl font-bold tracking-tight ${isDark ? "text-white" : "text-slate-950"}`}>{title}</h1>
      </div>

      {/* Quick Action Icons */}
      <div className={`flex items-center gap-4 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
        <div className="relative group cursor-pointer">
          <input 
            type="text" 
            placeholder="Search here..." 
            className={`border-b ${isDark ? "border-slate-700 bg-transparent text-slate-100 placeholder:text-slate-500" : "border-slate-300 bg-white text-slate-900 placeholder:text-slate-400"} text-sm py-1 focus:border-pink-500 outline-none transition-all w-40`} 
          />
        </div>
        <MdSettings className={`text-xl cursor-pointer hover:text-pink-500 ${isDark ? "text-slate-300" : "text-slate-500"}`} />
        <MdNotifications className={`text-xl cursor-pointer hover:text-pink-500 ${isDark ? "text-slate-300" : "text-slate-500"}`} />
      </div>
    </div>
  );
}