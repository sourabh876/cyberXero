/**
 * Navigation configuration and smooth scroll utilities for the One-Page Architecture
 */

export const SECTIONS = [
  { id: 'home', path: '/', name: 'Home' },
  { id: 'services', path: '/services', name: 'Services' },
  { id: 'how-it-works', path: '/how-it-works', name: 'How It Works' },
  { id: 'pricing', path: '/pricing', name: 'Pricing' },
  { id: 'about', path: '/about', name: 'About' },
  { id: 'faq', path: '/faq', name: 'FAQ' },
  { id: 'contact', path: '/contact', name: 'Contact' },
];

let isNavigating = false;
let navTimeout = null;

export function getIsNavigating() {
  return isNavigating;
}

/**
 * Smoothly scroll to a section by element ID and sync the URL
 */
export function scrollToSection(sectionId, path = null) {
  isNavigating = true;

  const targetPath = path || SECTIONS.find((s) => s.id === sectionId)?.path || '/';

  // Sync browser URL without full page reload
  if (window.location.pathname !== targetPath) {
    window.history.pushState(null, '', targetPath);
  }

  if (sectionId === 'home') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  clearTimeout(navTimeout);
  navTimeout = setTimeout(() => {
    isNavigating = false;
  }, 850);
}
