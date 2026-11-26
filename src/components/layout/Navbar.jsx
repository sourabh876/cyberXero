import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Phone,
  Menu,
  X,
  MapPin,
  Clock,
  BarChart3,
  ChevronRight,
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';
import { SECTIONS, scrollToSection, getIsNavigating } from '../../utils/navigation';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const topBarRef = useRef(null);
  const isAdminView = location.pathname === '/admin';

  // Keep active section in sync when route changes externally
  useEffect(() => {
    if (isAdminView) {
      setActiveSection('admin');
    } else {
      const current = SECTIONS.find((s) => s.path === location.pathname);
      if (current) {
        setActiveSection(current.id);
      }
    }
  }, [location.pathname, isAdminView]);

  // High-performance IntersectionObserver to detect active section during scrolling
  useEffect(() => {
    if (isAdminView) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (getIsNavigating()) return;

        // Find intersecting entries
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          // Select entry with largest visible ratio or top position
          const dominant = visibleEntries.reduce((prev, curr) =>
            curr.intersectionRatio > prev.intersectionRatio ? curr : prev
          );

          const matched = SECTIONS.find((s) => s.id === dominant.target.id);
          if (matched) {
            setActiveSection(matched.id);
            // Sync browser URL bar seamlessly without re-triggering router transitions
            if (window.location.pathname !== matched.path) {
              window.history.replaceState(null, '', matched.path);
            }
          }
        }
      },
      {
        rootMargin: '-20% 0px -65% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
      }
    );

    SECTIONS.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [isAdminView]);

  // High-performance scroll listener: only toggles sticky header background
  useEffect(() => {
    let ticking = false;
    let animationFrameId;

    const updateNavbar = () => {
      const topBarHeight = topBarRef.current?.offsetHeight ?? 42;
      const nextScrolled = window.scrollY >= topBarHeight;
      setIsScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrameId = window.requestAnimationFrame(updateNavbar);
      }
    };

    updateNavbar();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleNavClick = (section) => {
    setMobileMenuOpen(false);
    setActiveSection(section.id);

    if (isAdminView) {
      navigate(section.path);
    } else {
      scrollToSection(section.id, section.path);
    }
  };

  return (
    <>
      {/* Top Notification Bar */}
      <div
        ref={topBarRef}
        className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 select-none"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{shopInfo.timings}</span>
            </span>

            <span className="hidden md:inline text-slate-600">•</span>

            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-emerald-400" />
              <span>{shopInfo.city}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Shop Status */}
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              {shopInfo.status}
            </span>

            {/* Admin / Customer Switch via URL */}
            <Link
              to={isAdminView ? '/' : '/admin'}
              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 border ${
                isAdminView
                  ? 'bg-gradient-to-r from-brand-saffron-500 to-amber-500 text-white border-transparent shadow-sm'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
              }`}
              title="Toggle between Public Customer Website and Admin Analytics Dashboard"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              {isAdminView ? '← Customer Website' : 'Admin Analytics'}
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-200 ease-in-out ${
          isScrolled
            ? 'bg-slate-900 shadow-xl border-b border-slate-800 text-white py-3'
            : 'bg-white shadow-sm border-b border-slate-100 text-slate-900 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo and Brand Name */}
          <button
            onClick={() => handleNavClick({ id: 'home', path: '/' })}
            className="flex items-center gap-3 shrink-0 mr-auto group text-left"
            aria-label="cyberXero Home"
          >
            {/* CX Logo */}
            <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
              <div className="absolute inset-0 rounded-xl bg-blue-500/30 blur-lg" />
              <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-slate-950 via-blue-800 to-cyan-500 border border-cyan-300/70 shadow-[0_5px_0_#082f70,0_10px_20px_#168bff55] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <span className="text-4xl font-black italic text-white leading-none drop-shadow-[0_0_10px_#38bdf8]">
                  C
                </span>
                <span className="absolute text-xl font-black italic text-cyan-300 right-1 bottom-1 drop-shadow-[0_0_10px_#00d9ff]">
                  X
                </span>
              </div>
            </div>

            {/* Brand Name */}
            <div className="flex flex-col justify-center">
              <span className="text-2xl sm:text-3xl font-black tracking-tighter leading-none whitespace-nowrap">
                <span
                  className={`transition-colors duration-200 ${
                    isScrolled ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  cyber
                </span>
                <span
                  className={`bg-clip-text text-transparent transition-colors duration-200 ${
                    isScrolled
                      ? 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400'
                      : 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400'
                  }`}
                >
                  Xero
                </span>
              </span>

              <span
                className={`mt-1 text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase whitespace-nowrap transition-colors duration-200 ${
                  isScrolled ? 'text-slate-300' : 'text-slate-500'
                }`}
              >
                Advanced Digital Centre
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center mx-3 gap-1 xl:gap-2 shrink-0">
            {SECTIONS.map((section) => {
              const isActive = !isAdminView && activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section)}
                  className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-brand-blue-600 to-indigo-600 shadow-sm shadow-indigo-500/20 scale-[1.02]'
                      : isScrolled
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >
                  {section.name}
                </button>
              );
            })}
          </nav>

          {/* Phone and WhatsApp Buttons (Desktop) */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-2xl transition ${
                isScrolled
                  ? 'text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700'
                  : 'text-slate-700 bg-slate-100/80 hover:bg-slate-200/80 border border-slate-200/70'
              }`}
              title="Call helpline"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue-400" />
              <span>{shopInfo.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20Digital%20Seva%20Centre%2C%20I%20need%20assistance%20with%20an%20online%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 hover:shadow-glow-emerald transition-all transform hover:scale-105"
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
            </a>
          </div>

          {/* Mobile Menu Toggle & WhatsApp Icon */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-xl flex items-center justify-center sm:hidden transition ${
                isScrolled
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                  : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
              }`}
              aria-label="Chat on WhatsApp"
              title="Chat on WhatsApp"
            >
              <WhatsAppIcon className="w-5 h-5 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition ${
                isScrolled
                  ? 'text-slate-200 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden border-t px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top-2 duration-200 ${
              isScrolled
                ? 'border-slate-800 bg-slate-900 text-white'
                : 'border-slate-200/80 bg-white text-slate-800'
            }`}
          >
            {/* Mobile Admin / Customer Switch */}
            <div
              className={`py-2 border-b mb-2 ${
                isScrolled ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <Link
                to={isAdminView ? '/' : '/admin'}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full flex items-center justify-between p-3 rounded-2xl font-bold text-xs border ${
                  isScrolled
                    ? 'bg-slate-800 text-indigo-300 border-slate-700'
                    : 'bg-indigo-50 text-brand-blue-900 border-indigo-200/80'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-brand-blue-500" />
                  {isAdminView ? 'Switch to Customer Website' : 'Open Admin Analytics Dashboard'}
                </span>
                <ChevronRight className="w-4 h-4 text-brand-blue-500" />
              </Link>
            </div>

            {/* Mobile Navigation Links */}
            {SECTIONS.map((section) => {
              const isActive = !isAdminView && activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-blue-600 to-indigo-600 text-white shadow-sm'
                      : isScrolled
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{section.name}</span>
                  <ChevronRight
                    className={`w-3.5 h-3.5 ${
                      isActive
                        ? 'text-white'
                        : isScrolled
                          ? 'text-slate-600'
                          : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}

            {/* Mobile Contact Quick Actions */}
            <div
              className={`pt-3 border-t flex flex-col gap-2 mt-2 ${
                isScrolled ? 'border-slate-800' : 'border-slate-100'
              }`}
            >
              <a
                href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition ${
                  isScrolled
                    ? 'bg-slate-800 text-slate-200'
                    : 'bg-slate-100 text-slate-800'
                }`}
              >
                <Phone className="w-4 h-4 text-brand-blue-500" />
                Call: {shopInfo.phoneDisplay}
              </a>

              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20Digital%20Seva%20Centre`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold text-xs shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                WhatsApp: {shopInfo.whatsappDisplay}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
