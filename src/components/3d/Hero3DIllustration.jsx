import React, { useRef, useCallback, useEffect, memo } from 'react';
import {
  Printer,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  FileCheck,
  ScanLine,
  CreditCard,
  FileText,
  Zap,
} from 'lucide-react';

const SCREEN_SERVICES = [
  {
    title: 'Print & Xerox',
    sub: 'From ₹2 / page',
    icon: Printer,
    boxClass: 'bg-indigo-500/15 border-indigo-400/25',
    iconClass: 'bg-indigo-500/30 text-indigo-300',
  },
  {
    title: 'Online Forms',
    sub: 'Step-by-Step Help',
    icon: FileCheck,
    boxClass: 'bg-purple-500/15 border-purple-400/25',
    iconClass: 'bg-purple-500/30 text-purple-300',
  },
  {
    title: 'Scan & PDFs',
    sub: 'Resize & Compress',
    icon: ScanLine,
    boxClass: 'bg-cyan-500/15 border-cyan-400/25',
    iconClass: 'bg-cyan-500/30 text-cyan-300',
  },
  {
    title: 'KYC & Docs',
    sub: 'Enter OTP Yourself',
    icon: ShieldCheck,
    boxClass: 'bg-emerald-500/15 border-emerald-400/25',
    iconClass: 'bg-emerald-500/30 text-emerald-300',
  },
];

function Hero3DIllustration() {
  const stageRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const handleMouseMove = useCallback((e) => {
    const stage = stageRef.current;
    if (!stage) return;

    const box = e.currentTarget.getBoundingClientRect();
    const rotateX = (((e.clientY - box.top) - box.height / 2) / (box.height / 2)) * -7;
    const rotateY = (((e.clientX - box.left) - box.width / 2) / (box.width / 2)) * 7;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      stage.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (stageRef.current) {
      stageRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  }, []);

  return (
    <div
      className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4 select-none perspective-1200"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* GPU-promoted ambient glows */}
      <div className="orb w-56 h-56 bg-indigo-500/15 top-6 left-6 animate-pulse-glow" aria-hidden="true" />
      <div className="orb w-48 h-48 bg-cyan-400/15 top-8 right-8" aria-hidden="true" />
      <div className="orb w-52 h-52 bg-purple-500/15 bottom-8 left-5" aria-hidden="true" />

      {/* Main 3D Stage Card */}
      <div
        ref={stageRef}
        className="relative w-full h-full rounded-3xl bg-gradient-to-br from-white/95 via-indigo-50/40 to-purple-50/30 p-5 sm:p-6 border border-white/90 shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out transform-style-3d will-change-transform"
        style={{
          transform: 'rotateX(0deg) rotateY(0deg)',
          boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.8)',
        }}
      >
        {/* Top Counter Bar */}
        <div className="flex items-center justify-between border-b border-indigo-100/70 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-brand-blue-600 via-indigo-600 to-brand-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
              <Printer className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                cyberXero Counter
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Digital &amp; Document Help</div>
            </div>
          </div>

          <div className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Open
          </div>
        </div>

        {/* Central 3D CyberXero Workstation */}
        <div
          className="relative flex-1 flex flex-col items-center justify-center my-2.5 transform-style-3d"
          style={{ transform: 'translateZ(24px)' }}
        >
          {/* Laptop Lid */}
          <div className="relative w-full max-w-[300px] sm:max-w-[320px] rounded-2xl bg-slate-800 p-2 shadow-2xl border border-slate-700">
            <div className="mx-auto mb-1.5 w-1.5 h-1.5 bg-slate-500 rounded-full" />

            {/* Dashboard Screen */}
            <div className="overflow-hidden rounded-xl bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 p-3.5">
              {/* Mini Brand Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-2">
                <div className="flex items-center gap-2">
                  <div className="relative w-7 h-7 rounded-lg bg-gradient-to-br from-slate-950 via-blue-800 to-cyan-500 border border-cyan-300/70 flex items-center justify-center cyber-logo-glow">
                    <span className="text-lg font-black italic text-white leading-none">C</span>
                    <span className="absolute text-[10px] font-black italic text-cyan-300 right-0.5 bottom-0.5">X</span>
                  </div>
                  <div>
                    <p className="text-white text-[11px] font-extrabold tracking-tight leading-none">
                      cyber<span className="text-cyan-400">Xero</span>
                    </p>
                    <p className="text-[8px] text-slate-400 mt-0.5">One Helpful Stop</p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[9px] text-green-300 font-semibold">Counter Ready</span>
                </div>
              </div>

              {/* Screen Headline */}
              <div className="pt-2.5">
                <h3 className="text-white text-sm sm:text-base font-extrabold leading-tight">
                  Less Paperwork. <span className="text-cyan-400">More Progress.</span>
                </h3>
                <p className="text-[9px] text-slate-400 mt-0.5 mb-2.5">
                  Practical help for everyday digital &amp; document tasks.
                </p>

                {/* 4 Website-Aligned Service Tiles */}
                <div className="grid grid-cols-2 gap-2">
                  {SCREEN_SERVICES.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className={`rounded-lg border p-2 ${item.boxClass}`}>
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center mb-1 ${item.iconClass}`}>
                          <Icon className="w-3 h-3" />
                        </div>
                        <p className="text-white text-[9px] font-bold leading-tight">{item.title}</p>
                        <p className="text-slate-400 text-[8px] leading-tight mt-0.5">{item.sub}</p>
                      </div>
                    );
                  })}
                </div>

                {/* Screen Footer Bar */}
                <div className="mt-2.5 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1.5 flex items-center justify-between">
                  <span className="text-[9px] text-slate-300 font-medium">Clear, Upfront Charges</span>
                  <span className="text-[8px] text-cyan-300 font-bold">8:30 AM – 8:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Base */}
          <div className="relative mx-auto w-[92%] max-w-[330px] h-3 rounded-b-2xl bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 shadow-[0_12px_20px_rgba(15,23,42,0.25)]">
            <div className="absolute top-0 left-[38%] w-[24%] h-1 rounded-b-lg bg-slate-600/70" />
          </div>
        </div>

        {/* Bottom 3-Chip Summary */}
        <div className="grid grid-cols-3 gap-2 pt-2.5 border-t border-indigo-100/70 text-center">
          <div className="bg-white/85 rounded-xl p-1.5 border border-slate-100">
            <span className="block text-[9px] font-medium text-slate-500">Guidance</span>
            <span className="text-[11px] font-bold text-indigo-700">Step-by-Step</span>
          </div>
          <div className="bg-white/85 rounded-xl p-1.5 border border-slate-100">
            <span className="block text-[9px] font-medium text-slate-500">Charges</span>
            <span className="text-[11px] font-bold text-amber-700">Upfront Rates</span>
          </div>
          <div className="bg-white/85 rounded-xl p-1.5 border border-slate-100">
            <span className="block text-[9px] font-medium text-slate-500">Handling</span>
            <span className="text-[11px] font-bold text-emerald-700">With Care</span>
          </div>
        </div>

        {/* Floating 3D Parallax Badges (move in 3D with stage) */}
        <div
          className="hidden sm:flex absolute -top-3 -right-3 z-30 cyber-float"
          style={{ transform: 'translateZ(46px)' }}
        >
          <div className="bg-white border border-amber-100 rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-white shadow-sm">
              <Printer className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[9px] text-slate-400 font-bold uppercase">Prints &amp; Xerox</p>
              <p className="text-[11px] text-slate-900 font-extrabold">From ₹2 / Page</p>
            </div>
          </div>
        </div>

        <div
          className="hidden sm:flex absolute bottom-12 -left-4 z-30 cyber-float-reverse"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className="bg-white border border-emerald-100 rounded-2xl shadow-xl px-3 py-2 flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-sm">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-[9px] text-emerald-600 font-bold uppercase">Customer-Controlled</p>
              <p className="text-[11px] text-slate-900 font-extrabold">Enter OTPs Yourself</p>
            </div>
          </div>
        </div>
      </div>

      {/* Outer Floating Service Icons */}
      <div className="hidden sm:flex absolute top-[12%] left-[2%] z-20 cyber-float-reverse" aria-hidden="true">
        <div className="w-11 h-11 rounded-2xl bg-white border border-blue-100 shadow-lg flex items-center justify-center text-indigo-600">
          <FileText className="w-5 h-5" />
        </div>
      </div>

      <div className="hidden sm:flex absolute bottom-[22%] right-[1%] z-20 cyber-float" aria-hidden="true">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-lg flex items-center justify-center text-white">
          <CreditCard className="w-5 h-5" />
        </div>
      </div>

      {/* Decorative Sparkles */}
      <div className="absolute top-[22%] left-[18%] text-cyan-500 animate-pulse pointer-events-none" aria-hidden="true">
        <Sparkles className="w-4 h-4" />
      </div>
      <div className="absolute bottom-[28%] right-[16%] text-purple-500 animate-pulse pointer-events-none" aria-hidden="true">
        <Zap className="w-4 h-4" />
      </div>
    </div>
  );
}

export default memo(Hero3DIllustration);
