import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-tag">OUR PURPOSE</span>

          <h1>
            Small finds.
            <br />
            <span>Big relief.</span>
          </h1>

          <p>
            FindIt is a campus-focused Lost and Found portal designed
            to make reporting, searching and returning belongings simple.
          </p>

          <Link to="/browse" className="about-button">
            Explore Listings →
          </Link>
        </div>

        <div className="about-illustration">
          <div className="about-circle"></div>
          <div className="about-icon-card">
            <span>🎒</span>
            <h3>Lost something?</h3>
            <p>Your campus community can help.</p>
            <div className="about-success">✓ Find it. Return it.</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="about-process">
        <div className="about-section-heading">
          <span>HOW IT WORKS</span>
          <h2>Three simple steps</h2>
          <p>Making lost and found easier for everyone on campus.</p>
        </div>

        <div className="about-steps">
          <div className="about-step">
            <div className="step-icon purple-step">01</div>
            <h3>Report clearly</h3>
            <p>Share item name, photo, category, date and location.</p>
          </div>

          <div className="about-step">
            <div className="step-icon coral-step">02</div>
            <h3>Search easily</h3>
            <p>Use keywords and filters to find reports from your campus.</p>
          </div>

          <div className="about-step">
            <div className="step-icon blue-step">03</div>
            <h3>Return safely</h3>
            <p>Contact the reporter and coordinate a safe handover.</p>
          </div>
        </div>
      </section>

      {/* SAFETY SECTION */}
      <section className="about-safety">
        <div className="safety-icon">🛡️</div>
        <div>
          <h2>Keep every reunion safe.</h2>
          <p>
            Meet in a public campus location. Verify ownership before
            handing over valuable items. Never share passwords or OTPs.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="about-cta">
        <h2>Ready to find what matters?</h2>
        <p>Start exploring lost and found reports from your campus.</p>

        <Link to="/browse" className="about-cta-button">
          Browse Items →
        </Link>
      </section>

    </div>
  );
}

export default About;