import { MdDashboard, MdChair, MdLogout, MdPerson, MdReceiptLong, MdSettings } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const menus = [
    { id: "1", name: "Dashboard", icon: <MdDashboard />, path: "/", category: "MAIN" },
    { id: "2", name: "Orders", icon: <MdReceiptLong />, path: "/orders", category: "PAGES" },
    { id: "3", name: "Customers", icon: <MdPerson />, path: "/customers", category: "PAGES" },
    /* PATH harus /products agar sesuai dengan App.jsx dan tidak Error 404 */
    { id: "4", name: "Products", icon: <MdChair />, path: "/products", category: "PAGES" }, 
    { id: "5", name: "Settings", icon: <MdSettings />, path: "/settings", category: "ACCOUNT" },
  ];

  return (
    <aside className="fixed left-4 top-4 bottom-4 w-64 bg-[#343a40] rounded-2xl z-50 flex flex-col font-['Roboto'] shadow-none border-0">
      
      {/* PROFILE SECTION */}
      <div className="p-5 border-b border-white/5 mx-2 mt-2">
        <div className="flex items-center gap-4 px-1">
          <img 
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=facearea" 
            className="w-10 h-10 rounded-full object-cover shadow-md"
            alt="Profile"
          />
          <div className="flex flex-col">
            <span className="text-white font-bold text-[13px] tracking-tight leading-tight">
              Triza Nabila Ariely
            </span>
            <span className="text-white/40 text-[10px] font-light uppercase tracking-widest mt-1">
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
                  <p className="text-[10px] font-bold text-white/30 px-4 mt-6 mb-2 uppercase tracking-[0.25em]">
                    {menu.category}
                  </p>
                )}
                <NavLink
                  to={menu.path}
                  // Logika Active agar tombol menyala pink saat diklik
                  className={({ isActive }) =>
                    `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 text-sm
                    ${isActive 
                      ? "bg-gradient-to-tr from-[#ec407a] to-[#d81b60] text-white shadow-lg shadow-pink-500/40 font-normal" 
                      : "text-white/70 hover:bg-white/10 hover:text-white font-light"}`
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
      <div className="p-4 border-t border-white/5 mx-2 mb-2">
        <button 
          onClick={() => navigate('/login')}
          className="w-full flex items-center gap-4 px-4 py-3 text-white/40 hover:text-white transition-all text-[11px] uppercase font-bold tracking-[0.2em]"
        >
          <MdLogout className="text-lg text-pink-500" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}