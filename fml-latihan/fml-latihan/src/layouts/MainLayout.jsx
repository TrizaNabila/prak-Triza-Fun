import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar tetap di kiri */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 p-6">
          {/* Outlet akan me-render halaman sesuai route aktif */}
          <Outlet />
        </main>
      </div>
    </div>
  );
}
