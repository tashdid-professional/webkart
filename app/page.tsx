import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Founder from './components/Founder';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Founder />
      <Footer />
    </>
  );
}
