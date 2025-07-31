import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: "/images/hero1.jpeg",
      title: "PURE HYGIENE",
      subtitle: "Your partner to Hygiene Solutions",
      description: "Pure Hygiene is a leading B2B supplier of hygiene and cleaning solutions across the GCC. We empower businesses in hospitality, F&B, healthcare, and commercial sectors with eco-conscious, reliable, and high-quality products for daily operations.",
      buttonText: "Explore Our Products",
      accent: "#1e75bc"
    },
    {
      id: 2,
      image: "/images/hero2.jpeg",
      title: "ECO SOLUTIONS", 
      subtitle: "Sustainable Cleaning Products",
      description: "Leading the way in environmentally conscious cleaning solutions. Our eco-friendly products deliver exceptional results while protecting the planet for future generations.",
      buttonText: "Learn More",
      accent: "#22c55e"
    },
    {
      id: 3,
      image: "/images/hero3.jpeg",
      title: "PREMIUM CARE",
      subtitle: "Quality You Can Trust", 
      description: "Premium hygiene solutions designed for the most demanding environments. Healthcare facilities and luxury hospitality trust our proven track record.",
      buttonText: "Get Started",
      accent: "#f59e0b"
    },
    {
      id: 4,
      image: "/images/hero4.jpeg",
      title: "PROFESSIONAL GRADE",
      subtitle: "Industrial Strength Solutions",
      description: "Heavy-duty cleaning solutions for industrial and commercial applications. Built to handle the toughest cleaning challenges with consistent, reliable results.",
      buttonText: "View Catalog",
      accent: "#ef4444"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Increased to 6 seconds for better readability
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20 md:pt-28 lg:pt-32 ">
      {/* Base image - always visible to prevent background flash */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      />
      
      {/* Crossfade layer for smooth transitions */}
      <AnimatePresence>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        />
      </AnimatePresence>
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-start justify-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${currentSlide}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center text-white max-w-4xl"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-wide uppercase drop-shadow-2xl"
              style={{ textShadow: `0 0 30px ${slides[currentSlide].accent}50` }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 sm:py-4 rounded-xl inline-block"
              style={{ color: slides[currentSlide].accent }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            <motion.p className="text-base sm:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
              {slides[currentSlide].description}
            </motion.p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: `0 20px 40px ${slides[currentSlide].accent}40` }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg text-white transition-all"
              style={{ backgroundColor: slides[currentSlide].accent }}
            >
              {slides[currentSlide].buttonText}
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors flex items-center justify-center"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white border-white shadow-lg'
                : 'bg-transparent border-white/50 hover:border-white/80'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <motion.div
          key={`progress-${currentSlide}`}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full"
          style={{ backgroundColor: slides[currentSlide].accent }}
        />
      </div> */}
    </section>
  );
}