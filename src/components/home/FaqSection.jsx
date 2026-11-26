import React, { useState } from 'react';
import {
  ChevronDown, ChevronUp, Star, Quote, Sparkles, MessageCircleQuestion, HelpCircle
} from 'lucide-react';
import { faqData, customerTestimonials } from '../../data/faqData';
import { shopInfo } from '../../data/servicesData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const toggleAccordion = idx => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section
      id="faq"
      className="scroll-mt-24 py-16 lg:py-24 bg-mesh-gradient border-b border-slate-200/70 relative overflow-hidden render-content-auto"
    >
      {/* Deco */}
      <div className="orb w-72 h-72 bg-indigo-400/8 -top-16 right-10 pointer-events-none animate-pulse-glow" />
      <div className="orb w-56 h-56 bg-pink-400/8 bottom-0 left-0 pointer-events-none animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      <div className="dot-grid absolute inset-0 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 text-emerald-700 mb-3 mx-auto w-fit">
            <Sparkles className="w-3.5 h-3.5 text-emerald-500 animate-spin-slow" />
            <span>Clear answers make every visit easier.</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Good to Know{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Before You Visit.
            </span>
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            Have A Question About Documents, Charges Or An Online Application? Start Here. If Your Situation Is Different, Contact Us And We'll Help Clarify The Next Step.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* ── FAQ Accordion ── */}
          <div className="lg:col-span-7 space-y-3">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-indigo-300 shadow-lg ring-1 ring-indigo-100'
                      : 'bg-white/80 border-slate-200/80 hover:bg-white hover:border-indigo-200 hover:shadow-md'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 focus:outline-none group"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-indigo-600 text-white scale-110' : 'bg-slate-100 text-slate-500'}`}>
                        <HelpCircle className="w-3.5 h-3.5" />
                      </span>
                      <span className="leading-snug">{item.q}</span>
                    </div>
                    <span className={`p-1.5 rounded-xl transition-all duration-300 shrink-0 ${isOpen ? 'bg-indigo-50 text-indigo-600 rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-5 pb-5 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-gradient-to-b from-indigo-50/30 to-white">
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Ask on WhatsApp */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-3 mt-4">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <MessageCircleQuestion className="w-4.5 h-4.5 w-5 h-5" />
                </span>
                <span className="text-xs text-slate-700 font-semibold text-center sm:text-left">
                  Have a specific question not listed above?
                </span>
              </div>
              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hi%20CyberXero%2C%20I%20have%20a%20specific%20question%20about%20your%20services%20that%20I%20couldn't%20find%20in%20the%20FAQ.%20Can%20you%20help%3F`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-4 py-2.5 rounded-xl text-white font-bold text-xs flex items-center gap-2 whitespace-nowrap group"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white group-hover:animate-bounce-soft" />
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* ── Testimonials Sidebar ── */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-5 border-b border-slate-200/70 pb-3">
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 tracking-tight">Real Customer Reviews</h3>
                  <p className="text-xs text-slate-500">Genuine feedback from local walk-in visitors</p>
                </div>
                <div className="flex items-center gap-1.5 text-amber-600 text-xs font-black bg-gradient-to-r from-amber-50 to-orange-50 px-2.5 py-1 rounded-xl border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>4.9 / 5</span>
                </div>
              </div>

              <div className="space-y-3.5">
                {customerTestimonials.map((t, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-indigo-50/30 border border-slate-200/80 relative hover:border-indigo-200 hover:shadow-md transition-all duration-300 hover-lift animate-card-enter"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <Quote className="w-5 h-5 text-indigo-200 absolute top-3 right-3 pointer-events-none" />

                    <div className="flex items-center gap-0.5 text-amber-500 mb-2">
                      {[...Array(t.rating)].map((_, s) => (
                        <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">"{t.text}"</p>

                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100">
                      <div>
                        <span className="font-bold text-slate-900 block">{t.name}</span>
                        <span className="text-slate-400 text-[10px]">{t.role}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 font-bold text-[10px] border border-indigo-100">
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
