
import React, { useState, useEffect, useRef } from 'react';

import {
  Phone,
  MessageSquare,
  Menu,
  X,
  MapPin,
  Clock,
  BarChart3,
  ChevronRight,
} from 'lucide-react';

import { shopInfo } from '../../data/servicesData';

// Navigation links
const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Services', href: '#services', id: 'services' },
  { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
  { name: 'Pricing', href: '#pricing', id: 'pricing' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'FAQ', href: '#faq', id: 'faq' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ activeView, setActiveView }) {

  // Navbar states
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Reference to the top notification bar
  const topBarRef = useRef(null);


  // ==========================================
  // 1. HANDLE SCROLLING AND ACTIVE NAVIGATION
  // ==========================================

  useEffect(() => {

    let ticking = false;
    let animationFrameId;

    const updateNavbar = () => {

      // Get the actual height of the top notification bar
      const topBarHeight = topBarRef.current?.offsetHeight ?? 42;

      // Check whether the user has scrolled past the top bar
      const nextScrolled = window.scrollY >= topBarHeight;

      // Update navbar state only when its value changes
      setIsScrolled((prev) =>
        prev === nextScrolled ? prev : nextScrolled
      );


      // ==========================================
      // 2. DETECT THE CURRENT ACTIVE SECTION
      // ==========================================

      const scrollPosition = window.scrollY + 120;

      let nextActiveSection = null;

      // If the user is near the top, Home is active
      if (window.scrollY < 200) {

        nextActiveSection = 'home';

      } else {

        // Check navigation sections from bottom to top
        for (let i = navLinks.length - 1; i >= 0; i--) {

          const link = navLinks[i];

          if (link.id === 'home') continue;

          const element = document.getElementById(link.id);

          if (element && element.offsetTop <= scrollPosition) {

            nextActiveSection = link.id;
            break;

          }
        }
      }

      // Update active section only when it changes
      if (nextActiveSection) {

        setActiveSection((prev) =>
          prev === nextActiveSection ? prev : nextActiveSection
        );

      }

      ticking = false;
    };


    // Handle scroll events efficiently
    const handleScroll = () => {

      if (!ticking) {

        ticking = true;

        animationFrameId = window.requestAnimationFrame(updateNavbar);

      }
    };


    // Run once when the component loads
    updateNavbar();


    // Add event listeners
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    });

    window.addEventListener('resize', handleScroll);


    // Clean up event listeners
    return () => {

      window.removeEventListener('scroll', handleScroll);

      window.removeEventListener('resize', handleScroll);

      window.cancelAnimationFrame(animationFrameId);

    };

  }, []);



  // ==========================================
  // 3. SCROLL TO A PARTICULAR SECTION
  // ==========================================

  const scrollToSection = (id) => {

    // Close mobile menu
    setMobileMenuOpen(false);

    // Update active section
    setActiveSection(id);


    const performScroll = () => {

      // Scroll to the top when Home is clicked
      if (id === 'home') {

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

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
          behavior: 'smooth',
        });

      }
    };


    // Switch to customer view before scrolling
    if (activeView !== 'customer') {

      setActiveView('customer');

      setTimeout(performScroll, 80);

    } else {

      performScroll();

    }
  };



  // ==========================================
  // 4. NAVBAR UI
  // ==========================================

  return (

    <>

      {/* =====================================
          TOP NOTIFICATION BAR
      ====================================== */}

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


            <span className="hidden md:inline text-slate-600">
              •
            </span>


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



            {/* Admin / Customer Switch */}

            <button
              onClick={() =>
                setActiveView(
                  activeView === 'customer' ? 'admin' : 'customer'
                )
              }
              className={`text-[11px] font-bold px-2.5 py-1 rounded-lg transition-all flex items-center gap-1.5 border ${
                activeView === 'admin'
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



      {/* =====================================
          MAIN STICKY NAVBAR
      ====================================== */}

      <header
        className={`sticky top-0 z-40 transition-[background-color,box-shadow,border-color] duration-200 ease-in-out ${
          isScrolled
            ? 'bg-slate-900 shadow-xl border-b border-slate-800 text-white py-3'
            : 'bg-white shadow-sm border-b border-slate-100 text-slate-900 py-3'
        }`}
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">


          {/* =====================================
              LOGO AND BRAND NAME
          ====================================== */}

          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 shrink-0 mr-auto group text-left"
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

                <span className={`transition-colors duration-200 ${
                  isScrolled ? 'text-white' : 'text-slate-950'
                }`}>
                  cyber
                </span>


                <span className={`bg-clip-text text-transparent transition-colors duration-200 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400'
                    : 'bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400'
                }`}>
                  Xero
                </span>

              </span>


              <span className={`mt-1 text-[10px] sm:text-[11px] font-bold tracking-[2px] uppercase whitespace-nowrap transition-colors duration-200 ${
                isScrolled ? 'text-slate-300' : 'text-slate-500'
              }`}>
                Advanced Digital Centre
              </span>

            </div>

          </button>



          {/* =====================================
              DESKTOP NAVIGATION LINKS
          ====================================== */}

          <nav className="hidden lg:flex items-center mx-3 gap-1 xl:gap-2 shrink-0">

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
                      : isScrolled
                        ? 'text-slate-300 hover:text-white hover:bg-slate-800'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`}
                >

                  {link.name}

                </button>

              );

            })}

          </nav>



          {/* =====================================
              PHONE AND WHATSAPP - DESKTOP
          ====================================== */}

          <div className="hidden sm:flex items-center gap-2 shrink-0">

            {/* Phone */}

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



            {/* WhatsApp */}

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



          {/* =====================================
              MOBILE MENU BUTTONS
          ====================================== */}

          <div className="flex items-center gap-2 lg:hidden shrink-0">

            {/* Mobile WhatsApp */}

            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-xl sm:hidden transition ${
                isScrolled
                  ? 'bg-slate-800 text-emerald-400 border border-slate-700'
                  : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
              }`}
              aria-label="WhatsApp"
            >

              <MessageSquare className="w-5 h-5 fill-current" />

            </a>



            {/* Mobile Menu Toggle */}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl transition ${
                isScrolled
                  ? 'text-slate-200 hover:bg-slate-800'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              aria-label="Toggle Navigation Menu"
            >

              {mobileMenuOpen
                ? <X className="w-6 h-6" />
                : <Menu className="w-6 h-6" />}

            </button>

          </div>

        </div>



        {/* =====================================
            MOBILE SLIDE-DOWN DRAWER
        ====================================== */}

        {mobileMenuOpen && (

          <div
            className={`lg:hidden border-t px-4 pt-3 pb-6 space-y-1.5 shadow-xl animate-in slide-in-from-top-2 duration-200 ${
              isScrolled
                ? 'border-slate-800 bg-slate-900 text-white'
                : 'border-slate-200/80 bg-white text-slate-800'
            }`}
          >


            {/* Mobile Admin / Customer Switch */}

            <div className={`py-2 border-b mb-2 ${
              isScrolled ? 'border-slate-800' : 'border-slate-100'
            }`}>

              <button
                onClick={() => {

                  setActiveView(
                    activeView === 'customer' ? 'admin' : 'customer'
                  );

                  setMobileMenuOpen(false);

                }}
                className={`w-full flex items-center justify-between p-3 rounded-2xl font-bold text-xs border ${
                  isScrolled
                    ? 'bg-slate-800 text-indigo-300 border-slate-700'
                    : 'bg-indigo-50 text-brand-blue-900 border-indigo-200/80'
                }`}
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



            {/* Mobile Navigation Links */}

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
                      : isScrolled
                        ? 'text-slate-300 hover:bg-slate-800'
                        : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >

                  <span>{link.name}</span>


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



            {/* Mobile Contact Buttons */}

            <div className={`pt-3 border-t flex flex-col gap-2 mt-2 ${
              isScrolled ? 'border-slate-800' : 'border-slate-100'
            }`}>

              {/* Phone */}

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



              {/* WhatsApp */}

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
