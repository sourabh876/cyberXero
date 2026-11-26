import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import PopularServices from '../components/home/PopularServices';
import ServiceCatalogue from '../components/home/ServiceCatalogue';
import HowItWorks from '../components/home/HowItWorks';
import PricingTable from '../components/home/PricingTable';
import AboutSection from '../components/home/AboutSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import FaqSection from '../components/home/FaqSection';
import ContactSection from '../components/home/ContactSection';
import { SECTIONS, scrollToSection } from '../utils/navigation';

export default function OnePageApp({ onSelectService }) {
  const location = useLocation();

  // Scroll to targeted section when navigating via URL directly (e.g. /pricing, /services)
  useEffect(() => {
    const currentPath = location.pathname;
    const hash = location.hash.replace('#', '');
    const matched = SECTIONS.find((s) => s.path === currentPath && s.id !== 'home');
    const targetId = hash || matched?.id;

    if (targetId) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 80);
      return () => clearTimeout(timer);
    } else if (currentPath === '/' && !hash) {
      // If at root with no target, ensure page starts at the very top
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="space-y-0">
      {/* 1. HOME: Hero & Trust Strip */}
      <Hero onExploreClick={() => scrollToSection('services', '/services')} />
      <TrustStrip />

      {/* 2. SERVICES: Popular Quick Cards & Complete Catalogue */}
      <PopularServices
        onSelectService={onSelectService}
        onViewAllClick={() => scrollToSection('services', '/services')}
      />
      <ServiceCatalogue />

      {/* 3. HOW IT WORKS: 4-Step Process & Express Queue */}
      <HowItWorks />

      {/* 4. PRICING: Live Calculator & Itemized Rate Card */}
      <PricingTable />

      {/* 5. ABOUT US: Centre Mission & 6 Trust Pillars */}
      <AboutSection onExploreClick={() => scrollToSection('services', '/services')} />
      <WhyChooseUs />

      {/* 6. FAQ: Questions & Real Testimonials */}
      <FaqSection />

      {/* 7. CONTACT: Information, Map & Quick Form */}
      <ContactSection />
    </div>
  );
}
