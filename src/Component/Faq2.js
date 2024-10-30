import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-neutral-200">
      <button
        className="w-full py-6 flex justify-between items-center text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-neutral-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-neutral-600" />
        )}
      </button>
      {isOpen && (
        <div className="pb-6">
          <p className="text-neutral-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqCategories = [
    {
      title: "About the Treatment",
      questions: [
        {
          question: "What is Mia Peel?",
          answer: "Mia Peel is the first clinically-developed intimate lightening peel specifically formulated for melanin-rich skin. Our unique formula has been created by leading dermatologists to provide safe and effective results for darker skin tones."
        },
        {
          question: "How does it work?",
          answer: "The treatment works through a carefully calibrated blend of active ingredients that gently exfoliate and brighten the skin while protecting its natural barrier. The formula includes kojic acid, niacinamide, and alpha arbutin, which work together to achieve even skin tone without compromising skin health."
        },
        {
          question: "Why is it different from other treatments?",
          answer: "Unlike generic skin lightening treatments, Mia Peel has been specifically formulated and tested for intimate areas of melanin-rich skin. Our formula considers the unique characteristics of darker skin tones, ensuring safe and effective results without the risks typically associated with traditional lightening products."
        }
      ]
    },
    {
      title: "Safety & Suitability",
      questions: [
        {
          question: "Is the treatment safe for intimate areas?",
          answer: "Yes, Mia Peel has been specifically developed and extensively tested for use on intimate areas. Our formula is pH-balanced and dermatologist-tested to ensure safety for these sensitive regions. Each ingredient has been carefully selected for its gentle yet effective properties."
        },
        {
          question: "Who is suitable for this treatment?",
          answer: "Mia Peel is suitable for individuals with melanin-rich skin (Fitzpatrick types IV-VI) who are looking to address uneven skin tone in intimate areas. However, we recommend a consultation with a certified practitioner to determine your specific suitability."
        },
        {
          question: "Have there been any clinical studies?",
          answer: "Yes, Mia Peel has undergone extensive clinical testing over 18 months. Our studies involved hundreds of participants with melanin-rich skin types, demonstrating both safety and efficacy. 93% of participants reported improved skin tone evenness with no adverse reactions."
        }
      ]
    },
    {
      title: "Treatment Process",
      questions: [
        {
          question: "How many sessions will I need?",
          answer: "A typical treatment course consists of 4-6 sessions, spaced 2-3 weeks apart. However, the exact number of sessions may vary based on individual needs and desired results. Your practitioner will create a personalized treatment plan during your consultation."
        },
        {
          question: "How long does each session take?",
          answer: "Each treatment session typically takes 30-45 minutes, including preparation and aftercare discussion. The actual peel application time is approximately 15-20 minutes."
        },
        {
          question: "Is there any downtime?",
          answer: "Minimal to no downtime is required. Some clients may experience slight sensitivity for 24-48 hours post-treatment. You can resume normal activities immediately, but should follow specific aftercare instructions provided by your practitioner."
        }
      ]
    },
    {
      title: "Results & Aftercare",
      questions: [
        {
          question: "When will I see results?",
          answer: "Most clients notice initial improvements after 2-3 treatments. Optimal results typically appear after completing the full treatment course of 4-6 sessions. Results continue to improve with each session as the skin responds to the treatment."
        },
        {
          question: "How long do results last?",
          answer: "Results can be long-lasting when maintained with proper skincare and protection. We recommend following our aftercare protocol and may suggest maintenance treatments every 6-12 months depending on individual needs."
        },
        {
          question: "What aftercare is required?",
          answer: "Post-treatment care includes using our specialized aftercare products, avoiding tight clothing for 24 hours, protecting the treated area from sun exposure, and following your practitioner's specific aftercare instructions. We provide a detailed aftercare guide after each treatment."
        }
      ]
    },
    {
      title: "Finding a Provider",
      questions: [
        {
          question: "How do I find a certified provider?",
          answer: "You can find certified Mia Peel providers through our clinic finder on our website. All listed providers have completed our comprehensive training program and maintain our high standards of care."
        },
        {
          question: "What should I expect at my first appointment?",
          answer: "Your first appointment will include a thorough consultation to assess your suitability, discuss your goals, and create a personalized treatment plan. Your practitioner will explain the procedure in detail and address any concerns before proceeding with treatment."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-[20vh]" name="faq">
      {/* Hero Section */}
      <section className="relative h-64 bg-neutral-50">
        <div className="container mx-auto px-6 py-20">
          <h1 className="text-5xl font-light mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-neutral-600">
            Everything you need to know about Mia Peel treatments
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-light mb-8">{category.title}</h2>
              <div className="space-y-2">
                {category.questions.map((item, index) => (
                  <FAQItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === categoryIndex * 10 + index}
                    onClick={() => setOpenIndex(
                      openIndex === categoryIndex * 10 + index 
                        ? null 
                        : categoryIndex * 10 + index
                    )}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-2xl font-light mb-6">Still have questions?</h2>
          <p className="text-neutral-600 mb-8">
            Our team is here to help you with any additional questions you may have about Mia Peel treatments.
          </p>
          <button className="bg-neutral-900 text-white px-8 py-4 hover:bg-neutral-800 transition">
           <Link to="/contact" > Contact Us</Link> 
          </button>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;