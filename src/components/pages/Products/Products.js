import React from 'react';
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection'
import { homeObjTwo } from './Data';

function Services() {
  return (
    <>
      <HeroSection {...homeObjTwo} />
      <Footer />
    </>
  );
}

export default Services;