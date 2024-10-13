import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-orange-600 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">FoodCo</h1>
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center absolute md:static bg-orange-600 left-0 right-0 top-full md:w-auto w-full p-4 md:p-0 transition-all duration-300 ease-in-out`}>
          <ul className="md:flex md:space-x-4">
            <li><a href="#" onClick={() => scrollToSection('hero')} className="block py-2 md:py-0 hover:text-orange-200">Home</a></li>
            <li><a href="#products" onClick={() => scrollToSection('products')} className="block py-2 md:py-0 hover:text-orange-200">Products</a></li>
            <li><a href="#uniqueness" onClick={() => scrollToSection('uniqueness')} className="block py-2 md:py-0 hover:text-orange-200">Our Uniqueness</a></li>
            <li><a href="#contact" onClick={() => scrollToSection('contact')} className="block py-2 md:py-0 hover:bg-white hover:text-orange-600 transition-colors duration-300">Contact Us</a></li>
          </ul>
        </nav>
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;