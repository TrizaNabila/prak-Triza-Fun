function FilterBar({ search, setSearch, category, setCategory, city, setCity, categories, cities }) {
  return (
    <div className="mc-panel p-5 mb-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label className="block text-black text-[10px] font-bold mb-1">🔍 Search</label>
          <input 
            type="text" 
            placeholder="Search service..." 
            className="mc-input w-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
        <div>
          <label className="block text-black text-[10px] font-bold mb-1">📂 Category</label>
          <select className="mc-select w-full" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-black text-[10px] font-bold mb-1">🌍 City</label>
          <select className="mc-select w-full" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">All Cities</option>
            {cities.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}