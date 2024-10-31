import React from 'react';
import {  CircleDot, Star ,ChevronDown } from 'lucide-react';
import lab2 from "../images/lab.jpg"

const SciencePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* <section className="relative h-screen flex items-center bg-neutral-50">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-light mb-6 max-w-3xl">
            Science-Led Innovation for Melanin-Rich Skin
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mb-12">
            18 months of research. 500+ clinical tests. One breakthrough formula.
          </p>
          <ChevronDown className="h-6 w-6 text-neutral-600" />
        </div>
      </section> */}

      {/* Research Journey */}
      <section className="py-20 bg-white">
        <div className="container mx-auto lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 ">
            <div>
              <h2 className="text-3xl font-light lg:mb-8 lg:mt-[10vh]">Our Research Journey</h2>
              <div className="lg:space-y-12 sm:space-y-2">
                <div>
                  <h3 className="text-xl mb-4">Understanding the Challenge</h3>
                  <p className="text-neutral-600">
                    Traditional intimate lightening treatments weren't designed with melanin-rich skin in mind. 
                    Our research began by understanding the unique characteristics of darker skin tones and 
                    the specific challenges they present.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4">Development Process</h3>
                  <p className="text-neutral-600">
                    Working with leading dermatologists specializing in ethnic skin, we spent 18 months 
                    developing and refining our formula. Each ingredient was carefully selected and tested 
                    for its interaction with melanin-rich skin.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-neutral-50 lg:p-8">
              <img 
                src={lab2}
                alt="Research and Development" 
                className="w-full sm:h-[45vh] lg:h-[70vh] mb-4 lg:mt-0 sm:mt-4"
              />
              <p className="text-sm text-neutral-500">
                Our state-of-the-art research facility
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breakthrough Formula */}
      <section className="lg:py-20 sm:py-4 bg-neutral-50">
        <div className="container mx-auto lg:px-6">
          <h2 className="text-3xl font-light lg:mb-16 sm:mb-4 text-center">The Formula</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="lg:space-y-6">
              <CircleDot className="h-6 w-6" />
              <h3 className="text-xl">Active Compounds</h3>
              <p className="text-neutral-600">
                A proprietary blend of kojic acid, niacinamide, and alpha arbutin, 
                calibrated specifically for melanin-rich skin.
              </p>
            </div>
            <div className="lg:space-y-6">
              <Star className="h-6 w-6" />
              <h3 className="text-xl">Protective Elements</h3>
              <p className="text-neutral-600">
                Enhanced with antioxidants and barrier-supporting ingredients to 
                maintain skin integrity during treatment.
              </p>
            </div>
            <div className="lg:space-y-6">
              <CircleDot className="h-6 w-6" />
              <h3 className="text-xl">Delivery System</h3>
              <p className="text-neutral-600">
                Advanced penetration technology ensures optimal ingredient delivery 
                while respecting the skin's natural barrier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Validation */}
      <section className="lg:py-32 sm:py-4 bg-white">
        <div className="container mx-auto lg:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-light sm:mb-4 lg:mb-16">Clinical Validation</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 sm:gap-2">
              <div>
                <p className="text-2xl font-light lg:mb-8 sm:mb-4">
                  "93% of participants reported significant improvement in skin tone evenness 
                  after completing the treatment course."
                </p>
                <p className="text-neutral-600">
                  — Clinical Study Results, 2024
                </p>
              </div>
              <div className="lg:space-y-8 sm:space-y-2">
                <div>
                  <h3 className="text-xl mb-4">Research Parameters</h3>
                  <p className="text-neutral-600">
                    500+ participants
                    <br />
                    Fitzpatrick skin types IV-VI
                    <br />
                    18-month observation period
                  </p>
                </div>
                <div>
                  <h3 className="text-xl mb-4">Key Findings</h3>
                  <p className="text-neutral-600">
                    93% efficacy rate
                    <br />
                    Zero adverse reactions
                    <br />
                    Consistent results across all tested skin types
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="mt-20 bg-neutral-50 p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Clinical Results" 
                    className="w-full h-auto mb-4"
                  />
                  <p className="text-sm text-neutral-500">
                    Before Treatment
                  </p>
                </div>
                <div>
                  <img 
                    src="/api/placeholder/400/300" 
                    alt="Clinical Results" 
                    className="w-full h-auto mb-4"
                  />
                  <p className="text-sm text-neutral-500">
                    After 6 Sessions
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Professional Section */}
      {/* <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-light mb-6">For Medical Professionals</h2>
          <p className="text-neutral-600 mb-8">
            Access detailed clinical research and treatment protocols.
          </p>
          <button className="bg-neutral-900 text-white px-8 py-4 hover:bg-neutral-800 transition">
            Professional Portal
          </button>
        </div>
      </section> */}
    </div>
  );
};

export default SciencePage;