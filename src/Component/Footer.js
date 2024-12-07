import React from 'react';
import { Link } from 'react-router-dom';
// import mia from "../images/mia.png";

const Footer = () => {
  return (
    <div className="bg-white pt-16 lg:p-0 sm:p-8">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 mb-16 flex lg:flex-row sm:flex-col">
     

        {/* Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:w-[80%] ">
          {/* Customer Service */}
          <div>
          {/* <img
 src={mia}
 alt="mia"
 className="w-[30vh] "
 /> */}
  {/* <ul className="text-lg w-[30vh] ">
 <li>Email : info@miapeel.co</li>
 <li>Instagram : @_miapeel</li>
 <li>Contact No: 074982276752</li>
  </ul> */}
          </div>

          {/* Company */}
          <div className='lg:ml-8 mt-8' >
            <h3 className="text-gray-800 font-medium mb-4">Company</h3>
            <ul className="space-y-2">
            {/* <li className="text-gray-600 hover:text-gray-800"><Link to="/">Home</Link></li> */}
        <li className="text-gray-600 hover:text-gray-800"><Link to="/about2">About Us</Link></li>
        <li className="text-gray-600 hover:text-gray-800"><Link to="/case">Case Studies</Link></li>
        <li className="text-gray-600 hover:text-gray-800"><Link to="/privacy">Privacy Policy</Link></li>
        {/* <li className="text-gray-600 hover:text-gray-800"><Link to="/safety">Safety & Ethics</Link></li>
        <li className="text-gray-600 hover:text-gray-800"><Link to="/training">Training Program</Link></li> */}
        <li className="text-gray-600 hover:text-gray-800"><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className=' mt-8'>
            <h3 className="text-gray-800 font-medium mb-4">Social</h3>
            <ul className="space-y-2">
              <li><a href="www.x.com" className="text-gray-600 hover:text-gray-800">Twitter</a></li>
              <li><a href="www.instagram.com" className="text-gray-600 hover:text-gray-800">Instagram</a></li>
              <li><a href="www.facebook.com" className="text-gray-600 hover:text-gray-800">Facebook</a></li>
            </ul>
          </div>
        </div>

        <div className="mb-12 lg:w-[50%] mt-8">
          <h3 className="text-gray-800 font-medium mb-4">Subscribe to our communications</h3>
          <div className="flex max-w-md">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 border-b border-gray-300 focus:border-gray-800 outline-none p-2"
            />
            <button className="border-b border-gray-800 p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Certifications */}
      {/* <div className="max-w-6xl mx-auto px-4 border-t border-gray-200 pt-8">
        <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
        </div>
      </div> */}

      {/* Shipping Banner */}
      <div className="  left-0 right-0 bg-black text-white text-center py-2 text-sm">
        <p>Copyright &#169; 2024 by Mia Peel. All Rights Reserved.</p>
        {/* <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white">
          ✕
        </button> */}
      </div>
    </div>
  );
};

export default Footer;