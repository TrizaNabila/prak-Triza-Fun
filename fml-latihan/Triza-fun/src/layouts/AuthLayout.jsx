import { Outlet } from "react-router-dom";
import { MdWeekend } from "react-icons/md";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-200">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-x-1/2 translate-y-1/2" />

      <div className="relative bg-white p-8 rounded-3xl shadow-xl w-full max-w-md">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="bg-pink-500 p-2.5 rounded-xl shadow">
            <MdWeekend className="text-white text-2xl" />
          </div>
          <div className="flex items-baseline">
            <span className="font-poppins text-3xl font-extrabold text-gray-900">
              LuxWood
            </span>
            <span className="text-pink-500 text-3xl font-extrabold">.</span>
          </div>
        </div>

        {/* Halaman auth (Login/Register/Forgot) */}
        <Outlet />

        <p className="text-center text-xs text-gray-400 mt-8">
          © 2025 LuxWood Furniture Admin Dashboard. All rights reserved.
        </p>
      </div>
    </div>
  );
}
