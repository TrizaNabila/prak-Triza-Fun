import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div
      id="header-container"
      className="flex justify-between items-center p-4 bg-[#0f172a] border-b border-slate-800 text-slate-100 rounded-3xl"
    >
      {/* Search Bar */}
      <div id="search-bar" className="relative w-full max-w-lg">
        <input
          id="search-input"
          type="text"
          placeholder="Search Here..."
          className="border border-slate-800 p-2 pr-10 bg-slate-950 text-slate-100 w-full max-w-lg rounded-2xl outline-none focus:ring-2 focus:ring-pink-500 transition"
        />
        <FaSearch
          id="search-icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400"
        />
      </div>

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center space-x-4">
        {/* Notification */}
        <div
          id="notification-icon"
          className="relative p-3 bg-slate-950 rounded-2xl text-pink-400 cursor-pointer hover:bg-slate-900 transition"
        >
          <FaBell />
          <span
            id="notification-badge"
            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-pink-500 text-white rounded-full px-1.5 py-0.5 text-xs"
          >
            50
          </span>
        </div>

        {/* Chart */}
        <div
          id="chart-icon"
          className="p-3 bg-slate-950 rounded-2xl text-cyan-300 cursor-pointer hover:bg-slate-900 transition"
        >
          <FcAreaChart />
        </div>

        {/* Settings */}
        <div
          id="settings-icon"
          className="p-3 bg-slate-950 rounded-2xl text-pink-400 cursor-pointer hover:bg-slate-900 transition"
        >
          <SlSettings />
        </div>

        {/* Profile */}
        <div
          id="profile-container"
          className="flex items-center space-x-3 border-l pl-4 border-slate-800"
        >
          <span id="profile-text" className="text-sm text-slate-200">
            Hello, <b>Triza Fun</b>
          </span>
          <img
            id="profile-avatar"
            src="/img/triza.jpeg"
            className="w-10 h-10 rounded-full ring-2 ring-pink-500 object-cover"
            alt="Triza Avatar"
          />
        </div>
      </div>
    </div>
  );
}
