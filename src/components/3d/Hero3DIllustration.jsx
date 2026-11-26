import React, { useRef, useCallback, useEffect } from 'react';
import { 
  Printer, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpRight, 
  Cpu, 
  Stamp, 
  DownloadCloud, 
  Layers
} from 'lucide-react';

export default function Hero3DIllustration() {
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
    const rotateX = (((e.clientY - box.top) - box.height / 2) / (box.height / 2)) * -6;
    const rotateY = (((e.clientX - box.left) - box.width / 2) / (box.width / 2)) * 6;

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
      className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4 perspective-1000 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient vibrant glow orbs */}
      <div className="absolute -top-6 -left-6 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Main 3D Stage Card */}
      <div 
        ref={stageRef}
        className="relative w-full h-full rounded-3xl bg-gradient-to-br from-white/95 via-indigo-50/40 to-purple-50/30 p-6 border border-white/90 shadow-2xl backdrop-blur-md flex flex-col justify-between transition-transform duration-300 ease-out transform-style-3d will-change-transform"
        style={{
          transform: 'rotateX(0deg) rotateY(0deg)',
          boxShadow: '0 25px 50px -12px rgba(79, 70, 229, 0.18), 0 0 0 1px rgba(255, 255, 255, 0.8)'
        }}
      >
        {/* Top Bar */}
        <div className="flex items-center justify-between border-b border-indigo-100/70 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-brand-blue-600 via-indigo-600 to-brand-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/25">
              <Printer className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                Counter Desk Live
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Dual High-Speed Laser Hub</div>
            </div>
          </div>
          
          <div className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Active
          </div>
        </div>

        {/* Central 3D Layered Document Graphic */}
        <div className="relative flex-1 flex items-center justify-center my-4">
          
          {/* Back document sheet */}
          <div 
            className="absolute w-56 h-72 rounded-2xl bg-white border border-slate-200/80 shadow-md p-4 transition-all duration-300"
            style={{
              transform: 'translateZ(-30px) rotate(-8deg) translateX(-15px)',
            }}
          >
            <div className="h-3 w-20 bg-indigo-100 rounded mb-3" />
            <div className="h-2 w-full bg-slate-100 rounded mb-2" />
            <div className="h-2 w-4/5 bg-slate-100 rounded mb-2" />
            <div className="h-2 w-3/4 bg-slate-100 rounded" />
          </div>

          {/* Middle document sheet */}
          <div 
            className="absolute w-56 h-72 rounded-2xl bg-white border border-slate-200/80 shadow-lg p-4 transition-all duration-300"
            style={{
              transform: 'translateZ(-15px) rotate(4deg) translateX(12px)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-3 w-28 bg-amber-200 rounded" />
              <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-[10px] font-bold">
                ✓
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-full bg-slate-100 rounded" />
              <div className="h-2 w-5/6 bg-slate-100 rounded" />
              <div className="h-2 w-2/3 bg-slate-100 rounded" />
            </div>
          </div>

          {/* Front Active Form Document */}
          <div 
            className="relative w-64 h-72 rounded-2xl bg-white border border-indigo-100 shadow-xl p-5 flex flex-col justify-between"
            style={{
              transform: 'translateZ(20px)',
            }}
          >
            {/* Document Header */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 border border-indigo-200 flex items-center justify-center text-brand-blue-600">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Govt Job Form</span>
                    <span className="text-[10px] text-slate-400 font-mono">APP-2026/894</span>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                  Verified
                </span>
              </div>

              {/* Document Fields Mock */}
              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="font-semibold text-slate-800">Direct Candidate</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Photo & Sign:</span>
                  <span className="font-semibold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Resized 35KB
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Commission:</span>
                  <span className="font-mono text-[10px] text-brand-blue-700 bg-indigo-50 px-2 py-0.5 rounded-md font-bold">
                    Official Portal
                  </span>
                </div>
              </div>
            </div>

            {/* Stamp & Bottom Status */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800">
                <Stamp className="w-4 h-4 text-brand-saffron-500" />
                <span>Ready to Submit</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Floating 3D Badge 1: Xerox Rate */}
          <div 
            className="absolute -top-4 -right-4 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-xl flex items-center gap-2.5 animate-float"
            style={{ transform: 'translateZ(45px)' }}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-amber-500/30">
              <Printer className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Speed Laser</div>
              <div className="text-xs font-extrabold text-slate-900">₹2/Page Xerox</div>
            </div>
          </div>

          {/* Floating 3D Badge 2: OTP Privacy Safe */}
          <div 
            className="absolute -bottom-3 -left-4 px-3.5 py-2 rounded-2xl bg-white border border-slate-200/90 shadow-xl flex items-center gap-2.5 animate-float-delayed"
            style={{ transform: 'translateZ(50px)' }}
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-emerald-700 uppercase">Self-Entered</div>
              <div className="text-xs font-extrabold text-slate-900">100% OTP Safe</div>
            </div>
          </div>

          {/* Floating 3D Badge 3: Scan & PDF */}
          <div 
            className="absolute -bottom-6 right-4 px-3.5 py-1.5 rounded-xl bg-slate-900 text-white text-[11px] font-semibold flex items-center gap-1.5 shadow-lg"
            style={{ transform: 'translateZ(35px)' }}
          >
            <DownloadCloud className="w-3.5 h-3.5 text-amber-400" />
            <span>PDF Under 200 KB</span>
          </div>

        </div>

        {/* Bottom Feature Ticker */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-indigo-100/70 text-center">
          <div className="bg-white/80 rounded-xl p-2 border border-slate-100 shadow-2xs">
            <span className="block text-[10px] font-medium text-slate-500">Turnaround</span>
            <span className="text-xs font-bold text-brand-blue-700">1–5 Mins</span>
          </div>
          <div className="bg-white/80 rounded-xl p-2 border border-slate-100 shadow-2xs">
            <span className="block text-[10px] font-medium text-slate-500">Shop Rate</span>
            <span className="text-xs font-bold text-amber-700">Transparent</span>
          </div>
          <div className="bg-white/80 rounded-xl p-2 border border-slate-100 shadow-2xs">
            <span className="block text-[10px] font-medium text-slate-500">Govt Fees</span>
            <span className="text-xs font-bold text-emerald-700">Official Bill</span>
          </div>
        </div>

      </div>
    </div>
  );
}
