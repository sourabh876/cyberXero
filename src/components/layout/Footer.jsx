import React from 'react';
import { 
  FileText, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  MessageSquare, 
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';

export default function Footer({ onNavigate }) {
  const handleScroll = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
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
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-blue-600 via-indigo-600 to-brand-purple-600 flex items-center justify-center text-white shadow-md">
                <FileText className="w-5 h-5 text-amber-300" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                DIGITAL <span className="text-brand-saffron-500">SEVA</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Your neighbourhood centre for government exam forms, KYC uploads, fast Xerox, color laser prints, and student documentation.
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
              <li>
                <button onClick={() => handleScroll('home')} className="hover:text-amber-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('services')} className="hover:text-amber-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  Services Directory
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('how-it-works')} className="hover:text-amber-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('pricing')} className="hover:text-amber-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  Pricing & Calculator
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('about')} className="hover:text-amber-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('faq')} className="hover:text-amber-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  FAQ & Feedback
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('contact')} className="hover:text-amber-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  Contact Desk
                </button>
              </li>
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
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
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
          <p>© {new Date().getFullYear()} Digital Seva Centre. All rights reserved.</p>
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
