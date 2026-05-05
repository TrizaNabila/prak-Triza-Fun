import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-white overflow-hidden font-sans">
      
      <div className="relative w-full h-full flex">
        
        {/* SISI KIRI: GAMBAR & SLOGAN (Mirip Referensi) */}
        <div className="hidden lg:block w-1/2 h-full relative p-4">
          <div 
            className="w-full h-full rounded-3xl bg-cover bg-center shadow-xl relative overflow-hidden"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1920')", 
            }}
          >
            {/* Overlay Pink Multiply sesuai referensi */}
            <div className="absolute inset-0 opacity-70 mix-blend-multiply bg-[#e91e63]"></div>
            
            {/* Konten Teks di Atas Gambar (Posisi bawah kiri sesuai referensi) */}
            <div className="absolute bottom-20 left-12 z-10 text-left">
               <h1 className="text-white text-4xl font-extrabold mb-2 tracking-tight">
                 LuxWood Furniture
               </h1>
               <p className="text-white/90 text-lg font-light italic">
                 "Elegan, Minimalis, Nyaman."
               </p>
            </div>
          </div>
        </div>

        {/* SISI KANAN: FORM REGISTER (Susunan Tulisan Presisi) */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center bg-white p-8 md:p-24">
          <div className="w-full max-w-[400px]">
            
            {/* Judul & Deskripsi (Rata Kiri) */}
            <div className="mb-12 text-left">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-3 tracking-tight">
                Sign Up
              </h2>
              <p className="text-gray-500 font-normal text-base leading-relaxed">
                Enter your details to register to LuxWood.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-10 text-left">
              
              {/* Field Nama */}
              <div className="group border-b border-gray-200 focus-within:border-[#e91e63] transition-colors duration-300">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full py-3 outline-none text-base bg-transparent text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Field Email */}
              <div className="group border-b border-gray-200 focus-within:border-[#e91e63] transition-colors duration-300">
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full py-3 outline-none text-base bg-transparent text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Field Password */}
              <div className="group border-b border-gray-200 focus-within:border-[#e91e63] transition-colors duration-300">
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full py-3 outline-none text-base bg-transparent text-gray-800 placeholder-gray-400"
                />
              </div>

              {/* Checkbox Terms (Layout horizontal presisi) */}
              <div className="flex items-center gap-4 pt-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-10 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#e91e63]"></div>
                </label>
                <p className="text-sm text-gray-500">
                  I agree to the <span className="text-gray-900 font-bold hover:underline cursor-pointer">Terms and Conditions</span>
                </p>
              </div>

              {/* Button & Link Login */}
              <div className="pt-4 flex flex-col items-center">
                <button
                  type="submit"
                  className="w-full bg-[#e91e63] shadow-lg shadow-pink-200 hover:shadow-pink-300 text-white font-bold py-4 rounded-2xl uppercase text-xs tracking-[0.2em] active:scale-[0.98] transition-all"
                >
                  Sign Up
                </button>

                <p className="text-sm text-gray-500 mt-10">
                  Already have an account?{" "}
                  <Link to="/login" className="text-[#e91e63] font-bold hover:underline">
                    Login
                  </Link>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}