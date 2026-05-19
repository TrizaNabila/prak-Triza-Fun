import React, { useState } from "react";
import PageHeader from "../components/PagesHeader";

// Import Semua Komponen Hasil Arsitektur Pemecahan Mandiri
import CrmButton from "../components/basic/CrmButton";
import TableWrapperLayout from "../components/layout/TableWrapperLayout";
import FurnitureCard from "../components/data-display/FurnitureCard";
import CustomerTable from "../components/data-display/CustomerTable";
import CustomerInputField from "../components/form/CustomerInputField";
import AddCustomerModal from "../components/feedback/AddCustomerModal";
import SuccessToast from "../components/feedback/SuccessToast";
import KpiSummarySection from "../components/section/KpiSummarySection";
import LeadManagementSection from "../components/section/LeadManagementSection";

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [name, setName] = useState("");
  const [product, setProduct] = useState("");

  const furnitureGallery = [
    { name: "Scandinavian Chair", type: "Living Room", price: "Rp 1.2M", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=500" },
    { name: "Modern Sofa Pink", type: "Bedroom", price: "Rp 4.5M", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=500" },
    { name: "Wooden Dining Table", type: "Kitchen", price: "Rp 3.8M", img: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?q=80&w=500" },
  ];

  const [recentOrders, setRecentOrders] = useState([
    { id: "#ORD-5001", customer: "Alya Maharani", product: "Minimalist Sofa", status: "Completed", total: "Rp 4.500.000" },
    { id: "#ORD-5002", customer: "Bayu Prasetyo", product: "Office Chair", status: "Pending", total: "Rp 1.542.000" },
  ]);

  const handleSave = () => {
    if (name && product) {
      const nextId = `#ORD-${5000 + recentOrders.length + 1}`;
      setRecentOrders([
        ...recentOrders,
        { id: nextId, customer: name, product: product, status: "Pending", total: "Rp 2.500.000" }
      ]);
      setIsOpen(false);
      setName("");
      setProduct("");
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="space-y-10 pb-10 px-2">
      {/* Bagian Header Atas */}
      <div className="flex justify-between items-center pr-4">
        <PageHeader title="Dashboard" />
        <CrmButton onClick={() => setIsOpen(true)} />
      </div>

      {/* 1. SECTION COMPONENT: Stats Grid */}
      <KpiSummarySection />

      {/* 2. FURNITURE VISUAL GALLERY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-6">
        {furnitureGallery.map((item, i) => (
          <FurnitureCard key={i} {...item} />
        ))}
      </div>

      {/* 3. RECENT ORDERS TABLE */}
      <TableWrapperLayout>
        <LeadManagementSection>
          <CustomerTable data={recentOrders} />
        </LeadManagementSection>
      </TableWrapperLayout>

      {/* 4. FEEDBACK: Modal Input */}
      <AddCustomerModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="space-y-4 p-2">
          <h3 className="text-sm font-bold uppercase text-gray-700 tracking-wider mb-2">Tambah Transaksi Baru</h3>
          <CustomerInputField label="Nama Pelanggan" placeholder="Nama lengkap..." value={name} onChange={(e) => setName(e.target.value)} />
          <CustomerInputField label="Pesanan Furniture" placeholder="Contoh: Meja Jati" value={product} onChange={(e) => setProduct(e.target.value)} />
          <button onClick={handleSave} className="w-full bg-[#343a40] hover:bg-[#23272b] text-white text-xs font-bold uppercase py-2.5 rounded-xl mt-2 shadow-md transition-colors">
            Simpan Data
          </button>
        </div>
      </AddCustomerModal>

      {/* 5. FEEDBACK: Success Toast */}
      <SuccessToast show={showToast} />
    </div>
  );
}