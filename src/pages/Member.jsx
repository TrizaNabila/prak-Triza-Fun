import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdEmail, MdLock } from "react-icons/md";
import { useAuth } from "../context/AuthContext";

export default function Member() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
    navigate('/member/dashboard');
  };

  return (
    <div className="min-h-screen bg-pink-50 text-slate-900 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <section className="rounded-[40px] bg-white p-8 shadow-[0_30px_80px_rgba(239,68,146,0.16)] border border-pink-100">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-500">Luxx Furniture</p>
                <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">Login Member Furniture</h1>
                <p className="mt-5 text-lg leading-8 text-slate-600">Masuk untuk mendapatkan promo furnitur eksklusif, voucher khusus, dan rekomendasi desain rumah yang hangat.</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <button onClick={() => navigate('/products')} className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/50 transition hover:opacity-95">Lihat Koleksi</button>
                  <button onClick={() => navigate('/')} className="rounded-full border border-orange-200 bg-white px-6 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50">Beranda</button>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-[32px] bg-pink-50 p-4 shadow-inner">
                <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=900&auto=format&fit=crop" alt="Furniture inspiration" className="h-96 w-full rounded-[28px] object-cover" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/90 to-transparent" />
              </div>
            </div>
          </section>

          <aside className="rounded-[40px] bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] border border-pink-100">
            <button onClick={() => navigate('/')} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900">
              <MdArrowBack className="text-base" /> Kembali ke Beranda
            </button>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-pink-500">Akses Member</p>
                <h2 className="mt-4 text-3xl font-bold text-slate-950">Masuk untuk penawaran eksklusif furnitur</h2>
                <p className="mt-3 text-sm text-slate-600">Dapatkan akses lebih cepat ke koleksi terbaru, diskon, dan ide dekorasi bernuansa hangat.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <label className="block text-sm text-slate-700">
                  Email
                  <div className="mt-3 flex items-center gap-3 rounded-3xl border border-pink-100 bg-pink-50 px-4 py-3">
                    <MdEmail className="text-pink-500" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email@triza-fun.com"
                      className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
                    />
                  </div>
                </label>

                <label className="block text-sm text-slate-700">
                  Password
                  <div className="mt-3 flex items-center gap-3 rounded-3xl border border-pink-100 bg-pink-50 px-4 py-3">
                    <MdLock className="text-pink-500" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan password"
                      className="w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-500"
                    />
                  </div>
                </label>

                <button type="submit" className="w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/50 transition hover:opacity-95">
                  Masuk Sekarang
                </button>
              </form>

              <div className="rounded-[28px] border border-pink-100 bg-pink-50 p-5 text-sm text-slate-700">
                <p>Belum punya akun member? <button onClick={() => navigate('/')} className="rounded-full border border-orange-200 bg-white px-3 py-1 text-sm font-semibold text-orange-600 hover:bg-orange-50">Daftar Sekarang</button></p>
                <p className="mt-2 text-slate-600">Bergabung sekarang untuk mendapatkan promo dan rekomendasi furniture yang cocok dengan suasana rumahmu.</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-pink-500">Promo Terbaik</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">Diskon sofa hingga 20%</p>
                </div>
                <div className="rounded-[28px] bg-white p-5 shadow-sm">
                  <p className="text-xs uppercase tracking-[0.35em] text-pink-500">Voucher Eksklusif</p>
                  <p className="mt-3 text-lg font-semibold text-slate-950">Potongan khusus untuk member</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
