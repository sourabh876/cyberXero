
import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  lazy,
  Suspense
} from 'react';

import {
  Search,
  X,
  Clock,
  FileCheck,
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
  ChevronLeft
} from 'lucide-react';

import {
  serviceCategories,
  servicesData
} from '../../data/servicesData';

const ServiceDetailModal = lazy(
  () => import('./ServiceDetailModal')
);

export default function ServiceCatalogue({
  initialCategory = 'all'
}) {

  const [selectedCategory, setSelectedCategory] =
    useState(initialCategory);

  const [searchQuery, setSearchQuery] = useState('');

  const [selectedService, setSelectedService] =
    useState(null);

  const sliderRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(true);

  // Check category slider position
  const checkScroll = () => {
    if (sliderRef.current) {
      const {
        scrollLeft,
        scrollWidth,
        clientWidth
      } = sliderRef.current;

      setCanScrollLeft(scrollLeft > 10);

      setCanScrollRight(
        scrollLeft < scrollWidth - clientWidth - 10
      );
    }
  };

  useEffect(() => {
    checkScroll();

    window.addEventListener('resize', checkScroll);

    return () =>
      window.removeEventListener('resize', checkScroll);
  }, []);

  // Category slider navigation
  const scrollSlider = (direction) => {
    if (sliderRef.current) {
      const scrollAmount =
        direction === 'left' ? -260 : 260;

      sliderRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });

      setTimeout(checkScroll, 300);
    }
  };

  // Category Icon Lookup
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Printer':
        return Printer;

      case 'ScanLine':
        return ScanLine;

      case 'Briefcase':
        return Briefcase;

      case 'Landmark':
        return Landmark;

      case 'ShieldCheck':
        return ShieldCheck;

      case 'GraduationCap':
        return GraduationCap;

      case 'Globe':
        return Globe;

      case 'Camera':
        return Camera;

      default:
        return LayoutGrid;
    }
  };

  // Individual category badge and icon colours
  const getCategoryTheme = (category) => {
    switch (category) {

      case 'print':
        return {
          cardBg: 'bg-indigo-50',
          cardBorder: 'border-indigo-200',
          badge: 'bg-indigo-100 text-indigo-700 border-indigo-200',
          dot: 'bg-indigo-500',
          gradient: 'from-indigo-500 to-blue-500',
          textColor: 'text-indigo-700'
        };

      case 'scan':
        return {
          cardBg: 'bg-cyan-50',
          cardBorder: 'border-cyan-200',
          badge: 'bg-cyan-100 text-cyan-700 border-cyan-200',
          dot: 'bg-cyan-500',
          gradient: 'from-cyan-500 to-blue-500',
          textColor: 'text-cyan-700'
        };

      case 'jobs':
        return {
          cardBg: 'bg-purple-50',
          cardBorder: 'border-purple-200',
          badge: 'bg-purple-100 text-purple-700 border-purple-200',
          dot: 'bg-purple-500',
          gradient: 'from-purple-500 to-indigo-500',
          textColor: 'text-purple-700'
        };

      case 'gov':
        return {
          cardBg: 'bg-amber-50',
          cardBorder: 'border-amber-200',
          badge: 'bg-amber-100 text-amber-700 border-amber-200',
          dot: 'bg-amber-500',
          gradient: 'from-amber-500 to-orange-500',
          textColor: 'text-amber-700'
        };

      case 'kyc':
        return {
          cardBg: 'bg-emerald-50',
          cardBorder: 'border-emerald-200',
          badge: 'bg-emerald-100 text-emerald-700 border-emerald-200',
          dot: 'bg-emerald-500',
          gradient: 'from-emerald-500 to-teal-500',
          textColor: 'text-emerald-700'
        };

      case 'student':
        return {
          cardBg: 'bg-blue-50',
          cardBorder: 'border-blue-200',
          badge: 'bg-blue-100 text-blue-700 border-blue-200',
          dot: 'bg-blue-500',
          gradient: 'from-blue-500 to-indigo-500',
          textColor: 'text-blue-700'
        };

      case 'online':
        return {
          cardBg: 'bg-teal-50',
          cardBorder: 'border-teal-200',
          badge: 'bg-teal-100 text-teal-700 border-teal-200',
          dot: 'bg-teal-500',
          gradient: 'from-teal-500 to-emerald-500',
          textColor: 'text-teal-700'
        };

      case 'finishing':
        return {
          cardBg: 'bg-rose-50',
          cardBorder: 'border-rose-200',
          badge: 'bg-rose-100 text-rose-700 border-rose-200',
          dot: 'bg-rose-500',
          gradient: 'from-rose-500 to-pink-500',
          textColor: 'text-rose-700'
        };

      default:
        return {
          cardBg: 'bg-slate-50',
          cardBorder: 'border-slate-200',
          badge: 'bg-slate-100 text-slate-700 border-slate-200',
          dot: 'bg-slate-500',
          gradient: 'from-slate-500 to-slate-600',
          textColor: 'text-slate-700'
        };
    }
  };

  // Filtered Services List
  const filteredServices = useMemo(() => {

    return servicesData.filter((service) => {

      const matchesCategory =
        selectedCategory === 'all' ||
        service.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();

      const matchesSearch =
        !query ||
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query) ||
        service.categoryName.toLowerCase().includes(query) ||
        (
          service.requiredDocs &&
          service.requiredDocs.some(
            d => d.toLowerCase().includes(query)
          )
        );

      return matchesCategory && matchesSearch;

    });

  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="services"
      className="scroll-mt-24 py-16 lg:py-24 theme-services border-b border-slate-200/70 relative"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-200/80 text-brand-blue-700 text-xs font-bold uppercase tracking-wider mb-3">

            <span>20+ Verified Services</span>

          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">

            Everything We Can Do For You

          </h2>

          <p className="text-slate-600 mt-2.5 text-sm sm:text-base leading-relaxed">

            Search forms, check photo specs, or find rates.
            Tap any card for the full document checklist.

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
              className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-white/80 border border-slate-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-brand-blue-500 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600"
                aria-label="Clear search"
              >

                <X className="w-4 h-4" />

              </button>
            )}

          </div>

          {/* Category Filter Slider */}
          <div className="relative max-w-5xl mx-auto px-1 sm:px-4">

            {canScrollLeft && (
              <button
                type="button"
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

                const isActive =
                  selectedCategory === cat.id;

                const theme = getCategoryTheme(cat.id);

                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    aria-pressed={isActive}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 border shrink-0 ${
                      isActive
                        ? 'bg-gradient-to-r from-brand-blue-600 to-indigo-600 text-white border-brand-blue-700 shadow-md shadow-brand-blue-600/25 ring-2 ring-brand-blue-400/30'
                        : `${theme.cardBg} ${theme.cardBorder} ${theme.textColor} hover:shadow-md`
                    }`}
                  >

                    <Icon
                      className={`w-3.5 h-3.5 ${
                        isActive
                          ? 'text-amber-300'
                          : theme.textColor
                      }`}
                    />

                    <span>{cat.name}</span>

                  </button>
                );

              })}

            </div>

            {canScrollRight && (
              <button
                type="button"
                onClick={() => scrollSlider('right')}
                className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-white/95 shadow-md border border-slate-200 items-center justify-center text-slate-700 hover:bg-slate-50 transition"
                aria-label="Scroll right"
              >

                <ChevronRight className="w-4 h-4" />

              </button>
            )}

          </div>

        </div>

        {/* Results Counter */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 mb-6 px-1">

          <span>
            Showing{' '}
            <strong className="text-slate-800">
              {filteredServices.length}
            </strong>{' '}
            available services
          </span>

          {searchQuery && (
            <span className="text-brand-blue-600 font-semibold bg-indigo-50 px-2.5 py-0.5 rounded-full">

              Filtered by: "{searchQuery}"

            </span>
          )}

        </div>

        {/* Services Grid - Same Background Colour */}
        {filteredServices.length > 0 ? (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {filteredServices.map((service) => {

              const theme =
                getCategoryTheme(service.category);

              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(event) => {
                    if (
                      event.key === 'Enter' ||
                      event.key === ' '
                    ) {
                      event.preventDefault();
                      setSelectedService(service);
                    }
                  }}
                  className="group relative bg-[#edf8f3] border-[#cce5d9] hover:border-emerald-400 rounded-3xl p-6 border shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5 overflow-hidden"
                >

                  {/* Animated Top Colour Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${theme.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  <div>

                    {/* Category & Time Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">

                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${theme.badge} flex items-center gap-1.5`}
                      >

                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${theme.dot}`}
                        />

                        {service.categoryName}

                      </span>

                      <span className="text-[11px] font-medium text-slate-600 flex items-center gap-1 bg-white/80 px-2 py-0.5 rounded-md">

                        <Clock className="w-3 h-3 text-brand-saffron-500 shrink-0" />

                        {service.turnaround}

                      </span>

                    </div>

                    {/* Service Title */}
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-brand-blue-600 transition-colors mb-2 leading-snug">

                      {service.title}

                    </h3>

                    {/* Service Description */}
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-4">

                      {service.description}

                    </p>

                    {/* Required Documents */}
                    <div className="mb-4">

                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider ${theme.textColor} block mb-1.5`}
                      >

                        Required Docs:

                      </span>

                      <div className="flex flex-wrap gap-1.5">

                        {(service.requiredDocs || [])
                          .slice(0, 2)
                          .map((doc, idx) => (

                            <span
                              key={idx}
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-white/80 border border-slate-200/80 text-[11px] font-medium text-slate-600 max-w-[200px] truncate"
                            >

                              <FileCheck className="w-3 h-3 text-brand-emerald-500 shrink-0" />

                              <span className="truncate">
                                {doc}
                              </span>

                            </span>

                          ))}

                        {(service.requiredDocs || []).length > 2 && (

                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-lg ${theme.badge} text-[10px] font-bold`}
                          >

                            +{service.requiredDocs.length - 2} more

                          </span>

                        )}

                      </div>

                    </div>

                  </div>

                  {/* Bottom Pricing Row */}
                  <div className="pt-3.5 border-t border-emerald-200/60 flex flex-wrap items-center justify-between gap-2">

                    <div className="min-w-0">

                      <span className="text-[10px] uppercase font-medium text-slate-500 block">

                        Indicative Charge

                      </span>

                      <span className="text-sm font-extrabold text-slate-900 tracking-tight">

                        {service.indicativePrice}

                      </span>

                    </div>

                    {/* Checklist Button */}
                    <div
                      className={`inline-flex items-center gap-1 text-xs font-bold ${theme.textColor} transition-all duration-300 bg-white/80 group-hover:bg-white px-3 py-1.5 rounded-xl border ${theme.cardBorder} group-hover:shadow-sm`}
                    >

                      <span>Checklist</span>

                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />

                    </div>

                  </div>

                </div>
              );

            })}

          </div>

        ) : (

          /* No Matching Services */
          <div className="text-center py-16 bg-white/70 rounded-3xl border border-dashed border-slate-300">

            <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />

            <h3 className="text-base font-bold text-slate-800">

              No matching services found

            </h3>

            <p className="text-xs text-slate-500 max-w-md mx-auto mt-1 mb-4">

              We may still be able to help you at our counter!
              Contact us directly on WhatsApp with your query.

            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-4 py-2 rounded-xl bg-brand-blue-600 text-white text-xs font-bold shadow-md hover:bg-brand-blue-700 transition"
            >

              Reset Search & Filters

            </button>

          </div>

        )}

      </div>

      {/* Service Detail Modal */}
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
