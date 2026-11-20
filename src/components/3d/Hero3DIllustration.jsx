import React, { useState } from 'react';
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
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    // Mild tilt within +-8 deg
    const rotateX = ((y - centerY) / centerY) * -7;
    const rotateY = ((x - centerX) / centerX) * 7;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div 
      className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4 perspective-1000 select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Ambient background glow orbs */}
      <div className="absolute -top-6 -left-6 w-60 h-60 bg-brand-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-brand-saffron-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-brand-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

      {/* Main 3D Stage Card */}
      <div 
        className="relative w-full h-full rounded-3xl bg-gradient-to-br from-white/95 via-slate-50/90 to-brand-blue-50/70 p-6 border border-white/80 shadow-2xl backdrop-blur-md flex flex-col justify-between transition-transform duration-300 ease-out transform-style-3d"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          boxShadow: '0 25px 50px -12px rgba(15, 39, 68, 0.22), 0 0 0 1px rgba(255, 255, 255, 0.7)'
        }}
      >
        {/* Top Bar of Card */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-brand-blue-700 to-brand-blue-500 flex items-center justify-center text-white shadow-md shadow-brand-blue-500/30">
              <Printer className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-blue-900 flex items-center gap-1.5">
                Counter Desk Live
                <span className="inline-block w-2 h-2 rounded-full bg-brand-emerald-500 animate-ping" />
              </div>
              <div className="text-[11px] text-slate-500 font-medium">Dual High-Speed Laser Hub</div>
            </div>
          </div>
          
          <div className="px-3 py-1 rounded-full bg-brand-emerald-50 border border-brand-emerald-200 text-brand-emerald-700 text-xs font-bold flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-emerald-600" />
            Ready
          </div>
        </div>

        {/* Central 3D Layered Document & Printer Graphic */}
        <div className="relative flex-1 flex items-center justify-center my-4">
          
          {/* Back document sheet */}
          <div 
            className="absolute w-56 h-72 rounded-2xl bg-white border border-slate-200/90 shadow-md p-4 transition-all duration-300"
            style={{
              transform: 'translateZ(-30px) rotate(-8deg) translateX(-15px)',
            }}
          >
            <div className="h-3 w-20 bg-slate-200 rounded mb-3" />
            <div className="h-2 w-full bg-slate-100 rounded mb-2" />
            <div className="h-2 w-4/5 bg-slate-100 rounded mb-2" />
            <div className="h-2 w-3/4 bg-slate-100 rounded" />
          </div>

          {/* Middle document sheet */}
          <div 
            className="absolute w-56 h-72 rounded-2xl bg-white border border-slate-200/90 shadow-lg p-4 transition-all duration-300"
            style={{
              transform: 'translateZ(-15px) rotate(4deg) translateX(12px)',
            }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="h-3 w-28 bg-brand-saffron-200 rounded" />
              <div className="w-6 h-6 rounded-full bg-brand-saffron-100 flex items-center justify-center text-brand-saffron-600 text-[10px] font-bold">
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
            className="relative w-64 h-72 rounded-2xl bg-gradient-to-b from-white to-slate-50 border border-brand-blue-100 shadow-xl p-5 flex flex-col justify-between"
            style={{
              transform: 'translateZ(20px)',
            }}
          >
            {/* Document Header */}
            <div>
              <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-brand-blue-50 border border-brand-blue-200 flex items-center justify-center text-brand-blue-700">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-800 block">Govt Job Form</span>
                    <span className="text-[10px] text-slate-400 font-mono">APP-2026/894</span>
                  </div>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-brand-saffron-50 text-brand-saffron-700 border border-brand-saffron-200">
                  Verified
                </span>
              </div>

              {/* Document Fields Mock */}
              <div className="space-y-2 text-[11px]">
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Applicant:</span>
                  <span className="font-medium text-slate-800">Direct Candidate</span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Photo & Sign:</span>
                  <span className="font-semibold text-brand-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Resized 35KB
                  </span>
                </div>
                <div className="flex justify-between items-center py-1 border-b border-slate-50">
                  <span className="text-slate-500">Official Portal:</span>
                  <span className="font-mono text-[10px] text-brand-blue-600 bg-brand-blue-50 px-1.5 py-0.5 rounded">
                    ssc.gov.in
                  </span>
                </div>
              </div>
            </div>

            {/* Official Stamp & Bottom Status */}
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-brand-blue-900">
                <Stamp className="w-4 h-4 text-brand-saffron-500" />
                <span>Ready to Submit</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-brand-emerald-500 text-white flex items-center justify-center shadow-md">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Floating 3D Badge 1: Xerox & Laser Print */}
          <div 
            className="absolute -top-4 -right-4 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xl flex items-center gap-2.5 animate-float"
            style={{ transform: 'translateZ(45px)' }}
          >
            <div className="w-8 h-8 rounded-lg bg-brand-saffron-500 text-white flex items-center justify-center shadow-md shadow-brand-saffron-500/30">
              <Printer className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">Speed Laser</div>
              <div className="text-xs font-bold text-slate-800">₹2/Page Xerox</div>
            </div>
          </div>

          {/* Floating 3D Badge 2: OTP Privacy Safe */}
          <div 
            className="absolute -bottom-3 -left-4 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xl flex items-center gap-2.5 animate-float-delayed"
            style={{ transform: 'translateZ(50px)' }}
          >
            <div className="w-8 h-8 rounded-lg bg-brand-emerald-600 text-white flex items-center justify-center shadow-md shadow-brand-emerald-600/30">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-bold text-brand-emerald-700 uppercase">Self-Entered</div>
              <div className="text-xs font-bold text-slate-800">100% OTP Safe</div>
            </div>
          </div>

          {/* Floating 3D Badge 3: Scan & PDF Resize */}
          <div 
            className="absolute -bottom-6 right-4 px-3 py-1.5 rounded-lg bg-brand-blue-900 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-lg"
            style={{ transform: 'translateZ(35px)' }}
          >
            <DownloadCloud className="w-3.5 h-3.5 text-brand-saffron-400" />
            <span>PDF Under 200 KB</span>
          </div>

        </div>

        {/* Bottom Feature Ticker */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-100 text-center">
          <div className="bg-slate-50/80 rounded-xl p-2 border border-slate-100">
            <span className="block text-[10px] font-medium text-slate-500">Turnaround</span>
            <span className="text-xs font-bold text-brand-blue-900">1–5 Mins</span>
          </div>
          <div className="bg-slate-50/80 rounded-xl p-2 border border-slate-100">
            <span className="block text-[10px] font-medium text-slate-500">Shop Rate</span>
            <span className="text-xs font-bold text-brand-saffron-600">Transparent</span>
          </div>
          <div className="bg-slate-50/80 rounded-xl p-2 border border-slate-100">
            <span className="block text-[10px] font-medium text-slate-500">Govt Fees</span>
            <span className="text-xs font-bold text-brand-emerald-600">Official Bill</span>
          </div>
        </div>

      </div>
    </div>
  );
}
