import React, { useState, useMemo } from 'react';
import { 
  Search, 
  X, 
  Clock, 
  ArrowRight, 
  FileCheck, 
  MessageSquare, 
  Printer, 
  ScanLine, 
  Briefcase, 
  Landmark, 
  ShieldCheck, 
  GraduationCap, 
  Globe, 
  Camera, 
  LayoutGrid,
  ChevronRight,
  FileText
} from 'lucide-react';
import { serviceCategories, servicesData, shopInfo } from '../../data/servicesData';
import ServiceDetailModal from './ServiceDetailModal';

export default function ServiceCatalogue({ initialCategory = 'all' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState(null);

  // Category Icon Lookup
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Printer': return Printer;
      case 'ScanLine': return ScanLine;
      case 'Briefcase': return Briefcase;
      case 'Landmark': return Landmark;
      case 'ShieldCheck': return ShieldCheck;
      case 'GraduationCap': return GraduationCap;
      case 'Globe': return Globe;
      case 'Camera': return Camera;
      default: return LayoutGrid;
    }
  };

  // Color schemes for categories
  const getCategoryTheme = (category) => {
    switch (category) {
      case 'print': return { badge: 'bg-indigo-50 text-indigo-700 border-indigo-200/80', dot: 'bg-indigo-500' };
      case 'scan': return { badge: 'bg-cyan-50 text-cyan-700 border-cyan-200/80', dot: 'bg-cyan-500' };
      case 'jobs': return { badge: 'bg-purple-50 text-purple-700 border-purple-200/80', dot: 'bg-purple-500' };
      case 'gov': return { badge: 'bg-amber-50 text-amber-700 border-amber-200/80', dot: 'bg-amber-500' };
      case 'kyc': return { badge: 'bg-emerald-50 text-emerald-700 border-emerald-200/80', dot: 'bg-emerald-500' };
      case 'student': return { badge: 'bg-blue-50 text-blue-700 border-blue-200/80', dot: 'bg-blue-500' };
      case 'online': return { badge: 'bg-teal-50 text-teal-700 border-teal-200/80', dot: 'bg-teal-500' };
      case 'finishing': return { badge: 'bg-rose-50 text-rose-700 border-rose-200/80', dot: 'bg-rose-500' };
      default: return { badge: 'bg-slate-50 text-slate-700 border-slate-200/80', dot: 'bg-slate-500' };
    }
  };

  // Filtered Services List
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.categoryName.toLowerCase().includes(query) ||
        (service.requiredDocs && service.requiredDocs.some(d => d.toLowerCase().includes(query)));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="scroll-mt-24 py-16 lg:py-24 bg-white border-b border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - Crisp and modern */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified Service Directory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Complete Services Catalogue
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            Search any form, print rate, or document requirement. Click any card for the checklist.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="space-y-4 mb-10">
          
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-brand-blue-500">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g. 'SSC', 'Xerox', 'PAN card', 'Scan', 'Aadhaar')..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-50/80 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filter Pills (Scrollable with smooth indicator) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none justify-start lg:justify-center">
            {serviceCategories.map((cat) => {
              const Icon = getCategoryIcon(cat.icon);
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? 'bg-gradient-to-r from-brand-blue-600 to-indigo-600 text-white border-brand-blue-700 shadow-md shadow-brand-blue-600/25 scale-[1.02]'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/90'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>Showing <strong className="text-slate-800">{filteredServices.length}</strong> available services</span>
          {searchQuery && (
            <span className="text-brand-blue-600 font-semibold bg-indigo-50 px-2.5 py-0.5 rounded-full">
              Filtered by: "{searchQuery}"
            </span>
          )}
        </div>

        {/* Enhanced Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const theme = getCategoryTheme(service.category);

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className="group bg-white rounded-3xl p-6 border border-slate-200/70 hover:border-indigo-300 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
                >
                  <div>
                    {/* Top Row: Category Pill & Time Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${theme.badge} flex items-center gap-1.5`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${theme.dot}`} />
                        {service.categoryName}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1 bg-slate-50 px-2 py-0.5 rounded-md">
                        <Clock className="w-3 h-3 text-brand-saffron-500" />
                        {service.turnaround}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-brand-blue-600 transition-colors mb-2 leading-snug">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                      {service.description}
                    </p>

                    {/* Clean Required Docs Chips instead of dense text box */}
                    <div className="mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Required Docs:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.requiredDocs.slice(0, 2).map((doc, idx) => (
                          <span 
                            key={idx} 
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200/80 text-[11px] font-medium text-slate-600 max-w-[200px] truncate"
                          >
                            <FileCheck className="w-3 h-3 text-brand-emerald-500 shrink-0" />
                            <span className="truncate">{doc}</span>
                          </span>
                        ))}
                        {service.requiredDocs.length > 2 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-lg bg-indigo-50 text-brand-blue-700 text-[10px] font-bold">
                            +{service.requiredDocs.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Row */}
                  <div className="pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-medium text-slate-400 block">Indicative Charge</span>
                      <span className="text-sm font-extrabold text-slate-900 tracking-tight whitespace-nowrap">{service.indicativePrice}</span>
                    </div>

                    <div className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue-600 group-hover:text-brand-saffron-600 transition-colors bg-indigo-50/60 group-hover:bg-amber-50 px-3 py-1.5 rounded-xl border border-indigo-100/60 group-hover:border-amber-200">
                      <span>Checklist</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50/80 rounded-3xl border border-dashed border-slate-300">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching services found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
              We may still be able to help you at our counter! Contact us directly on WhatsApp with your query.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-4 py-2 rounded-xl bg-brand-blue-600 text-white text-xs font-bold shadow-md hover:bg-brand-blue-700 transition"
            >
              Reset Search & Filters
            </button>
          </div>
        )}

      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
      />
    </section>
  );
}
