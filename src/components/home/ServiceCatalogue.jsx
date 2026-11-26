import React, { useState, useMemo, useRef, useEffect, lazy, Suspense } from 'react';
import {
  Search, X, Clock, ArrowRight, FileCheck, Printer, ScanLine, Briefcase,
  Landmark, ShieldCheck, GraduationCap, Globe, Camera, LayoutGrid,
  ChevronRight, ChevronLeft, FileText, Sparkles, Zap
} from 'lucide-react';
import { serviceCategories, servicesData, shopInfo } from '../../data/servicesData';
import WhatsAppIcon from '../common/WhatsAppIcon';
const ServiceDetailModal = lazy(() => import('./ServiceDetailModal'));

const INITIAL_VISIBLE_COUNT = 6;

export default function ServiceCatalogue({ initialCategory = 'all' }) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const sliderRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    setShowAll(false);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScroll, 300);
    }
  };

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

  const hasMoreServices = filteredServices.length > INITIAL_VISIBLE_COUNT;
  const visibleServices = showAll
    ? filteredServices
    : filteredServices.slice(0, INITIAL_VISIBLE_COUNT);

  return (
    <section id="services" className="scroll-mt-24 py-16 lg:py-24 bg-mesh-gradient border-b border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="section-label bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 text-indigo-700 mb-3 mx-auto w-fit">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 animate-spin-slow" />
            <span>WHAT WE CAN HELP YOU WITH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            One Counter. A Whole Lot of{' '}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
              Things Taken Care Of.
            </span>
          </h2>
          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">
            Print, Scan, Submit, Prepare Or Apply. Explore Practical Digital And Document Services For Work, Study And Everyday Life — With Assistance That Keeps The Process Easier To Follow.
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
              placeholder="Search for a service — e.g. print, scan, exam form..."
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

          {/* Category Filter Pills (Scrollable Slider with Chevrons) */}
          <div className="relative max-w-5xl mx-auto px-1 sm:px-4">
            {canScrollLeft && (
              <button
                onClick={() => scrollSlider('left')}
                className="hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200 items-center justify-center text-slate-700 hover:bg-slate-50 transition"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}

            <div
              ref={sliderRef}
              onScroll={checkScroll}
              className="flex items-center gap-2.5 overflow-x-auto py-2.5 px-3 sm:px-4 scrollbar-none no-scrollbar justify-start"
            >
              {serviceCategories.map((cat) => {
                const Icon = getCategoryIcon(cat.icon);
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 border shrink-0 ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-blue-600 to-indigo-600 text-white border-brand-blue-700 shadow-md shadow-brand-blue-600/25 ring-2 ring-brand-blue-400/30'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200/90'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-300' : 'text-slate-500'}`} />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {canScrollRight && (
              <button
                onClick={() => scrollSlider('right')}
                className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200 items-center justify-center text-slate-700 hover:bg-slate-50 transition"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>

        </div>

        {/* Results Counter & View All / View Less Text Link */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs sm:text-sm text-slate-500 mb-6 px-1">
          <div className="flex flex-wrap items-center gap-2">
            <span>
              Showing <strong className="text-slate-800">{visibleServices.length}</strong>
              {hasMoreServices && (
                <>
                  {' '}of <strong className="text-slate-800">{filteredServices.length}</strong>
                </>
              )}{' '}
              available services
            </span>
            {searchQuery && (
              <span className="text-brand-blue-600 text-xs font-semibold bg-indigo-50 px-2.5 py-0.5 rounded-full">
                Filtered by: "{searchQuery}"
              </span>
            )}
          </div>

          {hasMoreServices && (
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 underline underline-offset-4 decoration-2 decoration-indigo-400 hover:decoration-indigo-600 cursor-pointer transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
            >
              {showAll ? 'View Less' : `View All (${filteredServices.length})`}
            </button>
          )}
        </div>

        {/* Enhanced Interactive & Responsive Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {visibleServices.map((service) => {
              const theme = getCategoryTheme(service.category);

              return (
                <div
                  key={service.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => setSelectedService(service)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedService(service);
                    }
                  }}
                  className="card-3d group relative bg-white rounded-3xl p-4 sm:p-6 border border-slate-200/80 hover:border-indigo-300 active:scale-[0.985] shadow-sm cursor-pointer flex flex-col justify-between overflow-hidden animate-card-enter min-w-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  {/* Interactive Top Accent & Hover Glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-45 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-indigo-500/[0.03] group-hover:to-purple-500/[0.04] transition-colors duration-300 pointer-events-none" />

                  <div className="relative z-10 min-w-0">
                    {/* Top Row: Category Pill & Time Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${theme.badge} flex items-center gap-1.5 group-hover:scale-[1.03] transition-transform`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${theme.dot} animate-pulse`} />
                        {service.categoryName}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 flex items-center gap-1 bg-slate-50 group-hover:bg-amber-50/70 px-2 py-0.5 rounded-lg border border-slate-100 group-hover:border-amber-200/70 transition-colors">
                        <Clock className="w-3 h-3 text-amber-500 group-hover:rotate-12 transition-transform" />
                        {service.turnaround}
                      </span>
                    </div>

                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2 mb-4">
                      {service.description}
                    </p>

                    <div className="mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">Required Docs:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.requiredDocs.slice(0, 2).map((doc, idx) => (
                          <span key={idx} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 group-hover:bg-white border border-slate-200/80 group-hover:border-indigo-200/80 text-[11px] font-medium text-slate-600 max-w-full sm:max-w-[200px] truncate transition-colors">
                            <FileCheck className="w-3 h-3 text-emerald-500 shrink-0" />
                            <span className="truncate">{doc}</span>
                          </span>
                        ))}
                        {service.requiredDocs.length > 2 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-[10px] font-bold">
                            +{service.requiredDocs.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 pt-3.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] uppercase font-medium text-slate-400 block">Service charge from</span>
                      <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">{service.indicativePrice}</span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`https://wa.me/${shopInfo.whatsappNumber}?text=${encodeURIComponent(
                          `Hello cyberXero, I visited your website and need "${service.title}" (${service.categoryName}). Indicative Charge: ${service.indicativePrice}, Turnaround: ${service.turnaround}. Please guide me on the process and required documents.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        className="w-8 h-8 rounded-full bg-emerald-50 hover:bg-emerald-500 text-emerald-600 hover:text-white flex items-center justify-center transition-all duration-200 shadow-sm border border-emerald-200 hover:border-emerald-500 hover:scale-110"
                        title="Quick WhatsApp enquiry"
                        aria-label={`WhatsApp enquiry for ${service.title}`}
                      >
                        <WhatsAppIcon className="w-4 h-4 fill-current" />
                      </a>
                      <div className="inline-flex items-center gap-1 text-xs font-bold text-indigo-600 group-hover:text-white transition-all bg-indigo-50/80 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 px-3 py-1.5 rounded-xl border border-indigo-100 group-hover:border-transparent shadow-xs">
                        <span>See what's included</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50/80 rounded-3xl border border-dashed border-slate-300">
            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-800">No matching service found</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">
              No matching service found. Try another keyword or message us for help.
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

      {/* Service Detail Modal (Loaded On Demand) */}
      {selectedService && (
        <Suspense fallback={null}>
          <ServiceDetailModal
            service={selectedService}
            isOpen={Boolean(selectedService)}
            onClose={() => setSelectedService(null)}
          />
        </Suspense>
      )}
    </section>
  );
}
