import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { MdCalendarToday, MdCardGiftcard, MdClose, MdHistory, MdLocalOffer, MdLogout, MdPerson, MdStar, MdWallet } from "react-icons/md";

export default function MemberDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [showUpgrade, setShowUpgrade] = useState(false);

  return (
    <div className="min-h-screen bg-pink-50 text-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="rounded-[40px] bg-white p-10 shadow-[0_30px_80px_rgba(239,68,146,0.14)] border border-pink-100">
          <div className="flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-pink-500">Member Area</p>
              <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-slate-950 sm:text-6xl">Hai, Member!</h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-600">
                Selamat datang di dashboard member Crown&Co. Nikmati promo furniture eksklusif, voucher khusus, dan ide dekorasi yang selalu up-to-date.
              </p>
            </div>
            <button
              onClick={() => setShowUpgrade(true)}
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-200/50 transition hover:opacity-95"
            >
              Upgrade Membership
            </button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'Profil Saya', icon: MdPerson, action: () => navigate('/member/profile') },
            { title: 'Riwayat Booking', icon: MdHistory, action: () => navigate('/member/riwayat-booking') },
            { title: 'Voucher Saya', icon: MdLocalOffer, action: () => navigate('/member/voucher') },
            { title: 'Logout', icon: MdLogout, action: logout },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.title}
                type="button"
                onClick={item.action}
                className="group flex flex-col items-center justify-center gap-4 rounded-[32px] border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-md"
              >
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-orange-100 text-orange-600 transition group-hover:bg-orange-200">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="text-base font-semibold text-slate-950">{item.title}</span>
              </button>
            );
          })}
        </div>

      {showUpgrade ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
          <div className="absolute inset-0 bg-slate-950/50" onClick={() => setShowUpgrade(false)} />
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-[32px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <button
              onClick={() => setShowUpgrade(false)}
              className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              aria-label="Tutup"
            >
              <MdClose className="h-5 w-5" />
            </button>
            <div className="border-b border-slate-200 bg-slate-50 px-6 py-5">
              <p className="text-xs uppercase tracking-[0.35em] text-pink-500">Upgrade Membership</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950">Pilih paket yang sesuai dengan kebutuhanmu</h2>
            </div>
            <div className="bg-[#fff4ed] px-6 py-4">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-pink-500">Member Saat Ini</p>
                  <p className="mt-1 text-lg font-semibold text-slate-950">Reguler</p>
                </div>
                <span className="inline-flex rounded-full border border-pink-200 bg-white px-4 py-2 text-sm font-semibold text-pink-600 shadow-sm">Reguler</span>
              </div>
            </div>
            <div className="p-6">
              <div className="max-h-[66vh] overflow-y-auto pr-1">
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    {
                      title: 'Reguler',
                      price: 'Gratis',
                      description: 'Selamanya',
                      features: ['Diskon 5% setiap transaksi', 'Poin 0.5x lipat', 'Akses ke semua layanan'],
                      accent: 'pink',
                      selected: true,
                    },
                    {
                      title: 'Silver',
                      price: 'Rp 75.000',
                      description: '/ tahun',
                      features: ['Diskon 10% setiap transaksi', 'Free konsultasi styling', 'Poin 1x lipat', 'Voucher ulang tahun Rp 25.000'],
                      accent: 'slate',
                    },
                    {
                      title: 'Gold',
                      price: 'Rp 150.000',
                      description: '/ tahun',
                      features: ['Diskon 20% setiap transaksi', 'Free hair serum setiap bulan', 'Poin 2x lipat', 'Voucher ulang tahun Rp 50.000'],
                      accent: 'orange',
                      badge: 'POPULAR',
                    },
                    {
                      title: 'Premium',
                      price: 'Rp 350.000',
                      description: '/ tahun',
                      features: ['Diskon 30% setiap transaksi', 'Free treatment setiap bulan', 'Poin 3x lipat', 'Voucher ulang tahun Rp 100.000', 'Akses prioritas booking'],
                      accent: 'purple',
                    },
                  ].map((plan) => (
                    <div
                      key={plan.title}
                      className={`rounded-[32px] border p-6 shadow-sm ${plan.selected ? 'border-pink-500 bg-white' : 'border-slate-200 bg-white'}`}
                    >
                      <div className="mb-5 flex items-center justify-between gap-4">
                        <div>
                          <div className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-3xl ${plan.accent === 'pink' ? 'bg-pink-100 text-pink-600' : plan.accent === 'orange' ? 'bg-orange-100 text-orange-600' : plan.accent === 'purple' ? 'bg-violet-100 text-violet-600' : 'bg-slate-100 text-slate-600'}`}>
                            <span className="text-2xl font-bold">★</span>
                          </div>
                          <h3 className={`text-2xl font-bold ${plan.selected ? 'text-slate-950' : 'text-slate-900'}`}>{plan.title}</h3>
                          <p className="mt-2 text-sm text-slate-500">{plan.description}</p>
                        </div>
                        {plan.badge ? (
                          <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">{plan.badge}</span>
                        ) : null}
                      </div>
                      <div className="mb-6">
                        <p className="text-3xl font-extrabold text-slate-950">{plan.price}</p>
                      </div>
                      <ul className="space-y-3 text-sm text-slate-600">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <span className={`mt-1 h-2.5 w-2.5 rounded-full ${plan.accent === 'pink' ? 'bg-pink-500' : plan.accent === 'orange' ? 'bg-orange-500' : plan.accent === 'purple' ? 'bg-violet-500' : 'bg-slate-400'}`} />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-8 rounded-[32px] bg-gradient-to-r from-pink-500 to-fuchsia-600 p-1 shadow-lg shadow-pink-200/50">
                <button
                  onClick={() => alert('Konfirmasi upgrade membership belum tersedia di demo.')}
                  className="w-full rounded-[30px] bg-white px-6 py-4 text-sm font-semibold text-pink-600 transition hover:bg-pink-50"
                >
                  ✨ KONFIRMASI UPGRADE KE REGULER
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-1">
          <div className="space-y-6 rounded-[40px] bg-white p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)] border border-pink-100">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                { label: 'Total Booking', value: '0', icon: MdCalendarToday, iconClass: 'text-orange-500 bg-orange-100' },
                { label: 'Poin Saya', value: '0', icon: MdStar, iconClass: 'text-sky-500 bg-sky-100' },
                { label: 'Voucher', value: '2', icon: MdCardGiftcard, iconClass: 'text-emerald-500 bg-emerald-100' },
                { label: 'Total Belanja', value: 'Rp 0', icon: MdWallet, iconClass: 'text-fuchsia-500 bg-fuchsia-100' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[32px] border border-slate-100 bg-slate-50 p-6 shadow-sm">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl ${item.iconClass}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="mt-4 text-xs uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
                    <p className="mt-3 text-3xl font-bold text-slate-950">{item.value}</p>
                  </div>
                );
              })}
            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-[40px] border border-pink-100 bg-pink-50 p-7 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-pink-500">Loyalty</p>
                    <h2 className="mt-3 text-2xl font-bold text-slate-950">Regular</h2>
                  </div>
                  <MdStar className="text-4xl text-pink-500" />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Kumpulkan lebih banyak poin untuk naik ke tier Gold dan dapatkan reward furniture yang lebih istimewa.
                </p>
              </div>
              <div className="rounded-[40px] border border-slate-100 bg-white p-7 shadow-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Voucher Saya</p>
                <h2 className="mt-3 text-2xl font-bold text-slate-950">2 Aktif</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Dapatkan potongan khusus untuk pembelian furniture pilihan yang cocok dengan rumahmu.
                </p>
              </div>
            </div>

            <div className="rounded-[40px] border border-slate-100 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Riwayat Booking Terbaru</p>
                  <h3 className="mt-2 text-xl font-semibold text-slate-950">Ruang Tamu Custom</h3>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">Selesai</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                15 Juni 2024 — pesanan furniture premium telah selesai dikirim dan siap mempercantik ruanganmu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
