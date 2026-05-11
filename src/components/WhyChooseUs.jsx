import React from 'react';
import { ShieldCheck, Truck, Globe, BarChart3 } from 'lucide-react';
import './WhyChooseUs.css';

const features = [
  {
    icon: <BarChart3 size={32} />,
    title: 'Bulk Supply',
    description: 'Capability to fulfill large scale requirements for manufacturers with consistent supply chains.'
  },
  {
    icon: <ShieldCheck size={32} />,
    title: 'Quality Assurance',
    description: 'Rigorous sorting and cleaning processes to ensure you get the highest grade material.'
  },
  {
    icon: <Truck size={32} />,
    title: 'Pan India Logistics',
    description: 'Efficient transport network delivering raw materials to every corner of India from Rajkot.'
  },
  {
    icon: <Globe size={32} />,
    title: 'International Sourcing',
    description: 'Leveraging global networks to source specialized plastic grades based on your custom demand.'
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us">
      <div className="container">
        <div className="section-title">
          <h2>Why Partner With Us?</h2>
          <p>Pluto India Trade Link stands for reliability, quality, and scale in the plastic scrap industry.</p>
        </div>

        <div className="why-grid">
          {features.map((feature, index) => (
            <div key={index} className="why-card">
              <div className="why-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
