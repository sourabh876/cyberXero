
import React, { useState, useEffect } from 'react';
import {
  Phone,
  MessageSquare,
  Menu,
  X,
  MapPin,
  Clock,
  BarChart3,
  ChevronRight
} from 'lucide-react';

import { shopInfo } from '../../data/servicesData';

export default function Navbar({ activeView, setActiveView }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      <div className="bg-brand-blue-950 text-slate-300 text-xs py-2 px-4 border-b border-brand-blue-900/60 select-none">
        <div className="max-w-[1600px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">

          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
            <span className="flex items-center gap-1.5 text-brand-saffron-400 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{shopInfo.timings}</span>
            </span>

            <span className="hidden md:inline text-slate-500">•</span>

            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-brand-emerald-400" />
              <span>{shopInfo.city}</span>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-emerald-500/20 text-brand-emerald-400 border border-brand-emerald-500/30 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-emerald-400 animate-ping"></span>
              {shopInfo.status}
            </span>

            <button
              onClick={() =>
                setActiveView(activeView === 'customer' ? 'admin' : 'customer')
              }
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-md transition flex items-center gap-1.5 border ${
                activeView === 'admin'
                  ? 'bg-brand-saffron-500 text-white border-brand-saffron-400 shadow-sm'
                  : 'bg-brand-blue-900/80 hover:bg-brand-blue-800 text-slate-200 border-brand-blue-700'
              }`}
              title="Toggle between Customer Website and Admin Dashboard"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              {activeView === 'customer'
                ? 'Admin Analytics'
                : '← Customer Website'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">

 {/* LEFT SIDE - cyberXero Logo */}
<button
  onClick={() => scrollToSection('home')}
  className="flex items-center gap-3 shrink-0 mr-auto group text-left"
>
  {/* 3D CX Symbol */}
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

  {/* Brand Name */}
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

          {/* RIGHT SIDE - Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 shrink-0">
            {navLinks.map((link) => {
              const isActive =
                activeView === 'customer' &&
                activeSection === link.id;

              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`px-2.5 xl:px-3 py-2 text-xs font-bold rounded-lg transition-all whitespace-nowrap ${
                    isActive
                      ? 'text-brand-blue-700 bg-brand-blue-50 border border-brand-blue-200 shadow-sm'
                      : 'text-slate-700 hover:text-brand-blue-700 hover:bg-slate-100/70 border border-transparent'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </nav>

          {/* RIGHT SIDE - Phone and WhatsApp */}
          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-2 text-xs font-bold text-brand-blue-800 bg-brand-blue-50 hover:bg-brand-blue-100 rounded-xl border border-brand-blue-200 transition whitespace-nowrap"
              title="Click to call"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue-600" />
              <span>{shopInfo.phoneDisplay}</span>
            </a>

            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20Digital%20Seva%20Centre%2C%20I%20need%20assistance%20with%20an%20online%20service.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 xl:px-4 py-2 text-xs font-bold text-white bg-brand-emerald-600 hover:bg-brand-emerald-700 rounded-xl shadow-sm hover:shadow-glow-emerald transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5 fill-white text-brand-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden shrink-0">
            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-brand-emerald-50 text-brand-emerald-600 border border-brand-emerald-200 sm:hidden"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5 fill-brand-emerald-600 text-brand-emerald-600" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
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
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top-2 duration-200">

            <div className="py-2 border-b border-slate-100 mb-2">
              <button
                onClick={() => {
                  setActiveView(
                    activeView === 'customer' ? 'admin' : 'customer'
                  );
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-brand-blue-50 text-brand-blue-900 font-bold text-xs border border-brand-blue-200"
              >
                <span className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-brand-blue-600" />
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
                  className={`w-full text-left px-3.5 py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-between ${
                    isActive
                      ? 'bg-brand-blue-50 text-brand-blue-800 border border-brand-blue-200'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.name}</span>

                  <ChevronRight
                    className={`w-3.5 h-3.5 ${
                      isActive
                        ? 'text-brand-blue-600'
                        : 'text-slate-300'
                    }`}
                  />
                </button>
              );
            })}

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2 mt-2">

              <a
                href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs"
              >
                <Phone className="w-4 h-4 text-brand-blue-600" />
                Call: {shopInfo.phoneDisplay}
              </a>

              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20Digital%20Seva%20Centre`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-brand-emerald-600 text-white font-bold text-xs shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
