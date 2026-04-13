import React from 'react';

const ServiceCard = ({ service }) => {
  // Logic sederhana untuk ganti gambar yang mati dari Unsplash
  const safeImage = `https://loremflickr.com/400/300/${service.category.split(' ')[0].toLowerCase()}`;

  return (
    <div className="service-card">
      <img src={safeImage} alt={service.name} className="card-img" />
      <span className="category-badge">{service.category}</span>
      <h3 className="card-title">{service.name}</h3>
      <p style={{color: '#a3aed0', fontSize: '14px'}}>📍 {service.location.city}</p>
      
      <div className={`status-tag ${service.details.availability === 'Available' ? 'available' : 'busy'}`}>
        {service.details.availability}
      </div>

      <div className="card-info">
        <span className="price">Rp {service.price.toLocaleString('id-ID')}</span>
        <span className="rating">⭐ {service.rating}</span>
      </div>
    </div>
  );
};

export default ServiceCard;