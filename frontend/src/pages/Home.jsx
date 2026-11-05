import React from "react";
import { Link } from "react-router-dom";

function Home({ items = [] }) {

  const totalReports = items.length;

  const lostItems = items.filter(
    (item) => item.type === "Lost"
  ).length;

  const foundItems = items.filter(
    (item) => item.type === "Found"
  ).length;

  const resolvedItems = items.filter(
    (item) => item.status === "Resolved"
  ).length;

  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-tag">
            CAMPUS LOST & FOUND PORTAL
          </span>

          <h1>
            Lost something?
            <br />
            <span>Let's find it.</span>
          </h1>

          <p>
            Don't worry about your lost belongings!
            FindIt helps students report lost items,
            discover found belongings and reconnect
            with what matters.
          </p>

          <div className="hero-buttons">

            <Link to="/browse" className="primary-btn">
              Explore Items →
            </Link>

            <Link to="/report" className="secondary-btn">
              + Report an Item
            </Link>

          </div>

          <div className="hero-note">
            ✦ Simple • Smart • Student Friendly
          </div>

        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>

          <div className="hero-card">

            <div className="hero-icon">🎒</div>

            <h2>Find what's lost.</h2>

            <p>Every item deserves a way home.</p>

            <div className="hero-check">
              ✓ Campus Community
            </div>

          </div>

          <div className="floating-card floating-one">
            🔍 Lost something?
          </div>

          <div className="floating-card floating-two">
            ✨ Found it!
          </div>

        </div>

      </section>

      {/* STATISTICS */}
      <section className="stats-section">

        <div className="stat-card purple-stat">
          <span>📋</span>
          <h2>{totalReports}</h2>
          <p>Total Reports</p>
        </div>

        <div className="stat-card coral-stat">
          <span>🔎</span>
          <h2>{lostItems}</h2>
          <p>Lost Items</p>
        </div>

        <div className="stat-card blue-stat">
          <span>🎁</span>
          <h2>{foundItems}</h2>
          <p>Found Items</p>
        </div>

        <div className="stat-card pink-stat">
          <span>💖</span>
          <h2>{resolvedItems}</h2>
          <p>Happy Returns</p>
        </div>

      </section>

      {/* FEATURES */}
      <section className="features-section">

        <div className="section-heading">
          <span>HOW FINDIT HELPS</span>
          <h2>One platform. Three simple steps.</h2>
          <p>Getting your belongings back has never been easier.</p>
        </div>

        <div className="features-grid">

          <div className="feature-card">
            <div className="feature-icon purple-icon">🔍</div>
            <h3>Search Items</h3>
            <p>
              Browse campus listings and search
              for belongings reported by students.
            </p>
            <Link to="/browse">Explore →</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon coral-icon">📢</div>
            <h3>Report Items</h3>
            <p>
              Lost something? Found something?
              Submit a report with item details.
            </p>
            <Link to="/report">Report Now →</Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon blue-icon">🤝</div>
            <h3>Reconnect</h3>
            <p>
              Connect with the person who reported
              the item and help it find its owner.
            </p>
            <Link to="/browse">Find Items →</Link>
          </div>

        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="bottom-cta">

        <h2>Ready to find what you lost?</h2>

        <p>
          Join your campus community and make
          lost-and-found easier for everyone.
        </p>

        <Link to="/register" className="cta-button">
          Join FindIt →
        </Link>

      </section>

    </div>
  );
}

export default Home;