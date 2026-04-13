// Load data
const loadServices = () => {
  if (!window.servicesData) {
    fetch('src/data/services.json')
      .then(res => res.json())
      .then(data => {
        window.servicesData = data;
        window.dispatchEvent(new Event('servicesLoaded'));
      });
  }
};

// Initial render loading state
function AppContent() {
  const [view, setView] = React.useState('guest');
  const [search, setSearch] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [city, setCity] = React.useState("");
  const [services, setServices] = React.useState(window.servicesData || []);

  React.useEffect(() => {
    if (window.servicesData) {
      setServices(window.servicesData);
    } else {
      const handler = () => setServices(window.servicesData);
      window.addEventListener('servicesLoaded', handler);
      loadServices();
      return () => window.removeEventListener('servicesLoaded', handler);
    }
  }, []);

  const categories = services.length ? [...new Set(services.map(i => i.category))] : [];
  const cities = services.length ? [...new Set(services.map(i => i.location.city))] : [];

  if (!services.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="mc-panel p-8 text-center">
          <p className="text-black">⛏️ Loading ServisCraft data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-4 px-3">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col items-center mb-8 gap-5 pt-6">
          <h1 className="text-5xl md:text-6xl text-white tracking-widest" style={{ textShadow: '6px 6px 0px #2c2c2c' }}>
            Servis<span className="text-[#6caf3c]">Craft</span>
          </h1>
          
          <div className="flex gap-4 mc-panel p-2">
            <button onClick={() => setView('guest')} className={`mc-button ${view === 'guest' ? 'mc-button-active' : ''}`}>
              🧙 PLAYER VIEW
            </button>
            <button onClick={() => setView('admin')} className={`mc-button ${view === 'admin' ? 'admin-active' : ''}`}>
              👑 OP PANEL
            </button>
          </div>
        </header>

        <FilterBar 
          search={search} setSearch={setSearch}
          category={category} setCategory={setCategory}
          city={city} setCity={setCity}
          categories={categories} cities={cities}
        />

        {view === 'guest' ? 
          <GuestView search={search} filterCategory={category} filterCity={city} /> : 
          <AdminView search={search} filterCategory={category} filterCity={city} />
        }
        
        <footer className="mt-16 mc-panel p-3 text-center text-black text-[9px]">
          <p>⛏️ ServisCraft © 2025 — All blocks preserved</p>
        </footer>
      </div>
    </div>
  );
}

// Make components global for Babel
window.GuestView = GuestView;
window.AdminView = AdminView;
window.FilterBar = FilterBar;

// Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppContent />);