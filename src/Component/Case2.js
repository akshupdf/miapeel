import React from 'react';
import { Star, Clock, Check, ChevronRight } from 'lucide-react';
import TreatmentReports from './Treatment';

const CaseStudyCard = ({ title, age, skinType, sessions, description, testimonial }) => (
  <div className="bg-white p-8 shadow-sm">
    <h3 className="text-xl font-medium mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div>
        <img 
          src="/api/placeholder/400/300" 
          alt="Before treatment" 
          className="w-full h-auto mb-2"
        />
        <p className="text-sm text-neutral-500">Before Treatment</p>
      </div>
      <div>
        <img 
          src="/api/placeholder/400/300" 
          alt="After treatment" 
          className="w-full h-auto mb-2"
        />
        <p className="text-sm text-neutral-500">After 6 Sessions</p>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      <div>
        <p className="text-sm text-neutral-500">Age</p>
        <p className="font-medium">{age}</p>
      </div>
      <div>
        <p className="text-sm text-neutral-500">Skin Type</p>
        <p className="font-medium">{skinType}</p>
      </div>
      <div>
        <p className="text-sm text-neutral-500">Sessions</p>
        <p className="font-medium">{sessions}</p>
      </div>
      <div>
        <p className="text-sm text-neutral-500">Duration</p>
        <p className="font-medium">12 weeks</p>
      </div>
    </div>
    <p className="text-neutral-600 mb-6">{description}</p>
    <div className="bg-neutral-50 p-6">
      <p className="text-neutral-600 italic">"{testimonial}"</p>
    </div>
  </div>
);

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      title: "Case Study 1: Significant Improvement in Skin Tone Evenness",
      age: "28",
      skinType: "Type V",
      sessions: "6",
      description: "Client presented with uneven skin tone in intimate areas. Treatment plan included 6 sessions of Mia Peel treatments spaced 2 weeks apart. Significant improvement was noted after the fourth session, with optimal results achieved after completing all sessions.",
      testimonial: "I had tried numerous products before, but Mia Peel was the first treatment that actually showed real results. The improvement in my skin tone is remarkable."
    },
    {
      title: "Case Study 2: Enhanced Skin Texture and Tone",
      age: "35",
      skinType: "Type IV",
      sessions: "5",
      description: "Client sought treatment for both texture and tone concerns. A customized treatment protocol was developed, resulting in visible improvements after 3 sessions. Final results showed significant enhancement in both skin texture and evenness.",
      testimonial: "The difference in my skin's texture and tone is incredible. I appreciate how the treatment was tailored to my specific needs."
    },
    {
      title: "Case Study 3: Optimal Results for Sensitive Skin",
      age: "31",
      skinType: "Type VI",
      sessions: "6",
      description: "Client with sensitive skin required a modified approach. Treatment intervals were adjusted to 3 weeks, with specialized pre and post-care protocols. Results demonstrated the treatment's effectiveness even for sensitive skin types.",
      testimonial: "As someone with sensitive skin, I was initially hesitant. The careful approach and amazing results exceeded my expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-neutral-50 pt-[10vh]" name="case">
      {/* Hero Section */}
      <section className="relative bg-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-light mb-6">Clinical Case Studies</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mb-8">
            Documented results demonstrating the effectiveness of Mia Peel treatments across different skin types and concerns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <Star className="h-5 w-5" />
              <span>93% Success Rate</span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-5 w-5" />
              <span>18 Months of Clinical Data</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5" />
              <span>500+ Documented Cases</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Overview */}
      <section className="py-20 bg-neutral-50">
      <h2 className="text-4xl font-semibold m-8">Client Testimonials</h2>
      <TreatmentReports />
        <div className="container mx-auto sm:p-0 lg:px-6">
          <div className="bg-white p-8 mb-12">
            <h2 className="text-2xl font-light mb-6">Clinical Study Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl mb-4">Study Parameters</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1" />
                    <span>500+ participants across skin types IV-VI</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1" />
                    <span>18-month observation period</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1" />
                    <span>Standardized treatment protocols</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1" />
                    <span>Regular monitoring and documentation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl mb-4">Key Findings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1" />
                    <span>93% reported significant improvement</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1" />
                    <span>Zero adverse reactions reported</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1" />
                    <span>Consistent results across all skin types</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 mr-3 mt-1" />
                    <span>High patient satisfaction rate</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Individual Case Studies */}
          {/* <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div> */}
     
        </div>
      </section>

      {/* Professional Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-light mb-6">Are you a skincare professional?</h2>
          <p className="text-neutral-600 mb-8">
            Access our full clinical research database and treatment protocols.
          </p>
          <button className="bg-neutral-900 text-white px-8 py-4 hover:bg-neutral-800 transition flex items-center mx-auto">
            Professional Portal
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;
