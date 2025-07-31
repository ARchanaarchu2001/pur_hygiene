import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false); // close menu on route change
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleNavLink = () => {
  const audio = new Audio('/sounds/navbar.wav'); 
  audio.play();
  
};

  const links = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Product", to: "/products" },
    { label: "Careers", to: "/career" },
    { label: "Contact Us", to: "/contact" },
  ];

  const isScrolledOrNotHome = scrolled || !isHome;

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 w-full transition-all duration-300 ease-in-out
          bg-white/95 backdrop-blur-md shadow-md text-[#1e75bc]
        `}
      >
        <div
          className={`
            mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 transition-all duration-300
            ${isScrolledOrNotHome ? "py-1 sm:py-2" : "py-2 sm:py-3"}
          `}
        >
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 relative">
            <img
              src="/images/Logo.png"
              alt="Pure Hygiene logo"
              className={`
                transition-all duration-300 object-contain
                ${isScrolledOrNotHome ? "h-12 sm:h-14" : "h-20 sm:h-20"}
              `}
            />
            <span className="sr-only">Pure Hygiene</span>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 justify-center">
            <div className="flex gap-3 rounded-full px-4 py-1.5 border bg-white shadow-sm border-gray-200">
              {links.map(({ label, to }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) => `
                    px-4 py-2 rounded-full transition-all duration-200 font-bold text-[#1e75bc] text-md whitespace-nowrap
                    ${isActive ? "bg-[#1e75bc] text-white shadow-md transform scale-105" : "hover:bg-[#1e75bc]/10"}
                  `}
                  onClick={handleNavLink}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative flex h-10 w-10 items-center justify-center rounded-md transition-colors text-[#1e75bc] hover:text-[#22c55e] hover:bg-[#1e75bc]/10"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="relative w-6 h-6">
              {/* Top bar */}
              <span
                className={`
                  absolute left-0 h-0.5 w-6 bg-current transform transition-all duration-300
                  ${menuOpen ? "rotate-45 top-2.5" : "top-1 rotate-0"}
                `}
              />
              {/* Middle bar */}
              <span
                className={`
                  absolute left-0 top-2.5 h-0.5 w-6 bg-current transition-all duration-300
                  ${menuOpen ? "opacity-0" : "opacity-100"}
                `}
              />
              {/* Bottom bar */}
              <span
                className={`
                  absolute left-0 h-0.5 w-6 bg-current transform transition-all duration-300
                  ${menuOpen ? "-rotate-45 top-2.5" : "top-4 rotate-0"}
                `}
              />
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - Only show when menu is open */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[60]"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer - Higher z-index */}
      <nav
        className={`
          lg:hidden fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[70]
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Header inside drawer */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
            <img src="/images/Logo.png" alt="Pure Hygiene" className="h-8" />
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-[#1e75bc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Links - Ensure they're visible */}
          <div className="flex-1 overflow-y-auto bg-white">
            {links.map(({ label, to }, index) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `
                  block px-6 py-5 text-lg font-semibold border-b border-gray-100 transition-all duration-200
                  ${isActive 
                    ? "text-white bg-[#1e75bc] border-l-4 border-l-[#22c55e] shadow-sm" 
                    : "text-gray-700 hover:text-[#1e75bc] hover:bg-gray-50 hover:border-l-4 hover:border-l-[#1e75bc]/20"}
                `}
                style={{ 
                  // Ensure each link is properly positioned
                  transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                  transitionDelay: menuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 text-center text-sm text-gray-500 bg-white">
            © 2024 Pure Hygiene. All rights reserved.
          </div>
        </div>
      </nav>
    </>
  );
}