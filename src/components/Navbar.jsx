import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Use a fresh audio instance on each click
  const playClick = () => {
    try {
      const sound = new Audio("/sounds/1.mp3");
      sound.volume = .3;
      sound.play().catch((err) => console.warn("Audio play error:", err));
    } catch (error) {
      console.error("PlayClick failed:", error);
    }
  };

  const handleNavClick = (target) => {
    playClick();
    setTimeout(() => {
      window.location.href = target;
    }, 150);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        !isHomePage || scrolled
          ? 'bg-white shadow-lg backdrop-blur-sm text-[#1e75bc]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-25">
          {/* Logo */}
          <div className="flex items-center h-30 px-10 ">
            <a href="/">
            <img src="/images/Logo.png" alt="Pure Hygiene logo" className="h-35 w-auto" />
          </a>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex ml-10 space-x-8 items-baseline">
            {["Home", "About", "Products", "Career", "Contact"].map((item) => {
              const target = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <button
                  key={item}
                  onClick={() => handleNavClick(target)}
                  className={`px-3 py-2 text-xl font-bold  cursor-pointer transition-colors duration-300 hover:text-[#1e75bc] ${
                    !isHomePage || scrolled ? 'text-[#1e75bc]' : 'text-white'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => {
                playClick();
                setMenuOpen(!menuOpen);
              }}
              className={`p-2 rounded-md transition-colors duration-300 ${
                scrolled ? 'text-gray-700 hover:text-[#1e75bc]' : 'text-[#1e75bc] hover:text-[#1e75bc]'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md rounded-lg mt-2 p-4 space-y-4 transition-all duration-300">
            {["Home", "About", "Products", "Career", "Contact"].map((item) => {
              const target = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <button
                  key={item}
                  onClick={() => {
                    setMenuOpen(false);
                    handleNavClick(target);
                  }}
                  className="block w-full text-left text-[#1e75bc] font-semibold text-lg px-4 py-2 hover:bg-gray-100 rounded"
                >
                  {item}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
