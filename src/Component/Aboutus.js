import React from 'react';
import { Clock, Users, CircleDot, Globe } from 'lucide-react';

export const AboutUsPage = () => {
 return (
 <div className="min-h-screen bg-white pt-16">
 {/* Hero Section */}
 <section className="relative h-[90vh]">
 
 <div className="container  p-6 lg:w-[50%] absolute sm:top-[10vh]  lg:top-[25vh] rounded-lg    ml-12 ">
 
 <h1 className="lg:text-5xl sm:text-3xl font-semibold   p-4  " >Pioneering Safe Intimate Care for Melanin-Rich Skin</h1>
 <p className="lg:text-xl  ml-4  ">
 Developed by leading dermatologists and medical professionals specializing in ethnic skin care.
 </p>
 </div>
 </section>

 {/* Development Journey */}
 <section className="py-20 bg-white">
 <div className="container mx-auto lg:px-6">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
 <div className=''>
 <h2 className="text-3xl font-light mb-8">Our Journey</h2>
 <p className="text-lg text-neutral-600 mb-6">
 The development of Mia Peel represents a breakthrough in intimate skincare for melanin-rich skin. Our international team of specialists recognized a critical gap in the market: the absence of safe, effective intimate lightening treatments specifically formulated for darker skin tones.
 </p>
 <p className="text-lg text-neutral-600">
 Over 18 months of rigorous research and clinical testing, our team worked to perfect a formula that would deliver results while prioritizing safety for melanin-rich skin.
 </p>
 </div>
 <div className="bg-neutral-50 lg:p-8 sm:p-2">
 <img
 src=""
 alt="Laboratory research team"
 className="w-full h-auto mb-4"
 />
 <p className="text-sm text-neutral-500">
 Our research facility where the breakthrough formula was developed
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Key Statistics */}
 <section className="py-16 bg-neutral-50">
 <div className="container mx-auto lg:px-6">
 <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
 <div className="flex flex-col items-center text-center">
 <Clock className="h-8 w-8 mb-4" />
 <h3 className="text-4xl font-light mb-2">18+</h3>
 <p className="text-neutral-600">Months of Research</p>
 </div>
 <div className="flex flex-col items-center text-center">
 <Users className="h-8 w-8 mb-4" />
 <h3 className="text-4xl font-light mb-2">12</h3>
 <p className="text-neutral-600">Leading Specialists</p>
 </div>
 <div className="flex flex-col items-center text-center">
 <CircleDot className="h-8 w-8 mb-4" />
 <h3 className="text-4xl font-light mb-2">500+</h3>
 <p className="text-neutral-600">Clinical Tests</p>
 </div>
 <div className="flex flex-col items-center text-center">
 <Globe className="h-8 w-8 mb-4" />
 <h3 className="text-4xl font-light mb-2">3</h3>
 <p className="text-neutral-600">Research Centers</p>
 </div>
 </div>
 </div>
 </section>

 {/* Medical Team */}
 <section className="py-20 bg-white">
 <div className="container mx-auto lg:px-6">
 <h2 className="text-3xl font-light mb-12 text-center">Our Medical Advisory Board</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 {/* Expert 1 */}
 <div className="text-center">
 {/* <img
 src="/api/placeholder/300/300"
 alt="Dr. Sarah Chen"
 className="w-48 h-48 rounded-full mx-auto mb-4"
 /> */}
 <h3 className="text-xl font-medium mb-2">Dr. Sarah Chen</h3>
 <p className="text-neutral-600 mb-4">Lead Research Dermatologist</p>
 <p className="text-sm text-neutral-500">
 Specialist in ethnic dermatology with 15+ years of research in melanin-rich skin conditions.
 </p>
 </div>
 {/* Expert 2 */}
 <div className="text-center">
 {/* <img
 src="/api/placeholder/300/300"
 alt="Dr. Michael Adebayo"
 className="w-48 h-48 rounded-full mx-auto mb-4"
 /> */}
 <h3 className="text-xl font-medium mb-2">Dr. Michael Adebayo</h3>
 <p className="text-neutral-600 mb-4">Clinical Research Director</p>
 <p className="text-sm text-neutral-500">
 Pioneer in hyperpigmentation treatment for African skin types.
 </p>
 </div>
 {/* Expert 3 */}
 <div className="text-center">
 {/* <img
 src="/api/placeholder/300/300"
 alt="Dr. Priya Sharma"
 className="w-48 h-48 rounded-full mx-auto mb-4"
 /> */}
 <h3 className="text-xl font-medium mb-2">Dr. Priya Sharma</h3>
 <p className="text-neutral-600 mb-4">Formulation Specialist</p>
 <p className="text-sm text-neutral-500">
 Expert in developing gentle yet effective treatments for sensitive areas.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Research Process */}
 <section className="py-10 bg-neutral-50">
 <div className="container mx-auto lg:px-6">

 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
 <div  className='mt-[4vh]'>
 <h2 className="text-3xl font-light mb-4">Our Research Process</h2>
 <h3 className="text-xl font-medium mb-4">Phase 1: Formula Development</h3>
 <p className="text-neutral-600 mb-8">
 Our team spent 8 months developing and refining the initial formula, focusing on ingredients proven safe and effective for melanin-rich skin.
 </p>
 <h3 className="text-xl font-medium mb-4">Phase 2: Clinical Testing</h3>
 <p className="text-neutral-600 mb-8">
 6 months of rigorous testing across multiple skin types (Fitzpatrick IV-VI) to ensure safety and efficacy.
 </p>
 <h3 className="text-xl font-medium mb-4">Phase 3: Refinement</h3>
 <p className="text-neutral-600">
 4 months of formula optimization based on clinical results and participant feedback.
 </p>
 </div>
 <div className="bg-white lg:p-8">
 <img
 src=""
 alt="Research timeline"
 className="w-full h-auto opacity-70"
 />
 </div>
 </div>
 </div>
 </section>

 <div className="container mx-auto lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 p-8">
 <div className='mt-[4vh]'>
 <h2 className="text-3xl font-light mb-8">Breakthrough Formula</h2>
 <p className="text-lg text-neutral-600 mb-6">
 Our proprietary blend combines naturally derived brightening agents with protective antioxidants, specifically calibrated for the delicate intimate area of melanin-rich skin. The formula works by:</p>
 <ul className="text-lg text-neutral-600 list-disc">
 <li>Gently exfoliating dead skin cells</li>
 <li>Supporting natural skin renewal</li>
 <li>Protecting against hyperpigmentation</li>
 <li>Maintaining optimal skin barrier function</li>
  </ul>
 </div>
 <div className="bg-neutral-50 lg:p-8">
 <img
 src="https://thumbs.dreamstime.com/b/science-formula-27578796.jpg"
 alt="Laboratory research team"
 className="w-full h-auto mb-4 "
 />

 </div>
 </div>
 <div className="bg-neutral-50 container mx-auto lg:px-6 grid grid-cols-1 md:grid-cols-2 gap-16 p-8">
 <div className='mt-[15vh]'>
 <h2 className="text-3xl font-light mb-8">Clinical Validation</h2>
  <ul className="text-lg text-neutral-600 list-disc">
 <li>Developed in collaboration with leading dermatologists</li>
 <li>Tested on diverse skin types (Fitzpatrick IV-VI)</li>
 <li>Non-irritating formula verified through sensitivity testing</li>
 <li>pH-balanced for intimate areas</li>
  </ul>
 </div>
 <div className="bg-white p-8">
 <img
 src="https://img.freepik.com/premium-photo/flasks-measuring-beaker-science-experiment-laboratory-isolated_34435-3744.jpg"
 alt="Laboratory research team"
 className="w-full h-auto mb-4"
 />

 </div>
 </div>
 </div>
 );
};