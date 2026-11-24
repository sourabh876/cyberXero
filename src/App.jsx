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
import { MessageSquare } from 'lucide-react';

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

      {/* Floating Action Button: Demo WhatsApp Quick Connect */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 select-none">
        <a
          href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20Digital%20Seva%20Centre%2C%20I%20have%20an%20enquiry.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs shadow-xl shadow-emerald-500/30 hover:shadow-glow-emerald transition-all transform hover:scale-105"
          aria-label="Direct WhatsApp Message (Demo)"
        >
          <MessageSquare className="w-5 h-5 fill-white text-emerald-500" />
          <span className="hidden sm:inline font-bold">WhatsApp Direct</span>
        </a>
      </div>
    </div>
  );
}
