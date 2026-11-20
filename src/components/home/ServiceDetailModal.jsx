import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Sparkles
} from 'lucide-react';
import Modal from '../common/Modal';
import { shopInfo } from '../../data/servicesData';

export default function ServiceDetailModal({ service, isOpen, onClose }) {
  if (!service) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello Digital Seva Centre, I have an enquiry regarding "${service.title}". Indicative rate: ${service.indicativePrice}. Could you please guide me on documents and timings?`
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Service Details & Document Checklist">
      <div className="space-y-5">
        
        {/* Service Header */}
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">
              {service.categoryName}
            </span>
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1 bg-slate-50 px-2.5 py-0.5 rounded-full">
              <Clock className="w-3.5 h-3.5 text-brand-saffron-500" />
              Est. Time: {service.turnaround}
            </span>
          </div>

          <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
            {service.title}
          </h3>

          <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Operational Overview */}
        {service.details && (
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
            <strong className="text-slate-900 block mb-0.5 font-bold">Operational Note:</strong>
            {service.details}
          </div>
        )}

        {/* Required Documents Checklist */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2.5 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-brand-blue-600" />
            <span>Documents to Bring or Send:</span>
          </h4>

          <ul className="space-y-1.5">
            {service.requiredDocs.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-emerald-50/60 p-2.5 rounded-xl border border-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Fee Structure */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-50/70 to-purple-50/50 border border-indigo-100 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-slate-900">Indicative Shop Service Charge:</span>
            <span className="text-base font-black text-brand-blue-700">{service.indicativePrice}</span>
          </div>
          <div className="text-[11px] text-slate-500 font-medium">
            Basis: {service.unit}
          </div>
          <div className="pt-2 border-t border-indigo-100/80 flex items-start gap-1.5 text-[11px] text-slate-600">
            <AlertCircle className="w-3.5 h-3.5 text-brand-saffron-600 shrink-0 mt-0.5" />
            <span><strong>Government / Official Fee:</strong> {service.officialFeeNote}</span>
          </div>
        </div>

        {/* Security Notice */}
        <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-100 text-[11px] text-slate-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Security Notice: For portals requiring mobile OTP, you enter the OTP yourself on our screen.</span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${shopInfo.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-500/20 transition transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="py-3 px-5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition"
          >
            Close
          </button>
        </div>

      </div>
    </Modal>
  );
}
