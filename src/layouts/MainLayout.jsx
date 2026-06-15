import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";

export default function MainLayout() {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-[#040814] text-slate-100" : "bg-slate-100 text-slate-900"}`}>
      <Sidebar />

      {/* Konten utama bergeser ke kanan sebesar lebar sidebar + margin */}
      <div className="ml-72 p-6 transition-all duration-300">
        <main className="max-w-[1200px] mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}