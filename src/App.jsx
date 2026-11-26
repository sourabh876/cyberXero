import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { shopInfo } from './data/servicesData';
import WhatsAppIcon from './components/common/WhatsAppIcon';

// Lazy load one-page view and heavy admin analytics view for high performance
const OnePageApp = lazy(() => import('./pages/OnePageApp'));
const AdminPage = lazy(() => import('./pages/AdminPage'));

// Lazy load detail modal on demand
const ServiceDetailModal = lazy(() => import('./components/home/ServiceDetailModal'));

function PageFallback() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-12">
      <div className="w-10 h-10 border-4 border-indigo-200 border-t-brand-blue-600 rounded-full animate-spin mb-3" />
      <span className="text-xs font-bold text-slate-400 tracking-wider uppercase">Getting things ready...</span>
    </div>
  );
}

export default function App() {
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#fafbfd] text-slate-800 flex flex-col font-sans selection:bg-brand-blue-500 selection:text-white">
        {/* Persistent Sticky Navbar */}
        <Navbar />

        {/* View Routing: Single Page Architecture with URL-based Section Linking */}
        <main className="flex-1">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              {/* All Section URLs seamlessly mount and scroll within the One Page Architecture */}
              <Route
                path="/"
                element={<OnePageApp onSelectService={(s) => setSelectedServiceForModal(s)} />}
              />
              <Route
                path="/services"
                element={<OnePageApp onSelectService={(s) => setSelectedServiceForModal(s)} />}
              />
              <Route
                path="/how-it-works"
                element={<OnePageApp onSelectService={(s) => setSelectedServiceForModal(s)} />}
              />
              <Route
                path="/pricing"
                element={<OnePageApp onSelectService={(s) => setSelectedServiceForModal(s)} />}
              />
              <Route
                path="/about"
                element={<OnePageApp onSelectService={(s) => setSelectedServiceForModal(s)} />}
              />
              <Route
                path="/faq"
                element={<OnePageApp onSelectService={(s) => setSelectedServiceForModal(s)} />}
              />
              <Route
                path="/contact"
                element={<OnePageApp onSelectService={(s) => setSelectedServiceForModal(s)} />}
              />

              {/* Dedicated Admin Analytics View */}
              <Route path="/admin" element={<AdminPage />} />

              {/* Fallback to root */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </main>

        {/* Persistent Footer */}
        <Footer />

        {/* Detail Modal for Selected Service (Loaded On Demand) */}
        {selectedServiceForModal && (
          <Suspense fallback={null}>
            <ServiceDetailModal
              service={selectedServiceForModal}
              isOpen={Boolean(selectedServiceForModal)}
              onClose={() => setSelectedServiceForModal(null)}
            />
          </Suspense>
        )}

        {/* Floating Action Button: WhatsApp Logo Only */}
        <div className="fixed bottom-6 right-6 z-40 select-none">
          <a
            href={`https://wa.me/${shopInfo.whatsappNumber}?text=Hello%20cyberXero%2C%20I%20visited%20your%20website%20and%20have%20an%20enquiry.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white flex items-center justify-center shadow-2xl shadow-emerald-500/40 hover:shadow-glow-emerald transition-all transform hover:scale-110 active:scale-95 group"
            aria-label="Chat on WhatsApp"
            title="Chat on WhatsApp"
          >
            <WhatsAppIcon className="w-7 h-7 fill-white" />
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}
