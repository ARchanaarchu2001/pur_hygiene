import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function CareerPage() {
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const fileInput = form.resume.files[0];

    const templateParams = {
      customer_name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      coverLetter: form.coverLetter.value || "N/A",
      resume_filename: fileInput ? fileInput.name : "No file selected",
    };

    try {
      await emailjs.send(
        "service_utae7om",
        "template_3ug3yak",
        templateParams,
        "n60UcikV28Phzu1Qt"
      );

      alert("Thanks! We’ve received your résumé and will reach out if there’s a fit.");
      form.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-r from-[#1e75bc] to-[#006f38] text-white py-30">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">
            Build Your Future with Pure Hygiene
          </h1>
          <p className="text-xl opacity-90">
            Join a team that values innovation, excellence, and sustainability.
          </p>
        </div>
      </div>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="mb-8 text-center text-3xl font-light text-[#1e75bc]">
            Submit Your Resume
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mx-auto max-w-xl space-y-6 bg-white p-8 shadow-md rounded-lg"
          >
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input
                name="name"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#006f38] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#006f38] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                required
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#006f38] focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Résumé (PDF / DOC)</label>
             <input
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
                required
                className="block w-full cursor-pointer border border-gray-300 px-4 py-2 rounded text-gray-700
                          file:mr-4 file:rounded file:border-0 file:bg-[#006f38] file:px-4 file:py-2 file:text-white
                          hover:file:bg-[#005a2e] focus:ring-2 focus:ring-[#006f38]"
              />

              <p className="text-xs text-gray-500 mt-1">Max 5 MB.</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Cover Letter (Optional)</label>
              <textarea
                name="coverLetter"
                rows="4"
                placeholder="Tell us why you're interested in joining Pure Hygiene…"
                className="w-full rounded border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#006f38] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded bg-[#006f38] px-6 py-3 font-bold text-white hover:bg-[#005a2e]"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
