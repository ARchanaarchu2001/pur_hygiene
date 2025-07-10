import React from 'react';

export default function About() {
  return (
    <div className="relative min-h-screen bg-white  ">
      
      {/* Main About Section */}
      <section className="relative z-20 -mt-16 overflow-hidden py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/about_image.jpg"
              alt="Our team and company"
              className="h-full w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-0 rounded-xl ring-2 ring-[#1e75bc]/40" />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-semibold text-[#1e75bc] sm:text-5xl">
              Our&nbsp;Story
            </h2>

            <p className="mt-6 text-lg text-gray-700 sm:text-xl">
              Founded with a vision to transform the industry, we have grown from a small startup 
              to a leading company serving clients worldwide. Our commitment to excellence and 
              innovation drives everything we do, ensuring we deliver outstanding results for 
              our customers and partners.
            </p>

            {/* Mission & Vision */}
            <div className="mt-10 space-y-8">
              {/* Mission */}
              <div className="rounded-lg border-l-4 border-[#1e75bc] bg-blue-50 p-6">
                <h3 className="mb-2 text-2xl font-semibold text-[#1e75bc]">
                  Our&nbsp;Mission
                </h3>
                <p className="text-gray-700">
                  To deliver exceptional solutions that empower businesses to achieve their goals 
                  while maintaining the highest standards of quality, integrity, and customer service.
                </p>
              </div>

              {/* Vision */}
              <div className="rounded-lg border-l-4 border-[#006f38] bg-green-50 p-6">
                <h3 className="mb-2 text-2xl font-semibold text-[#006f38]">
                  Our&nbsp;Vision
                </h3>
                <p className="text-gray-700">
                  To be the industry leader, recognized for our innovation, sustainability, 
                  and commitment to creating value for our clients, employees, and communities.
                </p>
              </div>
            </div>

            {/* Key Points */}
            <ul className="mt-10 space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[#006f38]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 00-1.414 1.414l4.828 4.828a1 1 0 001.414 0l9-9a1 1 0 00-1.414-1.414l-.328.293z" />
                </svg>
                Award-winning customer service and support
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[#006f38]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 00-1.414 1.414l4.828 4.828a1 1 0 001.414 0l9-9a1 1 0 00-1.414-1.414l-.328.293z" />
                </svg>
                Cutting-edge technology and innovative solutions
              </li>
              <li className="flex items-start gap-3">
                <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[#006f38]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 00-1.414 1.414l4.828 4.828a1 1 0 001.414 0l9-9a1 1 0 00-1.414-1.414l-.328.293z" />
                </svg>
                Sustainable practices and environmental responsibility
              </li>
            </ul>

            {/* CTA */}
            <a
              href="/contact"
              className="mt-10 inline-block rounded bg-[#006f38] px-10 py-3 text-sm font-medium tracking-wider text-white transition hover:bg-[#005a2e]"
            >
              Get&nbsp;in&nbsp;Touch
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}