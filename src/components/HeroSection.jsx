import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const clickSound = useRef(null);

  useEffect(() => {
    clickSound.current = new Audio("/sounds/sound.mp3");
    clickSound.current.volume = 0.5;
  }, []);

  const playClick = (soundPath) => {
  try {
    const click = new Audio(soundPath);
    click.volume = 0.6;
    click.play().catch(() => {});
  } catch (err) {
    console.error("Sound error:", err);
  }
};


  const slides = [
  {
    id: 1,
    image: "/images/hand_wash.avif",
    title: "PURE HYGIENE",
    subtitle: "Your partner to Hygiene Solutions",
    description: "Pure Hygiene is a leading B2B supplier...",
    buttonText: "Explore Our Products",
    buttonLink: "/products",
    accent: "#1e75bc",
    sound: "/sounds/menu click.wav",
  },
  {
    id: 2,
    image: "/images/hero2.jpeg",
    title: "ECO SOLUTIONS",
    subtitle: "Sustainable Cleaning Products",
    description: "Leading the way in environmentally conscious...",
    buttonText: "Learn More",
    buttonLink: "/about",
    accent: "#22c55e",
    sound: "/sounds/menu click.wav", 
  },
  {
    id: 3,
    image: "/images/hero-1.jpeg",
    title: "PREMIUM CARE",
    subtitle: "Quality You Can Trust",
    description: "Premium hygiene solutions designed for...",
    buttonText: "Get Started",
    buttonLink: "/products",
    accent: "#f59e0b",
    sound: "/sounds/menu click.wav", 
  },
  {
    id: 4,
    image: "/images/hero-3.jpeg",
    title: "EXPERT STRENGTH",
    subtitle: "Industrial Strength Solutions",
    description: "Heavy-duty cleaning solutions...",
    buttonText: "View Catalog",
    buttonLink: "/products",
    accent: "#ef4444",
    sound: "/sounds/menu click.wav", 
  },
   {
    id: 5,
    image: "/images/hero_org.webp", 
    title: "SMART CLEAN",
    subtitle: "Technology Meets Hygiene",
    description: "Advanced cleaning technology for modern businesses.",
    buttonText: "Discover More",
    buttonLink: "/about",
    accent: "#8b5cf6", // A purple tone
    sound: "/sounds/menu click.wav",
  },
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20 md:pt-28 lg:pt-32">
      {/* Crossfade Layer */}
      <AnimatePresence>
       <motion.img
        key={currentSlide}
        src={slides[currentSlide].image}
        alt="Hero Background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full  object-cover"
      />

      </AnimatePresence>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6">
  <AnimatePresence mode="wait">
    <motion.div
      key={`content-${currentSlide}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-center text-white max-w-5xl"
    >
      <motion.h1
        className="text-4xl sm:text-6xl md:text-8xl font-bold mb-8 tracking-wide uppercase drop-shadow-2xl"
        style={{
          textShadow: `0 0 30px ${slides[currentSlide].accent}50`,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.08,
              delayChildren: 0.3,
            },
          },
        }}
      >
        <span className="inline-flex flex-wrap justify-center">
          {slides[currentSlide].title.split("").map((char, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      <motion.p
        className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg inline-block"
        style={{ color: slides[currentSlide].accent }}
      >
        {slides[currentSlide].subtitle}
      </motion.p>
      <motion.p className="text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto">
        {slides[currentSlide].description}
      </motion.p>

      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: `0 20px 40px ${slides[currentSlide].accent}40`,
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        onClick={() => {
          playClick(slides[currentSlide].sound);
          if (slides[currentSlide].buttonLink.endsWith(".pdf")) {
            window.open(slides[currentSlide].buttonLink, "_blank");
          } else {
            window.location.href = slides[currentSlide].buttonLink;
          }
        }}
        className="inline-block px-8 sm:px-12 py-4 text-base sm:text-xl font-semibold rounded-lg text-white transition-all"
        style={{ backgroundColor: slides[currentSlide].accent }}
      >
        {slides[currentSlide].buttonText}
      </motion.button>
    </motion.div>
  </AnimatePresence>
</div>

      {/* Arrows */}
      <button
        onClick={() => {
          playClick(slides[currentSlide].sound);

          prevSlide();
        }}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 flex items-center justify-center"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={() => {
          //playClick(slides[currentSlide].sound);

          nextSlide();
        }}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 flex items-center justify-center"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
             //playClick(slides[currentSlide].sound);

              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentSlide
                ? "bg-white border-white shadow-lg"
                : "bg-transparent border-white/50 hover:border-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
