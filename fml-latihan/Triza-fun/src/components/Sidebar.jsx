import { MdDashboard, MdAdd, MdErrorOutline, MdWeekend, MdLogout } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineUserGroup } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import { GiChefToque } from "react-icons/gi";

export default function Sidebar() {
  const navigate = useNavigate();

  const menus = [
    { id: "menu-1", name: "Dashboard", icon: MdDashboard, path: "/" },
    { id: "menu-2", name: "Orders", icon: AiOutlineShoppingCart, path: "/orders" },
    { id: "menu-3", name: "Customers", icon: HiOutlineUserGroup, path: "/customers" },
    { id: "menu-4", name: "Error 400", icon: MdErrorOutline, path: "/error-400" },
    { id: "menu-5", name: "Error 401", icon: MdErrorOutline, path: "/error-401" },
    { id: "menu-6", name: "Error 403", icon: MdErrorOutline, path: "/error-403" },
  ];

  return (
    <div className="flex flex-col min-h-screen w-72 bg-white shadow-2xl sticky top-0">
      {/* Logo */}
      <div className="p-8 border-b border-garis">
        <div className="flex items-center gap-3">
          <div className="bg-pink-500 p-2 rounded-xl">
            <MdWeekend className="text-white text-2xl" />
          </div>
          <div>
            <div className="flex items-baseline">
              <span className="font-poppins text-2xl font-bold text-gray-900">
                LuxWood
              </span>
              <span className="text-hijau text-2xl font-bold">.</span>
            </div>
            <span className="text-xs text-teks-samping font-medium tracking-wide">
              FURNITURE DASHBOARD
            </span>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 px-4 py-8 overflow-y-auto">
        <p className="text-xs font-semibold text-teks-samping px-4 mb-4 tracking-wider">
          MAIN MENU
        </p>

        <ul className="space-y-2">
          {menus.map((menu) => {
            const Icon = menu.icon;
            return (
              <li key={menu.id}>
                <NavLink
                  to={menu.path}
                  className={({ isActive }) =>
                    `flex items-center rounded-xl p-4 font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-pink-200 text-hijau font-extrabold"
                        : "text-gray-600 hover:bg-pink-200 hover:text-hijau"
                    }`
                  }
                >
                  <Icon className="mr-4 text-xl" />
                  {menu.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-garis">
        <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <GiChefToque className="text-white text-xl" />
            <p className="text-white text-sm font-semibold">Tambah Furniture Baru!</p>
          </div>
          <p className="text-white/70 text-xs mb-3">Kelola paket furniture dengan mudah</p>
          <button className="w-full bg-white/20 backdrop-blur rounded-xl py-2.5 text-white font-semibold text-sm hover:bg-white/30 transition-all flex items-center justify-center gap-2">
            <MdAdd className="text-lg" />
            Tambah Produk
          </button>
        </div>

        <button 
          onClick={() => navigate('/login')}
          className="mt-4 w-full flex items-center justify-center gap-2 p-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-semibold"
        >
          <MdLogout className="text-xl" />
          Logout
        </button>

        <div className="mt-6 text-center">
          <p className="text-xs font-semibold text-teks-samping">
            LuxWood Furniture
          </p>
          <p className="text-xs text-teks-samping/60 mt-1">
            © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
