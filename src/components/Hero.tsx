import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-[500px] bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80")'}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto h-full flex items-center justify-center relative z-10">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">YOUR BRAND - OUR PRODUCTS</h2>
          <p className="text-xl md:text-2xl mb-8">WE OFFER AN EXTENSIVE RANGE OF READY TO COOK PRODUCTS</p>
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition duration-300">
            LET'S CREATE TOGETHER!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;