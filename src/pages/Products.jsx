import { Link, useParams } from "react-router-dom";
import productsData from "../data/Products.json";
import PageHeader from "../components/PagesHeader";

export default function Products() {
  const { id } = useParams();
  const selectedProduct = id ? productsData.find((item) => item.id === parseInt(id, 10)) : null;

  return (
    <div id="dashboard-container" className="pb-10">
      <PageHeader title="Products" />

      <div className="grid gap-6 xl:grid-cols-4">
        <div className="xl:col-span-3 space-y-6">
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-800">Daftar Produk</h2>
                <p className="mt-2 text-sm text-gray-500">
                  Menampilkan {productsData.length} produk sesuai data dari Products.json.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700">
                <span className="text-pink-500">Inventory</span>
                <span>{productsData.length} Items</span>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
              {productsData.map((product) => {
                const isSelected = selectedProduct?.id === product.id;
                return (
                  <Link
                    key={product.id}
                    to={`/products/${product.id}`}
                    className={`group block rounded-3xl border p-5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                      isSelected ? "border-pink-400/20 bg-pink-50/40" : "border-gray-100"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-600">
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
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-pink-600">
                        {product.tittle}
                      </h3>
                      <p className="mt-2 text-sm text-gray-500">{product.brand}</p>
                    </div>

                    <div className="mt-5 flex items-center justify-between text-sm text-gray-500">
                      <span className="uppercase tracking-[0.15em]">{product.code}</span>
                      <span className="font-bold text-slate-900">Rp {product.price.toLocaleString("id-ID")}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {selectedProduct && (
          <div className="xl:col-span-1">
            <div className="sticky top-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-[0.3em] text-pink-500 font-bold">
                  Product Detail
                </span>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  {selectedProduct.tittle}
                </h2>
                <p className="mt-2 text-sm text-gray-500">Kode produk {selectedProduct.code}</p>
              </div>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Category</p>
                  <p className="mt-2 font-semibold text-slate-900">{selectedProduct.category}</p>
                </div>
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Brand</p>
                  <p className="mt-2 font-semibold text-slate-900">{selectedProduct.brand}</p>
                </div>
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Price</p>
                  <p className="mt-2 text-xl font-black text-slate-900">Rp {selectedProduct.price.toLocaleString("id-ID")}</p>
                </div>
              </div>

              <Link
                to="/products"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl border border-pink-500 bg-pink-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-pink-600"
              >
                Kembali ke daftar produk
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
