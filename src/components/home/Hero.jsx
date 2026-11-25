
import React from 'react';
import {
  ArrowRight,
  MessageSquare,
  Calculator,
  ShieldCheck,
  Printer,
  Zap,
  Clock
} from 'lucide-react';

import { shopInfo } from '../../data/servicesData';
import Hero3DIllustration from '../3d/Hero3DIllustration';

export default function Hero({ onExploreClick }) {

  const trustBadges = [
    {
      icon: ShieldCheck,
      title: '100% OTP Safe',
      description: 'Self-entered OTPs',
      cardColor: 'bg-emerald-50 border-emerald-200',
      iconColor: 'text-emerald-600 bg-emerald-100 border-emerald-200'
    },
    {
      icon: Printer,
      title: '₹2/Side Xerox',
      description: '75 GSM White stock',
      cardColor: 'bg-orange-50 border-orange-200',
      iconColor: 'text-orange-600 bg-orange-100 border-orange-200'
    },
    {
      icon: Zap,
      title: '2–5 Min Delivery',
      description: 'Dual laser speed',
      cardColor: 'bg-indigo-50 border-indigo-200',
      iconColor: 'text-indigo-600 bg-indigo-100 border-indigo-200'
    },
    {
      icon: Clock,
      title: '8:30 AM – 8:30 PM',
      description: '12-Hour Counter',
      cardColor: 'bg-purple-50 border-purple-200',
      iconColor: 'text-purple-600 bg-purple-100 border-purple-200'
    }
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden theme-home pt-10 pb-12 lg:pt-16 lg:pb-20"
    >

      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">

        {/* Purple Glow */}
        <div className="absolute top-10 left-[15%] w-80 h-80 rounded-full bg-indigo-200/30 blur-[100px]" />

        {/* Blue Glow */}
        <div className="absolute top-10 right-[10%] w-80 h-80 rounded-full bg-blue-200/30 blur-[100px]" />

        {/* Pink Glow */}
        <div className="absolute bottom-0 right-[5%] w-64 h-64 rounded-full bg-purple-200/20 blur-[90px]" />

        {/* Background Grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, #6366f10a 1px, transparent 1px), linear-gradient(to bottom, #6366f10a 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] items-center gap-8 lg:gap-10">

          {/* Left Side Content */}
          <div>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/90 border border-indigo-200 shadow-sm">

              <span className="relative flex h-2 w-2">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-60" />

                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />

              </span>

              <span className="text-[10px] sm:text-[11px] font-bold tracking-wide text-indigo-600">
                FAST DIGITAL SEVA • ONLINE FORMS • SPEED XEROX
              </span>

            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-slate-900 mb-5">

              Next-Gen Digital Services,{' '}

              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                Made Easy.
              </span>

            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-7">

              From online exam forms and KYC to high-speed laser prints.
              Walk in with documents, walk out with confirmed submissions.

            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">

              {/* Explore Services Button */}
              <button
                type="button"
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >

                Explore 20+ Services

                <ArrowRight className="w-4 h-4" />

              </button>

              {/* WhatsApp Button */}
              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                  'Hello CyberXero, I have an enquiry.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-500/20 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >

                <MessageSquare className="w-4 h-4" />

                WhatsApp Instant Help

              </a>

              {/* Estimate Cost Button */}
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs sm:text-sm font-semibold shadow-sm hover:border-indigo-300 hover:text-indigo-600 hover:-translate-y-0.5 transition-all duration-300"
              >

                <Calculator className="w-4 h-4 text-indigo-500" />

                Estimate Cost

              </a>

            </div>

            {/* Divider */}
            <div className="h-px w-full bg-slate-200/80 mb-5" />

            {/* Colourful Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">

              {trustBadges.map((badge, index) => {

                const Icon = badge.icon;

                return (
                  <div
                    key={index}
                    className={`group flex items-center gap-2 border rounded-xl px-2.5 py-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${badge.cardColor}`}
                  >

                    {/* Badge Icon */}
                    <div
                      className={`w-8 h-8 flex-shrink-0 rounded-lg border flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${badge.iconColor}`}
                    >

                      <Icon className="w-4 h-4" />

                    </div>

                    {/* Badge Text */}
                    <div className="min-w-0">

                      <h3 className="text-[10px] sm:text-[11px] font-bold text-slate-900 leading-tight">

                        {badge.title}

                      </h3>

                      <p className="text-[9px] text-slate-500 mt-0.5 leading-tight">

                        {badge.description}

                      </p>

                    </div>

                  </div>
                );

              })}

            </div>

          </div>

          {/* Right Side 3D Laptop Illustration */}
          <div className="relative flex items-center justify-center w-full">

            <div className="w-full max-w-[480px] mx-auto">

              <Hero3DIllustration />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
