import React from 'react';
import { motion } from 'framer-motion';
import './Products.css';

// Import images
import hdldpeImg from '../assets/hdldpe_scrap_1778440563056.png';
import ppcpImg from '../assets/ppcp_scrap_1778440578857.png';
import absImg from '../assets/abs_regrind_1778440597898.png';
import petImg from '../assets/pet_flakes_1778440617101.png';
import internationalImg from '../assets/international_sourcing_1778440637519.png';

const products = [
  {
    title: 'HDLDPE Scrap',
    description: 'High-density & Low-density polyethylene scrap, sorted and cleaned for recycling.',
    image: hdldpeImg,
    tag: 'Bulk Supply'
  },
  {
    title: 'PPCP / PP Scrap',
    description: 'Polypropylene Copolymer regrinds suitable for various industrial molding applications.',
    image: ppcpImg,
    tag: 'Premium Quality'
  },
  {
    title: 'ABS Regrind',
    description: 'Acrylonitrile Butadiene Styrene scrap in regrind form, ideal for high-impact parts.',
    image: absImg,
    tag: 'Technical Grade'
  },
  {
    title: 'PET Flakes',
    description: 'Clear and colored PET flakes sourced and processed for high-grade fiber production.',
    image: petImg,
    tag: 'Recyclable'
  },
  {
    title: 'PC / Nylon Scrap',
    description: 'Polycarbonate and Nylon scrap materials for specialized engineering plastics requirements.',
    image: hdldpeImg, // Placeholder if specific not gen
    tag: 'Engineering Plastic'
  },
  {
    title: 'LDPE / LLDPE Scrap',
    description: 'Film and lump scrap of LDPE and LLDPE for plastic manufacturers across India.',
    image: hdldpeImg, // Placeholder
    tag: 'Film Grade'
  },
  {
    title: 'International Sourcing',
    description: 'Custom sourcing of specific plastic grades from international markets on demand.',
    image: internationalImg,
    tag: 'Global Trade'
  }
];

const Products = () => {
  return (
    <section id="products" className="bg-alt">
      <div className="container">
        <div className="section-title">
          <span className="product-tag">Our Materials</span>
          <h2>Quality Plastic Raw Materials</h2>
          <p>We supply a wide range of plastic scrap and regrinds to manufacturers and recyclers across the nation.</p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <motion.div 
              key={product.title}
              className="product-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-info">
                <span className="product-tag">{product.tag}</span>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a href="#contact" className="btn btn-outline" style={{ width: '100%', fontSize: '0.85rem' }}>
                  Enquire for Bulk
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
