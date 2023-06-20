import React from "react";

// Import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import OffShoreProducts from "./components/OffShoreProducts";
import FeaturesSecond from "./components/FeaturesSecond";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      {/* Header component */}
      <Header />

      {/* Hero component */}
      <Hero />

      {/* Features component */}
      <Features />

      {/* OffShoreProducts component */}
      <OffShoreProducts />

      {/* FeaturesSecond component */}
      <FeaturesSecond />

      {/* Newsletter component */}
      <Newsletter />

      {/* Footer component */}
      <Footer />
    </div>
  );
};

export default App;
