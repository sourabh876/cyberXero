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
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 select-none relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">

          {/* Col 1: Shop Brand & About */}
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
              Your trusted counter for fast exam forms, verified KYC uploads, laser printing, and Xerox. Zero errors, upfront rates.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 border border-slate-700 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Strict Zero-OTP-Storage Security</span>
            </div>
          </div>

          {/* Col 2: Service Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Page Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleLinkClick(section)}
                    className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Timings & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
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
            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact Desk
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
                <WhatsAppIcon className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${shopInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition text-emerald-400 font-semibold"
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
            <strong className="text-slate-200">Legal Notice:</strong> This centre is an independent digital documentation and online facilitation service. We provide assisted form-entry, document scanning, formatting, and printing. Official approvals remain the exclusive prerogative of the respective authorities.
          </p>
          <p>
            <strong className="text-slate-200">Fee Transparency:</strong> Shop fees cover operator technical assistance and consumables. Government portal exam fees and taxes are pass-through charges collected separately at official rates with valid government receipts.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} cyberXero. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="text-slate-400">Strict OTP Safe</span>
            <span>•</span>
            <span className="text-slate-400">Laser Prints</span>
            <span>•</span>
            <span className="text-slate-400">Daily 8:30 AM – 8:30 PM</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
