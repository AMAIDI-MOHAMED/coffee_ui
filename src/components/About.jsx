import React from 'react';
import './about.css';

function About() {
  return (
    <section  id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            At <strong>Coffee Haven</strong>, we’re passionate about brewing the best coffee in town.
            Our beans are <span className="highlight">ethically sourced</span>, freshly roasted, and
            expertly prepared to bring you the ultimate flavor. Whether you're here for a quick espresso or
            a relaxing latte with friends, we’re here to serve joy — one cup at a time.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
            alt="Coffee Shop Interior"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
