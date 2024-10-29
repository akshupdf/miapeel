import React from 'react';
import { ChevronRight, CircleDot, Shield, Users, Search, Star } from 'lucide-react';
import peel from "../images/peel.mp4";
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="h-screen relative">
        <video
          src={peel}
          autoPlay loop muted
          className="absolute w-full h-full object-cover"
        ></video>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container relative mx-auto lg:px-6 py-32 text-white flex flex-col lg:items-start justify-center h-full">
          <h1 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
            The First Clinical-Grade Intimate Peel<br />for Melanin-Rich Skin
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl">
            Scientifically formulated for the unique needs of brown skin.
            A revolutionary approach to intimate skincare, backed by dermatological research.
          </p>
          <button className="bg-neutral-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-none hover:bg-neutral-800 transition">
            Find a Clinic Near You
          </button>
        </div>
      </section>

      {/* Scientific Backing Section */}
      <section className="py-16 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-start shadow-xl h-auto p-8">
              <CircleDot className="mb-4 h-8 w-8" />
              <h3 className="text-lg md:text-xl font-medium mb-4">Clinically Formulated</h3>
              <p className="text-neutral-600">
                Developed through extensive research specifically for melanin-rich skin chemistry.
              </p>
            </div>
            <div className="flex flex-col items-start shadow-xl h-auto p-8">
              <Shield className="mb-4 h-8 w-8" />
              <h3 className="text-lg md:text-xl font-medium mb-4">Dermatologist Approved</h3>
              <p className="text-neutral-600">
                Tested and validated by leading specialists in ethnic skincare.
              </p>
            </div>
            <div className="flex flex-col items-start shadow-xl h-auto p-8">
              <Star className="mb-4 h-8 w-8" />
              <h3 className="text-lg md:text-xl font-medium mb-4">Industry First</h3>
              <p className="text-neutral-600">
                The only intimate peel specifically designed and tested for brown skin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-8 bg-neutral-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl mb-8 md:mb-12">Proven Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <p className="text-lg mb-4">
                "93% of participants reported significant improvement in skin tone and texture after 4 weeks"
              </p>
              <p className="text-neutral-600">Clinical Study, 2024</p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg">
              <p className="text-lg mb-4">
                "100% of test subjects experienced no adverse reactions, confirming safety for melanin-rich skin"
              </p>
              <p className="text-neutral-600">Dermatological Safety Report</p>
            </div>
          </div>
          <button className="mt-8 border border-black px-6 py-3 rounded-lg flex items-center hover:bg-neutral-900 hover:text-white transition">
          <Link to="/case"> View All Case Studies </Link>
            <ChevronRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-4 cursor-pointer hover:text-neutral-600">
              <Search className="h-6 w-6" />
              <span>Find a Clinic</span>
            </div>
            <div className="flex items-center space-x-4 cursor-pointer hover:text-neutral-600">
              <Users className="h-6 w-6" />
              <span><Link to="/training">Professional Training</Link></span>
            </div>
         
          </div>
        </div>
      </section>
    </div>
  );
}
