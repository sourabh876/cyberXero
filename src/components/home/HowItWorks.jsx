import React from 'react';
import { 
  Search, 
  Send, 
  Cpu, 
  Receipt, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Smartphone, 
  Printer 
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Select Service & Check Documents',
      desc: 'Browse our service catalogue to see the exact document checklist (marksheets, ID proofs, photo dimensions) needed for your job.',
      icon: Search,
      badge: 'Step 1'
    },
    {
      num: '02',
      title: 'Send via WhatsApp or Visit Counter',
      desc: 'Walk into our centre or forward your PDFs and images to our official WhatsApp number to prepare your prints before you arrive.',
      icon: Send,
      badge: 'Step 2'
    },
    {
      num: '03',
      title: 'Live Assisted Verification',
      desc: 'Our trained operator fills your application, resizes photos/signatures to portal rules, and lets you self-enter your confidential OTPs.',
      icon: Cpu,
      badge: 'Step 3'
    },
    {
      num: '04',
      title: 'Instant Delivery & Official Receipt',
      desc: 'Collect laser printouts, laminated certificates, or final submission PDF with clear separation of shop charge and official fees.',
      icon: Receipt,
      badge: 'Step 4'
    }
  ];

  return (
    <section id="how-it-works" className="scroll-mt-24 py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-emerald-50 border border-brand-emerald-200 text-brand-emerald-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Seamless 4-Step Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            How Assisted Service Works
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            No guesswork, no portal errors, and zero hidden charges. Here is how your walk-in experience is organized from start to finish.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="relative bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Step Number Top Watermark */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 group-hover:bg-brand-blue-700 text-brand-blue-700 group-hover:text-white transition-all flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-extrabold font-mono text-slate-200 group-hover:text-brand-saffron-300 transition-colors">
                    {step.num}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-brand-saffron-50 text-brand-saffron-700 border border-brand-saffron-200 mb-2 inline-block">
                    {step.badge}
                  </span>
                  
                  <h3 className="text-base font-bold text-brand-blue-950 mb-2 group-hover:text-brand-blue-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-[11px] font-semibold text-brand-emerald-600 gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Workflow</span>
                </div>

              </div>
            );
          })}

        </div>

        {/* WhatsApp Fast Lane Callout */}
        <div className="mt-12 bg-gradient-to-r from-brand-blue-900 to-brand-blue-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-blue-800">
          <div className="space-y-2 text-center md:text-left">
            <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-emerald-500/20 text-brand-emerald-400 border border-brand-emerald-500/30">
              ⚡ Express WhatsApp Queue
            </span>
            <h4 className="text-xl font-extrabold">In a hurry? Forward your files on WhatsApp before visiting!</h4>
            <p className="text-xs text-slate-300 max-w-xl">
              Send your PDF notes, admit cards, or resume details. We will check the page count and queue the prints so you can collect them in 2 minutes.
            </p>
          </div>

          <a
            href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hi%2C%20sending%20my%20documents%20for%20advance%20printing.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-brand-emerald-500 hover:bg-brand-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-glow-emerald transition shrink-0 flex items-center gap-2"
          >
            <Smartphone className="w-4 h-4" />
            <span>Send Files to +91 98765 43210</span>
          </a>
        </div>

      </div>
    </section>
  );
}
