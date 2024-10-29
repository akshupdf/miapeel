import React from 'react'
import TreatmentReports from './Treatment'

export default function CaseStudy() {
  return (
    <div className="min-h-screen  bg-white bg-no-repeat ">
 {/* Hero Section */}
 <section className="relative bg-fixed h-screen bg-cover bg-[url(https://bioresscientia.com//uploads/journals/1653319467CCRS.jpg)] ">
 {/* <div className="absolute  w-auto 
            min-w-full min-h-full max-w-none bg-black opacity-50 blur-xl"> </div> */}
 <div className="container  p-6 w-[50%] absolute top-[45vh] rounded-lg     ml-12 ">
 
 <h1 className="text-5xl font-bold   p-4 text-white " >Case Studies</h1>

 </div>
 </section>

 {/* Development Journey */}
 <section className=" bg-white">

 <div className="container mx-auto lg:px-6 ">
 <h2 className="text-4xl font-semibold m-8">Client Testimonials</h2>
 <TreatmentReports />
 <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
 <div className='mt-[15vh]'>
 <h2 className="text-3xl font-light mb-8">Clinical Study Results</h2>
 <p className="text-lg text-neutral-600 mb-6">
 Our 2024 clinical study involving 100 participants with melanin-rich skin showed: </p>
 <ul className="text-lg text-neutral-600 list-disc">
 <li>93% reported improved skin tone evenness</li>
 <li>89% noticed softer, smoother skin texture</li>
 <li>100% experienced no adverse reactions</li>
 <li>95% would recommend the treatment</li>
  </ul>
 </div>
 <div className="bg-neutral-50 p-8">
 <img
 src="https://www.iadr.org/sites/default/files/styles/50_50/public/2021-09/blog_post_diversity_0.png?itok=l4oktgRW"
 alt="Laboratory research team"
 className="w-full h-auto mb-4 rounded-lg"
 />

 </div>
 </div>

 {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
 <div className='mt-[15vh]'>
 
 <p className="text-lg text-neutral-600 mb-6">
 The development of Mia Peel represents a breakthrough in intimate skincare for melanin-rich skin. Our international team of specialists recognized a critical gap in the market: the absence of safe, effective intimate lightening treatments specifically formulated for darker skin tones.
 </p>
 <p className="text-lg text-neutral-600">
 Over 18 months of rigorous research and clinical testing, our team worked to perfect a formula that would deliver results while prioritizing safety for melanin-rich skin.
 </p>
 </div>
 <div className="bg-neutral-50 p-8">
 <img
 src="https://www.iadr.org/sites/default/files/styles/50_50/public/2021-09/blog_post_diversity_0.png?itok=l4oktgRW"
 alt="Laboratory research team"
 className="w-full h-auto mb-4"
 />
 <p className="text-sm text-neutral-500">
 Our research facility where the breakthrough formula was developed
 </p>
 </div>
 </div> */}

 </div>
 </section>
 
 </div>
  )
}
