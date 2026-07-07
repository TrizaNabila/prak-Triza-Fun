import { useNavigate } from "react-router-dom";
import { MdArrowBack, MdHistory } from "react-icons/md";

export default function MemberBooking() {
  const navigate = useNavigate();

  const bookings = [
    { title: 'Furniture Styling Package', date: '15 Juni 2024', status: 'Selesai' },
    { title: 'Living Room Makeover', date: '10 Juni 2024', status: 'Proses' },
    { title: 'Dining Set Delivery', date: '05 Juni 2024', status: 'Proses' },
  ];

  const totalBookings = bookings.length;
  const completedBookings = bookings.filter((item) => item.status === 'Selesai').length;
  const inProgressBookings = bookings.filter((item) => item.status !== 'Selesai').length;

  return (
    <div className="min-h-screen bg-pink-50 text-slate-950 py-10 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
            <MdHistory className="h-5 w-5 text-pink-500" />
            <span>Riwayat Booking</span>
          </div>
          <button
            type="button"
            onClick={() => navigate('/member/dashboard')}
            className="text-sm font-semibold text-pink-600 transition hover:text-pink-700"
          >
            Kembali ke Dashboard
          </button>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-8">
          <div className="rounded-[24px] border border-pink-100 bg-white p-6 text-center shadow-sm">
            <p className="text-4xl font-bold text-orange-500">{totalBookings}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">Total</p>
          </div>
          <div className="rounded-[24px] border border-pink-100 bg-white p-6 text-center shadow-sm">
            <p className="text-4xl font-bold text-emerald-500">{completedBookings}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">Selesai</p>
          </div>
          <div className="rounded-[24px] border border-pink-100 bg-white p-6 text-center shadow-sm">
            <p className="text-4xl font-bold text-amber-500">{inProgressBookings}</p>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">Proses</p>
          </div>
        </div>

        <div className="overflow-hidden rounded-[40px] border border-pink-100 bg-white p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
          <div className="space-y-4">
            {bookings.map((item) => (
              <div key={item.title} className="flex flex-col gap-3 rounded-[24px] border border-slate-100 bg-slate-50 p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-base font-semibold text-slate-950">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.date}</p>
                </div>
                <span className={`inline-flex rounded-full px-4 py-2 text-xs font-semibold ${item.status === 'Selesai' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
