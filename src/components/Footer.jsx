
export default function Footer() {
  return (
    <footer className="relative bg-[#1e75bc] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        {/* Logo or name */}
        <div className="text-lg font-semibold tracking-wide">
          © {new Date().getFullYear()} Pure Hygiene. All rights reserved.
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap gap-6 text-sm font-light">
          <a href="/about" className="hover:text-blue-300 transition">About Us</a>
          <a href="/products" className="hover:text-blue-300 transition">Products</a>
          <a href="/career" className="hover:text-blue-300 transition">Careers</a>
          <a href="/contact" className="hover:text-blue-300 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}
