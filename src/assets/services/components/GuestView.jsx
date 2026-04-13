function GuestView({ search, filterCategory, filterCity }) {
  const servicesData = window.servicesData;
  
  const filtered = servicesData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterCategory === "" || item.category === filterCategory) &&
    (filterCity === "" || item.location.city === filterCity)
  );

  return (
    <div className="mc-grid">
      {filtered.map(item => (
        <div key={item.id} className="mc-gui-card flex flex-col gap-3">
          <div className="border-4 border-black bg-black h-48 overflow-hidden">
            <img 
              src={item.image} 
              className="w-full h-full object-cover" 
              style={{ imageRendering: 'pixelated' }}
              alt={item.name}
            />
          </div>
          <div className="flex flex-col gap-2">
            <span className="bg-black text-white px-2 py-1 text-[9px] inline-block w-fit border border-gray-500">
              {item.category}
            </span>
            <h3 className="text-[14px] font-bold text-gray-900">{item.name}</h3>
            <p className="text-[10px] text-gray-700">📍 {item.location.city}</p>
          </div>
          <div className="mt-auto pt-3 border-t-4 border-gray-500 flex justify-between items-center">
            <span className="mc-price">💰 Rp {item.price.toLocaleString()}</span>
            <span className="text-[11px] bg-yellow-800 px-2 py-1 text-yellow-200">★ {item.rating}</span>
          </div>
        </div>
      ))}
      {filtered.length === 0 && (
        <div className="mc-panel col-span-full text-center py-12 text-gray-800">
          ⛏️ No services found!
        </div>
      )}
    </div>
  );
}