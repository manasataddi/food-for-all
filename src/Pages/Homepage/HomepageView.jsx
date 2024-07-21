// src/Pages/Homepage/HomepageView.jsx
import React from 'react';

import BannerSection from '../../Components/Page Components/Hompage/BannerSection';
import About from '../../Components/Page Components/Hompage/About';
import Feature from '../../Components/Page Components/Hompage/Feature';
import Testimonial from '../../Components/Page Components/Hompage/Testimonial';

function HomepageView() {
  return (
    <>
    <BannerSection />
    <About />
    <Feature />
    <Testimonial />
    </>
  );
}

export default HomepageView;