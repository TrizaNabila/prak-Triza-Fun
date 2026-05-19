import React from 'react';

export default function ActivityList() {
  const activities = [
    "Triza mengonfirmasi pembayaran Meja Makan Jati",
    "Pesanan Sofa Scandi di-packing oleh gudang",
    "Klien baru merequest custom ukuran lemari pakaian"
  ];
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border">
      <h3 className="font-semibold text-gray-700 mb-3">Log Transaksi Toko Furniture</h3>
      <ul className="space-y-2 text-sm text-gray-600">
        {activities.map((act, i) => <li key={i} className="border-b pb-2 last:border-0">• {act}</li>)}
      </ul>
    </div>
  );
}