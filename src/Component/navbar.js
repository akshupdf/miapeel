import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:w-full flex justify-between items-center p-4 fixed z-30 bg-white shadow-xl w-full">
      {/* Logo */}
      <div className="text-2xl font-sen cursor-pointer">
        <h1>
          Mia Peel <span className="text-lg">&#174;</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 text-[16px] font-[200] font-sen cursor-pointer">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about2">About Us</Link></li>
        <li><Link to="/case">Case Studies</Link></li>
        <li><Link to="/safety">Safety & Ethics</Link></li>
        <li><Link to="/training">Training Program</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 right-4 bg-white shadow-lg p-4 w-48 space-y-2 text-[16px] font-[200] font-sen cursor-pointer md:hidden">
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="/about2" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="/case" onClick={toggleMenu}>Case Studies</Link></li>
          <li><Link to="/safety" onClick={toggleMenu}>Safety & Ethics</Link></li>
          <li><Link to="/training" onClick={toggleMenu}>Training Program</Link></li>
          <li ><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      )}
    </div>
  );
}
