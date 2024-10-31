import React from 'react';
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.jpg";
import c3 from "../images/c3.jpg";
import c4 from "../images/c4.jpg";

export default function TreatmentReports() {

    const clients = [
       
        {
          id: "Client 001",
          condition: "Severe hyperpigmentation in the vulva area",
          durationCondition: "5 years",
          treatment: "Mia Peel – Intense applied to the full area of hyperpigmentation.",
          application: "Three layers with intervals.",
          aftercare: "Hydrating cream for 2 weeks.",
          results: "Significant reduction in hyperpigmentation.",
          skinGoal: "Fade pigmentation",
          duration: "2 months",
          image: c1,
          name: "sandra",
          testimonial: "I had tried numerous products before, but Mia Peel was the first treatment that actually showed real results. The improvement in my skin tone is remarkable."

        },
        {
          id: "Client 002",
          condition: "Severe hyperpigmentation in underarm",
          durationCondition: "7 years",
          treatment: "Mia Peel – Intense",
          application: "Three layers applied with intervals.",
          aftercare: "Hydrating cream for 3 weeks.",
          results: "Peeling subsided, improved tone.",
          skinGoal: "Fade pigmentation",
          duration: "4 months",
          image: c2,
          name:"Shoghana",
          testimonial: "The difference in my skin's texture and tone is incredible. I appreciate how the treatment was tailored to my specific needs."

        },
        {
          id: "Client 003",
          condition: "Severe hyperpigmentation in the vulva area",
          durationCondition: "5 years",
          treatment: "Mia Peel – Intense",
          application: "Three layers with intervals.",
          aftercare: "Hydrating cream for 2 weeks.",
          results: "Peeling subsided, improved tone.",
          skinGoal: "Fade pigmentation",
          duration: "3 months",
          image: c3,
          name: "Anna",
          testimonial: "As someone with sensitive skin, I was initially hesitant. The careful approach and amazing results exceeded my expectations."

        },
        {
            id: "Client 004",
            condition: "Severe hyperpigmentation in the arm",
            durationCondition: "1 month",
            treatment: "Mia Peel – Intense applied to the full area of hyperpigmentation.",
            application: "Three layers applied with 2–3 minute intervals between each layer.",
            aftercare: "Hydrating cream for 2 weeks.",
            results: "Peeling subsided by the end of the two-week period.",
            skinGoal: "Fade pigmentation",
            duration: "1 month",
            image: c4, 
            name :"Anna",
            testimonial: "I was surprised by how quickly I saw results! After just one month, the pigmentation on my arm has faded significantly. The treatment process was comfortable, and the aftercare was easy to manage. Highly recommend!"

          }
      ];

      
  return (
    <div className="container mx-auto py-8">
      {clients.map((client, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 mb-8 flex flex-col md:flex-row">
          <div className="w-full md:w-1/3">
            <img src={client.image} alt={`${client.id} Before and After`} className="rounded-lg mb-4 md:mb-0 w-[60vh]" />
          </div>
          <div className="w-full md:w-2/3 md:pl-8">
            <h2 className="text-xl font-bold mb-2">{client.id} - Treatment Report</h2>
            <p><strong>Condition:</strong> {client.condition}</p>
            <p><strong>Duration of condition:</strong> {client.durationCondition}</p>
            <p><strong>Treatment:</strong> {client.treatment}</p>
            <p><strong>Application:</strong> {client.application}</p>
            <p><strong>Aftercare:</strong> {client.aftercare}</p>
            <p><strong>Results:</strong> {client.results}</p>
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">{client.name}’s journey</h3>
              <div className="flex">
                <div className="mr-8">
                  <p className="font-semibold">Skin Goal</p>
                  <p>{client.skinGoal}</p>
                </div>
                <div>
                  <p className="font-semibold">Duration</p>
                  <p>{client.duration}</p>
                </div>
              </div>
            </div>
            <div className="p-6">
      <p className="text-neutral-600 italic">"{client.testimonial}"</p>
    </div>
          </div>
        </div>
      ))}
    </div>
  );
}
