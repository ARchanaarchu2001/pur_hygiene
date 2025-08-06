import WhatsAppFloat from "../components/WhatsAppFloat";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_utae7om",     
        "template_gc9riem",    
        formRef.current,
        "n60UcikV28Phzu1Qt"      
      )
      .then(
        () => {
          setSending(false);
          setSuccess(true);
          formRef.current.reset();
        },
        (error) => {
          console.error("Email send error:", error);
          setSending(false);
        }
      );
  };

  return (
    <section className="min-h-screen bg-white">
      {/* Hero Heading */}
      <div className="bg-gradient-to-r from-[#1e75bc] to-[#006f38] text-white py-30">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90">Advance your career in a purpose-driven company where innovation meets impact—talk to us today</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div>
          <h2 className="text-3xl font-semibold text-[#1e75bc] mb-6">Our Offices</h2>
          <p className="text-lg mb-4">We’d love to hear from you. Whether you’re a business client, distributor, or partner, feel free to reach out.</p>

          <div className="space-y-6 text-md ">
            <div>
              <h3 className="font-bold text-[#1e75bc]">Head Office</h3>
              <p>DIP 1 Street 32 warehouse No. 17&18<br />
                P.O Box 23602, DUBAI,UAE</p>
            </div>

            <div>
              <h3 className="font-bold text-[#1e75bc]">Phone</h3>
              <p>+971 55 497 4887</p>
            </div>
            <div>
              <h3 className="font-bold text-[#1e75bc]"></h3>
              <p>+971 4 342 4887</p>
            </div>

            <div>
              <h3 className="font-bold text-[#1e75bc]">Email</h3>
              <p>info@purehygiene.com</p>
            </div>
          </div>
        </div>

        <WhatsAppFloat />

        {/* Contact Form */}
        <div>
          <h2 className="text-3xl font-semibold text-alfanarGold mb-6">How Can I Help You</h2>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block font-tajawal mb-1">Your Name</label>
              <input name="user_name" required type="text" className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e75bc]" />
            </div>

            <div>
              <label className="block font-tajawal mb-1">Email Address</label>
              <input name="user_email" required type="email" className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e75bc]" />
            </div>

            <div>
              <label className="block font-tajawal mb-1">Message</label>
              <textarea name="message" required rows="5" className="w-full rounded border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e75bc]" />
            </div>

            {success && <p className="text-green-600 font-medium">Message sent successfully!</p>}

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #1e75bc" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              type="submit"
              disabled={sending}
              className="mt-10 inline-block rounded bg-[#1e75bc] px-10 py-3 text-lg font-bold tracking-wide text-white cursor-pointer"
            >
              {sending ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
}
