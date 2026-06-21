import { MdDashboard, MdChair, MdLogout, MdPerson, MdReceiptLong, MdSettings, MdDashboardCustomize } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const menus = [
  { id: "1", name: "Dashboard", icon: <MdDashboard />, path: "/dashboard", category: "MAIN" },
    { id: "2", name: "Orders", icon: <MdReceiptLong />, path: "/orders", category: "PAGES" },
    { id: "3", name: "Customers", icon: <MdPerson />, path: "/customers", category: "PAGES" },
    { id: "4", name: "Products", icon: <MdChair />, path: "/products", category: "PAGES" }, 
    { id: "5", name: "Components", icon: <MdDashboardCustomize />, path: "/components", category: "PAGES" },
    { id: "6", name: "Settings", icon: <MdSettings />, path: "/settings", category: "ACCOUNT" },
  ];

  return (
    <aside className="fixed left-4 top-4 bottom-4 w-64 rounded-3xl z-50 flex flex-col font-['Roboto'] bg-white/95 border border-pink-100 shadow-[0_30px_90px_rgba(233,30,99,0.12)]">
      
      {/* PROFILE SECTION */}
      <div className="p-5 border-b mx-2 mt-2 border-pink-100">
        <div className="flex items-center gap-4 px-1">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=facearea" 
            className="w-10 h-10 rounded-full object-cover shadow-md"
            alt="Profile"
          />
          <div className="flex flex-col">
            <span className="text-slate-900 font-bold text-[13px] tracking-tight leading-tight">
              Triza Nabila Ariely
            </span>
            <span className="text-slate-500 text-[10px] font-light uppercase tracking-widest mt-1">
              Admin
            </span>
          </div>
        </div>
      </div>

      {/* MENU LIST */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto overflow-x-hidden">
        <ul className="space-y-1.5">
          {menus.map((menu, index) => {
            const showCategory = index === 0 || menus[index - 1].category !== menu.category;
            
            return (
              <li key={menu.id}>
                {showCategory && (
                  <p className="text-[10px] font-bold px-4 mt-6 mb-2 uppercase tracking-[0.25em] text-slate-500">
                    {menu.category}
                  </p>
                )}
                <NavLink
                  to={menu.path}
                  end={menu.path === "/"}
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 text-sm
                    ${isActive
                      ? "bg-pink-500 text-white shadow-lg shadow-pink-500/30 font-normal"
                      : "text-slate-700 hover:bg-pink-100 hover:text-slate-900 font-light"}`
                  }
                >
                  <div className="text-xl opacity-90">{menu.icon}</div>
                  <span className="tracking-wide">{menu.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* LOGOUT SECTION */}
      <div className="p-4 mx-2 mb-2 border-t border-pink-100">
        <button 
          onClick={() => { logout(); navigate('/login'); }}
          className="w-full flex items-center gap-4 px-4 py-3 transition-all text-[11px] uppercase font-bold tracking-[0.2em] text-slate-700 hover:text-slate-900"
        >
          <MdLogout className="text-lg text-pink-500" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}
