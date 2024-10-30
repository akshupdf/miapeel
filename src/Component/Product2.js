import React from 'react';
import { Shield, Check, AlertCircle, Star } from 'lucide-react';
import peel from '../images/swatch.jpg'

const ProductPage = () => {

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
 <div className="min-h-screen bg-white" name="products">
 {/* Hero Product Section */}
 <section className="relative h-screen bg-neutral-50 flex items-center">
 <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
 <div className='mt-[20vh]'>
 <h1 className="text-5xl font-light mb-6">Advanced Formula for Melanin-Rich Skin</h1>
 <p className="text-xl text-neutral-600 mb-8">
 Scientifically formulated with precision-targeted ingredients for safe, effective results.
 </p>
 <div className="flex space-x-6 mb-8">
 <div className="flex items-center">
 <Shield className="h-5 w-5 mr-2" />
 <span className="text-sm">Dermatologist Tested</span>
 </div>
 <div className="flex items-center">
 <Star className="h-5 w-5 mr-2" />
 <span className="text-sm">Clinical Grade</span>
 </div>
 </div>
 </div>
 <div className="flex justify-center items-center">
 <img
 src={peel}
 alt="Mia Peel Product"
 className="max-w-md w-full"
 />
 </div>
 </div>
 </section>

 {/* Key Ingredients */}
 {/* <section className="py-20 bg-white">
 <div className="container mx-auto px-6">
 <h2 className="text-3xl font-light mb-12 text-center">Key Active Ingredients</h2>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="bg-neutral-50 p-8">
 <h3 className="text-xl font-medium mb-4">Kojic Acid</h3>
 <p className="text-neutral-600 mb-4">
 A gentle yet effective ingredient derived from mushrooms that helps even skin tone.
 </p>
 <ul className="space-y-2">
 <li className="flex items-start">
 <Check className="h-5 w-5 mr-2 mt-1 text-neutral-600" />
 <span className="text-sm">Safe for melanin-rich skin</span>
 </li>
 <li className="flex items-start">
 <Check className="h-5 w-5 mr-2 mt-1 text-neutral-600" />
 <span className="text-sm">Natural brightening properties</span>
 </li>
 </ul>
 </div>
 <div className="bg-neutral-50 p-8">
 <h3 className="text-xl font-medium mb-4">Niacinamide</h3>
 <p className="text-neutral-600 mb-4">
 Vitamin B3 derivative that supports skin barrier function while evening skin tone.
 </p>
 <ul className="space-y-2">
 <li className="flex items-start">
 <Check className="h-5 w-5 mr-2 mt-1 text-neutral-600" />
 <span className="text-sm">Strengthens skin barrier</span>
 </li>
 <li className="flex items-start">
 <Check className="h-5 w-5 mr-2 mt-1 text-neutral-600" />
 <span className="text-sm">Reduces inflammation</span>
 </li>
 </ul>
 </div>
 <div className="bg-neutral-50 p-8">
 <h3 className="text-xl font-medium mb-4">Alpha Arbutin</h3>
 <p className="text-neutral-600 mb-4">
 Advanced brightening compound that works safely with melanin-rich skin.
 </p>
 <ul className="space-y-2">
 <li className="flex items-start">
 <Check className="h-5 w-5 mr-2 mt-1 text-neutral-600" />
 <span className="text-sm">Targeted action</span>
 </li>
 <li className="flex items-start">
 <Check className="h-5 w-5 mr-2 mt-1 text-neutral-600" />
 <span className="text-sm">Gentle yet effective</span>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </section> */}

 {/* Full Ingredients List */}
 <div className="max-w-7xl mx-auto">
        {/* Introduction Section */}
        <div className="mb-24 border-b border-black pb-16 lg:mt-0 sm:mt-[20vh]">
          <h2 className="text-2xl font-normal mb-16 text-center uppercase tracking-widest">
            The Science of Skin Transformation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto lg:p-0 sm:p-4">
            <div className="text-sm leading-relaxed">
              <p className="mb-4 ">Our formulations represent the convergence of biotechnology and skincare innovation. Each ingredient is selected based on peer-reviewed research and clinical efficacy data.</p>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 lg:p-0 sm:p-4">
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

 {/* Benefits & Results */}
 {/* <section className="py-20 bg-white">
 <div className="container mx-auto px-6">
 <h2 className="text-3xl font-light mb-12">Benefits</h2>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
 <div>
 <img
 src="/api/placeholder/500/300"
 alt="Before and After Results"
 className="w-full h-auto mb-4"
 />
 <p className="text-sm text-neutral-500">
 Clinical results after 6 weeks of treatment
 </p>
 </div>
 <div className="space-y-6">
 <div>
 <h3 className="text-xl font-medium mb-3">Proven Results</h3>
 <ul className="space-y-4">
 <li className="flex items-start">
 <Check className="h-5 w-5 mr-3 mt-1" />
 <span>Even skin tone in intimate areas</span>
 </li>
 <li className="flex items-start">
 <Check className="h-5 w-5 mr-3 mt-1" />
 <span>Improved skin texture and smoothness</span>
 </li>
 <li className="flex items-start">
 <Check className="h-5 w-5 mr-3 mt-1" />
 <span>Enhanced skin barrier function</span>
 </li>
 <li className="flex items-start">
 <Check className="h-5 w-5 mr-3 mt-1" />
 <span>Gentle and non-irritating formula</span>
 </li>
 </ul>
 </div>
 </div>
 </div>
 </div>
 </section> */}
 </div>
 );
};

export default ProductPage;