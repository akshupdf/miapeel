import React from 'react'


export default function Safety() {
  return (
    <div className="min-h-screen bg-white pt-16 bg-no-repeat">
 {/* Hero Section */}
 <section className="relative h-[90vh]  bg-no-repeat bg-cover ">
 {/* <div className="absolute  w-auto 
            min-w-full min-h-full max-w-none bg-black opacity-50 blur-xl"> </div> */}
 <div className="container  p-6 w-[50%] absolute top-[35vh] rounded-lg     ml-12 ">
 
 <h1 className="text-5xl font-bold   p-4  " >Safety & Ethics</h1>

 </div>
 </section>

 {/* Development Journey */}
 <section className="py-20 bg-white">
 <div className="container mx-auto lg:px-6 ">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
 <div className='mt-[15vh]'>
 <h2 className="text-3xl font-light mb-8">Our Commitment to Safety</h2>
 <p className="text-lg text-neutral-600 mb-6">
 Every aspect of Mia Peel has been developed with safety as the primary concern: </p>
 <ul className="text-lg text-neutral-600 list-disc">
 <li>Dermatologist-tested formula</li>
 <li>Extensive clinical trials</li>
 <li>Regular safety assessments</li>
 <li>Strict manufacturing standards</li>
  </ul>
 </div>
 {/* <div className="bg-neutral-50 p-8">
 <img
 src="https://www.iadr.org/sites/default/files/styles/50_50/public/2021-09/blog_post_diversity_0.png?itok=l4oktgRW"
 alt="Laboratory research team"
 className="w-full h-auto mb-4 rounded-lg"
 />

 </div> */}
 </div>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
 <div className='mt-[15vh]'>
 <h2 className="text-3xl font-light mb-8">Ethical Development</h2>
 <p className="text-lg text-neutral-600 mb-6">
 We believe in ethical skincare development: </p>
 <ul className="text-lg text-neutral-600 list-disc">
 <li>No animal testing</li>
 <li>Sustainable ingredients</li>
 <li>Transparent manufacturing</li>
 <li>Inclusive research practices</li>
  </ul>
 </div>
 {/* <div className="bg-neutral-50 p-8">
 <img
 src="https://www.iadr.org/sites/default/files/styles/50_50/public/2021-09/blog_post_diversity_0.png?itok=l4oktgRW"
 alt="Laboratory research team"
 className="w-full h-auto mb-4 rounded-lg"
 />

 </div> */}
 </div>
 </div>
 </section></div>
  )
}
