import React from 'react';

export default function Badge({ children, variant = 'blue', className = '' }) {
  const variants = {
    blue: 'bg-brand-blue-50 text-brand-blue-800 border-brand-blue-200',
    saffron: 'bg-brand-saffron-50 text-brand-saffron-700 border-brand-saffron-200',
    emerald: 'bg-brand-emerald-50 text-brand-emerald-700 border-brand-emerald-200',
    slate: 'bg-slate-100 text-slate-700 border-slate-200'
  };

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${variants[variant] || variants.blue} ${className}`}>
      {children}
    </span>
  );
}
