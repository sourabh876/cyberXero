
import React, { useState } from 'react';

import {
  MapPin,
  Phone,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Navigation,
  Copy,
  UserCheck,
  Sparkles
} from 'lucide-react';

import { shopInfo } from '../../data/servicesData';

export default function ContactSection() {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Govt Job / Exam Form (SSC, UPSC, Railway)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Handle enquiry form submission
  const handleSubmit = (e) => {

    e.preventDefault();

    if (!formData.name || !formData.phone) return;

    setSubmitted(true);

    setTimeout(() => {

      const encoded = encodeURIComponent(
        `Hi Digital Seva Centre, this is ${formData.name} (${formData.phone}). Enquiry for: ${formData.service}. Message: ${formData.message || 'Please guide me on required documents.'}`
      );

      window.open(
        `https://wa.me/${shopInfo.whatsappNumber}?text=${encoded}`,
        '_blank'
      );

    }, 1200);

  };

  // Copy address
  const copyAddress = () => {

    navigator.clipboard.writeText(
      `${shopInfo.address}, ${shopInfo.city}`
    );

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);

  };

  return (
    <section
      id="contact"
      style={{ backgroundColor: '#F8FAFF' }}
      className="scroll-mt-24 py-16 lg:py-24 border-b border-[#d5e2f5] relative render-content-auto"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#eef4ff] border border-[#d5e2f5] text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">

            <Sparkles className="w-3.5 h-3.5 text-brand-blue-500" />

            <span>Quick Connect</span>

          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">

            Visit or Message in Seconds

          </h2>

          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">

            Walk into our centre near the Tehsil Complex
            or send an instant WhatsApp query.

          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-5">

            {/* Main Contact Card */}
            <div className="bg-[#eef4ff] rounded-3xl p-6 sm:p-7 border border-[#d5e2f5] shadow-sm space-y-5">

              {/* Shop Name and Copy Button */}
              <div className="flex items-start justify-between gap-2">

                <div>

                  <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">

                    {shopInfo.name}

                  </h3>

                  <p className="text-xs text-brand-saffron-600 font-bold mt-0.5">

                    {shopInfo.tagline}

                  </p>

                </div>

                <button
                  onClick={copyAddress}
                  className="px-3 py-1.5 rounded-xl bg-[#f8faff] border border-[#d5e2f5] hover:bg-[#e0ebfc] text-slate-600 text-xs flex items-center gap-1.5 transition"
                  title="Copy address"
                >

                  <Copy className="w-3.5 h-3.5" />

                  <span className="text-[11px] font-semibold">

                    {copied ? 'Copied!' : 'Copy'}

                  </span>

                </button>

              </div>

              {/* Person In-Charge */}
              <div className="p-3.5 rounded-2xl bg-[#e0ebfc] border border-[#d5e2f5] flex items-center gap-3">

                <div className="w-9 h-9 rounded-xl bg-brand-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm">

                  <UserCheck className="w-4 h-4" />

                </div>

                <div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-700 block">

                    Person In-Charge:

                  </span>

                  <span className="text-xs font-extrabold text-slate-900">

                    {shopInfo.contactPerson}

                  </span>

                </div>

              </div>

              {/* Contact Details */}
              <div className="space-y-3.5 text-xs text-slate-600">

                {/* Address */}
                <div className="flex items-start gap-3">

                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-brand-blue-600 flex items-center justify-center shrink-0 border border-indigo-100">

                    <MapPin className="w-4 h-4" />

                  </div>

                  <div>

                    <strong className="text-slate-800 block text-xs mb-0.5">

                      Counter Address:

                    </strong>

                    <span>{shopInfo.address}</span>

                    <span className="block font-medium text-slate-700">

                      {shopInfo.city}

                    </span>

                    <span className="block text-[11px] text-brand-blue-600 font-medium mt-0.5">

                      Landmark: {shopInfo.landmark}

                    </span>

                  </div>

                </div>

                {/* WhatsApp Contact */}
                <div className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-100">

                    <MessageSquare className="w-4 h-4" />

                  </div>

                  <div>

                    <strong className="text-slate-800 block text-xs mb-0.5">

                      WhatsApp Document Desk:

                    </strong>

                    <a
                      href={`https://wa.me/${shopInfo.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-700 font-bold hover:underline"
                    >

                      {shopInfo.whatsappDisplay}

                    </a>

                  </div>

                </div>

                {/* Phone Contact */}
                <div className="flex items-center gap-3">

                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 border border-blue-100">

                    <Phone className="w-4 h-4" />

                  </div>

                  <div>

                    <strong className="text-slate-800 block text-xs mb-0.5">

                      Helpline:

                    </strong>

                    <a
                      href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`}
                      className="text-brand-blue-600 font-bold hover:underline"
                    >

                      {shopInfo.phoneDisplay}

                    </a>

                  </div>

                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-3">

                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-brand-saffron-600 flex items-center justify-center shrink-0 border border-amber-100">

                    <Clock className="w-4 h-4" />

                  </div>

                  <div>

                    <strong className="text-slate-800 block text-xs mb-0.5">

                      Working Hours:

                    </strong>

                    <span>{shopInfo.timings}</span>

                  </div>

                </div>

              </div>

              {/* Google Maps Button */}
              <div className="pt-2 border-t border-[#d5e2f5]">

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-2xl bg-[#e0ebfc] hover:bg-[#d5e2f5] text-brand-blue-700 font-bold text-xs flex items-center justify-center gap-2 border border-[#d5e2f5] transition"
                >

                  <Navigation className="w-4 h-4 text-brand-blue-600" />

                  <span>Open Location in Google Maps</span>

                </a>

              </div>

            </div>

          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">

            <div className="bg-[#eef4ff] rounded-3xl p-6 sm:p-8 border border-[#d5e2f5] shadow-sm">

              {/* Form Header */}
              <div className="border-b border-[#d5e2f5] pb-4 mb-6">

                <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">

                  Send an Instant Enquiry

                </h3>

                <p className="text-xs text-slate-500 mt-1">

                  Facing a deadline? Send your query and
                  get an operator response in minutes.

                </p>

              </div>

              {submitted ? (

                /* Success Message */
                <div className="p-8 text-center bg-emerald-50/80 rounded-2xl border border-emerald-200 animate-in fade-in duration-300">

                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md shadow-emerald-600/30">

                    <CheckCircle2 className="w-8 h-8" />

                  </div>

                  <h4 className="text-lg font-bold text-emerald-950">

                    Thank You, {formData.name}!

                  </h4>

                  <p className="text-xs text-emerald-800 max-w-md mx-auto mt-2 leading-relaxed">

                    Redirecting to WhatsApp with your details
                    for an immediate operator response...

                  </p>

                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-xs text-emerald-700 underline font-semibold"
                  >

                    Send another query

                  </button>

                </div>

              ) : (

                /* Enquiry Form */
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    {/* Full Name */}
                    <div>

                      <label className="block text-xs font-bold text-slate-700 mb-1">

                        Your Full Name{' '}
                        <span className="text-red-500">*</span>

                      </label>

                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            name: e.target.value
                          })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-2xl bg-[#f8faff] border border-[#d5e2f5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-xs text-slate-800 shadow-xs"
                      />

                    </div>

                    {/* Mobile Number */}
                    <div>

                      <label className="block text-xs font-bold text-slate-700 mb-1">

                        WhatsApp / Mobile No.{' '}
                        <span className="text-red-500">*</span>

                      </label>

                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phone: e.target.value
                          })
                        }
                        placeholder="e.g. +91 98000 00000"
                        className="w-full px-4 py-3 rounded-2xl bg-[#f8faff] border border-[#d5e2f5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-xs text-slate-800 shadow-xs"
                      />

                    </div>

                  </div>

                  {/* Service Selection */}
                  <div>

                    <label className="block text-xs font-bold text-slate-700 mb-1">

                      Select Service Required

                    </label>

                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          service: e.target.value
                        })
                      }
                      className="w-full px-4 py-3 rounded-2xl bg-[#f8faff] border border-[#d5e2f5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-xs text-slate-800 shadow-xs"
                    >

                      <option value="Govt Job / Exam Form (SSC, UPSC, Railway)">
                        Govt Job / Exam Form (SSC, UPSC, Railway)
                      </option>

                      <option value="Photocopy & Laser Printing (B&W / Color)">
                        Photocopy & Laser Printing (B&W / Color)
                      </option>

                      <option value="PAN Card Application / Correction">
                        PAN Card Application / Correction
                      </option>

                      <option value="Income / Caste / Domicile Certificate">
                        Income / Caste / Domicile Certificate
                      </option>

                      <option value="Document Scanning & PDF Compress">
                        Document Scanning & PDF Compress
                      </option>

                      <option value="Passport Photo & Lamination">
                        Passport Photo & Lamination
                      </option>

                      <option value="Resume & Biodata Creation">
                        Resume & Biodata Creation
                      </option>

                      <option value="Other Assisted Service">
                        Other Assisted Service
                      </option>

                    </select>

                  </div>

                  {/* Message Field */}
                  <div>

                    <label className="block text-xs font-bold text-slate-700 mb-1">

                      Details or Questions (Optional)

                    </label>

                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          message: e.target.value
                        })
                      }
                      placeholder="e.g. Need to resize my photo under 50KB for SSC CGL portal"
                      className="w-full px-4 py-3 rounded-2xl bg-[#f8faff] border border-[#d5e2f5] focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-xs text-slate-800 shadow-xs"
                    />

                  </div>

                  {/* Privacy Note */}
                  <div className="p-3 rounded-2xl bg-[#f8faff] border border-[#d5e2f5] text-[11px] text-slate-500 flex items-center gap-2">

                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />

                    <span>

                      Your enquiry details are handled safely
                      without storing your data.

                    </span>

                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-brand-blue-600 to-indigo-600 hover:from-brand-blue-700 hover:to-indigo-700 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-indigo-500/20 hover:shadow-glow-blue transition-all flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                  >

                    <Send className="w-4 h-4" />

                    <span>Submit Enquiry & Connect</span>

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
