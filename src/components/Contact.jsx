import React from 'react';
import { Phone, Mail, MapPin, User, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="section-title">
          <h2>Get in Touch</h2>
          <p>Request a quote or enquire about material availability. Our team will get back to you within 24 hours.</p>
        </div>

        <div className="contact-layout">
          <div className="contact-info-card">
            <div className="info-item">
              <div className="info-icon"><User size={24} /></div>
              <div className="info-text">
                <h4>Contact Person</h4>
                <p>Faizal Chaniya</p>
              </div>
            </div>
            
            <div className="info-item">
              <div className="info-icon"><Phone size={24} /></div>
              <div className="info-text">
                <h4>Phone / WhatsApp</h4>
                <p>+91 75749 77367</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon"><MapPin size={24} /></div>
              <div className="info-text">
                <h4>Office Address</h4>
                <p>Office No. 427, Star Chambers, Harihar Chowk, Rajkot, Gujarat</p>
              </div>
            </div>
            
            <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>
                Serving manufacturers across India with high-quality plastic raw materials.
              </p>
            </div>
          </div>

          <form className="enquiry-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" placeholder="Your company" required />
              </div>
              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" required />
              </div>
              <div className="form-group">
                <label>City / Location</label>
                <input type="text" placeholder="e.g. Ahmedabad, Mumbai" required />
              </div>
              <div className="form-group full">
                <label>Material Required</label>
                <select required>
                  <option value="">Select Material</option>
                  <option value="HDLDPE">HDLDPE Scrap</option>
                  <option value="PPCP">PPCP / PP Scrap</option>
                  <option value="ABS">ABS Regrind</option>
                  <option value="PET">PET Flakes</option>
                  <option value="PC-Nylon">PC / Nylon Scrap</option>
                  <option value="LDPE">LDPE / LLDPE Scrap</option>
                  <option value="Other">Other Grades</option>
                </select>
              </div>
              <div className="form-group full">
                <label>Quantity & Specific Requirements</label>
                <textarea rows="4" placeholder="Mention quantity in MT and any quality specs..."></textarea>
              </div>
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
              Send Enquiry <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
