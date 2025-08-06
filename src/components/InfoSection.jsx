import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function InfoSection() {
  const items = [
  {
    title: "Featured Products",
    description: "Showcasing our top rated products that reflect our commitment to excellence.",
    image: "/images/featured-products.png", 
    buttonText: "View Products",
    link: "/products",
  },
  {
    title: "Promotions",
    description: "Browse our current offers designed to provide outstanding quality at reduced prices",
    image: "/images/promotion.png", 
    buttonText: "Check Offers",
    link: "/",
  },
  {
    title: "Training & Tutorials",
    description: "Enhance your skills with our expert-led instructional videos, designed to ensure optimal product use.",
    image: "/images/video_tutorial.jpg", 
    buttonText: "Watch Now",
    link: "/",
  },
];


  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-gray-50 py-16 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-[#1e75bc] mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-6">{item.description}</p>
                <motion.a
                  href={item.link}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center bg-gradient-to-r from-[#006f38] to-[#1e75bc] text-white px-6 py-3 rounded-full font-semibold"
                >
                  {item.buttonText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
