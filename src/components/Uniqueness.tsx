import React from 'react';

const uniqueFeatures = [
  { name: 'Roll Brand', image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Burger Brand', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Snacks Brand', image: 'https://images.unsplash.com/photo-1621447504864-d8686e12698c?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Pizza Brand', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Tea Brand', image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
  { name: 'Cloud Kitchen', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80' },
];

const Uniqueness: React.FC = () => {
  return (
    <section id="uniqueness" className="py-16 bg-orange-800 text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">UNIQUENESS OF OUR PRODUCTS</h2>
        <div className="hexagon-container">
          {uniqueFeatures.map((feature, index) => (
            <div key={index} className={`hexagon hexagon-${index + 1}`}>
              <div className="hexagon-inner">
                <img src={feature.image} alt={feature.name} className="w-full h-full object-cover" />
                <div className="hexagon-content">
                  <h3 className="text-lg font-semibold text-center">{feature.name}</h3>
                </div>
              </div>
            </div>
          ))}
          <div className="hexagon hexagon-center">
            <div className="hexagon-inner bg-white text-orange-800">
              <div className="hexagon-content">
                <h3 className="text-xl font-bold text-center">START YOUR OWN BRAND</h3>
                <button className="mt-4 bg-orange-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Uniqueness;