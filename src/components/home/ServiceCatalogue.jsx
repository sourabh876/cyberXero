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
  ChevronRight
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
    <section id="services" className="scroll-mt-24 py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-blue-50 border border-brand-blue-200 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Verified Service Catalogue</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-blue-950 tracking-tight">
            Complete Digital & Documentation Services
          </h2>
          <p className="text-slate-600 mt-3 text-sm sm:text-base leading-relaxed">
            Search any government form, xerox rate, scanning job, or KYC requirement below. Click on any service card to view the exact document checklist and indicative fee breakdown.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="space-y-4 mb-10">
          
          {/* Search Box */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-5 h-5 text-brand-blue-600" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword (e.g., 'SSC', 'Xerox', 'PAN card', 'Aadhaar', 'Scan', 'Resize')..."
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition"
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

          {/* Category Filter Pills (Scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 pt-1 scrollbar-none justify-start lg:justify-center">
            {serviceCategories.map((cat) => {
              const Icon = getCategoryIcon(cat.icon);
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                    isActive
                      ? 'bg-brand-blue-700 text-white border-brand-blue-800 shadow-md shadow-brand-blue-700/20'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-saffron-300' : 'text-slate-500'}`} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-6 px-1">
          <span>Showing <strong>{filteredServices.length}</strong> available services</span>
          {searchQuery && (
            <span className="text-brand-blue-700 font-medium">
              Filtered by: "{searchQuery}"
            </span>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-brand-blue-400 hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Category Pill & Time Badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold text-brand-blue-700 bg-brand-blue-50 px-2.5 py-0.5 rounded-md border border-brand-blue-100">
                      {service.categoryName}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-saffron-500" />
                      {service.turnaround}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-brand-blue-950 group-hover:text-brand-blue-700 transition-colors mb-2">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                    {service.description}
                  </p>

                  {/* Required Docs Preview */}
                  <div className="space-y-1 mb-4 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] text-slate-600">
                    <span className="font-semibold text-slate-700 block text-[10px] uppercase tracking-wider">
                      Docs checklist:
                    </span>
                    <p className="line-clamp-1 text-slate-500">
                      {service.requiredDocs.join(' • ')}
                    </p>
                  </div>
                </div>

                {/* Bottom Row */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-medium text-slate-400 block">Indicative Charge</span>
                    <span className="text-sm font-extrabold text-brand-blue-900">{service.indicativePrice}</span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-blue-700 group-hover:text-brand-saffron-600 transition-colors">
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching services found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
              We may still be able to help you at our counter! Contact us directly on WhatsApp with your specific document or form inquiry.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="px-4 py-2 rounded-xl bg-brand-blue-700 text-white text-xs font-bold"
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
