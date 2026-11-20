import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Quote, 
  MessageSquare, 
  CheckCircle2 
} from 'lucide-react';
import { faqData, customerTestimonials } from '../../data/faqData';
import { shopInfo } from '../../data/servicesData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-24 py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald-50 border border-brand-emerald-200 text-brand-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Frequently Asked Questions & Feedback
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Everything you need to know about our service process, document safety, WhatsApp printing, and government fee handling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all ${
                    isOpen 
                      ? 'bg-white border-brand-blue-300 shadow-sm ring-1 ring-brand-blue-100' 
                      : 'bg-white/80 border-slate-200/90 hover:bg-white'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-brand-blue-950 focus:outline-none"
                  >
                    <span>{item.q}</span>
                    <span className="p-1 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Have another question? */}
            <div className="p-4 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-200 flex items-center justify-between gap-3 text-xs">
              <span className="text-slate-700 font-medium">Have a specific question not listed here?</span>
              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-brand-blue-700 text-white font-bold whitespace-nowrap hover:bg-brand-blue-800 transition"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Testimonials Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm">
              <div className="flex items-center justify-between mb-5 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-extrabold text-base text-brand-blue-950">Citizen Experiences</h3>
                  <p className="text-xs text-slate-500">Real feedback from local walk-in clients</p>
                </div>
                <div className="flex items-center gap-1 text-brand-saffron-500 text-xs font-bold bg-brand-saffron-50 px-2 py-1 rounded-lg border border-brand-saffron-200">
                  <Star className="w-3.5 h-3.5 fill-brand-saffron-500" />
                  <span>4.9 / 5</span>
                </div>
              </div>

              <div className="space-y-4">
                {customerTestimonials.map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 relative">
                    <Quote className="w-5 h-5 text-slate-300 absolute top-3 right-3 pointer-events-none" />
                    
                    <div className="flex items-center gap-1 text-brand-saffron-500 mb-2">
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-brand-saffron-500 text-brand-saffron-500" />
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3 italic">
                      "{t.text}"
                    </p>

                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-200/60">
                      <div>
                        <span className="font-bold text-brand-blue-950 block">{t.name}</span>
                        <span className="text-slate-400">{t.role}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-brand-blue-50 text-brand-blue-700 font-medium text-[10px] border border-brand-blue-100">
                        {t.tag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
