import { useState } from "react";
import productsData from "../data/Products.json";
import PageHeader from "../components/PagesHeader";

const getProductImage = (product) => {
  return product.image;
};

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div id="dashboard-container" className="pb-10">
      <PageHeader title="Products" />

      <div className="grid gap-6 xl:grid-cols-4">
        <div className="xl:col-span-4 space-y-6">
          <div className="bg-slate-950/90 rounded-3xl shadow-sm border border-slate-800 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-200">Daftar Produk</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Menampilkan {productsData.length} produk sesuai data dari Products.json.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-300">
                <span className="text-pink-500">Inventory</span>
                <span>{productsData.length} Items</span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {productsData.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group block w-full text-left rounded-3xl border bg-slate-900 shadow-sm transition hover:-translate-y-1 hover:shadow-md border-slate-800"
                >
                    <div className="overflow-hidden rounded-3xl border-b border-slate-800 bg-slate-800">
                      <img
                        src={getProductImage(product)}
                        alt={product.tittle}
                        className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between gap-4">
                        <span className="rounded-full bg-slate-800 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-300">
                          {product.category}
                        </span>
                        <span
                          className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase ${
                            product.stock <= 10
                              ? "bg-red-100 text-red-600"
                              : product.stock <= 25
                              ? "bg-yellow-100 text-amber-700"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          Stock {product.stock}
                        </span>
                      </div>

                      <div className="mt-5">
                        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-pink-400">
                          {product.tittle}
                        </h3>
                        <p className="mt-2 text-sm text-slate-400">{product.brand}</p>
                      </div>

                      <div className="mt-5 flex items-center justify-between text-sm text-slate-400">
                        <span className="uppercase tracking-[0.15em]">{product.code}</span>
                        <span className="font-bold text-slate-100">Rp {product.price.toLocaleString("id-ID")}</span>
                      </div>
                    </div>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Detail Produk */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-3xl bg-slate-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Tombol Close */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-6 top-6 z-10 rounded-full bg-slate-800 p-2 shadow-md transition hover:bg-slate-700"
            >
              <svg
                className="h-6 w-6 text-slate-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Gambar Produk */}
            <div className="overflow-hidden rounded-t-3xl bg-slate-800">
              <img
                src={getProductImage(selectedProduct)}
                alt={selectedProduct.tittle}
                className="h-96 w-full object-cover"
              />
            </div>

            {/* Detail Produk */}
            <div className="p-8">
              <div className="mb-6">
                <span className="text-xs uppercase tracking-[0.3em] font-bold text-pink-500">
                  Product Detail
                </span>
                <h2 className="mt-2 text-3xl font-bold text-slate-100">
                  {selectedProduct.tittle}
                </h2>
                <p className="mt-2 text-sm text-slate-400">Kode produk {selectedProduct.code}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Category</p>
                  <p className="mt-2 font-semibold text-slate-200">{selectedProduct.category}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Brand</p>
                  <p className="mt-2 font-semibold text-slate-200">{selectedProduct.brand}</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Stock</p>
                  <p className="mt-2 font-semibold text-slate-200">{selectedProduct.stock} pcs</p>
                </div>
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Price</p>
                  <p className="mt-2 text-xl font-black text-slate-100">
                    Rp {selectedProduct.price.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="mt-6 w-full rounded-2xl border border-pink-500 bg-pink-500 px-4 py-3 font-bold text-white transition hover:bg-pink-600 hover:border-pink-600"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
