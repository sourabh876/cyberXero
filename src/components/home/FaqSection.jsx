import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Quote, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { faqData, customerTestimonials } from '../../data/faqData';
import { shopInfo } from '../../data/servicesData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-24 py-16 lg:py-24 bg-white border-b border-slate-200/70 relative render-content-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
            <span>Clear Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            Quick, honest details on document safety, WhatsApp printing, and counter fees.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* FAQ Accordion (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen 
                      ? 'bg-white border-indigo-300 shadow-md ring-1 ring-indigo-100' 
                      : 'bg-slate-50/70 border-slate-200/70 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 focus:outline-none"
                  >
                    <span className="leading-snug">{item.q}</span>
                    <span className={`p-1.5 rounded-xl transition-colors shrink-0 ${isOpen ? 'bg-indigo-50 text-brand-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      <p>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}

            {/* Have another question? */}
            <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs mt-4">
              <span className="text-slate-700 font-semibold text-center sm:text-left">Have a specific document question not listed?</span>
              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-brand-blue-600 text-white font-bold whitespace-nowrap hover:bg-brand-blue-700 shadow-sm transition"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Testimonials Sidebar (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-7 border border-slate-200/70 shadow-sm">
              <div className="flex items-center justify-between mb-5 border-b border-slate-200/70 pb-3">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 tracking-tight">Real Customer Reviews</h3>
                  <p className="text-xs text-slate-500">Genuine feedback from local walk-in visitors</p>
                </div>
                <div className="flex items-center gap-1.5 text-amber-600 text-xs font-black bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>4.9 / 5</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {customerTestimonials.map((t, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200/70 shadow-xs relative hover:border-indigo-200 transition-colors">
                    <Quote className="w-5 h-5 text-slate-200 absolute top-3 right-3 pointer-events-none" />
                    
                    <div className="flex items-center gap-1 text-amber-500 mb-2">
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      "{t.text}"
                    </p>

                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100">
                      <div>
                        <span className="font-bold text-slate-900 block">{t.name}</span>
                        <span className="text-slate-400 text-[10px]">{t.role}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-brand-blue-700 font-bold text-[10px] border border-indigo-100">
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
