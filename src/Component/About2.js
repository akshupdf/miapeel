import React from 'react';
import { Users, Clock, CircleDot, Star } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-neutral-50">
        <div className="container mx-auto px-6 py-32">
          <h1 className="text-5xl font-light mb-6">Pioneering Safe Innovation in Intimate Skincare</h1>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Created by experts in melanin-rich skin, for women who deserve scientifically-proven results.
          </p>
        </div>
      </section>

      {/* Development Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl mb-8">Developed by Global Leaders in Ethnic Skincare</h2>
              <p className="text-lg text-neutral-600 mb-6">
                Our groundbreaking formula is the result of collaboration between international dermatologists, 
                biochemists, and skincare specialists focusing exclusively on melanin-rich skin concerns.
              </p>
              <p className="text-lg text-neutral-600">
                Led by renowned specialists in ethnic dermatology from London, New York, and Lagos, 
                our team brings together decades of expertise in treating diverse skin types.
              </p>
            </div>
            <div className="bg-neutral-100 p-4">
              <img 
                src="/api/placeholder/600/400" 
                alt="International team of dermatologists and researchers" 
                className="w-full"
              />
              <p className="text-sm text-neutral-500 mt-2">Our international research team during clinical trials</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Process */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl mb-12 text-center">18 Months of Rigorous Research</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div className="flex flex-col items-center text-center">
              <Clock className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">18+ Months</h3>
              <p className="text-neutral-600">Of intensive research and development</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">500+ Participants</h3>
              <p className="text-neutral-600">In clinical trials across multiple countries</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CircleDot className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">200+ Formulations</h3>
              <p className="text-neutral-600">Tested and refined for optimal results</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Star className="h-8 w-8 mb-4" />
              <h3 className="text-xl font-medium mb-2">3 Research Centers</h3>
              <p className="text-neutral-600">Leading international facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl mb-12">Our Journey to Innovation</h2>
          <div className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-neutral-50 p-8">
                <h3 className="text-xl font-medium mb-4">Phase 1: Research</h3>
                <p className="text-neutral-600">
                  6 months of intensive research into melanin-rich skin characteristics 
                  and intimate area concerns.
                </p>
              </div>
              <div className="bg-neutral-50 p-8">
                <h3 className="text-xl font-medium mb-4">Phase 2: Development</h3>
                <p className="text-neutral-600">
                  8 months of formula development and refinement through 
                  multiple iterations and safety testing.
                </p>
              </div>
              <div className="bg-neutral-50 p-8">
                <h3 className="text-xl font-medium mb-4">Phase 3: Clinical Trials</h3>
                <p className="text-neutral-600">
                  4 months of extensive clinical trials across diverse participant groups
                  and skin types.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl mb-12">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img 
                src="/api/placeholder/300/300" 
                alt="Lead Dermatologist" 
                className="w-full mb-4 bg-neutral-200"
              />
              <h3 className="text-xl font-medium mb-2">Dr. Sarah Johnson</h3>
              <p className="text-neutral-600 mb-2">Lead Research Dermatologist</p>
              <p className="text-sm text-neutral-500">
                Specialist in ethnic dermatology with 15+ years of research experience
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img 
                src="/api/placeholder/300/300" 
                alt="Clinical Director" 
                className="w-full mb-4 bg-neutral-200"
              />
              <h3 className="text-xl font-medium mb-2">Dr. Aisha Patel</h3>
              <p className="text-neutral-600 mb-2">Clinical Director</p>
              <p className="text-sm text-neutral-500">
                Pioneer in intimate area treatments for diverse skin types
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img 
                src="/api/placeholder/300/300" 
                alt="Research Lead" 
                className="w-full mb-4 bg-neutral-200"
              />
              <h3 className="text-xl font-medium mb-2">Dr. Michael Chen</h3>
              <p className="text-neutral-600 mb-2">Head of Research</p>
              <p className="text-sm text-neutral-500">
                Biochemist specializing in melanin research and skin barrier function
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;