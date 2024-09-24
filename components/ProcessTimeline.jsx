'use client';

import React, { useState } from 'react';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    { title: 'Stage 1', content: 'Initial Consultation', description: 'Our journey begins with an in-depth consultation, where we take the time to understand your vision, lifestyle, and preferences. During this initial meeting, we discuss the project scope, budget, and timeline to ensure we are aligned from the start. To gain a comprehensive understanding of your space, we conduct a site visit to gather measurements and assess the environment, laying the foundation for a successful design.' },
    { title: 'Stage 2', content: 'Design & Planning', description: 'Once we have a clear understanding of your needs, we move into the design development phase. Here, we create mood boards and initial design concepts that reflect your style and aspirations. We present detailed floor plans and 3D renderings for your review, allowing you to visualize the transformation. Your feedback is invaluable during this stage, as we refine the design to ensure it perfectly aligns with both your aesthetic and functional requirements.' },
    { title: 'Stage 3', content: 'Implementation & Procurement', description: 'With the design finalized, we proceed to implementation and procurement. We source high-quality furniture and materials that enhance the overall vision of your space. Our team coordinates with trusted contractors to oversee the installation process, ensuring that every detail is executed as planned. Regular site visits allow us to monitor progress and address any issues that may arise, guaranteeing a smooth transition from concept to reality.' },
    { title: 'Stage 4', content: 'Final Reveal & Walk-through', description: 'The culmination of our efforts is the final reveal, where we style your space with carefully selected accessories and artwork that bring your vision to life. We conduct a thorough walk-through together to ensure your complete satisfaction with the completed project. Afterward, we follow up to gather feedback and ensure that you continue to enjoy your beautifully designed space for years to come.' }
  ];

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="text-center pt-10 bg-slateblue pb-20">
      <h1 className="text-white text-4xl font-bold m-20  tracking-wide">Our Process</h1>
      <div className="process-wrapper container mx-auto mt-16">
        <div className="relative w-10/12 mx-auto mb-15">
          <ul className="flex justify-between">
            {steps.map((step, index) => (
              <li key={index} 
                  className={`flex flex-col items-center cursor-pointer text-white font-bold transition-all duration-200 
                              ${activeStep >= index ? 'text-sand' : ''}`}
                  onClick={() => handleStepClick(index)}>
                <div className={`w-8 h-8 rounded-full border-2 transition-all duration-300 
                                ${activeStep >= index ? 'border-white bg-gradient-to-r from-lightbrown to-darkbrown' : 'border-sand'}`} />
                <div className="step-inner mt-2 text-lg">{step.title}</div>
              </li>
            ))}
          </ul>

          {/* Progress bar */}
          <div className="w-full h-1 mt-8 bg-gray-300 absolute left-1/10 top-14 rounded-full">
            <div className={`h-full bg-gradient-to-r from-black to-sand rounded-full transition-all duration-900`} 
                 style={{ width: `${(activeStep + 1) * (100 / steps.length)}%` }} />
          </div>
          
        </div>

        <div className="bg-lightbrown rounded-lg w-11/12 mx-auto mt-12">
          {steps.map((step, index) => (
            <div key={index} className={`p-8 text-center transition-opacity duration-700 ${activeStep === index ? 'block' : 'hidden'}`}>
              <h2 className="text-2xl pb-4 text-slateblue font-semibold uppercase tracking-wider">{step.content}</h2>
              <p className="text-slategray text-lg">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;
