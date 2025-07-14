import React from 'react';
import "./About.css";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
              alt="About Us"
              className="img-fluid about-img"
            />
          </div>
          <div className="col-md-6 about-text">
            <h3>Who We Are</h3>
            <p>
              At Palapas, we believe in blending luxury, wellness, and natural beauty into unforgettable experiences.
              Whether you're soaking in a beach sunset, enjoying a premium gym, or exploring ocean vibes — we curate
              spaces for peace and power.
            </p>
            <a href="#contact" className="btn btn-gold mt-3">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
