import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  FileText,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';
import { SECTIONS, scrollToSection } from '../../utils/navigation';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLinkClick = (section) => {
    if (location.pathname === '/admin') {
      navigate(section.path);
    } else {
      scrollToSection(section.id, section.path);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 select-none relative z-10 overflow-hidden">
      {/* Deco orbs */}
      <div className="orb w-72 h-72 bg-indigo-500/8 -top-20 -left-20 pointer-events-none animate-pulse-glow" />
      <div className="orb w-56 h-56 bg-purple-500/8 top-10 right-10 pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="orb w-48 h-48 bg-emerald-500/6 bottom-0 left-1/3 pointer-events-none animate-pulse-glow" style={{ animationDelay: '1s' }} />
      <div className="dot-grid absolute inset-0 opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80 relative z-10">

          {/* Col 1: Shop Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleLinkClick({ id: 'home', path: '/' })}
                className="flex items-center gap-3 shrink-0 mr-auto group text-left"
                aria-label="cyberXero Home"
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

                {/* Brand Name - Highly visible on dark background */}
                <div className="flex flex-col justify-center">
                  <span className="text-2xl sm:text-3xl font-black tracking-tighter leading-none whitespace-nowrap">
                    <span className="text-white">cyber</span>
                    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                      Xero
                    </span>
                  </span>

                  <span className="mt-1 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-slate-400 uppercase whitespace-nowrap">
                    Advanced Digital Centre
                  </span>
                </div>
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              cyberXero makes everyday digital and document tasks easier to navigate — from printing and scanning to online form assistance.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-gradient-to-r from-emerald-900/50 to-teal-900/50 border border-emerald-800/50 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Helpful service for the work that matters.</span>
            </div>

            {/* Footer WhatsApp CTA */}
            <a
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hi%20CyberXero%2C%20I%20need%20help%20with%20a%20digital%20service.%20Please%20guide%20me.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs transition-all group hover-lift"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white group-hover:animate-bounce-soft" />
              <span>Chat with Us</span>
            </a>
          </div>

          {/* Col 2: Service Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800/80 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-500" />
              Navigate
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleLinkClick(section)}
                    className="hover:text-indigo-400 transition-colors flex items-center gap-1.5 text-left group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-0.5 transition-transform" />
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Timings & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800/80 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Working Hours
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Mon – Sat:</span>
                  <span>8:30 AM – 8:30 PM (Continuous)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold block">Sunday:</span>
                  <span>9:00 AM – 2:00 PM</span>
                </div>
              </div>
              <div className="pt-2 text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <span>Power Inverter & Dual Printers Active</span>
              </div>
            </div>
          </div>

          {/* Col 4: Reach Us */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800/80 pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Visit or Contact Us
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <UserCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-slate-300 font-medium">{shopInfo.contactPerson}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{shopInfo.address}, {shopInfo.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition">
                  {shopInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0 fill-current" />
                <a
                  href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hi%20CyberXero%2C%20I%20need%20help%20with%20a%20digital%20service.%20Please%20guide%20me.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition text-emerald-400 font-semibold"
                >
                  WhatsApp: {shopInfo.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>{shopInfo.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Regulatory Disclaimers (Concise) */}
        <div className="py-5 border-b border-slate-800 text-[11px] text-slate-400 leading-relaxed space-y-1.5">
          <p>
            <strong className="text-slate-200">Notice:</strong> cyberXero is an independent service provider unless a specific authorisation is expressly stated. Government applications and third-party services remain subject to the rules, fees and decisions of the relevant authority or provider.
          </p>
          <p>
            <strong className="text-slate-200">Fee Transparency:</strong> Displayed charges are indicative shop service charges and may change. Confirm the final amount before the service begins. Official portal fees are separate pass-through charges.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3 relative z-10">
          <p>© {new Date().getFullYear()} cyberXero. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="flex items-center gap-1 text-emerald-500"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />OTP Safe</span>
            <span className="text-slate-700">•</span>
            <span className="text-indigo-400">Laser Prints</span>
            <span className="text-slate-700">•</span>
            <span className="text-amber-400">8:30 AM – 8:30 PM</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
