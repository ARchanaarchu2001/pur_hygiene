import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1e75bc] text-white pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo & Brief */}
        <div>
          <Link to="/" className="flex items-center gap-3">
           <div className="bg-white  rounded shadow-md inline-block">
            <img
              src="/images/Logo.png"
              alt="Pure Hygiene Logo"
              className="h-20 w-auto"
            />
          </div>

          </Link>
          <p className="mt-4 text-sm text-white/80">
            Delivering professional hygiene and cleaning solutions across the UAE. Committed to quality, sustainability, and service excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-blue-200 transition">About Us</Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-blue-200 transition">Products</Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-blue-200 transition">Careers</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-200 transition">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
           <li>
  <a
    href="https://www.google.com/maps?q=24.98397247784893,55.144756275374945"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-200 transition"
  >
    📍 View Location on Google Maps
  </a>
</li>


            <li>📞 +971 4 342 4887</li>
            <li>📧 info@purehygiene.ae</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a
              href="https://www.instagram.com/purehygiene.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61578227615153"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@purehygiene.ae"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              <SiTiktok />
            </a>
            <a
              href="https://www.linkedin.com/in/pure-hygiene-5990a5375"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://x.com/purehygiene?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Pure Hygiene. All rights reserved.
      </div>
    </footer>
  );
}
