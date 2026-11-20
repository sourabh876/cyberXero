import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Navigation, 
  Copy,
  UserCheck
} from 'lucide-react';
import { shopInfo } from '../../data/servicesData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Govt Job / Exam Form',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      // Create prefilled WhatsApp redirect so they actually get answered!
      const encoded = encodeURIComponent(
        `Hi Digital Seva Centre, this is ${formData.name} (${formData.phone}). Enquiry for: ${formData.service}. Message: ${formData.message || 'Please guide me on required documents and counter queue.'}`
      );
      window.open(`https://wa.me/${shopInfo.whatsappNumber}?text=${encoded}`, '_blank');
    }, 1200);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText(`${shopInfo.address}, ${shopInfo.city}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Counter & Contact Information (Demo)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Visit Our Centre or Send an Enquiry
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Conveniently situated in the city centre near public transport, the Tehsil complex, and the Head Post Office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Contact Cards & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Address & Map Box */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm space-y-5">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-extrabold text-lg text-brand-blue-950">{shopInfo.name}</h3>
                  <p className="text-xs text-brand-saffron-600 font-bold mt-0.5">{shopInfo.tagline}</p>
                </div>
                <button
                  onClick={copyAddress}
                  className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-500 text-xs flex items-center gap-1 transition"
                  title="Copy full address"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[10px]">{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Demo Person In-Charge Box */}
              <div className="p-3.5 rounded-2xl bg-brand-blue-50/80 border border-brand-blue-100 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-brand-blue-600 text-white flex items-center justify-center shrink-0">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue-700 block">
                    Person In-Charge (Demo Profile):
                  </span>
                  <span className="text-xs font-extrabold text-brand-blue-950">
                    {shopInfo.contactPerson}
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-blue-50 text-brand-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-800 block text-xs mb-0.5">Physical Counter Location (Demo):</strong>
                    <span>{shopInfo.address}</span>
                    <span className="block font-medium text-slate-700">{shopInfo.city}</span>
                    <span className="block text-[11px] text-brand-blue-700 font-medium mt-1">
                      Landmark: {shopInfo.landmark}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-emerald-50 text-brand-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-800 block text-xs mb-0.5">Telephone Helpline (Demo):</strong>
                    <a href={`tel:${shopInfo.phone.replace(/\s+/g, '')}`} className="text-brand-blue-700 font-bold hover:underline">
                      {shopInfo.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-emerald-50 text-brand-emerald-600 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-800 block text-xs mb-0.5">WhatsApp Document Desk (Demo):</strong>
                    <a 
                      href={`https://wa.me/${shopInfo.whatsappNumber}`} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-brand-emerald-700 font-bold hover:underline"
                    >
                      {shopInfo.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-800 block text-xs mb-0.5">Email Support (Demo):</strong>
                    <span className="text-slate-700 font-medium">{shopInfo.email}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand-saffron-50 text-brand-saffron-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-800 block text-xs mb-0.5">Counter Timings:</strong>
                    <span>{shopInfo.timings}</span>
                  </div>
                </div>
              </div>

              {/* Map CTA Button */}
              <div className="pt-2 border-t border-slate-200">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-brand-blue-50 hover:bg-brand-blue-100 text-brand-blue-800 font-bold text-xs flex items-center justify-center gap-2 border border-brand-blue-200 transition"
                >
                  <Navigation className="w-4 h-4 text-brand-blue-600" />
                  <span>Open Demo Location in Google Maps</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Quick Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
              <div className="border-b border-slate-100 pb-4 mb-6">
                <h3 className="font-extrabold text-lg text-brand-blue-950">
                  Send a Quick Service Enquiry
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have a specific document, online exam form, or bulk printing requirement? Let us know and we will get back right away.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center bg-brand-emerald-50 rounded-2xl border border-brand-emerald-200 animate-in fade-in duration-300">
                  <div className="w-14 h-14 bg-brand-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-md shadow-brand-emerald-600/30">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-brand-emerald-950">Thank You, {formData.name}!</h4>
                  <p className="text-xs text-brand-emerald-800 max-w-md mx-auto mt-2 leading-relaxed">
                    Your enquiry has been received. Redirecting to WhatsApp with your details for instant operator reply...
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-5 text-xs text-brand-emerald-700 underline font-semibold"
                  >
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g., Demo Candidate Name"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-xs text-slate-800 shadow-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        WhatsApp / Mobile No. <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g., +91 98000 00000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-xs text-slate-800 shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Select Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-xs text-slate-800 shadow-sm"
                    >
                      <option value="Govt Job / Exam Form (SSC, UPSC, Railway)">Govt Job / Exam Form (SSC, UPSC, Railway)</option>
                      <option value="Photocopy & Laser Printing (B&W / Color)">Photocopy & Laser Printing (B&W / Color)</option>
                      <option value="PAN Card Application / Correction">PAN Card Application / Correction</option>
                      <option value="Income / Caste / Domicile Certificate">Income / Caste / Domicile Certificate</option>
                      <option value="Document Scanning & PDF Compress">Document Scanning & PDF Compress</option>
                      <option value="Passport Photo & Lamination">Passport Photo & Lamination</option>
                      <option value="Resume & Biodata Creation">Resume & Biodata Creation</option>
                      <option value="Other Assisted Service">Other Assisted Service</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Details or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g., 'Need to submit SSC form and resize photo under 50KB for online exam portal'"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 text-xs text-slate-800 shadow-sm"
                    />
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-500 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-emerald-600 shrink-0" />
                    <span>Your demo enquiry details are processed safely in front of the operator.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-brand-blue-700 hover:bg-brand-blue-800 text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-glow-blue transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Demo Enquiry & Connect</span>
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
