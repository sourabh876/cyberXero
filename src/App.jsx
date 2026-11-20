import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import TrustStrip from './components/home/TrustStrip';
import PopularServices from './components/home/PopularServices';
import ServiceCatalogue from './components/home/ServiceCatalogue';
import HowItWorks from './components/home/HowItWorks';
import PricingTable from './components/home/PricingTable';
import AboutSection from './components/home/AboutSection';
import WhyChooseUs from './components/home/WhyChooseUs';
import FaqSection from './components/home/FaqSection';
import ContactSection from './components/home/ContactSection';
import ServiceDetailModal from './components/home/ServiceDetailModal';
import RevenueDashboard from './components/admin/RevenueDashboard';
import { shopInfo } from './data/servicesData';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState('customer');
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  const scrollToSection = (id) => {
    setActiveView('customer');
    setTimeout(() => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        const navHeight = 75;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 80);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-brand-saffron-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar activeView={activeView} setActiveView={setActiveView} />

      {/* Main View Router */}
      <main className="flex-1">
        {activeView === 'customer' ? (
          <>
            {/* 1. HOME: Hero & Trust Strip */}
            <Hero onExploreClick={() => scrollToSection('services')} />
            <TrustStrip />

            {/* 2. SERVICES: Popular Quick Cards & Complete Catalogue */}
            <PopularServices 
              onSelectService={(service) => setSelectedServiceForModal(service)}
              onViewAllClick={() => scrollToSection('services')}
            />
            <ServiceCatalogue />

            {/* 3. HOW IT WORKS: 4-Step Process & Express Queue */}
            <HowItWorks />

            {/* 4. PRICING: Live Calculator & Itemized Rate Card */}
            <PricingTable />

            {/* 5. ABOUT US: Centre Mission & 6 Trust Pillars */}
            <AboutSection onExploreClick={() => scrollToSection('services')} />
            <WhyChooseUs />

            {/* 6. FAQ: Questions & Real Testimonials */}
            <FaqSection />

            {/* 7. CONTACT: Demo Information, Map & Quick Form */}
            <ContactSection />
          </>
        ) : (
          /* Admin Operations & Revenue Analytics Dashboard (Section 10 of doc) */
          <RevenueDashboard onBackToWebsite={() => setActiveView('customer')} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Detail Modal for Selected Service */}
      <ServiceDetailModal
        service={selectedServiceForModal}
        isOpen={Boolean(selectedServiceForModal)}
        onClose={() => setSelectedServiceForModal(null)}
      />

      {/* Floating Action Button: Demo WhatsApp Quick Connect */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
        <a
          href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20Digital%20Seva%20Centre%2C%20I%20have%20an%20enquiry.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-brand-emerald-500 hover:bg-brand-emerald-600 text-white font-bold text-xs shadow-xl hover:shadow-glow-emerald transition-all transform hover:scale-105"
          aria-label="Direct WhatsApp Message (Demo)"
        >
          <MessageSquare className="w-5 h-5 fill-white text-brand-emerald-500" />
          <span className="hidden sm:inline font-bold">WhatsApp (Demo)</span>
        </a>
      </div>
    </div>
  );
}
