export default function HeroSection() {
  return (
    <section
      className="relative isolate h-screen w-full overflow-hidden pt-[72px]" 
    >
      {/* fixed photo layer */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 bg-[url('/images/hero.avif')] bg-cover bg-center"
      />

      {/* dark veil */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-black/50" />

      {/* hero copy */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        {/* heading */}
        <h1
          className="
            font-bold text-white          
            text-4xl sm:text-5xl md:text-6xl
            tracking-wide uppercase          
            drop-shadow-lg
          "
        >
          PURE&nbsp;HYGIENE
        </h1>

        {/* subtitle */}
        <p className="mt-4 max-w-2xl text-lg text-[#1e75bc] font-semibold md:text-2xl bg-white/90 px-6 py-2 rounded-lg">
          Professional Hygiene Solutions for Business Excellence
        </p>

        {/* description */}
        <p className="mt-6 max-w-3xl text-white/95 text-lg leading-relaxed">
          Leading B2B distributor of professional cleaning and sanitation products across the GCC. 
          We connect hotels, restaurants, healthcare facilities, and industrial clients with 
          world-class, eco-conscious hygiene solutions.
        </p>

        {/* Key benefits */}
        
        {/* CTA buttons */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/products"
            className="rounded-lg bg-[#1e75bc] px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#155a94] hover:shadow-lg"
          >
            Explore Products
          </a>
          {/* <a
            href="#contact"
            className="rounded-lg bg-[#006f38] px-8 py-3 font-semibold text-white transition hover:scale-105 hover:bg-[#005a2e] hover:shadow-lg"
          >
            Get Quote
          </a> */}
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="mx-auto flex h-10 w-6 items-start justify-center rounded-full border-2 border-white">
            <div className="mt-2 h-3 w-1 animate-pulse rounded-full bg-white" />
          </div>
          <p className="mt-2 text-sm text-white">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
}