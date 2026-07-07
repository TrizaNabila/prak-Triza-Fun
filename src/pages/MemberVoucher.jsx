import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdLocalOffer, MdChair, MdHouse } from "react-icons/md";

export default function MemberVoucher() {
  const navigate = useNavigate();

  const vouchers = [
    {
      title: 'Diskon 20% Furniture',
      code: 'CROWN20',
      expiry: '31 Des 2026',
      priceLabel: '20%',
      status: 'Aktif',
      active: true,
    },
    {
      title: 'Voucher Rp 25.000',
      code: 'CROWN25',
      expiry: '15 Jul 2026',
      priceLabel: 'Rp 25.000',
      status: 'Aktif',
      active: true,
    },
    {
      title: 'Free Cushion Set',
      code: 'CUSHIONFREE',
      expiry: '01 Ags 2026',
      priceLabel: 'Gratis',
      status: 'Kadaluwarsa',
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-pink-50 text-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <button
            type="button"
            onClick={() => navigate('/member/dashboard')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
          >
            <MdArrowBack className="h-5 w-5" />
            Kembali ke Dashboard
          </button>
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-pink-700">
            <MdHouse className="h-4 w-4" />
            Voucher Furniture
          </div>
        </div>

        <div className="mb-10 overflow-hidden rounded-[40px] border border-pink-100 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black tracking-tight text-slate-950">Voucher Saya</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Kumpulkan dan gunakan voucher eksklusif Crown&Co untuk mempercantik rumah dan ruang nyaman Anda.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {vouchers.map((voucher) => (
            <div
              key={voucher.code}
              className={`rounded-[32px] border p-6 shadow-sm ${voucher.active ? 'border-pink-200 bg-white' : 'border-slate-200 bg-slate-100'}`}
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-3xl ${voucher.active ? 'bg-pink-100 text-pink-700' : 'bg-slate-200 text-slate-500'}`}>
                    <MdChair className="h-6 w-6" />
                  </div>
                  <div>
                    <p className={`text-xl font-semibold ${voucher.active ? 'text-slate-950' : 'text-slate-500'}`}>{voucher.title}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-2 text-sm">
                      <span className={`rounded-full px-3 py-1 ${voucher.active ? 'bg-slate-100 text-slate-700' : 'bg-slate-200 text-slate-500'}`}>
                        {voucher.code}
                      </span>
                      <span className={`rounded-full px-3 py-1 ${voucher.active ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-200 text-slate-500'}`}>
                        {voucher.status}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex min-w-fit items-center gap-4">
                  <div className={`rounded-full px-4 py-2 text-sm font-semibold ${voucher.active ? 'bg-pink-100 text-pink-700' : 'bg-slate-200 text-slate-500'}`}>
                    {voucher.priceLabel}
                  </div>
                  <p className="text-sm text-slate-500">{voucher.expiry}</p>
                </div>
              </div>

              {voucher.active ? (
                <button
                  type="button"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-pink-500 px-6 py-4 text-sm font-semibold text-white transition hover:bg-pink-600"
                >
                  Gunakan Voucher
                </button>
              ) : (
                <div className="mt-6 rounded-full border border-slate-200 bg-slate-200 px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.35em] text-slate-500">
                  Kadaluwarsa
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
