// src/pages/CareerPage.jsx
import React from "react";

export default function CareerPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    console.log("Resume submission:", data);
    alert("Thanks! We’ve received your résumé and will reach out if there’s a fit.");
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div
        className="bg-gradient-to-r from-[#1e75bc] to-[#006f38] text-white py-20"
      >
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Build Your Future with Pure Hygiene</h1>
          <p className="text-xl opacity-90">
           Join a team that values innovation, excellence, and sustainability.
          </p>
        </div>
      </div>

      {/* Why Work With Us */}
      {/* Why Choose Us */}
        <div className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-[#1e75bc] mb-4">
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              At Pure Hygiene, we are committed to providing top-quality solutions that ensure your business thrives with cleanliness, efficiency, and trust.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4 font-tajawal">
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
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
        </div>


      {/* Résumé Submission Form */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-light text-[#1e75bc]">
            Submit Your Resume
          </h2>

          <form
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl space-y-6 bg-white p-8 shadow-md rounded-lg"
          >
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                name="name"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#006f38] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#006f38] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#006f38] focus:outline-none"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Résumé (PDF / DOC)
              </label>
              <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="block w-full cursor-pointer rounded border border-gray-300 px-4 py-2 text-gray-700 file:mr-4 file:rounded file:border-0 file:bg-[#006f38] file:px-4 file:py-2 file:text-white hover:file:bg-[#005a2e] focus:ring-2 focus:ring-[#006f38]"
              />
              <p className="mt-1 text-xs text-gray-500">Max 5 MB.</p>
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Cover Letter (Optional)
              </label>
              <textarea
                name="coverLetter"
                rows="4"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#006f38] focus:outline-none"
                placeholder="Tell us why you're interested in joining Pure Hygiene…"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded bg-[#006f38] px-6 py-3 font-bold text-white transition-colors hover:bg-[#005a2e]"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
