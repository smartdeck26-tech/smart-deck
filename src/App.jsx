import { useState } from "react";

import Navbar from "./partials/Navbar";
import Home from "./components/Home";
import AlurPembelajaran from "./partials/AlurPembelajaran";
import Tentang from "./components/Tentang";
import Layanan from "./components/Layanan";
import Paket from "./components/Paket";
import Portofolio from "./components/Portofolio";
import CTA from "./partials/CTA";
import FAQ from "./partials/FAQ";
import Testimoni from "./partials/Testimonials";
// import Kontak from "./components/Kontak";
import Footer from "./partials/Footer";

import ScrollReveal from "./partials/ScrollReveal";
import WhatsAppFloat from "./partials/WhatsAppFloat";
import { Analytics } from "@vercel/analytics/react";
const App = () => {
  return (

    <div>

      <header>

        <Navbar />
      </header>

      <main>
        <ScrollReveal direction="left">
          <Home />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <AlurPembelajaran />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <Tentang />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <Layanan />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <Paket />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <Portofolio />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <CTA />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <FAQ />
        </ScrollReveal>

        <ScrollReveal direction="left">
          <Testimoni />
        </ScrollReveal>

        {/* <ScrollReveal direction="left">
          <Kontak />
        </ScrollReveal> */}
      </main>
<Analytics />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
export default App;