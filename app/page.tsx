'use client';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CutoffNotice from './components/CutoffNotice';
import Features from './components/Features';
import ServiceAreas from './components/ServiceAreas';
import MenuPreview from './components/MenuPreview';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat'; // <-- Import float button
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Testimonials from './components/Testimonials';


export default function Home() {
  const [lang, setLang] = useState<'en' | 'ta'>('en');

  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#fffaf0] text-[#24372c] font-sans relative">
      <div>
        <Navbar lang={lang} setLang={setLang} />
        <Hero lang={lang} />
        <CutoffNotice lang={lang} />
        <Features lang={lang} />
        <ServiceAreas lang={lang} />
        <MenuPreview lang={lang} />
        <HowItWorks lang={lang} />
        <About lang={lang} />
        <FAQ lang={lang} />
        <Testimonials lang={lang} />
        <CTA lang={lang} />
      </div>
      <Footer />
      <WhatsAppFloat /> {/* <-- Render Floating WhatsApp Button here */}
    </main>
  );
}