import React from 'react'

export default function ContactUs() {
  return (
    <div className="h-screen  lg:pt-16 bg-no-repeat bg-cover  bg-[url(https://en.bmc-medical.com/web/img/contactus/contact-banner.jpg)]">
 {/* Hero Section */}
 <section className="relative lg:h-[90vh]  ">
 {/* <div className="absolute  w-auto 
            min-w-full min-h-full max-w-none bg-black opacity-50 blur-xl"> </div> */}
 <div className="container   lg:w-[50%] absolute top-[35vh]  rounded-lg     ml-[15vh] ">
 
 <h1 className="text-5xl  pl-0 p-4 text-white font-bold " >Contact Us</h1>
 <ul className="text-lg text-white list-disc">
 <li>Email : info@miapeel.co</li>
 <li>Instagram : @_miapeel</li>
 <li>Contact No: 074982276752</li>
  </ul>
 </div>
 </section>


 
 </div>
  )
}
