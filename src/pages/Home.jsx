import Navbar from "../components/Navbar";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Features from "../components/Features";
import About from "../components/About";
import Hero from "../components/Hero";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Features />

      <TestimonialsCarousel />

      <Pricing />

      <Footer />
    </>
  );
}

export default Home;
