"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-orange-950 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">Let&apos;s Talk</h1>
          <p className="text-slate-300 text-lg">
            Book a free 30-minute strategy call or send a message. I read every email.
          </p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Contact info */}
          <div>
            <h2 className="text-2xl font-extrabold text-slate-900 mb-6">
              How to Reach Me
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: "📧",
                  label: "Email",
                  value: "jacob@signal2sales.com",
                },
                {
                  icon: "📅",
                  label: "Book a Call",
                  value: "Use the form to request a time →",
                },
                {
                  icon: "⏱️",
                  label: "Response Time",
                  value: "Within 24 hours on business days",
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="text-2xl">{icon}</span>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{label}</p>
                    <p className="text-slate-700 font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo 4 */}
            <div className="mt-10 rounded-2xl overflow-hidden aspect-[4/3] relative">
              <Image
                src="/photos/photo2.jpg"
                alt="Jacob Fabian - Signal2Sales"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-10 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">Message Received!</h3>
                <p className="text-orange-700">
                  Thanks <strong>{form.name}</strong>! I&apos;ll get back to you at{" "}
                  <strong>{form.email}</strong> within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 space-y-5"
              >
                <h3 className="text-lg font-bold text-slate-900">Send a Message</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">Business / Website</label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1">What can I help you with? *</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none bg-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
