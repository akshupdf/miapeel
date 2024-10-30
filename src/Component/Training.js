import React, { useState } from 'react';
import { Check, Star, Award, Users, ArrowRight } from 'lucide-react';

const TrainingComingSoon = () => {
  const [email, setEmail] = useState('');
  const [profession, setProfession] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-white" name="training">
      {/* Hero Section */}
      <section className="relative h-screen bg-neutral-50 flex items-center">
        <div className="container mx-auto sm:p-0 lg:px-6">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-light mb-6">
              Master the Future of Ethnic Skincare
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              Join the waitlist for our exclusive training program in the world's first intimate lightening peel for melanin-rich skin.
            </p>
            <div className="flex space-x-6 mb-12">
              <div className="flex items-center">
                <Star className="h-5 w-5 mr-2" />
                <span>Clinical Excellence</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2" />
                <span>Professional Certification</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Expert-Led Training</span>
              </div>
            </div>
            <p className="text-neutral-600">Launching Early 2025</p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto sm:p-0 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-8">Program Highlights</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Check className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Comprehensive Training</h3>
                    <p className="text-neutral-600">
                      Master the science of melanin-rich skin and advanced treatment protocols.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Hands-On Experience</h3>
                    <p className="text-neutral-600">
                      Practical sessions with expert supervision and real-case scenarios.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Business Development</h3>
                    <p className="text-neutral-600">
                      Marketing strategies and business integration support.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-5 w-5 mr-3 mt-1" />
                  <div>
                    <h3 className="font-medium mb-2">Ongoing Support</h3>
                    <p className="text-neutral-600">
                      Access to continuous education and professional network.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-neutral-50 p-8">
              {!submitted ? (
                <>
                  <h2 className="text-2xl font-light mb-6">Register Your Interest</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Professional Email</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Profession</label>
                      <select
                        value={profession}
                        onChange={(e) => setProfession(e.target.value)}
                        className="w-full p-3 border border-neutral-300 focus:outline-none focus:border-neutral-900"
                        required
                      >
                        <option value="">Select your profession</option>
                        <option value="dermatologist">Dermatologist</option>
                        <option value="aesthetician">Aesthetician</option>
                        <option value="cosmetologist">Cosmetologist</option>
                        <option value="nurse">Aesthetic Nurse</option>
                        <option value="doctor">Medical Doctor</option>
                        <option value="other">Other Healthcare Professional</option>
                      </select>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-neutral-900 text-white px-8 py-4 hover:bg-neutral-800 transition flex items-center justify-center"
                    >
                      Join Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-2xl font-light mb-4">Thank You!</h3>
                  <p className="text-neutral-600">
                    You've been added to our waitlist. We'll contact you with program updates and early access opportunities.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto sm:p-0 lg:px-6">
          <h2 className="text-3xl font-light mb-12 text-center">Why Join Our Program?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8">
              <h3 className="text-xl font-medium mb-4">Market Leadership</h3>
              <p className="text-neutral-600">
                Be among the first certified providers of this revolutionary treatment for melanin-rich skin.
              </p>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-xl font-medium mb-4">Expert Knowledge</h3>
              <p className="text-neutral-600">
                Gain specialized expertise in treating intimate areas for clients with melanin-rich skin.
              </p>
            </div>
            <div className="bg-white p-8">
              <h3 className="text-xl font-medium mb-4">Business Growth</h3>
              <p className="text-neutral-600">
                Expand your service offerings with a unique, in-demand treatment backed by clinical research.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingComingSoon;