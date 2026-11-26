import React, { useState, useEffect, useRef } from 'react';
import {
  MapPin, Users, ArrowRight, Sparkles,
  ShieldCheck, Zap, Target, GraduationCap, Briefcase,
  Home, HeartHandshake, Store, Clock, Award, Layers
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';
import { scrollToSection } from '../../utils/navigation';
import WhatsAppIcon from '../common/WhatsAppIcon';

const CITIZEN_GROUPS = [
  { label: 'Students & Applicants', desc: 'College admissions, scholarships & admit cards.',  icon: GraduationCap, color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
  { label: 'Govt Job Aspirants',    desc: 'SSC, UPSC, Railway & Police exam applications.',   icon: Briefcase,     color: 'text-purple-600 bg-purple-50 border-purple-200' },
  { label: 'Families & Residents',  desc: 'Ration cards, voter IDs & utility bills.',         icon: Home,          color: 'text-emerald-600 bg-emerald-50 border-emerald-200' },
  { label: 'Senior Citizens',       desc: 'Jeevan Pramaan life certs & pension forms.',       icon: HeartHandshake,color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { label: 'Small Businesses',      desc: 'GST bills, PAN updates & formal typing.',           icon: Store,         color: 'text-cyan-600 bg-cyan-50 border-cyan-200' },
  { label: 'Express Walk-ins',      desc: 'Fast Xerox, WhatsApp prints & instant photos.',    icon: Zap,           color: 'text-rose-600 bg-rose-50 border-rose-200' },
];

const STATS = [
  {
    target: 500,
    suffix: '+',
    label: 'Happy Customers',
    sub: 'Trusted local walk-ins',
    icon: Users,
    iconAnim: 'animate-bounce-soft',
    grad: 'from-indigo-500 to-blue-600',
    textGrad: 'from-indigo-600 to-blue-600',
    borderHover: 'hover:border-indigo-300',
    softBg: 'bg-indigo-50/70 border-indigo-100 text-indigo-700',
  },
  {
    target: 25,
    suffix: '+',
    label: 'Services Available',
    sub: 'Print, forms & KYC',
    icon: Layers,
    iconAnim: 'animate-icon-cpu',
    grad: 'from-purple-500 to-pink-500',
    textGrad: 'from-purple-600 to-pink-500',
    borderHover: 'hover:border-purple-300',
    softBg: 'bg-purple-50/70 border-purple-100 text-purple-700',
  },
  {
    target: 12,
    suffix: 'h',
    label: 'Open Daily',
    sub: '8:30 AM – 8:30 PM',
    icon: Clock,
    iconAnim: 'animate-icon-scan',
    grad: 'from-amber-500 to-orange-500',
    textGrad: 'from-amber-600 to-orange-500',
    borderHover: 'hover:border-amber-300',
    softBg: 'bg-amber-50/70 border-amber-100 text-amber-700',
  },
  {
    target: 100,
    suffix: '%',
    label: 'Accuracy Rate',
    sub: 'Error-free submissions',
    icon: ShieldCheck,
    iconAnim: 'animate-pulse-glow',
    grad: 'from-emerald-500 to-teal-500',
    textGrad: 'from-emerald-600 to-teal-600',
    borderHover: 'hover:border-emerald-300',
    softBg: 'bg-emerald-50/70 border-emerald-100 text-emerald-700',
  },
];

const DIFFERENTIATORS = [
  { icon: Target,      grad: 'from-indigo-500 to-blue-600',   title: 'Strictly Civic & Business Work',    desc: 'No gaming or public browsing. 100% focused on documentation accuracy.' },
  { icon: ShieldCheck, grad: 'from-emerald-500 to-teal-600',  title: 'Customer-Controlled OTP Privacy',   desc: 'You type confidential OTPs yourself. Zero passwords or personal files retained.' },
  { icon: Award,       grad: 'from-amber-500 to-orange-500',  title: 'Exact Portal Sizing & Zero Errors', desc: 'Photos, signatures, and PDFs cropped to exact recruitment commission rules.' },
];

function AnimatedCounter({ target, suffix, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let frameId;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [started, target]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function AboutSection({ onExploreClick }) {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleExplore = () => {
    if (onExploreClick) onExploreClick();
    else scrollToSection('services', '/services');
  };

  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 lg:py-24 bg-gradient-to-b from-white via-indigo-50/20 to-white border-b border-slate-200/70 relative overflow-hidden"
    >
      {/* Deco */}
      <div className="orb w-80 h-80 bg-purple-400/10 top-0 right-0 animate-pulse-glow pointer-events-none" />
      <div className="orb w-60 h-60 bg-indigo-400/10 bottom-0 left-0 animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Animated Stats Row ── */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 mb-14">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`card-3d group relative overflow-hidden rounded-3xl bg-white p-4 sm:p-5 border border-slate-200/80 ${s.borderHover} shadow-sm flex flex-col items-center text-center animate-fade-slide-up`}
                style={{ animationDelay: `${i * 90}ms` }}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${s.grad} opacity-65 group-hover:opacity-100 transition-opacity`} />

                {/* Subtle animated background glow */}
                <div
                  className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-gradient-to-tr ${s.grad} opacity-[0.09] group-hover:opacity-[0.18] blur-xl transition-opacity pointer-events-none`}
                  aria-hidden="true"
                />

                {/* Animated Icon Capsule */}
                <div className="relative mb-3">
                  <span
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-tr ${s.grad} blur-md opacity-25 group-hover:opacity-45 transition-opacity`}
                    aria-hidden="true"
                  />
                  <div className={`relative w-12 h-12 rounded-2xl bg-gradient-to-tr ${s.grad} text-white flex items-center justify-center shadow-md group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300`}>
                    <Icon className={`w-5 h-5 ${s.iconAnim} group-hover:animate-icon-pop`} />
                  </div>
                </div>

                {/* Calculating Number */}
                <div className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${s.textGrad} bg-clip-text text-transparent leading-none mb-1.5`}>
                  <AnimatedCounter target={s.target} suffix={s.suffix} started={statsVisible} />
                </div>

                {/* Animated Text & Sub-badge */}
                <div className="text-xs sm:text-sm font-extrabold text-slate-800 group-hover:text-slate-950 transition-colors">
                  {s.label}
                </div>
                <span className={`mt-1.5 inline-block text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${s.softBg}`}>
                  {s.sub}
                </span>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── LEFT: Text ── */}
          <div className="lg:col-span-6 space-y-6">
            <div className="section-label bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-800 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
              <span>Practical help for the paperwork that keeps life moving.</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Making Everyday Digital Tasks{' '}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                Feel Less Complicated.
              </span>
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              cyberXero Is Your Neighbourhood Stop For Essential Document And Online Services. Whether It's A Printout, A Scan, An Application Or Help Navigating A Digital Form, Our Aim Is Simple: Make Each Step Clearer, Easier And More Convenient.
            </p>

            {/* Differentiator cards */}
            <div className="grid grid-cols-1 gap-3">
              {DIFFERENTIATORS.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all duration-300 group hover-lift">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${item.grad} text-white flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                      <p className="text-[11px] text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={handleExplore}
                className="btn-vibrant px-6 py-3 rounded-2xl text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 group"
              >
                <span>Browse All Services</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20CyberXero%2C%20I%20want%20to%20know%20more%20about%20your%20services%20and%20centre.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp px-5 py-3 rounded-2xl text-white font-bold text-xs flex items-center gap-2 group"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white group-hover:animate-bounce-soft" />
                <span>Know More</span>
              </a>
              <div className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-amber-500" />
                <span>Near City Head Post Office</span>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Citizens Grid ── */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-br from-slate-50 to-indigo-50/40 rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-6 border-b border-slate-200/70 pb-4">
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Who We Help Everyday</h3>
                  <p className="text-xs text-slate-500">Tailored assistance for every citizen & student</p>
                </div>
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-md">
                  <Users className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CITIZEN_GROUPS.map((group, i) => {
                  const Icon = group.icon;
                  return (
                    <div
                      key={i}
                      className="p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 flex items-start gap-3 group hover-lift animate-card-enter"
                      style={{ animationDelay: `${i * 80}ms` }}
                    >
                      <div className={`w-9 h-9 rounded-xl ${group.color} border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-slate-900 mb-0.5 group-hover:text-indigo-600 transition-colors">{group.label}</div>
                        <p className="text-[11px] text-slate-500 leading-snug">{group.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-5 pt-4 border-t border-slate-200/70 text-center">
                <span className="text-xs text-slate-500 inline-flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  All document uploads & forms completed live in front of you.
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
