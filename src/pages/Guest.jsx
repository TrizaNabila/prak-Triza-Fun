import { useNavigate } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { MdShoppingCart, MdLocalOffer } from "react-icons/md";
import { useAuth } from "../context/AuthContext";
import products from "../data/Products.json";

function rupiah(n) {
  return n.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 });
}

export default function Guest() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  function handleContinue() {
    if (isAuthenticated) navigate('/dashboard');
    else navigate('/login');
  }

  const featured = products.slice(0, 4);
  const promotions = products.slice(0, 3).map((item, index) => ({
    ...item,
    title: index === 0 ? 'Set Sofa Cozy' : index === 1 ? 'Meja Makan Elegan' : 'Sofa Minimalis',
    note: index === 0 ? 'Diskon spesial kursi dan sofa terbaik.' : index === 1 ? 'Meja makan modern dengan finishing premium.' : 'Sofa ringan, nyaman, dan mudah dipadukan.',
  }));

  // build category list (unique) with one sample image each
  const categories = [];
  products.forEach((p) => {
    if (!categories.find((c) => c.name === p.category)) {
      categories.push({ name: p.category, image: p.image });
    }
  });

  return (
    <div className="w-full min-h-screen bg-pink-50 text-slate-900">
      {/* TOP BAR */}
      <div className="w-full bg-white shadow-sm border-b border-pink-100">
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-pink-500 flex items-center justify-center text-white font-bold">L</div>
            <div>
              <p className="text-sm font-semibold">Luxx Furniture</p>
            </div>
          </div>
          <div className="flex items-center gap-6 text-sm font-semibold text-slate-700">
            <button onClick={handleContinue} className="rounded-full border border-orange-200 bg-white px-4 py-2 text-orange-600 transition hover:bg-orange-50">Login</button>
            <button onClick={() => navigate('/member')} className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-200/40 transition hover:opacity-95">Member</button>
          </div>
        </div>
      </div>

      {/* HERO / PROMO */}
      <section className="w-full bg-gradient-to-r from-pink-100 via-pink-50 to-white py-16">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-10 px-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-pink-500">Luxx Furniture</p>
            <h1 className="mt-4 text-5xl font-extrabold text-slate-900">Bawa Nuansa Modern ke Rumahmu</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">Temukan furnitur stylish dengan sentuhan pink lembut yang membuat ruang jadi lebih hangat dan elegan. Mulai dari sofa, meja makan, sampai dekorasi custom.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button onClick={() => navigate('/products')} className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/50 transition hover:opacity-95">Jelajahi Produk</button>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] bg-white p-6 shadow-[0_40px_120px_rgba(239,68,146,0.14)]">
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-pink-200/80 blur-2xl"></div>
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=900&auto=format&fit=crop" alt="Hero Furnitur" className="h-[480px] w-full rounded-[28px] object-cover" />
          </div>
        </div>
      </section>

      {/* PROMO CARDS */}
      <section className="w-full bg-pink-50 py-8">
        <div className="mx-auto w-full max-w-[1600px] px-6">
          <div className="grid gap-6 xl:grid-cols-4">
            <div className="rounded-[34px] bg-gradient-to-br from-pink-500 to-fuchsia-500 p-6 text-white shadow-xl">
              <div className="grid gap-3 rounded-[28px] bg-white p-4 text-slate-900 shadow-inner">
                <div className="grid grid-cols-2 gap-3">
                  {[products[0], products[1], products[2], products[3]].map((item) => (
                    <div key={item.id} className="overflow-hidden rounded-2xl bg-slate-100">
                      <img src={item.image} alt={item.tittle} className="h-24 w-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 rounded-[28px] bg-white/10 p-5 text-white shadow-lg backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-100">Jaminan Harga</p>
                <h3 className="mt-3 text-2xl font-bold">The Lowest Online Price</h3>
                <div className="mt-5 rounded-3xl bg-white p-4 text-slate-900">
                  <p className="text-sm font-semibold">Diskon Hingga</p>
                  <p className="mt-2 text-3xl font-bold text-pink-600">70%</p>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] bg-gradient-to-br from-pink-400 to-pink-500 p-6 text-white shadow-xl">
              <img src={products[1].image} alt={products[1].tittle} className="h-56 w-full rounded-[24px] object-cover" />
              <div className="mt-6 rounded-[28px] bg-white/10 p-5 text-white shadow-lg backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-100">Jaminan Harga</p>
                <h3 className="mt-3 text-2xl font-bold">Kombo Hemat</h3>
                <p className="mt-3 text-sm text-pink-50">Beli 1 set furnitur, dapatkan ekstra diskon 10%</p>
                <div className="mt-5 rounded-3xl bg-white p-4 text-slate-900">
                  <p className="text-sm font-semibold text-pink-600">Ekstra Diskon</p>
                </div>
              </div>
            </div>

            <div className="rounded-[34px] bg-gradient-to-br from-pink-400 to-pink-500 p-6 text-white shadow-xl">
              <div className="rounded-[24px] bg-white/15 p-5 backdrop-blur-sm">
                <div className="text-center">
                  <p className="text-sm text-pink-100">Diskon</p>
                  <p className="mt-2 text-4xl font-bold">1 Juta</p>
                </div>
              </div>
              <div className="mt-5 rounded-[24px] bg-white/15 p-5 text-white backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.25em] text-pink-100 font-semibold mb-3">Partner Bank</p>
                <div className="flex flex-wrap gap-2">
                  {['Maybank','UOB','OCBC','BRI'].map((bank) => (
                    <span key={bank} className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{bank}</span>
                  ))}
                </div>
              </div>
              <img src={products[2].image} alt={products[2].tittle} className="mt-5 h-56 w-full rounded-[24px] object-cover" />
              <div className="mt-5 rounded-[28px] bg-white/10 p-5 text-white shadow-lg backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-100">Promo Partner Bank</p>
                <p className="mt-3 text-sm text-pink-50">Cicilan 0% hingga 24 bulan untuk produk terpilih.</p>
              </div>
            </div>

            <div className="rounded-[34px] bg-gradient-to-br from-pink-400 to-pink-500 p-6 text-white shadow-xl">
              <img src={products[3].image} alt={products[3].tittle} className="h-56 w-full rounded-[24px] object-cover" />
              <div className="mt-6 rounded-[28px] bg-white/10 p-5 text-white shadow-lg backdrop-blur-sm">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-100">New Arrival</p>
                <h3 className="mt-3 text-2xl font-bold">Premium Dining Table</h3>
                <p className="mt-3 text-sm text-pink-50">Upgrade ruang makan dengan meja premium terbaru.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full bg-white py-10 sm:py-12">
        <div className="mx-auto w-full max-w-[1600px] px-6">
          <div className="relative overflow-hidden rounded-[32px] shadow-sm">
            <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop" alt="Deluxe Custom Interior" className="h-[620px] w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/20 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex items-center">
              <div className="mx-6 max-w-xl py-12 pr-6 text-white sm:mx-12 sm:py-16">
                <p className="text-sm uppercase tracking-[0.35em] text-pink-300">Tentang Luxx Furniture</p>
                <h2 className="mt-4 text-5xl font-bold leading-tight">Deluxe Custom Interior</h2>
                <p className="mt-6 text-lg leading-8 text-slate-100/90">Solusi interior fungsional yang space-saving untuk memaksimalkan ruangan dan memudahkan aktivitas harian, agar hunian lebih nyaman dan homey.</p>
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-base font-semibold text-white">Furnitur Multifungsi</p>
                    <p className="mt-2 text-sm text-slate-100/80">Desain pintar yang menggabungkan penyimpanan, kenyamanan, dan gaya dalam satu solusi.</p>
                  </div>
                  <div className="rounded-[28px] bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-base font-semibold text-white">Ruang Lebih Rapi</p>
                    <p className="mt-2 text-sm text-slate-100/80">Pilihan furniture yang membantu meminimalkan kekacauan dan membuat ruangan terasa lebih luas.</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-4">
                  <button onClick={() => navigate('/products')} className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-300/40 transition hover:opacity-95">Lihat Koleksi</button>
                  <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-6 py-3 text-sm font-semibold text-orange-700 transition hover:bg-orange-50">Hubungi WA</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="w-full bg-pink-50 py-8">
        <div className="mx-auto w-full max-w-[1600px] px-6">
          <div className="rounded-[32px] bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-pink-500">Kategori Pilihan</p>
                <h3 className="mt-3 text-3xl font-bold text-slate-900">Temukan furnitur yang pas untuk setiap ruangan</h3>
              </div>
              <button onClick={() => navigate('/products')} className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/40 transition hover:opacity-95">Jelajahi semua</button>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {categories.slice(0,6).map((c) => (
                <button key={c.name} onClick={() => navigate('/products')} className="flex items-center gap-4 rounded-3xl border border-pink-100 bg-pink-50 px-4 py-4 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                  <img src={c.image} alt={c.name} className="h-16 w-16 rounded-2xl object-cover" />
                  <div>
                    <p className="font-semibold text-slate-900">{c.name}</p>
                    <p className="text-xs text-slate-500">Jelajahi sekarang</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="w-full bg-pink-50 py-8">
        <div className="mx-auto w-full max-w-[1600px] px-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-pink-500">Pilihan Editor</p>
              <h2 className="mt-2 text-4xl font-bold text-slate-900">Produk Unggulan</h2>
            </div>
            <button onClick={() => navigate('/products')} className="rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/40 transition hover:opacity-95">Lihat Semua</button>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {featured.map((p) => (
              <div key={p.id} className="overflow-hidden rounded-[32px] border border-pink-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <img src={p.image} alt={p.tittle} className="h-64 w-full object-cover" />
                <div className="p-5">
                  <p className="text-sm text-pink-600">{p.brand} • {p.category}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{p.tittle}</h3>
                  <p className="mt-4 text-lg font-bold text-pink-700">{rupiah(p.price)}</p>
                  <button onClick={() => navigate('/login')} className="mt-5 w-full rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/40 transition hover:opacity-95">Login untuk beli</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT REFERENCES */}
      <section id="projects" className="w-full bg-white py-8">
        <div className="mx-auto w-full max-w-[1600px] px-6">
          <p className="text-sm uppercase tracking-[0.35em] text-pink-500">Project Reference</p>
          <h2 className="mt-3 text-4xl font-bold text-slate-900">Proyek Custom Berkualitas</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.slice(4,7).map((p) => (
              <div key={p.id} className="overflow-hidden rounded-[32px] border border-pink-100 bg-pink-50 shadow-sm">
                <img src={p.image} alt={p.tittle} className="h-56 w-full object-cover" />
                <div className="p-5">
                  <p className="text-lg font-semibold text-slate-900">{p.tittle}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">Desain interior custom dengan detail premium dan nuansa hangat.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-pink-100 py-10 text-slate-700">
        <div className="mx-auto w-full max-w-[1600px] px-6 grid gap-8 md:grid-cols-4">
          <div>
            <h4 className="text-lg font-semibold text-pink-700">Luxx Furniture</h4>
            <p className="mt-3 text-sm text-slate-600">Furniture modern dengan sentuhan pink lembut, siap membuat rumahmu lebih hangat.</p>
          </div>
          <div>
            <h4 className="font-semibold">Produk</h4>
            <ul className="mt-3 space-y-2 text-sm">
              {categories.slice(0,6).map(c => <li key={c.name}>{c.name}</li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Bantuan</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Cara Belanja</li>
              <li>Promo & Voucher</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Kontak</h4>
            <p className="mt-3 text-sm">hello@furniture.example</p>
            <p className="mt-2 text-sm">WhatsApp: +62 812-3456-7890</p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noreferrer"
        className="fixed right-6 bottom-6 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-white shadow-2xl shadow-pink-500/30 ring-4 ring-pink-200 transition hover:bg-pink-600"
        aria-label="Hubungi Luxx Furniture via WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
}
