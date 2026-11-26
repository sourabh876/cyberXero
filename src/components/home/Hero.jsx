import React, { useEffect, useRef } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Printer,
  Clock,
  Sparkles,
  Calculator,
  Star,
  CheckCircle2,
  FileText,
  Scan,
  CreditCard,
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';
import { scrollToSection } from '../../utils/navigation';
import Hero3DIllustration from '../3d/Hero3DIllustration';
import WhatsAppIcon from '../common/WhatsAppIcon';

/* Floating animated icon chip */
function FloatChip({ icon: Icon, label, color, delay, className = '' }) {
  return (
    <div
      className={`absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border shadow-lg backdrop-blur-sm text-xs font-bold ${color} animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <Icon className="w-3.5 h-3.5" />
      <span>{label}</span>
    </div>
  );
}

export default function Hero({ onExploreClick }) {
  const handleExplore = () => {
    if (onExploreClick) onExploreClick();
    else scrollToSection('services', '/services');
  };

  return (
    <section
      id="home"
      className="scroll-mt-24 relative overflow-hidden bg-hero-mesh pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-indigo-100"
    >
      {/* ── Background decorative layers ── */}
      <div className="orb w-[520px] h-[520px] bg-indigo-400/18 top-[-80px] left-[-60px] animate-pulse-glow" />
      <div className="orb w-[400px] h-[400px] bg-purple-400/14 top-[10%] right-[-80px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="orb w-[300px] h-[300px] bg-amber-400/10 bottom-[5%] left-[30%] animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 line-grid opacity-60 pointer-events-none" />

      {/* Animated colour rings */}
      <div className="absolute top-[18%] right-[12%] w-24 h-24 rounded-full border-4 border-dashed border-indigo-300/40 animate-spin-slow pointer-events-none" />
      <div className="absolute bottom-[20%] left-[8%]  w-16 h-16 rounded-full border-4 border-dashed border-pink-300/40 animate-spin-slow pointer-events-none" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: Text Column ── */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">

            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-wider shadow-md backdrop-blur-sm animate-fade-slide-up">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Fast Digital Seva&nbsp;•&nbsp;Online Forms&nbsp;•&nbsp;Speed Xerox</span>
              <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] animate-fade-slide-up delay-100">
              Less&nbsp;Paperwork.{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-shift">
                  More&nbsp;Progress.
                </span>
                {/* underline squiggle */}
                <svg className="absolute -bottom-1.5 left-0 w-full" viewBox="0 0 300 10" fill="none" aria-hidden>
                  <path d="M0 7 Q75 1 150 7 Q225 13 300 7" stroke="url(#ug)" strokeWidth="3" strokeLinecap="round" fill="none" />
                  <defs>
                    <linearGradient id="ug" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </h1>

            {/* Sub-copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-fade-slide-up delay-200">
              Need Help With An Online Application, Document Upload, Scan Or Print? Bring Your Requirements To cyberXero. Get Practical, Step-By-Step Assistance For Everyday Digital And Document Work — All At One Convenient Counter.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1 animate-fade-slide-up delay-300">
              <button
                onClick={handleExplore}
                className="btn-vibrant w-full sm:w-auto px-7 py-3.5 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2.5 group"
              >
                <Sparkles className="w-4 h-4 group-hover:animate-spin-slow" />
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20cyberXero%2C%20I%20visited%20your%20website%20and%20need%20help%20with%20a%20digital%20service.%20Please%20guide%20me.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full sm:w-auto px-6 py-3.5 rounded-2xl text-white font-bold text-sm flex items-center justify-center gap-2.5 group"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white group-hover:animate-bounce-soft" />
                <span>Chat with Us on WhatsApp</span>
              </a>

              <a
                href="#pricing"
                onClick={e => { e.preventDefault(); scrollToSection('pricing', '/pricing'); }}
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-slate-700 font-semibold text-sm border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all text-center flex items-center justify-center gap-1.5 group"
              >
                <Calculator className="w-4 h-4 text-indigo-600 group-hover:animate-bounce-soft" />
                <span>Check Service Charges</span>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="pt-5 border-t border-indigo-100 grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-slide-up delay-400">
              {[
                { icon: ShieldCheck, label: 'Careful Document Handling', sub: 'Attention & care', bg: 'bg-emerald-50 border-emerald-200', iconColor: 'text-emerald-600' },
                { icon: Printer,     label: 'Clear, Upfront Charges', sub: 'Know fee first', bg: 'bg-amber-50 border-amber-200', iconColor: 'text-amber-600' },
                { icon: Zap,         label: 'Digital Form Assistance', sub: 'Submission help', bg: 'bg-indigo-50 border-indigo-200', iconColor: 'text-indigo-600' },
                { icon: Clock,       label: 'Prints & Copies, Made Easy', sub: 'All in one place', bg: 'bg-purple-50 border-purple-200', iconColor: 'text-purple-600' },
              ].map(({ icon: Icon, label, sub, bg, iconColor }, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2.5 p-2.5 rounded-2xl ${bg} border hover-lift cursor-default group`}
                >
                  <div className={`w-9 h-9 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border ${bg} group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-4 h-4 ${iconColor}`} />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{label}</div>
                    <div className="text-[10px] text-slate-500 font-medium">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: 3D Visual Column ── */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Floating chips around the illustration */}
            <FloatChip icon={Star}       label="4.9★ Rated"       color="text-amber-600  border-amber-200"   delay="0s"      className="top-2 left-4 lg:left-0" />
            <FloatChip icon={CheckCircle2} label="OTP Safe"       color="text-emerald-600 border-emerald-200" delay="1.2s"    className="bottom-6 left-2 lg:left-4" />
            <FloatChip icon={FileText}   label="Instant Prints"   color="text-indigo-600  border-indigo-200"  delay="0.6s"    className="top-10 right-0 lg:-right-4" />
            <FloatChip icon={CreditCard} label="PAN / KYC Ready"  color="text-purple-600  border-purple-200"  delay="1.8s"    className="bottom-14 right-2 lg:-right-2" />

            <div className="animate-float">
              <Hero3DIllustration />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
