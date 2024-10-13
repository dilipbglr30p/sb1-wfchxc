import React from 'react';

const products = [
  { name: 'Veggie Burgers', image: 'https://images.unsplash.com/photo-1550317138-10000687a72b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Fish Fillet', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Tandoori Pizza', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Wraps', image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
  { name: 'Veg Patties', image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' },
];

const Products: React.FC = () => {
  return (
    <section id="products" className="py-16 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;