import React from 'react';
import peel from '../images/peel.jpg'

const IngredientsSection = () => {
  const ingredients = [
    {
      name: "ALPHA ARBUTIN",
      scientificName: "α-Arbutin",
      effect: "Skin Brightening + Dark Spot Reduction",
      description: "A bioengineered compound that precisely targets melanin production pathways. Derived through advanced fermentation processes for maximum purity and stability.",
      percentage: "2%"
    },
    {
      name: "KOJIC ACID",
      scientificName: "5-hydroxy-2-hydroxymethyl-4H-pyran-4-one",
      effect: "Hyperpigmentation Control + Skin Clarity",
      description: "Natural compound engineered through precision fermentation. Works at cellular level to regulate melanin synthesis and promote even skin tone.",
      percentage: "1%"
    },
    {
      name: "ASCORBIC ACID",
      scientificName: "L-ascorbic acid",
      effect: "Antioxidant Protection + Collagen Synthesis",
      description: "Stabilized Vitamin C protected by molecular encapsulation technology. Proven to neutralize free radicals and enhance skin's natural repair mechanisms.",
      percentage: "15%"
    },
    {
      name: "GLUTATHIONE",
      scientificName: "γ-L-Glutamyl-L-cysteinylglycine",
      effect: "Master Antioxidant + Skin Brightening",
      description: "Advanced peptide complex utilizing proprietary delivery system for enhanced penetration and cellular uptake.",
      percentage: "0.5%"
    }
  ];

  return (
    <div className=" py-4 ">
         <section className="relative mb-8 flex bg-fixed h-screen " >

 <div className="container  p-6 w-[30%] m-auto  rounded-lg     ml-12 ">
 
 <h1 className="text-5xl font-bold   p-4  " >Our Product</h1>

 </div>
 <div className="w-[60%]  p-8">
 <img
 src={peel}
 alt="peel"
 className="w-[85vh] h-[90vh] mb-4 rounded-lg"
 />

 </div>
 </section>
      <div className="max-w-7xl mx-auto">
        {/* Introduction Section */}
        <div className="mb-24 border-b border-black pb-16">
          <h2 className="text-2xl font-normal mb-16 text-center uppercase tracking-widest">
            The Science of Skin Transformation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-sm leading-relaxed">
              <p className="mb-4">Our formulations represent the convergence of biotechnology and skincare innovation. Each ingredient is selected based on peer-reviewed research and clinical efficacy data.</p>
            </div>
            
            <div className="text-sm leading-relaxed">
              <p className="mb-4">Through advanced molecular engineering and delivery systems, we've optimized the bioavailability and stability of each active compound, ensuring maximum effectiveness.</p>
            </div>
            
            <div className="text-sm leading-relaxed">
              <p>Every ingredient undergoes rigorous stability testing and is backed by multiple clinical studies, meeting pharmaceutical-grade standards for purity and potency.</p>
            </div>
          </div>
        </div>

        {/* Ingredients Grid */}
        <h3 className="text-lg font-normal mb-16 text-center uppercase tracking-widest">
          Active Ingredients
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {ingredients.map((ingredient) => (
            <div key={ingredient.name} className="border-t border-black pt-8">
              <div className="grid grid-cols-1 gap-2">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-normal tracking-wider">
                    {ingredient.name}
                  </h3>
                  <span className="text-sm font-mono">
                    {ingredient.percentage}
                  </span>
                </div>
                
                <p className="text-xs font-mono text-gray-500 tracking-wider">
                  {ingredient.scientificName}
                </p>
                
                <p className="text-sm font-normal tracking-wide text-gray-700 mt-2">
                  {ingredient.effect}
                </p>
                
                <p className="text-sm leading-relaxed text-gray-600 mt-4">
                  {ingredient.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-black pt-8">
          <p className="text-xs text-center text-gray-500 tracking-wider">
            ALL INGREDIENTS ARE DERMATOLOGICALLY TESTED AND CLINICALLY PROVEN
          </p>
        </div>
      </div>
    </div>
  );
};

export default IngredientsSection;