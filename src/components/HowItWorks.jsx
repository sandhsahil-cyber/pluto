import React from 'react';
import './HowItWorks.css';

const steps = [
  {
    title: 'Share Requirement',
    description: 'Tell us about the plastic grade, quantity, and quality specs you need.'
  },
  {
    title: 'Get Quote',
    description: 'Receive a competitive bulk quote based on current market rates.'
  },
  {
    title: 'Confirm Order',
    description: 'Finalize the order details and schedule for dispatch.'
  },
  {
    title: 'Delivery',
    description: 'Safe and timely delivery to your manufacturing unit across India.'
  }
];

const HowItWorks = () => {
  return (
    <section className="bg-alt">
      <div className="container">
        <div className="section-title">
          <h2>Our Simple Process</h2>
          <p>Efficiency in sourcing and transparency in trade define our workflow.</p>
        </div>

        <div className="steps-container">
          <div className="steps-line"></div>
          {steps.map((step, index) => (
            <div key={index} className="step-card">
              <div className="step-number">{index + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
