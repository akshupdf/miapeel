import React from 'react'

export default function About() {
  return (
    <div className='w-full pt-[25vh] h-auto font-sen'>
           <div className='w-[100%] flex p-10 h-[70vh]'>
        <div className='w-[50%]  p-10 ml-8'>
        <h1 className='text-4xl mb-4'>Our Story</h1>
        <p className='text-2xl'>Mia Peel was born from a profound understanding of an unmet need in skincare. 
            Founded by dermatological experts specializing in melanin-rich skin,
             we recognized that intimate skincare solutions were not designed with brown 
             skin in mind. Our journey began with a simple question: Why should women of 
             color compromise on intimate skincare?</p>
             </div>
             <div className='w-[50%] rounded-xl'>
            <img src="https://target.scene7.com/is/image/Target/GUEST_69bdc98a-c27f-4612-89d4-5c8509ccc723" alt="test" className='object-cover h-[55vh] rounded-xl'></img>
             </div>
        </div>
        <div className='w-[100%] flex p-10 h-[70vh]'>
            <div className='w-[50%]'>
            <img src="https://cdn.shopify.com/s/files/1/0543/0847/0961/files/Green_View_-_Factory_FFP2_480x480.png?v=1614806122" alt="test" className='object-cover ml-4 w-[90vh] h-[60vh] rounded-xl'></img>


            </div>
            <div className='w-[50%] mt-[12vh] ml-8'>
            <h1 className='text-4xl mb-4'>Our Innovation</h1>
        <p className='text-2xl text-justify'>After three years of intensive research and development,
             we created the first intimate lightening peel specifically formulated for
              melanin-rich skin. Our breakthrough formula respects the unique characteristics
               of darker skin tones while delivering effective, safe results.</p>

            </div>
       
        </div>
        <div className='w-[100%] flex p-10 h-[70vh] mt-[10vh]'>
        <div className='w-[50%]  p-10 ml-8'>
           
        <h1 className='text-4xl mb-4'>Our Commitment</h1>
        <p className='text-2xl'>We are dedicated to providing scientifically-backed skincare 
            solutions that address the specific needs of women of color. Every product we develop 
            undergoes rigorous testing to ensure both safety and efficacy for melanin-rich skin.</p>
            </div>
            <div className='w-[50%] rounded-xl flex justify-center'>
            <img src="https://st2.depositphotos.com/3008028/5542/i/450/depositphotos_55424209-stock-photo-multiracial-human-hands-making-a.jpg" alt="test" className='object-contain w-[65vh] rounded-xl'></img>
             </div>
           </div>
           </div>
  )
}
