
import { useEffect, useState } from "react";
import { NavLink,useLocation } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();                 
  const isHome = location.pathname === "/";         


 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80); 
    onScroll();                    
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home",        to: "/" },
    { label: "About Us",    to: "/about" },
    { label: "Product",     to: "/products" },
    { label: "Careers",   to: "/career" },
    { label: "Contact Us",  to: "/contact" },
  ];

  
  return (
    <header
  className={[
    "sticky top-0 z-50 transition-colors duration-300",
    scrolled || !isHome  
      ? "bg-white/90 backdrop-blur shadow-sm text-[#1E75BC]"
      : "bg-transparent text-white",
  ].join(" ")}
>

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* logo */}
        <NavLink to="/" className="flex items-center gap-2">
          <img src="/images/Logo.png" alt="Pure Hygiene logo" className="h-12 w-auto" />
          <span className="sr-only">Pure Hygiene</span>
        </NavLink>

        {/* desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              [
                "relative uppercase tracking-wide text-base font-bold transition-colors",

                isActive &&
                  "text-alfanarGold after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-alfanarGold",

                !isActive &&
                          (scrolled || !isHome
                  ? "text-[#1e75bc] hover:text-alfanarGold visited:text-[#1e75bc]"
                  : "text-white hover:text-alfanarGold visited:text-white"
        ),
              ]
                .filter(Boolean)         
                .join(" ")
            }
          >
            {label}
          </NavLink>
        ))}

        </nav>

        {/* burger */}
        
<button
  onClick={() => setMenuOpen(!menuOpen)}
 className={[
  "lg:hidden rounded p-2 transition-colors",
  scrolled || !isHome
    ? "text-black hover:text-alfanarGold"
    : "text-white hover:text-alfanarGold",
].join(" ")}
  aria-label="Toggle menu"
>
  <svg
    className="h-6 w-6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    {menuOpen ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    ) : (
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 12h18M3 18h18" />
    )}
  </svg>
</button>

      </div>

      {/* mobile panel */}
      {menuOpen && (
        <nav className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur shadow-md">
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                [
                  "block px-4 py-3 text-sm font-bold uppercase tracking-wide",
                  isActive ? "text-alfanarGold" : "text-[#1E75BC] hover:text-alfanarGold",
                ].join(" ")
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}
