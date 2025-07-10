import { useState } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom"; 

const categories = [
  {
    slug: "dispensers",
    title: "Dispensers",
    description: "Premium dispensing solutions for every need",
    icon: "/images/dispenser.png",
  },
  {
    slug: "paper",
    title: "Paper & Napkins",
    description: "Quality paper products for hygiene & comfort",
    icon: "/images/paper.png",
  },
  {
    slug: "chemicals",
    title: "Chemicals",
    description: "Professional cleaning & sanitizing solutions",
    icon: "/images/chemicals.png",
  },
  {
    slug: "cleaning-tools",
    title: "Cleaning Tools",
    description: "Essential tools for effective cleaning",
    icon: "/images/cleaning-tools.png",
  },
  {
    slug: "packaging",
    title: "Food Packaging",
    description: "Safe & sustainable packaging solutions",
    icon: "/images/packaging.png",
  },
  {
    slug: "ppe",
    title: "PPE & Gloves",
    description: "Professional protection equipment",
    icon: "/images/ppe.png",
  },
];

export default function ProductGrid() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-[#006E38] to-[#1e75bd] px-4 py-16">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">
            Product Categories
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-white/90">
            Discover our comprehensive range of professional products
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative mx-auto max-w-7xl px-4 py-16">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#006E38]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-48 h-48 bg-[#1e75bd]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-[#006E38]/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => {
            const isHovered = hoveredCard === category.slug;
            
            return (
              // For demo purposes, using div. In your project, wrap this with Link
              // <Link to={`/products/${category.slug}`} className="block">
              <div
                key={category.slug}
                className="group cursor-pointer block"
                onMouseEnter={() => setHoveredCard(category.slug)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => {
                  // Demo click handler - replace with actual navigation
                  console.log(`Navigate to /products/${category.slug}`);
                  // In your project, this will be handled by the Link component
                }}
              >
                {/* Card Container */}
                <div className={`
                  relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-sm border-2 p-8
                  transition-all duration-300 ease-out
                  ${isHovered 
                    ? 'border-[#006E38] shadow-xl shadow-[#006E38]/15 -translate-y-2 bg-white' 
                    : 'border-gray-200 shadow-md hover:shadow-lg'
                  }
                `}>
                  
                  {/* Icon Section */}
                  <div className="mb-6 flex justify-center">
                    <div className={`
                      relative w-20 h-20 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${isHovered 
                        ? 'bg-gradient-to-r from-[#006E38] to-[#1e75bd] scale-110' 
                        : 'bg-gray-100'
                      }
                    `}>
                      <img
                        src={category.icon}
                        alt={category.title}
                        className={`
                          w-10 h-10 object-contain transition-all duration-300
                          ${isHovered ? 'filter brightness-0 invert' : ''}
                        `}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className={`
                      mb-3 text-xl font-bold transition-colors duration-300
                      ${isHovered ? 'text-[#006E38]' : 'text-gray-900'}
                    `}>
                      {category.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    {/* Action Button */}
                    {/* <div className={`
                      inline-flex items-center font-medium transition-all duration-300
                      ${isHovered ? 'text-[#1e75bd]' : 'text-gray-500'}
                    `}>
                      <span>View Products</span>
                      <ArrowRight className={`
                        ml-2 h-4 w-4 transition-transform duration-300
                        ${isHovered ? 'translate-x-1' : 'translate-x-0'}
                      `} />
                    </div> */}

                    <a
                    href="/catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      inline-flex items-center justify-center bg-gradient-to-r from-[#006E38] to-[#1e75bd]
                      text-white font-medium px-4 py-2 rounded-full shadow-md hover:scale-105 transition
                      ${isHovered ? 'opacity-100' : 'opacity-90'}
                    `}
                  >
                    View Product
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>

                   {/* <a
                    href="/catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white bg-[#1e75bd] hover:bg-[#006E38] px-4 py-2 rounded-full shadow transition duration-300"
                  >
                    View Catalogue
                  </a> */}
                  </div>

                  {/* Subtle accent line */}
                  <div className={`
                    absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#006E38] to-[#1e75bd]
                    transition-all duration-300
                    ${isHovered ? 'w-full' : 'w-0'}
                  `}></div>
                </div>
              </div>
              // </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-16 text-center">
          {/* <Link to="/products"> */}
          <button 
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-[#006E38] to-[#1e75bd] px-8 py-4 text-white font-medium shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            onClick={() => {
              // Demo click handler - replace with actual navigation
              console.log('Navigate to /products');
            }}
          >
            <span>Browse All Products</span>
            <ChevronRight className="ml-2 h-5 w-5" />
          </button>
          {/* </Link> */}
        </div>
      </section>
    </div>
  );
}