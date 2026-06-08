import PageHeader from "../components/PagesHeader";

const customerNames = [
  "Alya Maharani",
  "Bayu Prasetyo",
  "Citra Dewi",
  "Dani Kurniawan",
  "Elisa Putri",
  "Fajar Hadi",
  "Gina Ramadhani",
  "Hendra Wijaya",
  "Indah Sari",
  "Joko Santoso",
  "Kirana Amelia",
  "Lukas Gunawan",
  "Maya Intan",
  "Nadia Safitri",
  "Oscar Fauzan",
  "Putu Adi",
  "Qori Nabila",
  "Rafa Pratama",
  "Salsa Nur",
  "Tito Rahman",
  "Uli Ferdiansyah",
  "Vina Anggraeni",
  "Wira Nugraha",
  "Xenia Natasya",
  "Yoga Saputra",
  "Zahra Aulia",
  "Aditya Saputra",
  "Bella Nirmala",
  "Cahya Purnama",
  "Dewi Kuncoro",
];

const customerLoyalty = ["Bronze", "Silver", "Gold"];

const customersData = Array.from({ length: 30 }, (_, i) => ({
  id: `CUS-${1001 + i}`,
  name: customerNames[i],
  email: `${customerNames[i].toLowerCase().replace(/\s+/g, ".")}@example.com`,
  phone: `0812-34${(5600 + i).toString().padStart(4, "0")}`,
  loyalty: customerLoyalty[i % customerLoyalty.length],
  orders: (i * 3 + 2) % 20 + 1,
}));

export default function Customers() {
  return (
    <div className="space-y-10 pb-10 px-2 text-slate-200">
      <PageHeader title="Customers" />

      <div className="mt-6 bg-slate-950/90 rounded-3xl shadow-xl border border-slate-800 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-900/90 border-b border-slate-800">
              <th className="p-4 font-semibold text-slate-300">Customer ID</th>
              <th className="p-4 font-semibold text-slate-300">Name</th>
              <th className="p-4 font-semibold text-slate-300">Contact Info</th>
              <th className="p-4 font-semibold text-slate-300">Total Order</th>
              <th className="p-4 font-semibold text-slate-300">Loyalty</th>
            </tr>
          </thead>
          <tbody>
            {customersData.map((cus) => (
              <tr
                key={cus.id}
                className="border-b border-slate-800 hover:bg-slate-800/60 transition-colors"
              >
                <td className="p-4 text-sm font-medium text-pink-300">{cus.id}</td>
                <td className="p-4 text-sm font-bold text-white">{cus.name}</td>
                <td className="p-4 text-sm text-slate-400">
                  <div>{cus.email}</div>
                  <div className="text-xs text-slate-500">{cus.phone}</div>
                </td>
                <td className="p-4 text-sm text-slate-300 font-medium">{cus.orders}x</td>
                <td className="p-4 text-sm">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      cus.loyalty === "Gold"
                        ? "bg-amber-100/15 text-amber-300"
                        : cus.loyalty === "Silver"
                        ? "bg-slate-700/70 text-slate-200"
                        : "bg-orange-100/15 text-orange-300"
                    }`}
                  >
                    {cus.loyalty}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
