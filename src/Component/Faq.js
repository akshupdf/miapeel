import React, { useState } from 'react';

function FAQAccordion() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      category: "About the Treatment",
      questions: [
        {
          question: "What makes Mia Peel different from other intimate lightening products?",
          answer: "Mia Peel is the first and only intimate peel specifically formulated for melanin-rich skin. Our formula considers the unique characteristics of darker skin tones, ensuring safe and effective results without the risks typically associated with traditional lightening products.",
        },
        {
          question: "Is the treatment safe for intimate areas?",
          answer: "Yes. Our formula has been specifically developed and tested for intimate area use on melanin-rich skin. All ingredients are dermatologically tested and pH-balanced for intimate areas.",
        },
        {
          question: "How long does the treatment take?",
          answer: "Each professional treatment session takes approximately 30-45 minutes. A full treatment course typically consists of 4-6 sessions, spaced 2-3 weeks apart.",
        },
      ],
    },
    {
      category: "Results & Safety",
      questions: [
        {
          question: "When will I see results?",
          answer: "Most clients notice initial improvements after 2-3 treatments. Optimal results typically appear after completing the full treatment course of 4-6 sessions.",
        },
        {
          question: "Are there any side effects?",
          answer: "The treatment has been formulated to minimize side effects. Some clients may experience mild tingling during application, which is normal. All potential effects are temporary and carefully monitored by our trained professionals.",
        },
        {
          question: "Is there any downtime?",
          answer: "Minimal to no downtime is required. Some clients may experience slight sensitivity for 24-48 hours post-treatment.",
        },
      ],
    },
    {
      category: "Treatment Process",
      questions: [
        {
          question: "What should I do before my treatment?",
          answer: "We recommend:\n- Avoiding any other intimate area treatments for 1 week prior\n- Gently cleansing the area on the day of treatment\n- Wearing comfortable, loose clothing to your appointment",
        },
        {
          question: "What aftercare is required?",
          answer: "Post-treatment care includes:\n- Using our specialized aftercare products\n- Avoiding tight clothing for 24 hours\n- Protecting the treated area from sun exposure\n- Following your clinician's specific aftercare instructions",
        },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {faqs.map((section, sectionIndex) => (
        <div key={sectionIndex} className="mb-6">
          <h2 className="text-2xl font-bold mb-4">{section.category}</h2>
          {section.questions.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleQuestion(`${sectionIndex}-${index}`)}
                className="w-full flex justify-between items-center text-left p-4 bg-gray-100 rounded-lg"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span>{openQuestion === `${sectionIndex}-${index}` ? '-' : '+'}</span>
              </button>
              {openQuestion === `${sectionIndex}-${index}` && (
                <div className="p-4 bg-gray-50 border-l-2 border-gray-300">
                  <p className="text-neutral-700 whitespace-pre-line">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default FAQAccordion;
