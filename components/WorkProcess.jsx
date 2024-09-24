'use client';

import React, { useState, useEffect } from 'react';
import { processData } from '../data/index';
import { FiHome, FiSearch, FiPenTool, FiTruck } from 'react-icons/fi';

const iconMap = {
  0: <FiHome className="text-2xl" />,
  1: <FiSearch className="text-2xl" />,
  2: <FiPenTool className="text-2xl" />,
  3: <FiTruck className="text-2xl" />
};

const WorkProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleStepClick = (index) => {
    if (index !== activeStep && !isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveStep(index);
      }, 300);
    }
  };

  useEffect(() => {
    if (isAnimating) {
      setTimeout(() => {
        setIsAnimating(false);
      }, 600);
    }
  }, [isAnimating]);

  return (
    <div className="text-center pt-16 bg-gradient-to-b from-slate-50 to-slate-100 pb-16">
      <h1 className="text-slate-800 text-4xl font-light mb-6 tracking-wide">Our Process</h1>
      
      <div className="process-wrapper container mx-auto mt-12 flex">
        {/* Vertical Progress Bar */}
        <div className="relative w-1/6 mr-8" style={{ height: '60vh' }}>
          <div className="w-px bg-gradient-to-b from-slate-200 to-slate-300 absolute left-1/2 top-0 bottom-0 h-full transform -translate-x-1/2">
            <div 
              className="w-full bg-gradient-to-b from-[#708090] to-[#4a5a6a] transition-all duration-600 absolute top-0"
              style={{ 
                height: `${(activeStep + 1) / processData.length * 100}%`,
                transition: 'height 0.3s ease-in-out'
              }} 
            />
          </div>

          <ul className="flex flex-col justify-between h-full relative z-10">
            {processData.map((step, index) => (
              <li 
                key={step.id} 
                className="flex justify-center items-center cursor-pointer transition-all duration-200"
                onClick={() => handleStepClick(index)}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 shadow-md
                              ${activeStep >= index 
                                ? 'bg-gradient-to-br from-[#708090] to-[#4a5a6a] border-[#708090] text-white' 
                                : 'bg-white border-slate-300 text-slate-500'}`}
                >
                  {iconMap[index]}
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Step Details with Reveal Animation */}
        <div className="bg-white rounded-lg w-5/6 shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-[#708090] to-[#4a5a6a] z-10 transition-transform duration-300 ease-in-out"
               style={{
                 transform: isAnimating ? 'translateX(0)' : 'translateX(-100%)',
                 transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
               }}></div>
          {processData.map((step, index) => (
            <div 
              key={step.id} 
              className={`p-8 text-left transition-opacity duration-300 ${activeStep === index ? 'block' : 'hidden'}`}
            >
              <h2 className="text-3xl pb-4 text-slate-800 font-light uppercase tracking-wide border-b border-slate-200 flex items-center">
                {iconMap[index]}
                <span className="ml-3">{step.title}</span>
              </h2>
              <p className="text-slate-600 text-lg my-6 leading-relaxed">{step.description}</p>
              {step.details.map((detail, detailIndex) => (
                <div key={detailIndex} className="mb-6 bg-slate-50 p-4 rounded-lg shadow-inner">
                  <h3 className="text-xl font-light mb-3 text-slate-700 border-l-4 border-[#708090] pl-3">{detail.subtitle}</h3>
                  {detail.content && <p className="text-slate-600 mb-3 leading-relaxed">{detail.content}</p>}
                  {detail.items && (
                    <ul className="list-none pl-4 text-slate-600 space-y-1">
                      {detail.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#708090] rounded-full mr-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;