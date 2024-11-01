import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import mia from "../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:w-full flex justify-between items-center px-4 py-2 fixed z-30 bg-white shadow-xl w-full">
      {/* Logo */}
      <div className="px-2">
      <img
 src={mia}
 alt="mia"
 className="w-[18vh]   "
 />
 {/* <h1 className='text-[24px] font-[200] font-sen'>mia peel <span className='absolute px-1 rounded-full  border-black border text-[10px] ml-1'>R</span></h1> */}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 text-[16px] font-[200] font-sen cursor-pointer">
        <li className='mr-2'><Link to="/">Home</Link></li>
        <li className='mr-2'><Link to="/about2">About Us</Link></li>
        <li className='ml-2'><Link to="/products">Product</Link></li>
     
        <li className='ml-2'><Link to="/case">Case Studies</Link></li>
        <li className='ml-2'><Link to="/faq">FAQ</Link></li>
        {/* <li><Link to="/safety">Safety & Ethics</Link></li> */}
        <li className='ml-2'><Link to="/training">Training</Link></li>
        <li className='ml-2'><Link to="/contact">Contact Us</Link></li>
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
          <li><Link to="/products" onClick={toggleMenu}>Product</Link></li>
      
          <li><Link to="/case" onClick={toggleMenu}>Case Studies</Link></li>
          <li><Link to="/faq" onClick={toggleMenu}>FAQ</Link></li>
          {/* <li><Link to="/safety" onClick={toggleMenu}>Safety & Ethics</Link></li> */}
          <li><Link to="/training" onClick={toggleMenu}>Training Program</Link></li>
          <li ><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      )}
    </div>
  );
}
