import PageHeader from "../components/PagesHeader";

export default function Settings() {
  return (
    <div id="dashboard-container" className="pb-10">
      <PageHeader title="Settings" />

      <div className="mt-6">
        <div className="p-6 rounded-lg border bg-white border-pink-100 shadow-sm">
          <div>
            <p className="text-xs uppercase tracking-wide font-semibold text-pink-500">Tema Aplikasi</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900">Tema Light Fixed</h2>
            <p className="mt-3 text-sm text-slate-600">Tema aplikasi sudah dikunci ke tampilan light dengan warna serupa halaman Guest.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
