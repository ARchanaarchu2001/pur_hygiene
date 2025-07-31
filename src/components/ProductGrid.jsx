import { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    slug: "dispensers",
    title: "Dispensers",
    description: "Premium dispensing solutions for every need",
    icon: "/images/dispenser1.png",
  },
  {
    slug: "paper",
    title: "Paper & Napkins",
    description: "Quality paper products for hygiene & comfort",
    icon: "/images/paper_roll.png",
  },
  {
    slug: "chemicals",
    title: "Chemicals",
    description: "Professional cleaning & sanitizing solutions",
    icon: "/images/detergent1.png",
  },
  {
    slug: "cleaning-tools",
    title: "Cleaning Tools",
    description: "Essential tools for effective cleaning",
    icon: "/images/broom.png",
  },
  {
    slug: "packaging",
    title: "Food Packaging",
    description: "Safe & sustainable packaging solutions",
    icon: "/images/food package1.png",
  },
  {
    slug: "ppe",
    title: "PPE & Gloves",
    description: "Professional protection equipment",
    icon: "/images/gloves1.png",
  },
];

export default function ProductGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Enhanced Header Section */}
      <motion.div 
        className="bg-gradient-to-r from-[#006E38] to-[#1e75bd] px-4 py-16 relative overflow-hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 30, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        
        <div className="mx-auto max-w-7xl text-center relative z-10">
          <motion.h1 
            className="mb-4 text-5xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Product Categories
          </motion.h1>
          <motion.p 
            className="mx-auto max-w-2xl text-xl text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our comprehensive range of professional products
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <section className="relative mx-auto max-w-7xl px-4 py-16">
        {/* Enhanced background pattern with animations */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-10 left-10 w-32 h-32 bg-[#006E38]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -10, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-40 right-20 w-48 h-48 bg-[#1e75bd]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -30, 0],
              y: [0, 15, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#006E38]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 25, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>
        
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const isHovered = hoveredCard === category.slug;
            
            return (
              <motion.div
                key={category.slug}
                className="group cursor-pointer block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -12,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                onMouseEnter={() => setHoveredCard(category.slug)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  console.log(`Navigate to /products/${category.slug}`);
                }}
              >
                {/* Enhanced Card Container */}
                <motion.div 
                  className={`
                    relative overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm border-2 p-8
                    transition-all duration-500 ease-out
                    ${isHovered 
                      ? 'border-[#006E38] shadow-2xl shadow-[#006E38]/20 bg-white' 
                      : 'border-gray-200/50 shadow-lg hover:shadow-xl'
                    }
                  `}
                  whileHover={{
                    boxShadow: "0 25px 50px -12px rgba(0, 110, 56, 0.25)",
                    transition: { duration: 0.3 }
                  }}
                >
                  
                  {/* Animated Background Gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#006E38]/5 via-transparent to-[#1e75bd]/5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Enhanced Icon Section */}
                  <div className="mb-8 flex justify-center relative">
                    {/* Outer pulsing ring */}
                    {/* <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#006E38]/20"
                      animate={isHovered ? {
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0.8, 0.3],
                        borderColor: ["rgba(0, 110, 56, 0.2)", "rgba(30, 117, 188, 0.4)", "rgba(0, 110, 56, 0.2)"]
                      } : {}}
                      transition={{
                        duration: 2,
                        repeat: isHovered ? Infinity : 0,
                        ease: "easeInOut"
                      }}
                    /> */}
                    
                    {/* Main icon container with enhanced animations */}
                    {/* <motion.div
                      className={`
                        relative w-40 h-40 rounded-full flex items-center justify-center z-10
                        transition-all duration-500
                        ${isHovered 
                          ? 'bg-gradient-to-r from-[#006E38] to-[#1e75bd]' 
                          : 'bg-gray-100'
                        }
                      `}
                      animate={isHovered ? { 
                        scale: 1.15,
                        rotate: [0, -3, 3, 0],
                        y: [-2, -8, -2]
                      } : { 
                        scale: 1, 
                        rotate: 0,
                        y: 0
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15,
                        rotate: {
                          duration: 3,
                          repeat: isHovered ? Infinity : 0,
                          ease: "easeInOut"
                        },
                        y: {
                          duration: 2.5,
                          repeat: isHovered ? Infinity : 0,
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={{
                        boxShadow: "0 15px 30px rgba(0, 110, 56, 0.4)"
                      }}
                    > */}
                      <motion.img
                      src={category.icon}
                      alt={category.title}
                      className="w-40 h-40 object-contain relative z-10"
                      initial={{ scale: 1, rotate: 0 }}
                      animate={isHovered ? { 
                        scale: 1.3, 
                        rotate: [0, -5, 5, 0],
                        y: [-5, -10, -5]
                      } : { 
                        scale: 1, 
                        rotate: 0,
                        y: 0
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 15,
                        rotate: {
                          duration: 2,
                          repeat: isHovered ? Infinity : 0,
                          ease: "easeInOut"
                        },
                        y: {
                          duration: 3,
                          repeat: isHovered ? Infinity : 0,
                          ease: "easeInOut"
                        }
                      }}
                      whileHover={{
                        filter: "drop-shadow(0 10px 20px rgba(0, 110, 56, 0.3))"
                      }}
                    />

                    {/* </motion.div> */}

                    {/* Floating particles effect */}
                    {isHovered && (
                      <>
                        {[...Array(8)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-[#006E38] to-[#1e75bd] rounded-full"
                            initial={{ 
                              opacity: 0,
                              scale: 0,
                              x: 0,
                              y: 0
                            }}
                            animate={{ 
                              opacity: [0, 1, 0],
                              scale: [0, 1, 0],
                              x: Math.cos(i * 45 * Math.PI / 180) * 80,
                              y: Math.sin(i * 45 * Math.PI / 180) * 80,
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              delay: i * 0.15,
                              ease: "easeOut"
                            }}
                          />
                        ))}
                      </>
                    )}
                  </div>

                  {/* Enhanced Content */}
                  <div className="text-center relative z-10">
                    <motion.h3 
                      className={`
                        mb-4 text-2xl font-bold transition-all duration-500
                        ${isHovered ? 'text-[#006E38] scale-105' : 'text-gray-900'}
                      `}
                      animate={isHovered ? {
                        backgroundImage: "linear-gradient(45deg, #006E38, #1e75bd)",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent"
                      } : {}}
                    >
                      {category.title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-600 mb-8 leading-relaxed text-lg"
                      animate={isHovered ? { scale: 1.02 } : { scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.description}
                    </motion.p>
                    
                    {/* Enhanced Action Button */}
                    <motion.a
                      href="/catalogue.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        inline-flex items-center justify-center bg-gradient-to-r from-[#006E38] to-[#1e75bd]
                        text-white font-bold px-8 py-3 rounded-full shadow-lg transition-all duration-300
                        relative overflow-hidden group
                      `}
                      whileHover={{ 
                        scale: 1.08,
                        boxShadow: "0 15px 35px rgba(0, 110, 56, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Button shine effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: "-100%" }}
                        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      />
                      
                      <span className="relative z-10">View Products</span>
                      <motion.div
                        animate={isHovered ? { x: 5 } : { x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </motion.div>
                    </motion.a>
                  </div>

                  {/* Enhanced accent line with wave effect */}
                  <motion.div 
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#006E38] to-[#1e75bd]"
                    initial={{ width: 0 }}
                    animate={{ width: isHovered ? "100%" : 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                  
                  {/* Subtle corner accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-0 h-0 border-l-[30px] border-l-transparent border-t-[30px] border-t-[#006E38]/10"
                    animate={{ 
                      borderTopColor: isHovered ? "rgba(0, 110, 56, 0.2)" : "rgba(0, 110, 56, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <motion.div 
          className="relative mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            whileHover={{ 
              scale: 1.08, 
              boxShadow: "0 20px 40px rgba(30, 117, 188, 0.4)",
              background: "linear-gradient(45deg, #006E38, #1e75bd)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#006E38] to-[#1e75bd] px-12 py-4 text-xl font-bold tracking-wide text-white shadow-xl relative overflow-hidden group"
            onClick={() => console.log("Navigate to /products")}
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
            
            <span className="relative z-10">Browse All Products</span>
            <motion.div
              whileHover={{ x: 8 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="ml-3 h-6 w-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}