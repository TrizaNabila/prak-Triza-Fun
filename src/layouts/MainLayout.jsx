import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-[#f0f2f5]">
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