
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Quote, Sparkles } from 'lucide-react';
import { faqData, customerTestimonials } from '../../data/faqData';
import { shopInfo } from '../../data/servicesData';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const cardStyle = 'rounded-2xl bg-[#eef4ff] border border-[#d5e2f5]';

  return (
    <section
      id="faq"
      style={{ backgroundColor: '#F8FAFF' }}
      className="scroll-mt-24 py-16 lg:py-24 border-b border-[#d5e2f5] relative render-content-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eef4ff] border border-[#d5e2f5] text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
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

          {/* FAQ Questions */}
          <div className="lg:col-span-7 space-y-3">

            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              const Icon = isOpen ? ChevronUp : ChevronDown;

              return (
                <div
                  key={idx}
                  className={`${cardStyle} overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? 'shadow-md ring-1 ring-blue-400'
                      : 'hover:border-blue-400 hover:shadow-sm'
                  }`}
                >

                  <button
                    onClick={() => toggleAccordion(idx)}
                    aria-expanded={isOpen}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500"
                  >
                    <span className="leading-snug">
                      {item.q}
                    </span>

                    <span
                      className={`p-1.5 rounded-xl shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-blue-200 text-blue-700'
                          : 'bg-[#d5e2f5] text-blue-600'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-3 text-xs text-slate-600 leading-relaxed border-t border-[#d5e2f5]">
                      <p>{item.a}</p>
                    </div>
                  )}

                </div>
              );
            })}

            {/* WhatsApp Question */}
            <div className={`${cardStyle} p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs mt-4`}>

              <span className="text-slate-700 font-semibold text-center sm:text-left">
                Have a specific document question not listed?
              </span>

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

          {/* Customer Reviews */}
          <div className="lg:col-span-5">

            <div className="bg-[#e0ebfc] rounded-3xl p-6 sm:p-7 border border-[#d5e2f5] shadow-sm">

              {/* Review Header */}
              <div className="flex items-center justify-between mb-5 border-b border-[#d5e2f5] pb-3">

                <div>
                  <h3 className="font-extrabold text-base text-slate-900 tracking-tight">
                    Real Customer Reviews
                  </h3>

                  <p className="text-xs text-slate-600">
                    Genuine feedback from local walk-in visitors
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-amber-600 text-xs font-black bg-amber-50 px-2.5 py-1 rounded-xl border border-amber-200">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>4.9 / 5</span>
                </div>

              </div>

              {/* Review Cards */}
              <div className="space-y-3.5">

                {customerTestimonials.map((t, i) => (
                  <div
                    key={i}
                    className={`${cardStyle} p-4 shadow-xs relative hover:border-blue-400 hover:shadow-md transition-all duration-300`}
                  >

                    <Quote className="w-5 h-5 text-blue-300 absolute top-3 right-3 pointer-events-none" />

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-2">
                      {Array.from({ length: t.rating }, (_, s) => (
                        <Star
                          key={s}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      "{t.text}"
                    </p>

                    {/* Customer Details */}
                    <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[#d5e2f5]">

                      <div>
                        <span className="font-bold text-slate-900 block">
                          {t.name}
                        </span>

                        <span className="text-slate-500 text-[10px]">
                          {t.role}
                        </span>
                      </div>

                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[10px] border border-[#d5e2f5]">
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
