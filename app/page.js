// page.js
"use client";
import Hero from './components/HeroSection'
import ThemedHeading from './components/LogoArea';
import QualitySection from './components/qualitySection'

import Footer from './components/Footer';
import CallToActionSection from './components/CallToActionSection';
export default function Home() {
  return (
    <div>
     <Hero/>

     <QualitySection/>

    
  <ThemedHeading/>
     <CallToActionSection/>
     <Footer/>
    </div>
  );
}
