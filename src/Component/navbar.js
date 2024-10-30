import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';
import mia from "../images/mia.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:w-full flex justify-between items-center p-4 fixed z-30 bg-white shadow-xl w-full">
      {/* Logo */}
      <div className="">
      <img
 src={mia}
 alt="mia"
 className="w-[20vh] "
 />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-4 text-[16px] font-[200] font-sen cursor-pointer">
        <li><Link to="home" smooth={true} offset={50} duration={1000}>Home</Link></li>
        <li><Link to="products" smooth={true} offset={50} duration={1000}>Product</Link></li>
        <li><Link to="about" smooth={true} offset={50} duration={1000}>About Us</Link></li>
        <li><Link to="case" smooth={true} offset={50} duration={1000}>Case Studies</Link></li>
        <li><Link to="faq" smooth={true} offset={50} duration={1000}>FAQ</Link></li>
        {/* <li><Link to="/safety">Safety & Ethics</Link></li> */}
        <li><Link to="training" smooth={true} offset={50} duration={1000}>Training</Link></li>
        <li><Link to="contact" smooth={true} offset={50} duration={1000}>Contact Us</Link></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 right-4 bg-white shadow-lg p-4 w-48 space-y-2 text-[16px] font-[200] font-sen cursor-pointer md:hidden">
          <li><Link to="home" onClick={toggleMenu}>Home</Link></li>
          <li><Link to="products" onClick={toggleMenu}>Product</Link></li>
          <li><Link to="about" onClick={toggleMenu}>About Us</Link></li>
          <li><Link to="case" onClick={toggleMenu}>Case Studies</Link></li>
          <li><Link to="faq" onClick={toggleMenu}>FAQ</Link></li>
          {/* <li><Link to="/safety" onClick={toggleMenu}>Safety & Ethics</Link></li> */}
          <li><Link to="training" onClick={toggleMenu}>Training Program</Link></li>
          <li ><Link to="contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      )}
    </div>
  );
}
