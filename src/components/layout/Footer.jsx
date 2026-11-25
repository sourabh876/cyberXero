
import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  MessageSquare,
  ChevronRight,
  UserCheck,
} from "lucide-react";
import { shopInfo } from "../../data/servicesData";

export default function Footer({ onNavigate }) {
  const handleScroll = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-8 pb-5 select-none relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pb-6 border-b border-slate-800">

          {/* Col 1: Shop Brand & About */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScroll("home")}
                className="flex items-center gap-2 shrink-0 mr-auto group text-left"
                aria-label="cyberXero Home"
              >

                {/* 3D CX Symbol */}
                <div className="relative w-10 h-10 flex-shrink-0 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-xl bg-blue-500/30 blur-lg animate-pulse" />

                  <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-slate-950 via-blue-800 to-cyan-500 border border-cyan-300/70 shadow-[0_5px_0_#082f70,0_10px_20px_#168bff55] flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:-rotate-6">

                    <span className="text-3xl font-black italic text-white leading-none drop-shadow-[0_0_10px_#38bdf8]">
                      C
                    </span>

                    <span className="absolute text-lg font-black italic text-cyan-300 right-1 bottom-1 drop-shadow-[0_0_10px_#00d9ff]">
                      X
                    </span>

                  </div>
                </div>

                {/* Brand Name */}
                <div className="flex flex-col justify-center">
                  <span className="text-xl sm:text-2xl font-black tracking-tighter leading-none whitespace-nowrap">

                    <span className="text-white">
                      cyber
                    </span>

                    <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-400 bg-clip-text text-transparent">
                      Xero
                    </span>

                  </span>

                  <span className="mt-1 text-[9px] sm:text-[10px] font-bold tracking-[1.5px] text-slate-400 uppercase whitespace-nowrap">
                    Advanced Digital Centre
                  </span>
                </div>
              </button>
            </div>

            {/* Brand Description */}
            <p className="text-xs text-slate-400 leading-relaxed">
              Your trusted counter for fast exam forms, verified KYC uploads,
              laser printing, and Xerox. Zero errors, upfront rates.
            </p>

            {/* Security Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-[11px] text-emerald-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />

              <span>Strict Zero-OTP-Storage Security</span>
            </div>
          </div>

          {/* Col 2: Service Quick Links */}
          <div className="space-y-2">

            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-1.5">
              Page Navigation
            </h4>

            <ul className="space-y-1.5 text-xs text-slate-400">

              <li>
                <button
                  onClick={() => handleScroll("home")}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-brand-saffron-500" />
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("services")}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-brand-saffron-500" />
                  Services Directory
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("how-it-works")}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-brand-saffron-500" />
                  How It Works
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("pricing")}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-brand-saffron-500" />
                  Pricing & Calculator
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("about")}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-brand-saffron-500" />
                  About Us
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("faq")}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-brand-saffron-500" />
                  FAQ & Feedback
                </button>
              </li>

              <li>
                <button
                  onClick={() => handleScroll("contact")}
                  className="hover:text-amber-400 transition flex items-center gap-1.5 text-left"
                >
                  <ChevronRight className="w-3 h-3 text-brand-saffron-500" />
                  Contact Desk
                </button>
              </li>

            </ul>
          </div>

          {/* Col 3: Working Hours */}
          <div className="space-y-2">

            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-1.5">
              Working Hours
            </h4>

            <div className="space-y-2 text-xs text-slate-400">

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />

                <div>
                  <span className="text-white font-semibold block">
                    Mon – Sat:
                  </span>

                  <span>8:30 AM – 8:30 PM (Continuous)</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />

                <div>
                  <span className="text-white font-semibold block">
                    Sunday:
                  </span>

                  <span>9:00 AM – 2:00 PM</span>
                </div>
              </div>

              <div className="pt-1 text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
                <span>
                  Power Inverter & Dual Printers Active
                </span>
              </div>

            </div>
          </div>

          {/* Col 4: Contact Desk */}
          <div className="space-y-2">

            <h4 className="text-white font-bold text-xs uppercase tracking-wider border-b border-slate-800 pb-1.5">
              Contact Desk
            </h4>

            <div className="space-y-1.5 text-xs text-slate-400">

              {/* Contact Person */}
              <div className="flex items-start gap-2">
                <UserCheck className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />

                <span className="text-slate-300 font-medium">
                  {shopInfo.contactPerson}
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />

                <span>
                  {shopInfo.address}, {shopInfo.city}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />

                <a
                  href={`tel:${shopInfo.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white transition"
                >
                  {shopInfo.phoneDisplay}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />

                <a
                  href={`https://wa.me/${shopInfo.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition text-emerald-400 font-semibold"
                >
                  WhatsApp: {shopInfo.whatsappDisplay}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />

                <span className="break-all">
                  {shopInfo.email}
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* Regulatory Disclaimers */}
        <div className="py-3 border-b border-slate-800 text-[10px] sm:text-[11px] text-slate-400 leading-relaxed space-y-1">

          <p>
            <strong className="text-slate-200">
              Legal Notice:
            </strong>{" "}
            This centre is an independent digital documentation and online
            facilitation service. We provide assisted form-entry, document
            scanning, formatting, and printing. Official approvals remain the
            exclusive prerogative of the respective authorities.
          </p>

          <p>
            <strong className="text-slate-200">
              Fee Transparency:
            </strong>{" "}
            Shop fees cover operator technical assistance and consumables.
            Government portal exam fees and taxes are pass-through charges
            collected separately at official rates with valid government
            receipts.
          </p>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">

          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} cyberXero. All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px]">

            <span className="text-slate-400">
              Strict OTP Safe
            </span>

            <span>•</span>

            <span className="text-slate-400">
              Laser Prints
            </span>

            <span>•</span>

            <span className="text-slate-400">
              Daily 8:30 AM – 8:30 PM
            </span>

          </div>
        </div>

      </div>
    </footer>
  );
}
