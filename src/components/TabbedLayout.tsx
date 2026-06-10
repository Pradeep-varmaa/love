'use client';

import React, { useState } from 'react';
import { CursorLight } from './CursorLight';
import Masonry from 'react-masonry-css';
import './TabbedLayout.css';

const TabbedLayout = () => {
  const [activeTab, setActiveTab] = useState('main');

  const breakpointColumnsObj = {
    default: 4,
    1200: 3,
    992: 2,
    768: 1,
  };

  const images = Array.from({ length: 78 }, (_, i) => ({
    img: `/${i + 1}.jpg`,
  }));

  return (
    <>
      <CursorLight />
      <div className="tabbed-layout-container">
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <div className="tab-nav-content">
            <button
              className={`tab-btn ${activeTab === 'main' ? 'active' : ''}`}
              onClick={() => setActiveTab('main')}
            >
              <span className="tab-icon">💕</span>
              <span className="tab-label">Main Page</span>
            </button>
            <button
              className={`tab-btn ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
            >
              <span className="tab-icon">📸</span>
              <span className="tab-label">Gallery</span>
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content-wrapper">
          {/* Main Tab */}
          {activeTab === 'main' && (
            <div className="tab-content main-content">
              <div className="main-section">
                <div className="hero-section">
                  <h1 className="hero-title">💕 Love Presentation 💕</h1>
                  <p className="hero-subtitle">Express your feelings in the most beautiful way</p>
                </div>

                <div className="content-grid">
                  <div className="glass-card">
                    <h2 className="card-title">💌 Share Your Love</h2>
                    <p className="card-description">
                      Create and share beautiful love messages with your special one
                    </p>
                    <button className="action-btn primary-btn">Get Started</button>
                  </div>

                  <div className="glass-card">
                    <h2 className="card-title">📸 Photo Memories</h2>
                    <p className="card-description">
                      Browse through all your beautiful memories in our gallery
                    </p>
                    <button className="action-btn secondary-btn" onClick={() => setActiveTab('gallery')}>
                      View Gallery
                    </button>
                  </div>

                  <div className="glass-card">
                    <h2 className="card-title">🎵 Add Music</h2>
                    <p className="card-description">
                      Enhance your presentation with beautiful background music
                    </p>
                    <button className="action-btn tertiary-btn">Choose Track</button>
                  </div>

                  <div className="glass-card">
                    <h2 className="card-title">🎨 Customize Theme</h2>
                    <p className="card-description">
                      Personalize the colors and style to match your mood
                    </p>
                    <button className="action-btn quaternary-btn">Customize</button>
                  </div>
                </div>

                <div className="features-section">
                  <h2 className="section-title">Why You'll Love It</h2>
                  <div className="features-grid">
                    <div className="feature-item">
                      <span className="feature-icon">✨</span>
                      <h3>Beautiful Design</h3>
                      <p>Stunning visual effects that captivate</p>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">🎯</span>
                      <h3>Easy to Use</h3>
                      <p>Intuitive interface for everyone</p>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">📱</span>
                      <h3>Responsive</h3>
                      <p>Works perfectly on all devices</p>
                    </div>
                    <div className="feature-item">
                      <span className="feature-icon">💾</span>
                      <h3>Save & Share</h3>
                      <p>Download or share with anyone</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Tab */}
          {activeTab === 'gallery' && (
            <div className="tab-content gallery-content">
              <div className="gallery-header">
                <h2>📸 Your Photo Gallery</h2>
                <p>All your beautiful memories in one place</p>
              </div>
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {images.map((item, index) => (
                  <div key={index} className="galleryCard">
                    <img
                      src={item.img}
                      alt={`Photo ${index + 1}`}
                      className="galleryImage"
                    />
                  </div>
                ))}
              </Masonry>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TabbedLayout;
