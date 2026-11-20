import React from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Users, 
  FileCheck, 
  Building2, 
  Sparkles, 
  Award,
  ArrowRight
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';

export default function AboutSection({ onExploreClick }) {
  const citizenGroups = [
    { label: 'Students & College Applicants', desc: 'Admission forms, scholarship uploads, exam admit cards & projects.' },
    { label: 'Government Job Aspirants', desc: 'SSC, UPSC, Railway, Police & State recruitment application guidance.' },
    { label: 'Local Residents & Families', desc: 'Ration card, voter ID, electricity bills, and certificate services.' },
    { label: 'Senior Citizens & Pensioners', desc: 'Jeevan Pramaan life certificate guidance and pension documentation.' },
    { label: 'Small Business Owners', desc: 'GST bills, PAN card assistance, rent agreements and formal typing.' },
    { label: 'Express Counter Walk-ins', desc: 'Fast Xerox, phone-to-print WhatsApp service and instant passport photos.' }
  ];

  return (
    <section id="about" className="scroll-mt-24 py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-saffron-50 border border-brand-saffron-200 text-brand-saffron-700 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-brand-saffron-600" />
              <span>{shopInfo.experience}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-950 tracking-tight leading-tight">
              A Dedicated <span className="text-brand-blue-700">Digital Seva & Documentation</span> Counter For Our Neighbourhood
            </h2>

            <p className="text-slate-600 leading-relaxed text-base">
              Navigating online government portals, specific photo/signature upload constraints, and portal timeouts can be confusing and stressful. We established our centre to provide honest, patient, and technically proficient assistance to everyday citizens.
            </p>

            <div className="p-4 rounded-2xl bg-brand-blue-50/70 border border-brand-blue-100 space-y-2">
              <h4 className="text-sm font-bold text-brand-blue-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue-600" />
                What Makes Our Centre Different?
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We are <strong>NOT a gaming cafe, PC rental or computer arcade</strong>. Our workspace is strictly set up for civic, educational, and professional document services. Every operator has in-depth knowledge of recruitment portal requirements, photo resizing criteria, and document formatting.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onExploreClick}
                className="px-6 py-3 rounded-xl bg-brand-blue-700 hover:bg-brand-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition flex items-center gap-2"
              >
                <span>Browse All Services</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-xs text-slate-500 font-medium">
                📍 {shopInfo.address.split(',')[0]}, {shopInfo.city}
              </div>
            </div>
          </div>

          {/* Right Column: Audience & Beneficiaries Grid */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between mb-6 border-b border-slate-200/80 pb-4">
                <div>
                  <h3 className="font-extrabold text-lg text-brand-blue-950">Who We Help Every Day</h3>
                  <p className="text-xs text-slate-500">Dedicated assistance across all citizen workflows</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-brand-emerald-50 text-brand-emerald-600 flex items-center justify-center font-bold text-sm border border-brand-emerald-200">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {citizenGroups.map((group, i) => (
                  <div 
                    key={i} 
                    className="p-3.5 rounded-xl bg-white border border-slate-200/80 hover:border-brand-blue-300 hover:shadow-sm transition-all"
                  >
                    <div className="text-xs font-bold text-brand-blue-900 mb-1 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-saffron-500 shrink-0" />
                      {group.label}
                    </div>
                    <p className="text-[11px] text-slate-500 leading-snug">{group.desc}</p>
                  </div>
                ))}
              </div>

              {/* Verified Privacy Note */}
              <div className="mt-6 pt-4 border-t border-slate-200 text-center">
                <span className="text-xs text-slate-500 inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-emerald-500 inline-block" />
                  All document uploads & applications are processed transparently in front of the customer.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
