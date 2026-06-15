import PageHeader from "../components/PagesHeader";
import TableWrapperLayout from "../components/layout/TableWrapperLayout";

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

const products = [
  "Set Ruang Tamu Modern",
  "Meja Makan Kayu Solid",
  "Lemari Pakaian Minimalis",
  "Kursi Kantor Ergonomis",
  "Rak Buku Serbaguna",
  "Sofa 3-Seater Pink",
  "Meja Belajar Anak",
  "Buffet TV Cabinet",
  "Rak Sepatu Sliding",
  "Nakas Samping Tempat Tidur",
];

const statuses = ["Pending", "Completed", "Cancelled"];

const ordersData = Array.from({ length: 30 }, (_, i) => ({
  id: `#ORD-${5001 + i}`,
  customer: customerNames[i],
  menu: products[i % products.length],
  status: statuses[i % statuses.length],
  total: ((i * 193457 + 420000) % 2000000 + 250000).toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
  }),
  date: `2024-03-${(i % 28 + 1).toString().padStart(2, "0")}`,
}));

export default function Orders() {
  return (
    <div id="dashboard-container" className="pb-10">
      <PageHeader title="Orders" />

      <TableWrapperLayout>
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-lg font-bold text-slate-100">Daftar Pesanan</h2>
          <p className="mt-2 text-sm text-slate-400">Semua pesanan terbaru ditampilkan dengan tampilan tema dashboard.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead>
              <tr className="bg-slate-900 border-b border-slate-800">
                <th className="p-4 font-semibold text-slate-400">Order ID</th>
                <th className="p-4 font-semibold text-slate-400">Customer</th>
                <th className="p-4 font-semibold text-slate-400">Produk</th>
                <th className="p-4 font-semibold text-slate-400">Status</th>
                <th className="p-4 font-semibold text-slate-400">Total Price</th>
                <th className="p-4 font-semibold text-slate-400">Date</th>
              </tr>
            </thead>
            <tbody>
              {ordersData.map((order) => (
                <tr
                  key={order.id}
                  className="border-b border-slate-800 hover:bg-slate-900/80 transition-colors"
                >
                  <td className="p-4 text-sm font-bold text-slate-100">{order.id}</td>
                  <td className="p-4 text-sm text-slate-300">{order.customer}</td>
                  <td className="p-4 text-sm text-slate-400">{order.menu}</td>
                  <td className="p-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        order.status === "Completed"
                          ? "bg-pink-500/10 text-pink-300"
                          : order.status === "Pending"
                          ? "bg-blue-500/10 text-blue-300"
                          : "bg-rose-500/10 text-rose-300"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-sm font-semibold text-slate-100">{order.total}</td>
                  <td className="p-4 text-sm text-slate-400 font-medium">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </TableWrapperLayout>
    </div>
  );
}
