import React from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  Tag, 
  ExternalLink 
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
      <div className="space-y-6">
        
        {/* Service Header */}
        <div className="border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-blue-700 bg-brand-blue-50 px-2.5 py-0.5 rounded-full border border-brand-blue-200">
              {service.categoryName}
            </span>
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-brand-saffron-500" />
              Est. Time: {service.turnaround}
            </span>
          </div>

          <h3 className="text-xl font-extrabold text-brand-blue-950">
            {service.title}
          </h3>

          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            {service.description}
          </p>
        </div>

        {/* Extended Details */}
        {service.details && (
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-700 leading-relaxed">
            <strong className="text-brand-blue-950 block mb-1">Operational Overview:</strong>
            {service.details}
          </div>
        )}

        {/* Required Documents Checklist */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-brand-blue-950 mb-3 flex items-center gap-1.5">
            <FileText className="w-4 h-4 text-brand-blue-600" />
            <span>Documents to Bring / Forward:</span>
          </h4>

          <ul className="space-y-2">
            {service.requiredDocs.map((doc, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-brand-emerald-50/50 p-2.5 rounded-lg border border-brand-emerald-100">
                <CheckCircle2 className="w-4 h-4 text-brand-emerald-600 shrink-0 mt-0.5" />
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & Fee Structure (Doc Section 8 Transparency Rule) */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-brand-blue-50/80 to-slate-50 border border-brand-blue-200 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-brand-blue-950">Indicative Shop Service Charge:</span>
            <span className="text-base font-extrabold text-brand-blue-700">{service.indicativePrice}</span>
          </div>
          <div className="text-[11px] text-slate-500">
            Basis: {service.unit}
          </div>
          <div className="pt-2 border-t border-brand-blue-100 flex items-start gap-1.5 text-[11px] text-slate-600">
            <AlertCircle className="w-3.5 h-3.5 text-brand-saffron-600 shrink-0 mt-0.5" />
            <span><strong>Government / Official Fee:</strong> {service.officialFeeNote}</span>
          </div>
        </div>

        {/* Privacy & Safe OTP Policy Reminder */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-slate-100 text-[11px] text-slate-600">
          <ShieldCheck className="w-4 h-4 text-brand-emerald-600 shrink-0" />
          <span>Security Notice: For portals requiring mobile OTP, you will enter the OTP yourself on our screen.</span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={`https://wa.me/${shopInfo.whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 px-4 rounded-xl bg-brand-emerald-600 hover:bg-brand-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Enquire on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="py-3 px-5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold text-xs transition"
          >
            Close
          </button>
        </div>

      </div>
    </Modal>
  );
}
