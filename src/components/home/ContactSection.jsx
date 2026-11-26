import React, { useState } from 'react';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2,
  Navigation, Copy, UserCheck, Sparkles, Zap, Star
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';
import WhatsAppIcon from '../common/WhatsAppIcon';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', phone: '', service: 'Govt Job / Exam Form', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
    setTimeout(() => {
      const encoded = encodeURIComponent(
        `Hi CyberXero, this is ${formData.name} (${formData.phone}). I need help with: ${formData.service}. ${formData.message ? 'Additional details: ' + formData.message : 'Please guide me on the required documents.'}`
      );
      window.open(`https://wa.me/${shopInfo.whatsappNumber}?text=${encoded}`, '_blank');
    }, 1200);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(`${shopInfo.address}, ${shopInfo.city}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const quickActions = [
    { label: 'Xerox & Printing',           msg: 'Hi%20CyberXero%2C%20I%20need%20Xerox%20or%20printing%20service.%20Please%20tell%20me%20the%20rates.',           icon: '🖨️' },
    { label: 'Govt Form / Exam Apply',      msg: 'Hi%20CyberXero%2C%20I%20need%20help%20filling%20a%20government%20form%20or%20exam%20application.',              icon: '📋' },
    { label: 'PAN / KYC / Certificate',     msg: 'Hi%20CyberXero%2C%20I%20need%20assistance%20with%20PAN%20Card%2C%20KYC%2C%20or%20certificate%20services.',       icon: '🪪' },
    { label: 'Photo & Lamination',          msg: 'Hi%20CyberXero%2C%20I%20need%20passport%20size%20photos%20or%20lamination%20done.%20Are%20you%20available%3F',   icon: '📸' },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-16 lg:py-24 bg-gradient-to-b from-white to-indigo-50/30 border-b border-slate-200/70 relative overflow-hidden render-content-auto"
    >
      {/* Deco */}
      <div className="orb w-80 h-80 bg-indigo-400/8 -top-20 -right-20 pointer-events-none animate-pulse-glow" />
      <div className="orb w-60 h-60 bg-emerald-400/8 bottom-0 left-0 pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="section-label bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-indigo-700 mb-3 mx-auto w-fit">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
            <span>Visit or Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Your Local Counter for{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Digital & Document Help.
            </span>
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            From Everyday Print Jobs To Online Application Assistance, We're Here To Make Your Next Task Easier To Navigate. Visit The Centre Or Get In Touch Before You Come.
          </p>
        </div>

        {/* ── Quick WhatsApp Actions ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {quickActions.map((qa, i) => (
            <a
              key={i}
              href={`https://wa.me/${shopInfo.whatsappNumber}?text=${qa.msg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-3.5 rounded-2xl bg-white border border-emerald-200 hover:border-emerald-400 hover:shadow-lg text-center transition-all duration-300 group hover-lift"
            >
              <span className="text-2xl group-hover:animate-bounce-soft">{qa.icon}</span>
              <span className="text-[11px] font-bold text-slate-700 group-hover:text-emerald-700 transition-colors leading-tight">{qa.label}</span>
              <div className="flex items-center gap-1 text-[10px] text-emerald-600 font-semibold">
                <WhatsAppIcon className="w-3 h-3 fill-current" />
                <span>Quick Ask</span>
              </div>
            </a>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ── LEFT: Contact Info ── */}
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm space-y-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">{shopInfo.name}</h3>
                  <p className="text-xs text-amber-600 font-bold mt-0.5">{shopInfo.tagline}</p>
                </div>
                <button
                  onClick={copyAddress}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-indigo-50 hover:border-indigo-200 text-slate-600 hover:text-indigo-600 text-xs flex items-center gap-1.5 transition-all"
                  title="Copy address"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-semibold">{copied ? '✓ Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Person in charge */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <UserCheck className="w-4.5 h-4.5 w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-700 block">Person In-Charge:</span>
                  <span className="text-xs font-extrabold text-slate-900">{shopInfo.contactPerson}</span>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-3.5 text-xs text-slate-600">
                {[
                  { icon: MapPin, iconClass: 'text-indigo-600 bg-indigo-50 border-indigo-100', content: (
                    <div>
                      <strong className="text-slate-800 block mb-0.5">Find Us:</strong>
                      <span>{shopInfo.address}</span>
                      <span className="block font-medium text-slate-700">{shopInfo.city}</span>
                      <span className="block text-[11px] text-indigo-600 font-medium mt-0.5">Landmark: {shopInfo.landmark}</span>
                    </div>
                  )},
                  { icon: null, wa: true, content: (
                    <div>
                      <strong className="text-slate-800 block mb-0.5">Message on WhatsApp:</strong>
                      <a href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20cyberXero%2C%20I%20visited%20your%20website%20and%20want%20to%20send%20documents%20for%20printing%20and%20assistance.`}
                        target="_blank" rel="noopener noreferrer"
                        className="text-emerald-700 font-bold hover:underline">
                        {shopInfo.whatsappDisplay}
                      </a>
                    </div>
                  )},
                  { icon: Phone, iconClass: 'text-blue-600 bg-blue-50 border-blue-100', content: (
                    <div>
                      <strong className="text-slate-800 block mb-0.5">Call the Centre:</strong>
                      <a href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`} className="text-indigo-600 font-bold hover:underline">{shopInfo.phoneDisplay}</a>
                    </div>
                  )},
                  { icon: Clock, iconClass: 'text-amber-600 bg-amber-50 border-amber-100', content: (
                    <div>
                      <strong className="text-slate-800 block mb-0.5">Opening Hours:</strong>
                      <span>{shopInfo.timings}</span>
                    </div>
                  )},
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    {row.wa ? (
                      <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100 group-hover:scale-110 transition-transform">
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                      </div>
                    ) : (
                      <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${row.iconClass} group-hover:scale-110 transition-transform`}>
                        <row.icon className="w-4 h-4" />
                      </div>
                    )}
                    {row.content}
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-100">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 hover:from-indigo-100 hover:to-purple-100 text-indigo-700 font-bold text-xs flex items-center justify-center gap-2 border border-indigo-200 transition-all hover-lift"
                >
                  <Navigation className="w-4 h-4 text-indigo-600" />
                  <span>Open Location in Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Enquiry Form ── */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Send an Enquiry</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Tell us what you need help with. Share only the basic details required for us to respond — never include passwords, OTPs or PINs.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 animate-fade-slide-up">
                  <div className="w-16 h-16 bg-gradient-to-tr from-emerald-500 to-teal-500 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg animate-bounce-soft">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950">Thanks for reaching out, {formData.name}!</h4>
                  <p className="text-xs text-emerald-800 max-w-md mx-auto mt-2 leading-relaxed">
                    Your enquiry has been received. Redirecting to WhatsApp so our counter can respond...
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-5 text-xs text-emerald-700 underline font-semibold">
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Your Full Name', key: 'name', type: 'text', required: true, ph: 'e.g. Rahul Sharma' },
                      { label: 'WhatsApp / Mobile No.', key: 'phone', type: 'tel', required: true, ph: 'e.g. +91 98000 00000' },
                    ].map(f => (
                      <div key={f.key}>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          {f.label} {f.required && <span className="text-red-500">*</span>}
                        </label>
                        <input
                          type={f.type}
                          required={f.required}
                          value={formData[f.key]}
                          onChange={e => setFormData({ ...formData, [f.key]: e.target.value })}
                          placeholder={f.ph}
                          className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 text-xs text-slate-800 transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Select Service Required</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 text-xs text-slate-800 transition-all"
                    >
                      <option>Govt Job / Exam Form (SSC, UPSC, Railway)</option>
                      <option>Photocopy &amp; Laser Printing (B&amp;W / Color)</option>
                      <option>PAN Card Application / Correction</option>
                      <option>Income / Caste / Domicile Certificate</option>
                      <option>Document Scanning &amp; PDF Compress</option>
                      <option>Passport Photo &amp; Lamination</option>
                      <option>Resume &amp; Biodata Creation</option>
                      <option>Other Assisted Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Details or Questions (Optional)</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. Need to resize my photo under 50KB for SSC CGL portal"
                      className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200/80 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 text-xs text-slate-800 transition-all"
                    />
                  </div>

                  <div className="p-3 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-[11px] text-slate-500 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Please avoid entering sensitive personal information in this form.</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-vibrant w-full py-3.5 px-6 rounded-2xl text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2.5 group"
                  >
                    {/* <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /> */}
                    <span>Send My Enquiry</span>
                    <WhatsAppIcon className="w-4 h-4 fill-white group-hover:animate-bounce-soft" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
