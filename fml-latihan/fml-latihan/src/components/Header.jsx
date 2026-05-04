import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
  return (
    <div
      id="header-container"
      className="flex justify-between items-center p-4 bg-white border-b border-gray-100"
    >
      {/* Search Bar */}
      <div id="search-bar" className="relative w-full max-w-lg">
        <input
          id="search-input"
          type="text"
          placeholder="Search Here..."
          className="border border-gray-100 p-2 pr-10 bg-gray-50 w-full max-w-lg rounded-md outline-none focus:ring-2 focus:ring-green-200 transition"
        />
        <FaSearch
          id="search-icon"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300"
        />
      </div>

      {/* Icon & Profile Section */}
      <div id="icons-container" className="flex items-center space-x-4">
        {/* Notification */}
        <div
          id="notification-icon"
          className="relative p-3 bg-blue-100 rounded-2xl text-blue-500 cursor-pointer hover:bg-blue-200 transition"
        >
          <FaBell />
          <span
            id="notification-badge"
            className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white rounded-full px-1.5 py-0.5 text-xs"
          >
            50
          </span>
        </div>

        {/* Chart */}
        <div
          id="chart-icon"
          className="p-3 bg-blue-100 rounded-2xl cursor-pointer hover:bg-blue-200 transition"
        >
          <FcAreaChart />
        </div>

        {/* Settings */}
        <div
          id="settings-icon"
          className="p-3 bg-red-100 rounded-2xl text-red-500 cursor-pointer hover:bg-red-200 transition"
        >
          <SlSettings />
        </div>

        {/* Profile */}
        <div
          id="profile-container"
          className="flex items-center space-x-3 border-l pl-4 border-gray-200"
        >
          <span id="profile-text" className="text-sm text-gray-700">
            Hello, <b>Wilhelm samto tamba</b>
          </span>
          <img
            id="profile-avatar"
            src="/img/profile.jpg"
            className="w-10 h-10 rounded-full ring-2 ring-green-200 object-cover"
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
}
