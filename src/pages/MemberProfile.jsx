import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdClose, MdEdit, MdEmail, MdLocationOn, MdPerson, MdShield, MdStar, MdWallet, MdCalendarToday, MdPhone } from "react-icons/md";

export default function MemberProfile() {
  const navigate = useNavigate();
  const [showUpgrade, setShowUpgrade] = useState(false);

  const profile = {
    name: "Annisa Ramadhani",
    email: "annisa@example.com",
    phone: "+62 812-3456-7890",
    address: "Jl. Mawar No. 12, Jakarta",
    booking: "3",
    points: "125",
    spent: "Rp 1.250.000",
  };

  return (
    <div className="min-h-screen bg-pink-50 text-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.35em] text-pink-500 font-semibold">
            <MdPerson className="h-5 w-5" />
            Profil Member
          </div>
          <button
            type="button"
            onClick={() => navigate('/member/dashboard')}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            <MdArrowBack className="h-5 w-5" />
            Kembali ke Dashboard
          </button>
        </div>

        <div className="overflow-hidden rounded-[40px] bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] border border-pink-100">
          <div className="bg-gradient-to-r from-pink-500 to-fuchsia-600 px-8 py-10 text-white">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-pink-500 text-4xl font-bold text-white shadow-lg">
                ME
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.35em] text-pink-100/90">Member</p>
                <h1 className="text-5xl font-black tracking-tight">Profil Saya</h1>
                <p className="max-w-2xl text-sm text-pink-100/90">
                  Kelola data diri Anda di sini untuk mendapatkan pengalaman membership yang lebih lengkap.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  { label: 'Total Booking', value: profile.booking, icon: MdCalendarToday },
                  { label: 'Total Poin', value: profile.points, icon: MdStar },
                  { label: 'Total Belanja', value: profile.spent, icon: MdWallet },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-[32px] border border-white/20 bg-white/10 px-6 py-5 text-left shadow-sm backdrop-blur-sm">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white/20 text-white">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <p className="text-xs uppercase tracking-[0.35em] text-pink-100/90">{item.label}</p>
                          <p className="mt-2 text-2xl font-semibold text-white">{item.value}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="px-8 py-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Data Diri</p>
                <h2 className="mt-3 text-3xl font-bold text-slate-950">Informasi Personal</h2>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-5 py-3 text-sm font-semibold text-pink-700 transition hover:bg-pink-200"
              >
                <MdEdit className="h-5 w-5" />
                Edit Profil
              </button>
            </div>

            <div className="mt-8 grid gap-4">
              {[
                { label: 'Nama Lengkap', value: profile.name, icon: MdPerson },
                { label: 'Email', value: profile.email, icon: MdEmail },
                { label: 'No. Telepon', value: profile.phone, icon: MdPhone },
                { label: 'Alamat', value: profile.address, icon: MdLocationOn },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-[32px] border border-slate-100 bg-slate-50 p-5 shadow-sm">
                    <div className="flex items-center gap-3 text-slate-500">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-pink-500">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs uppercase tracking-[0.35em] text-slate-500">{item.label}</p>
                        <p className="mt-2 text-base font-semibold text-slate-950">{item.value}</p>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div className="rounded-[32px] border border-pink-200 bg-pink-50 p-5 shadow-sm">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-pink-600">Membership</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white">Regular</span>
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">
                        <MdShield className="h-4 w-4" /> Aktif
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowUpgrade(true)}
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-pink-200/50 transition hover:bg-pink-600"
            >
              Upgrade Membership
            </button>
          </div>
        </div>
      </div>

      {showUpgrade ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4">
          <div className="relative w-full max-w-6xl overflow-hidden rounded-[32px] border border-pink-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.18)]">
            <button
              type="button"
              onClick={() => setShowUpgrade(false)}
              className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition hover:bg-slate-200"
              aria-label="Tutup"
            >
              <MdClose className="h-6 w-6" />
            </button>

            <div className="border-b border-slate-200 px-8 py-8">
              <p className="text-xs uppercase tracking-[0.35em] text-pink-500">Upgrade Membership</p>
              <h2 className="mt-3 text-4xl font-black text-slate-950">Pilih paket yang sesuai dengan kebutuhanmu</h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                Nikmati keuntungan lebih besar dengan paket berbayar. Pilih paket yang paling cocok untuk kebutuhan furniture dan gaya hidupmu.
              </p>
            </div>

            <div className="px-8 py-8">
              <div className="rounded-[32px] border border-pink-200 bg-pink-50 px-6 py-5 mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-pink-200 bg-white text-pink-500">
                    <MdPerson className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-pink-500">Member Saat Ini</p>
                    <p className="text-xl font-bold text-slate-950">Regular</p>
                  </div>
                </div>
                <span className="inline-flex rounded-full bg-pink-100 px-4 py-2 text-xs font-semibold text-pink-700">Aktif</span>
              </div>

              <div className="grid gap-4 md:grid-cols-4">
                {[
                  {
                    title: 'Reguler',
                    subtitle: 'Rp 0',
                    description: 'Selamanya',
                    features: ['Diskon 5% setiap transaksi', 'Poin 0.5x lipat', 'Akses ke semua layanan'],
                    accent: 'slate',
                    current: true,
                    buttonText: 'Member Saat Ini',
                    buttonDisabled: true,
                  },
                  {
                    title: 'Silver',
                    subtitle: 'Rp 75.000 / tahun',
                    features: ['Diskon 10% setiap transaksi', 'Free konsultasi styling', 'Poin 1x lipat', 'Voucher ulang tahun Rp 25.000'],
                    accent: 'slate',
                    buttonText: 'Pilih Paket',
                  },
                  {
                    title: 'Gold',
                    subtitle: 'Rp 150.000 / tahun',
                    features: ['Diskon 20% setiap transaksi', 'Free hair serum setiap bulan', 'Poin 2x lipat', 'Voucher ulang tahun Rp 50.000'],
                    accent: 'yellow',
                    badge: 'Berbayar',
                    buttonText: 'Pilih Paket',
                  },
                  {
                    title: 'Premium',
                    subtitle: 'Rp 350.000 / tahun',
                    features: ['Diskon 30% setiap transaksi', 'Free treatment setiap bulan', 'Poin 3x lipat', 'Voucher ulang tahun Rp 100.000', 'Akses prioritas booking'],
                    accent: 'purple',
                    badge: 'Berbayar',
                    buttonText: 'Pilih Paket',
                  },
                ].map((plan) => (
                  <div
                    key={plan.title}
                    className={`rounded-[32px] border p-6 shadow-sm ${plan.accent === 'yellow' ? 'bg-amber-500 text-white border-amber-500' : plan.accent === 'purple' ? 'bg-fuchsia-500 text-white border-fuchsia-500' : 'bg-slate-100 text-slate-950 border-slate-200'}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl ${plan.accent === 'yellow' ? 'bg-white/20 text-white' : plan.accent === 'purple' ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'}`}>
                          <MdPerson className="h-6 w-6" />
                        </div>
                        <div className="mt-6">
                          <p className={`text-lg font-bold ${plan.accent === 'yellow' || plan.accent === 'purple' ? 'text-white' : 'text-slate-950'}`}>{plan.title}</p>
                          <p className={`mt-2 text-sm ${plan.accent === 'yellow' || plan.accent === 'purple' ? 'text-slate-100' : 'text-slate-500'}`}>{plan.subtitle}</p>
                        </div>
                      </div>
                      {plan.badge ? (
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${plan.accent === 'purple' ? 'bg-white/20 text-white' : 'bg-white/20 text-white'}`}>{plan.badge}</span>
                      ) : null}
                    </div>
                    <p className={`mt-6 text-sm ${plan.accent === 'yellow' || plan.accent === 'purple' ? 'text-white/90' : 'text-slate-500'}`}>{plan.description ?? ''}</p>
                    <ul className={`mt-6 space-y-3 text-sm ${plan.accent === 'yellow' || plan.accent === 'purple' ? 'text-white/90' : 'text-slate-600'}`}>
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className={`mt-1 h-2.5 w-2.5 rounded-full ${plan.accent === 'yellow' ? 'bg-white' : plan.accent === 'purple' ? 'bg-white' : 'bg-slate-500'}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <button
                      type="button"
                      disabled={plan.buttonDisabled}
                      className={`mt-8 w-full rounded-full px-5 py-3 text-sm font-semibold transition ${plan.buttonDisabled ? 'cursor-not-allowed bg-slate-300 text-slate-500' : plan.accent === 'yellow' ? 'bg-white text-amber-600 hover:bg-white/90' : plan.accent === 'purple' ? 'bg-white text-fuchsia-600 hover:bg-white/90' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
