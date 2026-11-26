import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Printer, 
  Clock, 
  Sparkles,
  Calculator
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';
import { scrollToSection } from '../../utils/navigation';
import Hero3DIllustration from '../3d/Hero3DIllustration';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function Hero({ onExploreClick }) {
  const handleExplore = () => {
    if (onExploreClick) {
      onExploreClick();
    } else {
      scrollToSection('services', '/services');
    }
  };

  return (
    <section id="home" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-indigo-50/70 via-purple-50/20 to-white pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/60">
      
      {/* Decorative ambient background blur orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-blue-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-80 h-80 bg-brand-saffron-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0e7ff_1px,transparent_1px),linear-gradient(to_bottom,#e0e7ff_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-indigo-200/80 text-brand-blue-700 text-xs font-bold uppercase tracking-wider shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-saffron-500 animate-pulse" />
              <span>Fast Digital Seva • Online Forms • Speed Xerox</span>
            </div>

            {/* Main Headline - Short & Catchy */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Speedy Digital Solutions,{' '}
              <span className="bg-gradient-to-r from-brand-blue-600 via-brand-purple-600 to-indigo-700 bg-clip-text text-transparent">
                Done in Minutes.
              </span>
            </h1>

            {/* Punchy Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              From Online Exam Forms And KYC To High-Speed Laser Prints. Walk In With Documents, Walk Out With Confirmed Submissions.
            </p>

            {/* Vibrant CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={handleExplore}
                className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-brand-blue-600 via-indigo-600 to-brand-purple-600 hover:from-brand-blue-700 hover:to-brand-purple-700 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-glow-blue transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
              >
                <span>Explore 20+ Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20Digital%20Seva%20Centre%2C%20I%20need%20assistance%20with%20an%20online%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-emerald-500 to-teal-600 hover:from-brand-emerald-600 hover:to-teal-700 text-white font-bold text-sm shadow-md shadow-brand-emerald-500/20 hover:shadow-glow-emerald transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>WhatsApp Instant Help</span>
              </a>

              <a
                href="#pricing"
                className="w-full sm:w-auto px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200/90 transition text-center shadow-sm hover:border-indigo-300 flex items-center justify-center gap-1.5"
              >
                <Calculator className="w-4 h-4 text-brand-blue-600" />
                <span>Estimate Cost</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-5 border-t border-slate-200/70 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-slate-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">100% OTP Safe</div>
                  <div className="text-[10px] text-slate-500 font-medium">Self-entered OTPs</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-slate-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-brand-saffron-600 flex items-center justify-center shrink-0 border border-amber-100">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">₹2/Side Xerox</div>
                  <div className="text-[10px] text-slate-500 font-medium">75 GSM White stock</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-slate-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-brand-blue-600 flex items-center justify-center shrink-0 border border-indigo-100">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">2–5 Min Delivery</div>
                  <div className="text-[10px] text-slate-500 font-medium">Dual laser speed</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/70 border border-slate-100 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-brand-purple-600 flex items-center justify-center shrink-0 border border-purple-100">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">8:30 AM – 8:30 PM</div>
                  <div className="text-[10px] text-slate-500 font-medium">12-Hour Counter</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right 3D Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <Hero3DIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
