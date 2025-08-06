import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function About() {
  const navigate = useNavigate();
  const soundRef = useRef(null);

  useEffect(() => {
  const audio = new Audio("/sounds/sound.mp3");
  audio.preload = "auto";
  audio.volume = .3;
  soundRef.current = audio;
}, []);

const handleButtonClick = () => {
  const audio = new Audio('/sounds/sound.mp3'); 
  audio.volume = .1;
  audio.play();
  audio.play().catch((err) => console.log("Audio blocked", err));
  navigate("/contact"); 
};



  return (
    <div className="relative min-h-screen bg-white">
      {/* Main About Section */}
      <section className="relative z-20  overflow-hidden py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          {/* Animated Image */}
<motion.div
  initial={{ opacity: 0, x: -100, scale: 0.9 }}
  whileInView={{ opacity: 1, x: 0, scale: 1 }}
  transition={{ duration: 1, ease: "easeOut" }}
  viewport={{ once: true }}
  className="relative w-full rounded-xl shadow-2xl p-[4px] overflow-hidden"
>
  {/* Animated Gradient Border */}
  <motion.div
    className="absolute inset-0"
    style={{
      backgroundImage:
        "linear-gradient(90deg, #1e75bc, #009688, #1e75bc, #009688)",
      backgroundSize: "300% 300%",
    }}
    animate={{
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    }}
    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
  />

  {/* Image Container */}
  <div className="relative z-10 bg-white rounded-xl overflow-hidden">
    <motion.img
      src="/images/water.png"
      alt="Our team and company"
      className="h-full w-full object-cover rounded-xl"
      initial={{ scale: 1.2 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.8 }}
    />
  </div>
</motion.div>


          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
   
<motion.h2
  className="text-4xl font-semibold text-[#1e75bc] sm:text-5xl relative inline-block"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <span className="relative ">
    <motion.span
      className="inline-flex gap-2"
      initial="hidden"
      whileInView="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08, delayChildren: 0.3 } },
      }}
    >
      {"Our Story".split(" ").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          {char + "  "}
        </motion.span>
      ))}
    </motion.span>

    {/* Underline AFTER text animation */}
    <motion.span
      className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-[#1e75bc] via-[#009688] to-[#1e75bc]"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 1.3 }} // delay after letters
      style={{ transformOrigin: "left" }}
    />
  </span>
</motion.h2>



            {/* Intro Paragraph */}
            <motion.p
              className="mt-6 text-lg text-gray-700 sm:text-xl leading-relaxed"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Founded with a vision to transform the industry, we have grown
              from a small startup to a leading company serving clients
              worldwide. Our commitment to excellence and innovation drives
              everything we do.
            </motion.p>

            {/* Mission & Vision with subtle animation */}
            <div className="mt-10 space-y-8">
              {/* Mission */}
              <motion.div
                className="rounded-lg border-l-4 border-[#1e75bc] bg-blue-50 p-6 shadow hover:shadow-lg"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="mb-2 text-2xl font-semibold text-[#1e75bc]">
                  Our Mission
                </h3>
                <p className="text-gray-700">
                  To deliver exceptional solutions that empower businesses to
                  achieve their goals with integrity and excellence.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="rounded-lg border-l-4 border-[#006f38] bg-green-50 p-6 shadow hover:shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="mb-2 text-2xl font-semibold text-[#006f38]">
                  Our Vision
                </h3>
                <p className="text-gray-700">
                  To be the industry leader recognized for innovation,
                  sustainability, and value creation.
                </p>
              </motion.div>
            </div>

            {/* Key Points */}
            <ul className="mt-10 space-y-3 text-gray-700">
              {[
                "Award-winning customer service and support",
                "Cutting-edge technology and innovative solutions",
                "Sustainable practices and environmental responsibility",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <svg
                    className="mt-1 h-4 w-4 flex-shrink-0 text-[#006f38]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 00-1.414 1.414l4.828 4.828a1 1 0 001.414 0l9-9a1 1 0 00-1.414-1.414l-.328.293z" />
                  </svg>
                  {point}
                </motion.li>
              ))}
            </ul>

            {/* CTA Button */}
    {/* <div className="relative inline-block">
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: [1, 0.6, 0], // fades while twinkling
              x: p.x,
              y: p.y,
              scale: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              times: [0, 0.5, 1],
            }}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              backgroundColor: p.color,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
              boxShadow: 0 0 8px ${p.color}, 
            }}
          />
        ))}
      </AnimatePresence>

<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative mt-10 inline-block rounded bg-[#006f38] px-10 py-3 text-lg font-bold tracking-wide text-white overflow-hidden"
>
  <span className="relative z-10">Get in Touch</span>
  <motion.span
    initial={{ x: "-150%" }}
    whileHover={{ x: "150%" }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
    style={{ transform: "skewX(-20deg)" }}
  />
</motion.button>
    </div> */}
    
<motion.button
  whileHover={{ scale: 1.05, boxShadow: "0 0 25px #1e75bc" }}
  whileTap={{ scale: 0.95 }}
  transition={{ duration: 0.3 }}
  className="mt-10 inline-block rounded bg-[#1e75bc] px-10 py-3 text-lg font-bold tracking-wide text-white cursor-pointer"
  onClick={handleButtonClick}
>
  Get in Touch
</motion.button>






          </motion.div>
        </div>
      </section>
    </div>
  );
}