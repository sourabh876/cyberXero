import React, { useEffect, useCallback, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import PopularServices from '../components/home/PopularServices';
import { SECTIONS, scrollToSection } from '../utils/navigation';

// Code-split below-the-fold sections for faster initial FCP/LCP & TTI
const ServiceCatalogue = lazy(() => import('../components/home/ServiceCatalogue'));
const HowItWorks = lazy(() => import('../components/home/HowItWorks'));
const PricingTable = lazy(() => import('../components/home/PricingTable'));
const AboutSection = lazy(() => import('../components/home/AboutSection'));
const WhyChooseUs = lazy(() => import('../components/home/WhyChooseUs'));
const FaqSection = lazy(() => import('../components/home/FaqSection'));
const ContactSection = lazy(() => import('../components/home/ContactSection'));

// CLS-safe placeholder matching approximate section height
function SectionSkeleton({ minHeight = 'min-h-[420px]' }) {
  return <div className={`w-full ${minHeight} bg-transparent`} aria-hidden="true" />;
}

export default function OnePageApp({ onSelectService }) {
  const location = useLocation();

  const handleExploreServices = useCallback(() => {
    scrollToSection('services', '/services');
  }, []);

  // Idle-prefetch below-the-fold chunks after first paint so scrolling has zero wait
  useEffect(() => {
    const prefetch = () => {
      import('../components/home/ServiceCatalogue');
      import('../components/home/HowItWorks');
      import('../components/home/PricingTable');
      import('../components/home/AboutSection');
      import('../components/home/WhyChooseUs');
      import('../components/home/FaqSection');
      import('../components/home/ContactSection');
    };

    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(prefetch, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const timer = setTimeout(prefetch, 600);
    return () => clearTimeout(timer);
  }, []);

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
      }, 120);
      return () => clearTimeout(timer);
    } else if (currentPath === '/' && !hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="space-y-0">
      {/* 1. HOME: Hero & Trust Strip (Above-the-fold eager) */}
      <Hero onExploreClick={handleExploreServices} />
      <TrustStrip />

      {/* 2. SERVICES: Popular Quick Cards (Eager) & Full Catalogue (Lazy) */}
      <PopularServices
        onSelectService={onSelectService}
        onViewAllClick={handleExploreServices}
      />

      <Suspense fallback={<SectionSkeleton minHeight="min-h-[680px]" />}>
        <ServiceCatalogue />
      </Suspense>

      {/* 3. HOW IT WORKS */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[520px]" />}>
        <HowItWorks />
      </Suspense>

      {/* 4. PRICING */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[640px]" />}>
        <PricingTable />
      </Suspense>

      {/* 5. ABOUT US & WHY CHOOSE US */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[560px]" />}>
        <AboutSection onExploreClick={handleExploreServices} />
      </Suspense>

      <Suspense fallback={<SectionSkeleton minHeight="min-h-[520px]" />}>
        <WhyChooseUs />
      </Suspense>

      {/* 6. FAQ */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[520px]" />}>
        <FaqSection />
      </Suspense>

      {/* 7. CONTACT */}
      <Suspense fallback={<SectionSkeleton minHeight="min-h-[540px]" />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
