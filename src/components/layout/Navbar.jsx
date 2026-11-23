import React, { useState, useEffect, useRef } from 'react';
import {
  FileText,
  Phone,
  MessageSquare,
  Menu,
  X,
  MapPin,
  Clock,
  BarChart3,
  ChevronRight,
  Sparkles
} from 'lucide-react';

import { shopInfo } from '../../data/servicesData';

export default function Navbar({ activeView, setActiveView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const topBarRef = useRef(null);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // The navbar sticks to the top only when the top notification bar has scrolled completely out of view (rect.bottom <= 0)
      if (topBarRef.current) {
        const rect = topBarRef.current.getBoundingClientRect();
        setIsScrolled(rect.bottom <= 0);
      } else {
        setIsScrolled(window.scrollY > 42);
      }

      const scrollPosition = window.scrollY + 120;

      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];

        if (link.id === 'home') {
          if (window.scrollY < 200) {
            setActiveSection('home');
            break;
          }
        } else {
          const el = document.getElementById(link.id);

          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    setActiveSection(id);

    const performScroll = () => {
      if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const element = document.getElementById(id);

      if (element) {
        const navHeight = 75;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    if (activeView !== 'customer') {
      setActiveView('customer');
      setTimeout(performScroll, 80);
    } else {
      performScroll();
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
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              {shopInfo.status}
            </span>

            {/* View Mode Switcher Button */}
            <button
              onClick={() => setActiveView(activeView === 'customer' ? 'admin' : 'customer')}
              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 border ${activeView === 'admin'
                ? 'bg-gradient-to-r from-brand-saffron-500 to-amber-500 text-white border-transparent shadow-sm'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-200 border-slate-700'
                }`}
              title="Toggle between Public Customer Website and Admin Analytics Dashboard"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              {activeView === 'customer'
                ? 'Admin Analytics'
                : '← Customer Website'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar - Changes to top-bar color (bg-slate-900) when sticking on top or scrolling */}
     <header
  className={`sticky top-0 z-40 transition-all duration-300 ${
    isScrolled
      ? 'bg-blue-50 shadow-md py-2.5 border-b border-blue-100 text-slate-900'
      : 'bg-white py-3.5 border-b border-slate-100 text-slate-900'
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

    {/* Logo & Shop Brand */}
    <button
      onClick={() => scrollToSection('home')}
      className="flex items-center gap-3 shrink-0 mr-auto group text-left"
    >
      <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
        <div className="absolute inset-0 rounded-xl bg-blue-500/30 blur-lg animate-pulse" />

        <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-slate-950 via-blue-800 to-cyan-500 border border-cyan-300/70 shadow-[0_5px_0_#082f70,0_10px_20px_#168bff55] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">
          <span className="text-4xl font-black italic text-white leading-none drop-shadow-[0_0_10px_#38bdf8]">
            C
          </span>
          <span className="absolute text-xl font-black italic text-cyan-300 right-1 bottom-1 drop-shadow-[0_0_10px_#00d9ff]">
            X
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <span className="text-2xl sm:text-3xl font-black tracking-tighter leading-none whitespace-nowrap">
          <span className="text-slate-950">cyber</span>
          <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Xero
          </span>
        </span>
        <span className="mt-1 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-slate-500 uppercase whitespace-nowrap">
          Advanced Digital Centre
        </span>
      </div>
    </button>

    {/* Navigation Links */}
    <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
      {navLinks.map((link) => {
        const isActive =
          activeView === 'customer' &&
          activeSection === link.id;

        return (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all duration-200 ${
              isActive
                ? 'text-white bg-gradient-to-r from-brand-blue-600 to-indigo-600 shadow-sm shadow-indigo-500/20 scale-[1.02]'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
            }`}
          >
            {link.name}
          </button>
        );
      })}
    </nav>

    {/* Phone and WhatsApp */}
    <div className="hidden sm:flex items-center gap-2 shrink-0">
      <a
        href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`}
        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-2xl transition text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/70"
        title="Call helpline"
      >
        <Phone className="w-3.5 h-3.5 text-brand-blue-400" />
        <span>{shopInfo.phoneDisplay}</span>
      </a>

      <a
        href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20Digital%20Seva%20Centre%2C%20I%20need%20assistance%20with%20an%20online%20service.`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 rounded-2xl shadow-md shadow-emerald-500/20 hover:shadow-glow-emerald transition-all transform hover:-translate-y-0.5"
      >
        <MessageSquare className="w-3.5 h-3.5 fill-white" />
        <span>WhatsApp</span>
      </a>
    </div>

    {/* Mobile Menu */}
    <div className="flex items-center gap-2 lg:hidden shrink-0">
      <a
        href={`https://wa.me/${shopInfo.whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-xl sm:hidden bg-emerald-50 text-emerald-600 border border-emerald-200"
        aria-label="WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-current" />
      </a>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 rounded-xl transition text-slate-700 hover:bg-slate-100"
        aria-label="Toggle Navigation Menu"
      >
        {mobileMenuOpen
          ? <X className="w-6 h-6" />
          : <Menu className="w-6 h-6" />}
      </button>
    </div>
  </div>

  {/* Mobile Slide-down Drawer */}
  {mobileMenuOpen && (
    <div className="lg:hidden border-t px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top-2 duration-200 border-slate-200 bg-white text-slate-800">

      <div className="py-2 border-b mb-2 border-slate-100">
        <button
          onClick={() => {
            setActiveView(
              activeView === 'customer' ? 'admin' : 'customer'
            );
            setMobileMenuOpen(false);
          }}
          className="w-full flex items-center justify-between p-3 rounded-2xl font-bold text-xs border bg-indigo-50 text-brand-blue-900 border-indigo-200/80"
        >
          <span className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-brand-blue-500" />
            {activeView === 'customer'
              ? 'Open Admin Analytics Dashboard'
              : 'Switch to Customer Website'}
          </span>
          <ChevronRight className="w-4 h-4 text-brand-blue-500" />
        </button>
      </div>

      {navLinks.map((link) => {
        const isActive =
          activeView === 'customer' &&
          activeSection === link.id;

        return (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-between ${
              isActive
                ? 'bg-gradient-to-r from-brand-blue-600 to-indigo-600 text-white shadow-sm'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>{link.name}</span>
            <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-slate-300'}`} />
          </button>
        );
      })}

      <div className="pt-3 border-t flex flex-col gap-2 mt-2 border-slate-100">
        <a
          href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition bg-slate-100 text-slate-800"
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
          <MessageSquare className="w-4 h-4 fill-white" />
          WhatsApp: {shopInfo.whatsappDisplay}
        </a>
      </div>
    </div>
  )}
</header>
    </>
  );
}
