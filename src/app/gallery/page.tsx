'use client';

import React from 'react';
import Masonry from 'react-masonry-css';

import './page.css';

const Page = () => {

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
    <div
      style={{
        // padding: '40px 20px',
        background: '#f5f7fb',
        minHeight: '100vh',
      }}
    >
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
  );
};

export default Page;