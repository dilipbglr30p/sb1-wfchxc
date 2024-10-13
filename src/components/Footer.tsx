import React from 'react';
import ContactForm from './ContactForm';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Email: info@foodco.com</p>
            <p>Phone: (123) 456-7890</p>
            <p>Address: 123 Food Street, Tasty City, FC 12345</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:text-orange-400">Home</a></li>
              <li><a href="#products" className="hover:text-orange-400">Products</a></li>
              <li><a href="#uniqueness" className="hover:text-orange-400">Our Uniqueness</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Form</h3>
            <ContactForm />
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 FoodCo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;