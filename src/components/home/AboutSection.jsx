
import React from 'react';

import {
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
  GraduationCap,
  Briefcase,
  Home,
  HeartHandshake,
  Store
} from 'lucide-react';

import { shopInfo } from '../../data/servicesData';

export default function AboutSection({ onExploreClick }) {

  const citizenGroups = [
    {
      label: 'Students & Applicants',
      desc: 'College admissions, scholarships & admit cards.',
      icon: GraduationCap,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
    },
    {
      label: 'Govt Job Aspirants',
      desc: 'SSC, UPSC, Railway & Police exam applications.',
      icon: Briefcase,
      color: 'text-purple-600 bg-purple-50 border-purple-100'
    },
    {
      label: 'Families & Residents',
      desc: 'Ration cards, voter IDs & utility bills.',
      icon: Home,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
    },
    {
      label: 'Senior Citizens',
      desc: 'Jeevan Pramaan life certs & pension forms.',
      icon: HeartHandshake,
      color: 'text-amber-600 bg-amber-50 border-amber-100'
    },
    {
      label: 'Small Businesses',
      desc: 'GST bills, PAN updates & formal typing.',
      icon: Store,
      color: 'text-cyan-600 bg-cyan-50 border-cyan-100'
    },
    {
      label: 'Express Walk-ins',
      desc: 'Fast Xerox, WhatsApp prints & instant photos.',
      icon: Zap,
      color: 'text-rose-600 bg-rose-50 border-rose-100'
    }
  ];

  return (
    <section
      id="about"
      style={{ backgroundColor: '#F0FAF8' }}
      className="scroll-mt-24 py-16 lg:py-24 border-b border-[#b7dcd2] relative"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">

            {/* Experience Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#d9efe9] border border-[#b7dcd2] text-teal-800 text-xs font-bold uppercase tracking-wider">

              <Sparkles className="w-3.5 h-3.5 text-teal-600" />

              <span>{shopInfo.experience}</span>

            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">

              Your Local{' '}

              <span className="bg-gradient-to-r from-brand-blue-600 to-indigo-600 bg-clip-text text-transparent">

                Paperwork & Tech Partner

              </span>

            </h2>

            {/* Description */}
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">

              We take the headache out of complex online portals,
              tricky photo resizing, and high-stakes recruitment deadlines.

            </p>

            {/* Three Differentiator Cards */}
            <div className="grid grid-cols-1 gap-3 pt-1">

              {/* Card 1 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#d9efe9] border border-[#b7dcd2] shadow-xs hover:border-teal-400 hover:shadow-sm transition-all duration-300">

                <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-sm">

                  <Target className="w-4 h-4" />

                </div>

                <div>

                  <h4 className="text-xs font-bold text-slate-900">

                    Strictly Civic & Business Work

                  </h4>

                  <p className="text-[11px] text-slate-600">

                    No gaming or public browsing arcades.
                    100% focused on documentation accuracy.

                  </p>

                </div>

              </div>

              {/* Card 2 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#d9efe9] border border-[#b7dcd2] shadow-xs hover:border-teal-400 hover:shadow-sm transition-all duration-300">

                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">

                  <ShieldCheck className="w-4 h-4" />

                </div>

                <div>

                  <h4 className="text-xs font-bold text-slate-900">

                    Customer-Controlled OTP Privacy

                  </h4>

                  <p className="text-[11px] text-slate-600">

                    You type confidential OTPs yourself.
                    Zero passwords or personal files retained.

                  </p>

                </div>

              </div>

              {/* Card 3 */}
              <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#d9efe9] border border-[#b7dcd2] shadow-xs hover:border-teal-400 hover:shadow-sm transition-all duration-300">

                <div className="w-9 h-9 rounded-xl bg-brand-saffron-500 text-white flex items-center justify-center shrink-0 shadow-sm">

                  <Zap className="w-4 h-4" />

                </div>

                <div>

                  <h4 className="text-xs font-bold text-slate-900">

                    Exact Portal Sizing & Zero Errors

                  </h4>

                  <p className="text-[11px] text-slate-600">

                    Photos, signatures, and PDFs cropped
                    to exact recruitment commission rules.

                  </p>

                </div>

              </div>

            </div>

            {/* Browse Services Button & Location */}
            <div className="flex items-center gap-4 pt-2">

              <button
                onClick={onExploreClick}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-brand-blue-600 to-indigo-600 hover:from-brand-blue-700 hover:to-indigo-700 text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-indigo-500/20 transition flex items-center gap-2 transform hover:-translate-y-0.5"
              >

                <span>Browse All Services</span>

                <ArrowRight className="w-4 h-4" />

              </button>

              <div className="text-xs text-slate-600 font-medium flex items-center gap-1">

                <MapPin className="w-3.5 h-3.5 text-teal-600" />

                <span>Near City Head Post Office</span>

              </div>

            </div>

          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">

            <div className="bg-[#e8f5f1] rounded-3xl p-6 sm:p-8 border border-[#b7dcd2] shadow-sm">

              {/* Right Column Header */}
              <div className="flex items-center justify-between mb-6 border-b border-[#b7dcd2] pb-4">

                <div>

                  <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">

                    Who We Help Everyday

                  </h3>

                  <p className="text-xs text-slate-600">

                    Tailored assistance for every citizen & student

                  </p>

                </div>

                <div className="w-10 h-10 rounded-2xl bg-[#d9efe9] text-teal-700 flex items-center justify-center border border-[#b7dcd2] shadow-xs">

                  <Users className="w-5 h-5" />

                </div>

              </div>

              {/* Six Beneficiary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">

                {citizenGroups.map((group, i) => {

                  const Icon = group.icon;

                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-[#d9efe9] border border-[#b7dcd2] hover:border-teal-400 hover:shadow-md transition-all duration-300 flex items-start gap-3 group"
                    >

                      {/* Individual Icon Colour */}
                      <div
                        className={`w-8 h-8 rounded-xl ${group.color} flex items-center justify-center shrink-0 border group-hover:scale-105 transition-transform`}
                      >

                        <Icon className="w-4 h-4" />

                      </div>

                      {/* Card Content */}
                      <div>

                        <div className="text-xs font-bold text-slate-900 mb-0.5 group-hover:text-teal-800 transition-colors">

                          {group.label}

                        </div>

                        <p className="text-[11px] text-slate-600 leading-snug">

                          {group.desc}

                        </p>

                      </div>

                    </div>
                  );

                })}

              </div>

              {/* Verified Privacy Note */}
              <div className="mt-6 pt-4 border-t border-[#b7dcd2] text-center">

                <span className="text-xs text-slate-600 inline-flex items-center gap-2">

                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />

                  All document uploads & forms are completed live in front of you.

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
