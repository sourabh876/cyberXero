
import React, { useState } from 'react';
import {
  Laptop,
  Globe,
  FileCheck,
  ShieldCheck,
  Zap,
  CloudUpload,
  GraduationCap,
  CheckCircle2,
  Sparkles,
  Monitor,
  Printer,
  Smartphone,
} from 'lucide-react';

export default function Hero3DIllustration() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const box = e.currentTarget.getBoundingClientRect();

    const x = e.clientX - box.left;
    const y = e.clientY - box.top;

    const rotateX = ((y - box.height / 2) / (box.height / 2)) * -5;
    const rotateY = ((x - box.width / 2) / (box.width / 2)) * 5;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4 select-none"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes cyberFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-13px); }
        }

        @keyframes cyberFloatReverse {
          0%, 100% { transform: translateY(-5px); }
          50% { transform: translateY(10px); }
        }

        @keyframes cyberGlow {
          0%, 100% { opacity: .45; transform: scale(1); }
          50% { opacity: .85; transform: scale(1.12); }
        }

        @keyframes cyberRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes cyberPulse {
          0%, 100% { opacity: .5; }
          50% { opacity: 1; }
        }

        @keyframes logoGlow {
          0%, 100% {
            box-shadow: 0 5px 0 #082f70, 0 10px 20px #168bff55, 0 0 12px #38bdf855;
          }
          50% {
            box-shadow: 0 5px 0 #082f70, 0 10px 25px #168bff88, 0 0 22px #00d9ff99;
          }
        }

        .cyber-float {
          animation: cyberFloat 4s ease-in-out infinite;
        }

        .cyber-float-reverse {
          animation: cyberFloatReverse 5s ease-in-out infinite;
        }

        .cyber-glow {
          animation: cyberGlow 4s ease-in-out infinite;
        }

        .cyber-rotate {
          animation: cyberRotate 25s linear infinite;
        }

        .cyber-pulse {
          animation: cyberPulse 2s ease-in-out infinite;
        }

        .cyber-logo-glow {
          animation: logoGlow 3s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .cyber-float,
          .cyber-float-reverse,
          .cyber-glow,
          .cyber-rotate,
          .cyber-pulse,
          .cyber-logo-glow {
            animation: none !important;
          }
        }
      `}</style>

      {/* BACKGROUND GLOW */}

      <div className="absolute inset-5 rounded-full bg-indigo-500/10 blur-3xl cyber-glow" />

      <div className="absolute top-8 right-8 w-52 h-52 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="absolute bottom-8 left-5 w-56 h-56 rounded-full bg-purple-500/20 blur-3xl" />

      {/* ROTATING ORBIT */}

      <div className="absolute w-[85%] h-[85%] rounded-full border border-dashed border-indigo-300/50 cyber-rotate" />

      <div className="absolute w-[68%] h-[68%] rounded-full border border-cyan-300/40" />

      {/* MAIN 3D LAPTOP */}

      <div
        className="relative z-10 w-full transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="relative cyber-float">

          {/* LAPTOP SCREEN */}

          <div
            className="relative mx-auto w-[83%] rounded-t-2xl border-[5px] border-slate-800 bg-slate-900 p-2 shadow-[0_20px_60px_rgba(79,70,229,0.3)]"
            style={{ transform: 'translateZ(25px)' }}
          >

            {/* SCREEN CAMERA */}

            <div className="absolute top-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-500 rounded-full" />

            {/* DASHBOARD SCREEN */}

            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 min-h-[250px] sm:min-h-[275px] p-3">

              {/* DASHBOARD NAVBAR WITH CYBERXERO LOGO */}

              <div className="flex items-center justify-between border-b border-white/10 pb-3">

                <div className="flex items-center gap-2">

                  {/* ORIGINAL CX BRAND LOGO */}

                  <div className="relative w-9 h-9 flex-shrink-0 flex items-center justify-center">

                    <div className="absolute inset-0 rounded-xl bg-blue-500/40 blur-md" />

                    <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-slate-950 via-blue-800 to-cyan-500 border border-cyan-300/70 flex items-center justify-center cyber-logo-glow">

                      <span className="text-2xl font-black italic text-white leading-none drop-shadow-[0_0_10px_#38bdf8]">
                        C
                      </span>

                      <span className="absolute text-sm font-black italic text-cyan-300 right-0.5 bottom-0.5 drop-shadow-[0_0_10px_#00d9ff]">
                        X
                      </span>

                    </div>
                  </div>

                  {/* BRAND NAME */}

                  <div>
                    <p className="text-white text-[11px] font-extrabold tracking-tight">
                      cyber<span className="text-cyan-400">Xero</span>
                    </p>

                    <p className="text-[8px] text-slate-400">
                      Advanced Digital Centre
                    </p>
                  </div>

                </div>

                {/* ONLINE STATUS */}

                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 cyber-pulse" />
                  <span className="text-[9px] text-green-300">
                    Online
                  </span>
                </div>

              </div>

              {/* DASHBOARD CONTENT */}

              <div className="pt-4">

                <div className="mb-3">

                  <p className="text-[9px] text-cyan-300 font-semibold uppercase tracking-widest">
                    Welcome to CyberXero
                  </p>

                  <h3 className="text-white text-base sm:text-lg font-extrabold mt-1">
                    Digital Made
                    <span className="text-cyan-400"> Simple.</span>
                  </h3>

                  <p className="text-[9px] text-slate-400 mt-1">
                    Everything you need, in one place.
                  </p>

                </div>

                {/* SERVICE CARDS */}

                <div className="grid grid-cols-2 gap-2">

                  <div className="rounded-lg bg-blue-500/15 border border-blue-400/20 p-2">
                    <div className="w-6 h-6 rounded-md bg-blue-500/30 flex items-center justify-center text-blue-300 mb-2">
                      <FileCheck className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-white text-[9px] font-bold">
                      Online Forms
                    </p>
                    <p className="text-slate-400 text-[8px]">
                      Quick Application
                    </p>
                  </div>

                  <div className="rounded-lg bg-purple-500/15 border border-purple-400/20 p-2">
                    <div className="w-6 h-6 rounded-md bg-purple-500/30 flex items-center justify-center text-purple-300 mb-2">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-white text-[9px] font-bold">
                      Secure KYC
                    </p>
                    <p className="text-slate-400 text-[8px]">
                      Safe & Reliable
                    </p>
                  </div>

                  <div className="rounded-lg bg-cyan-500/15 border border-cyan-400/20 p-2">
                    <div className="w-6 h-6 rounded-md bg-cyan-500/30 flex items-center justify-center text-cyan-300 mb-2">
                      <Printer className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-white text-[9px] font-bold">
                      Xerox & Print
                    </p>
                    <p className="text-slate-400 text-[8px]">
                      Fast Delivery
                    </p>
                  </div>

                  <div className="rounded-lg bg-emerald-500/15 border border-emerald-400/20 p-2">
                    <div className="w-6 h-6 rounded-md bg-emerald-500/30 flex items-center justify-center text-emerald-300 mb-2">
                      <CloudUpload className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-white text-[9px] font-bold">
                      Digital Upload
                    </p>
                    <p className="text-slate-400 text-[8px]">
                      Easy Processing
                    </p>
                  </div>

                </div>

                {/* BOTTOM STATUS */}

                <div className="mt-3 rounded-lg bg-white/5 border border-white/10 px-2.5 py-2 flex items-center justify-between">

                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-400" />
                    <span className="text-[9px] text-slate-300">
                      Services Ready
                    </span>
                  </div>

                  <span className="text-[8px] text-cyan-300 font-bold">
                    24/7 Digital Access
                  </span>

                </div>

              </div>
            </div>
          </div>

          {/* LAPTOP BASE */}

          <div className="relative mx-auto w-[94%] h-4 rounded-b-2xl bg-gradient-to-b from-slate-300 via-slate-400 to-slate-500 shadow-[0_15px_25px_rgba(15,23,42,0.3)]">

            <div className="absolute top-0 left-[38%] w-[24%] h-1 rounded-b-lg bg-slate-600/70" />

            <div className="absolute bottom-[-5px] left-[4%] right-[4%] h-1.5 bg-slate-700/70 rounded-full blur-[2px]" />

          </div>

        </div>
      </div>

      {/* FLOATING SERVICE ICONS */}

      <div className="absolute top-[9%] left-[5%] z-20 cyber-float-reverse">
        <div className="w-14 h-14 rounded-2xl bg-white border border-blue-100 shadow-xl flex items-center justify-center text-blue-600">
          <Globe className="w-7 h-7" />
        </div>
      </div>

      <div className="absolute top-[12%] right-[3%] z-20 cyber-float">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 shadow-xl flex items-center justify-center text-white">
          <GraduationCap className="w-6 h-6" />
        </div>
      </div>

      <div className="absolute bottom-[19%] left-[1%] z-20 cyber-float">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 shadow-xl flex items-center justify-center text-white">
          <ShieldCheck className="w-6 h-6" />
        </div>
      </div>

      <div className="absolute bottom-[17%] right-[1%] z-20 cyber-float-reverse">
        <div className="w-14 h-14 rounded-2xl bg-white border border-cyan-100 shadow-xl flex items-center justify-center text-cyan-600">
          <Smartphone className="w-7 h-7" />
        </div>
      </div>

      {/* FLOATING INFORMATION CARD 1 */}

      <div className="absolute top-[34%] -right-1 sm:right-[-4%] z-30 cyber-float">
        <div className="bg-white/95 backdrop-blur-xl border border-white rounded-xl shadow-xl px-3 py-2 flex items-center gap-2">

          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
            <Monitor className="w-4 h-4" />
          </div>

          <div>
            <p className="text-[9px] text-slate-400 font-bold uppercase">
              Digital Hub
            </p>
            <p className="text-[11px] text-slate-900 font-extrabold">
              All Services
            </p>
          </div>

        </div>
      </div>

      {/* FLOATING INFORMATION CARD 2 */}

      <div className="absolute bottom-[8%] left-[7%] z-30 cyber-float-reverse">
        <div className="bg-white/95 backdrop-blur-xl border border-white rounded-xl shadow-xl px-3 py-2 flex items-center gap-2">

          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center text-white">
            <CheckCircle2 className="w-4 h-4" />
          </div>

          <div>
            <p className="text-[9px] text-emerald-600 font-bold uppercase">
              Verified
            </p>
            <p className="text-[11px] text-slate-900 font-extrabold">
              Secure Services
            </p>
          </div>

        </div>
      </div>

      {/* DECORATIVE ANIMATIONS */}

      <div className="absolute top-[25%] left-[22%] text-cyan-500 cyber-pulse">
        <Sparkles className="w-5 h-5" />
      </div>

      <div className="absolute top-[48%] right-[2%] text-indigo-500 cyber-pulse">
        <Sparkles className="w-4 h-4" />
      </div>

      <div className="absolute bottom-[25%] right-[20%] text-purple-500 cyber-pulse">
        <Zap className="w-5 h-5" />
      </div>

      <div className="absolute top-[5%] left-[48%] w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_15px_#06b6d4]" />

      <div className="absolute bottom-[5%] right-[40%] w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]" />

      {/* BOTTOM GLOW */}

      <div className="absolute bottom-[2%] left-[20%] right-[20%] h-8 bg-indigo-500/20 blur-2xl rounded-full" />

    </div>
  );
}
