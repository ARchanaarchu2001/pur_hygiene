import React from 'react';

export default function AboutPage() {
  return (
    <div className=" min-h-screen bg-white  ">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#1e75bc] to-[#006f38] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">About Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Learn more about our mission, values, and the team behind our success
          </p>
        </div>
      </div>

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

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#1e75bc] text-center mb-12">
            Our&nbsp;Values
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e75bc] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e75bc] mb-3">Excellence</h3>
              <p className="text-gray-700">
                We strive for excellence in everything we do, setting high standards and 
                continuously improving our processes and outcomes.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#006f38] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#006f38] mb-3">Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of teamwork and collaboration, working together 
                to achieve common goals and create lasting partnerships.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#1e75bc] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#1e75bc] mb-3">Innovation</h3>
              <p className="text-gray-700">
                We embrace innovation and creativity, constantly seeking new ways to 
                improve and deliver better solutions for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="bg-[#1e75bc] text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-4">Ready to Work Together?</h2>
          <p className="text-xl opacity-90 mb-8">
            Let's discuss how we can help you achieve your goals and create something amazing together.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#006f38] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#005a2e] transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}