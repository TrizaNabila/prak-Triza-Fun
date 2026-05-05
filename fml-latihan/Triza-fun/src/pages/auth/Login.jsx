import axios from "axios";
import { useState } from "react";
import { ImSpinner2 } from "react-icons/im";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [dataForm, setDataForm] = useState({ email: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    axios.post("https://dummyjson.com/user/login", {
      username: dataForm.email,
      password: dataForm.password,
    })
    .then(() => navigate("/"))
    .catch((err) => setError(err.response?.data.message || "Login Gagal"))
    .finally(() => setLoading(false));
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        // Menggunakan gambar furniture (interior minimalis)
        backgroundImage: "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1920')",
        zIndex: 9999 
      }}
    >
      {/* OVERLAY 1: Memberikan filter warna pink ke gambar furniture dengan teknik Multiply */}
      <div 
        className="absolute inset-0 opacity-60 mix-blend-multiply"
        style={{ backgroundColor: "#e91e63" }}
      ></div>

      {/* OVERLAY 2: Gradasi Gelap agar form tetap tajam dan mudah dibaca */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      
      <div className="relative z-10 w-full max-w-[400px] px-4">
        <div className="bg-white rounded-xl shadow-2xl p-6">
          
          {/* Header Pink Melayang - Khas Material Dashboard */}
          <div className="relative -mt-12 mb-6 py-6 px-4 text-center bg-[#e91e63] shadow-[0_4px_20px_0_rgba(233,30,99,0.5)] rounded-lg">
            <h4 className="text-white font-bold text-2xl mb-4">SIGN IN</h4>
            <div className="flex justify-center gap-8 text-white">
              <FaFacebook className="text-xl cursor-pointer hover:scale-110 transition-transform" />
              <FaGithub className="text-xl cursor-pointer hover:scale-110 transition-transform" />
              <FaGoogle className="text-xl cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6 text-left">
            {error && (
              <div className="text-[#e91e63] text-xs text-center font-bold italic bg-red-50 py-2 rounded">
                {error}
              </div>
            )}

            <div className="border-b border-gray-300 focus-within:border-[#e91e63] transition-all">
              <input 
                name="email" 
                type="text" 
                onChange={handleChange} 
                placeholder="Email" 
                className="w-full py-2 outline-none text-sm bg-transparent text-gray-700 placeholder-gray-400" 
              />
            </div>

            <div className="border-b border-gray-300 focus-within:border-[#e91e63] transition-all">
              <input 
                name="password" 
                type="password" 
                onChange={handleChange} 
                placeholder="Password" 
                className="w-full py-2 outline-none text-sm bg-transparent text-gray-700 placeholder-gray-400" 
              />
            </div>

            <div className="flex items-center gap-3">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#e91e63]"></div>
              </label>
              <span className="text-sm text-gray-500 font-light">Remember me</span>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#e91e63] shadow-[0_3px_3px_0_rgba(233,30,99,0.3)] hover:shadow-[0_14px_26px_-12px_rgba(233,30,99,0.4)] text-white font-bold py-3 rounded-lg uppercase text-xs tracking-widest active:scale-95 transition-all"
            >
              {loading ? <ImSpinner2 className="animate-spin mx-auto text-lg" /> : "SIGN IN"}
            </button>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-500">
                Don't have an account?{" "}
                <Link to="/register" className="text-[#e91e63] font-bold hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}