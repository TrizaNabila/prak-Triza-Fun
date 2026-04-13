function AdminView({ search, filterCategory, filterCity }) {
  const servicesdata = window.servicesData;
  
  const filteredData = servicesData.filter(item => 
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    (filterCategory === "" || item.category === filterCategory) &&
    (filterCity === "" || item.location.city === filterCity)
  );

  const handleEdit = (serviceName) => {
    alert(`🔧 Edit service: "${serviceName}"`);
  };

  return (
    <div className="mc-panel mx-auto my-6 max-w-6xl p-5">
      <div className="overflow-x-auto">
        <table className="w-full border-4 border-black">
          <thead>
            <tr className="bg-[#3a3a3a] text-white">
              <th className="border-4 border-black p-3">🔨 ITEM</th>
              <th className="border-4 border-black p-3">📁 CAT</th>
              <th className="border-4 border-black p-3">💰 PRICE</th>
              <th className="border-4 border-black p-3">✨ STATUS</th>
              <th className="border-4 border-black p-3">⚡ ACTION</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map(service => (
              <tr key={service.id} className="hover:bg-[#d4d4aa]">
                <td className="border-4 border-black p-3 font-bold">{service.name}</td>
                <td className="border-4 border-black p-3">{service.category}</td>
                <td className="border-4 border-black p-3 text-green-800 font-bold">
                  Rp {service.price.toLocaleString()}
                </td>
                <td className="border-4 border-black p-3">
                  <span className={`px-2 py-1 text-white text-[9px] font-bold uppercase ${
                    service.details.availability === 'Available' ? 'bg-green-700' : 'bg-red-700'
                  }`}>
                    {service.details.availability === 'Available' ? '🟢 ACTIVE' : '🔴 UNAVAILABLE'}
                  </span>
                </td>
                <td className="border-4 border-black p-3 text-center">
                  <button onClick={() => handleEdit(service.name)} className="admin-edit-btn bg-[#6b4c2c] text-white">
                    ✏️ EDIT
                  </button>
                </td>
              </tr>
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="5" className="border-4 border-black p-10 text-center">
                  ⚠️ No services match your filter
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}