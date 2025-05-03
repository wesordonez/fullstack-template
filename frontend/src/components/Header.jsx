import React from 'react';

const Header = () => (
  <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
    <div className="text-2xl font-bold text-gray-800">MySite</div>
    <nav>
      <ul className="flex space-x-6">
        <li><a href="#hero" className="text-gray-600 hover:text-blue-600">Home</a></li>
        <li><a href="#about" className="text-gray-600 hover:text-blue-600">About</a></li>
        <li><a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header; 