/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import WhyChooseUs from "./components/WhyChooseUs";
import Coaches from "./components/Coaches";
import Gallery from "./components/Gallery";
import Membership from "./components/Membership";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen bg-brand-darker font-sans text-brand-metallic">
      {/* Sticky Header Navbar */}
      <Navbar />

      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Programs Section */}
        <Programs />

        {/* Why Choose Us Feature Cards */}
        <WhyChooseUs />

        {/* Meet Our Coaches Section */}
        <Coaches />

        {/* Lightbox Enabled Gallery */}
        <Gallery />

        {/* Membership Tier Cards */}
        <Membership />

        {/* Testimonials & Reviews Grid */}
        <Testimonials />

        {/* Interactive Google Map & Contact Form */}
        <Contact />
      </main>

      {/* Quick Links & Info Footer */}
      <Footer />
    </div>
  );
}
