import React, { useState, lazy, Suspense } from 'react';
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
import { shopInfo } from './data/servicesData';

// Code-split heavy non-critical components to minimize initial render time
const ServiceDetailModal = lazy(() => import('./components/home/ServiceDetailModal'));
const RevenueDashboard = lazy(() => import('./components/admin/RevenueDashboard'));

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
    <div className="min-h-screen bg-[#fafbfd] text-slate-800 flex flex-col font-sans selection:bg-brand-blue-500 selection:text-white">
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
          /* Admin Operations & Revenue Analytics Dashboard (Lazy Loaded) */
          <Suspense
            fallback={
              <div className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-slate-900 text-white">
                <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-cyan-400 rounded-full animate-spin mb-4" />
                <p className="text-sm font-semibold text-slate-300">Loading Business Dashboard...</p>
              </div>
            }
          >
            <RevenueDashboard onBackToWebsite={() => setActiveView('customer')} />
          </Suspense>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Detail Modal for Selected Service (Lazy Loaded On Demand) */}
      {selectedServiceForModal && (
        <Suspense fallback={null}>
          <ServiceDetailModal
            service={selectedServiceForModal}
            isOpen={Boolean(selectedServiceForModal)}
            onClose={() => setSelectedServiceForModal(null)}
          />
        </Suspense>
      )}

      {/* Floating WhatsApp Logo Button */}
<div className="fixed bottom-6 right-6 z-50">
  <a
    href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20cyberXero%2C%20I%20have%20an%20enquiry.`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat on WhatsApp"
    className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-300"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="w-10 h-10 fill-current"
    >
      <path d="M16 3C8.82 3 3 8.82 3 16c0 2.3.61 4.56 1.77 6.54L3 29l6.65-1.74A12.94 12.94 0 0 0 16 29c7.18 0 13-5.82 13-13S23.18 3 16 3Zm0 23.7c-2.03 0-4.02-.55-5.76-1.59l-.41-.24-3.95 1.04 1.05-3.85-.27-.42A10.67 10.67 0 1 1 16 26.7Zm5.86-8c-.32-.16-1.9-.94-2.2-1.05-.3-.1-.51-.16-.72.16-.21.32-.83 1.05-1.02 1.27-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.58-.95-.84-1.59-1.88-1.78-2.2-.19-.32-.02-.49.14-.65.14-.14.32-.38.48-.56.16-.19.21-.32.32-.54.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.62c-.21 0-.56.08-.86.4-.3.32-1.13 1.1-1.13 2.68s1.16 3.11 1.32 3.32c.16.21 2.28 3.48 5.52 4.88.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  </a>
</div>
    </div>
  );
}
