import React from 'react';
import { 
  FileText, 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Printer, 
  Users, 
  Clock, 
  Sparkles
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';
import Hero3DIllustration from '../3d/Hero3DIllustration';

export default function Hero({ onExploreClick }) {
  return (
    <section id="home" className="scroll-mt-24 relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-brand-blue-50/40 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-200/80">
      
      {/* Subtle decorative background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-800 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-saffron-500 animate-pulse" />
              <span>DIGITAL SERVICES • DOCUMENTATION • ONLINE APPLICATIONS</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-blue-950 tracking-tight leading-[1.12]">
              All Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-700 via-brand-blue-800 to-brand-blue-900">Online & Document Work</span>, Made{' '}
              <span className="relative whitespace-nowrap">
                <span className="relative z-10 text-brand-saffron-500 underline decoration-brand-saffron-400 decoration-wavy decoration-2">
                  Simple.
                </span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Need help with a government recruitment form, KYC verification, urgent photocopy, laser printout, or document scan? Our local service centre helps you complete everyday digital tasks with patient guidance and transparent rates.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={onExploreClick}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-brand-blue-700 hover:bg-brand-blue-800 text-white font-bold text-sm shadow-md hover:shadow-glow-blue transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
              >
                <span>Explore 20+ Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20Digital%20Seva%20Centre%2C%20I%20need%20assistance%20with%20an%20online%20service.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-brand-emerald-600 hover:bg-brand-emerald-700 text-white font-bold text-sm shadow-sm hover:shadow-glow-emerald transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>WhatsApp Instant Help</span>
              </a>

              <a
                href="#pricing"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 transition text-center shadow-sm"
              >
                Estimate Cost
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-emerald-50 text-brand-emerald-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">100% OTP Safe</div>
                  <div className="text-[10px] text-slate-500">Self-entered OTPs</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-saffron-50 text-brand-saffron-600 flex items-center justify-center shrink-0">
                  <Printer className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">₹2/Side Xerox</div>
                  <div className="text-[10px] text-slate-500">75 GSM White paper</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Fast Turnaround</div>
                  <div className="text-[10px] text-slate-500">2–5 mins average</div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">Open 12 Hours</div>
                  <div className="text-[10px] text-slate-500">8:30 AM to 8:30 PM</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right 3D Visual Column (5 cols on desktop) */}
          <div className="lg:col-span-5 flex justify-center">
            <Hero3DIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
