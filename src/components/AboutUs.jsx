"use client";
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100, rotate: -5 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleButtonClick = () => {
    const audio = new Audio("/sounds/sound.wav");
    audio.volume = 0.1;
    audio.play();
    navigate("/contact");
  };

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#1e75bc] to-[#006f38] text-white py-30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-4xl md:text-6xl font-light mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.3 }}
            className="text-xl opacity-90 max-w-2xl mx-auto"
          >
            Pure Hygiene – your trusted partner in professional hygiene and cleaning solutions.
          </motion.p>
        </div>
      </section>

      {/* About Content */}
      <section className="relative z-20 -mt-16 py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={slideInLeft}
            viewport={{ once: true }}
            className="relative w-full overflow-hidden rounded-xl shadow-2xl group"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
              src="/images/water.png"
              alt="About Pure Hygiene"
              className="h-full w-full object-cover"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-[#1e75bc]/80 to-transparent flex items-end p-6"
            >
              <p className="text-white font-semibold text-lg">Pure Hygiene Excellence</p>
            </motion.div>
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-[#1e75bc]/40" />
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.h2
              variants={fadeUp}
              className="text-4xl font-semibold text-[#1e75bc] sm:text-5xl"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="bg-gradient-to-r from-[#1e75bc] via-[#006f38] to-[#1e75bc] bg-clip-text text-transparent bg-[length:200%_100%]"
              >
                Our Story
              </motion.span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg text-gray-700 sm:text-xl leading-relaxed"
            >
              Pure Hygiene is a specialized trading company dedicated to supplying businesses with high-quality disposables, tissue products, professional cleaning tools, and industrial detergents. We serve hospitality, healthcare, and corporate sectors with a focus on sustainability and reliability.
            </motion.p>

            {/* Vision and Mission */}
            <div className="mt-10 space-y-8">
              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border-l-4 border-[#006f38] bg-gradient-to-r from-green-50 to-green-100 p-6"
              >
                <h3 className="mb-2 text-2xl font-semibold text-[#006f38]">Our Vision</h3>
                <p className="text-gray-700">
                  To become the most trusted supplier of hygiene solutions, helping businesses maintain safe and professional environments.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ scale: 1.02 }}
                className="rounded-lg border-l-4 border-[#1e75bc] bg-gradient-to-r from-blue-50 to-blue-100 p-6"
              >
                <h3 className="mb-2 text-2xl font-semibold text-[#1e75bc]">Our Mission</h3>
                <ul className="list-disc pl-5 text-gray-700 space-y-2">
                  <li>Provide consistent, high-quality, cost-effective cleaning solutions.</li>
                  <li>Build long-term partnerships based on trust and satisfaction.</li>
                  <li>Promote eco-friendly and sustainable alternatives whenever possible.</li>
                </ul>
              </motion.div>
            </div>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px #1e75bc" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="mt-10 inline-block rounded bg-[#1e75bc] px-10 py-3 text-lg font-bold text-white"
              onClick={handleButtonClick}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us (Full Screen Width) */}
      <section className="w-full min-h-screen flex items-center bg-white py-5">
        <div className="w-full px-4 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-light text-[#1e75bc] mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Pure Hygiene, we are committed to providing top-quality solutions that ensure your business thrives with cleanliness, efficiency, and trust.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 px-4 sm:px-12 font-tajawal">
            {[
              ["Fast Delivery", "We ensure quick turnaround and timely delivery for all your hygiene needs."],
              ["Certified Products", "All our products meet strict industry standards for safety and performance."],
              ["Competitive Prices", "Premium hygiene solutions at cost-effective rates to fit your budget."],
              ["Professional Service", "Dedicated support and expert advice for every client we serve."],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-lg border-t-4 border-[#006f38] bg-white p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="mb-4 text-xl font-semibold text-[#1e75bc]">
                  {title}
                </h3>
                <p className="text-gray-600 text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Values Section */}
<section className="py-5 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, #1e75bc 1px, transparent 0)`,
      backgroundSize: '40px 40px'
    }}></div>
  </div>

  <div className="max-w-7xl mx-auto px-6 relative z-10">
    <motion.h2
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 }
      }}
      className="text-4xl font-semibold text-[#1e75bc] text-center mb-12"
    >
      <motion.span
        animate={{
          textShadow: [
            "0 0 10px rgba(30, 117, 188, 0.3)",
            "0 0 20px rgba(30, 117, 188, 0.6)",
            "0 0 10px rgba(30, 117, 188, 0.3)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Our Values
      </motion.span>
    </motion.h2>

    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.3, delayChildren: 0.2 }
        }
      }}
      viewport={{ once: true }}
      className="grid md:grid-cols-3 gap-8"
    >
      {[
        {
          title: "Reliability",
          color: "#1e75bc",
          desc: "Timely delivery and consistent quality, making us a trusted partner.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          ),
        },
        {
          title: "Sustainability",
          color: "#006f38",
          desc: "We promote eco-friendly alternatives for responsible consumption.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          ),
        },
        {
          title: "Excellence",
          color: "#1e75bc",
          desc: "We maintain the highest standards of quality and customer care.",
          icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          ),
        },
      ].map((value, index) => (
        <motion.div
          key={index}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 }
          }}
          whileHover={{
            scale: 1.05,
            y: -10,
            boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
          }}
          className="text-center p-8 border rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
        >
          <motion.div
            whileHover={{ rotate: 360, scale: 1.2 }}
            transition={{ duration: 0.6 }}
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
            style={{ backgroundColor: value.color }}
          >
            <svg
              className="w-10 h-10 text-white relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {value.icon}
            </svg>
          </motion.div>
          <motion.h3
            className="text-2xl font-semibold mb-4 group-hover:scale-105 transition-transform duration-300"
            style={{ color: value.color }}
          >
            {value.title}
          </motion.h3>
          <p className="text-gray-700 leading-relaxed text-lg">{value.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Final CTA Section */}
<section className="bg-[#1e75bc] text-white py-5 mt-16">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl font-semibold mb-6"
    >
      Ready to Elevate Your Hygiene Standards?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="text-lg opacity-90 max-w-2xl mx-auto mb-8"
    >
      Contact Pure Hygiene today and let’s build a cleaner, healthier future together.
    </motion.p>
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px white" }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={() => {
        const click = new Audio("/sounds/sound.wav");
        click.volume = 0.1;
        click.play();
        setTimeout(() => {
          window.location.href = "/contact";
        }, 150);
      }}
      className="bg-white text-[#1e75bc] px-8 py-3 rounded-lg font-semibold text-lg"
    >
      Contact Us Today
    </motion.button>
  </div>
</section>


    </div>
  );
}
