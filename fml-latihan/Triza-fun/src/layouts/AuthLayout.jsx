import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    /* Kita buat layout ini bersih tanpa warna background/kotak putih 
       agar komponen Login bisa mengatur background gambarnya sendiri 
    */
    <div className="min-h-screen w-full">
      <Outlet />
    </div>
  );
}