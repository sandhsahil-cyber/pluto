import React, { useState } from 'react';
import { MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './Coverage.css';

const states = [
  'Gujarat', 'Maharashtra', 'Rajasthan', 'Delhi', 'Haryana', 
  'Punjab', 'Uttar Pradesh', 'Madhya Pradesh', 'Tamil Nadu', 
  'Karnataka', 'Andhra Pradesh', 'Telangana', 'West Bengal'
];

const Coverage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Show first 4 states when compressed
  const visibleStates = isExpanded ? states : states.slice(0, 4);

  return (
    <section id="coverage" className="coverage-section">
      <div className="container">
        <div className="section-title">
          <h2 style={{ color: 'white' }}>Pan India Presence</h2>
          <p style={{ color: 'rgba(255,255,255,0.7)' }}>
            Strategically located in Rajkot, we ensure seamless supply chains across all major industrial hubs in India.
          </p>
        </div>

        <div className="coverage-container">
          <motion.div 
            layout
            className="coverage-grid"
          >
            <AnimatePresence mode="popLayout">
              {visibleStates.map((state) => (
                <motion.div 
                  key={state}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="state-item"
                >
                  <div className="state-dot"></div>
                  <span>{state}</span>
                </motion.div>
              ))}
              
              {!isExpanded && (
                <motion.div 
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="state-item more-badge"
                  onClick={() => setIsExpanded(true)}
                >
                  <MapPin size={16} />
                  <span>& More Locations...</span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <div className="coverage-toggle">
            <button 
              className="toggle-btn"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={20} />
                  <span>Show Less</span>
                </>
              ) : (
                <>
                  <ChevronDown size={20} />
                  <span>View All Coverage Areas</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
