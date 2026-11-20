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
    <footer className="bg-brand-blue-950 text-slate-300 border-t border-brand-blue-900/80 pt-16 pb-12 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-brand-blue-900/60">
          
          {/* Col 1: Shop Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue-600 to-brand-saffron-500 flex items-center justify-center text-white shadow-md">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                DIGITAL <span className="text-brand-saffron-400">SEVA</span> CENTRE
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Your trusted local centre for government online applications, KYC document upload, fast Xerox, color printing, high-res scanning, and student career documentation.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-brand-blue-900/70 border border-brand-blue-800 text-xs text-brand-emerald-400 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Strict Zero-OTP-Storage Security</span>
            </div>
          </div>

          {/* Col 2: Service Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-brand-blue-900/60 pb-2">
              Page Sections
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <button onClick={() => handleScroll('home')} className="hover:text-brand-saffron-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('services')} className="hover:text-brand-saffron-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  Services Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('how-it-works')} className="hover:text-brand-saffron-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('pricing')} className="hover:text-brand-saffron-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  Pricing & Rate Card
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('about')} className="hover:text-brand-saffron-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('faq')} className="hover:text-brand-saffron-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  FAQ & Reviews
                </button>
              </li>
              <li>
                <button onClick={() => handleScroll('contact')} className="hover:text-brand-saffron-400 transition flex items-center gap-1.5 text-left">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-saffron-500" />
                  Contact Desk
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Timings & Location */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-brand-blue-900/60 pb-2">
              Working Hours
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-brand-saffron-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Monday – Saturday:</span>
                  <span>8:30 AM – 8:30 PM (Continuous)</span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-medium block">Sunday:</span>
                  <span>9:00 AM – 2:00 PM</span>
                </div>
              </div>
              <div className="pt-2 text-xs text-brand-emerald-400 font-semibold flex items-center gap-1">
                <span>Power Backup & High-Speed Inverter Active</span>
              </div>
            </div>
          </div>

          {/* Col 4: Reach Us (Demo Contact Info) */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider border-b border-brand-blue-900/60 pb-2">
              Contact Desk (Demo)
            </h4>
            <div className="space-y-2.5 text-sm text-slate-400">
              <div className="flex items-start gap-2">
                <UserCheck className="w-4 h-4 text-brand-saffron-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-300 font-medium">{shopInfo.contactPerson}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-saffron-400 shrink-0 mt-0.5" />
                <span>{shopInfo.address}, {shopInfo.city}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-emerald-400 shrink-0" />
                <a href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`} className="hover:text-white transition">
                  {shopInfo.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-brand-emerald-400 shrink-0" />
                <a 
                  href={`https://wa.me/${shopInfo.whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition text-brand-emerald-400 font-medium"
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

        {/* Legal & Regulatory Disclaimers */}
        <div className="py-6 border-b border-brand-blue-900/60 text-xs text-slate-400 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-200">Legal & Regulatory Disclaimer:</strong> This centre is a privately operated cyber cafe, digital documentation, and online facilitation service. We provide assisted form-entry, document scanning, formatting, and printing services. We do NOT represent or act as any government commission, recruiting board, or statutory department. All official recruitment and certificate approvals remain the exclusive prerogative of the respective authorities.
          </p>
          <p>
            <strong className="text-slate-200">Fee Transparency:</strong> Shop charges shown are service fees for counter technical assistance and equipment consumables. Government portal fees, examination fees, and statutory duties are pass-through charges collected separately at official rates with valid government receipts.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© {new Date().getFullYear()} Digital Seva & Cyber Service Centre (Demo Instance). All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Strict OTP Safe Zone</span>
            <span>•</span>
            <span className="text-slate-400">Laser Print Ready</span>
            <span>•</span>
            <span className="text-slate-400">Daily 8:30 AM – 8:30 PM</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
