import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight } from 'lucide-react';
import './Hero.css';
import heroImg from '../assets/hero_industrial_plastic_1778440548893.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={heroImg} alt="Industrial Plastic Scrap" />
      </div>
      
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">Industrial Grade Supplier</span>
          <h1>Pan India Plastic Scrap & Raw Material Supplier</h1>
          <p className="hero-sub">
            Bulk suppliers of HDLDPE, PPCP, PP, ABS, PET, and other high-quality plastic regrinds. 
            Sourcing excellence from Rajkot to the world.
          </p>
          
          <div className="hero-btns">
            <a href="#contact" className="btn btn-accent">
              Enquire Now <ArrowRight size={18} />
            </a>
            <a href="tel:+917574977367" className="btn btn-outline" style={{ borderColor: 'white', color: 'white' }}>
              <Phone size={18} /> Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
