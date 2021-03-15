import React from 'react';
import Footer from '../Footer/Footer'
import Pricing from '../../Pricing';
import HeroSection from '../HeroSection';
import { homeObjTwo } from '../Products/Data';
function Products() {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjTwo} />
      <Footer />
    </>
  );
}

export default Products;