import React from 'react';
import HeroSection from '../HeroSection'
import Footer from '../Footer/Footer'
import { homeObjThree } from './Data';
function SignUp() {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default SignUp;