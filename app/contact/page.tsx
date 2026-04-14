"use client";

import { useState } from "react";
import Image from "next/image";
import { supabase } from "@/lib/supabase";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    const { error: sbError } = await supabase
      .from("contact_submissions")
      .insert([{
        name: form.name.trim(),
        email: form.email.trim(),
        business: form.business.trim(),
        message: form.message.trim(),
      }]);

    if (sbError) {
      setError("Something went wrong. Please try again.");
      return;
    }

    await fetch("/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "contact",
        name: form.name.trim(),
        email: form.email.trim(),
        business: form.business.trim(),
        message: form.message.trim(),
      }),
    });

    setSubmitted(true);
  }

  return (
    <>
      {/* Header — orange */}
      <section className="bg-orange-500 text-white py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-100 text-sm font-semibold uppercase tracking-widest mb-3">
            Contact
          </p>
          <h1 className="text-5xl font-bold mb-5 leading-tight">
            Let&apos;s Talk
          </h1>
          <p className="text-orange-100 text-lg max-w-lg leading-relaxed">
            Book a free 30-minute strategy call or send a message. I read every
            email personally.
          </p>
        </div>
      </section>

      {/* Contact info + photo — white */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-8">
              How to reach me
            </h2>
            <div className="space-y-7">
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Email
                </p>
                <a
                  href="mailto:jacobfabian28@icloud.com"
                  className="text-slate-800 font-medium text-sm hover:text-orange-500 transition-colors"
                >
                  jacobfabian28@icloud.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/jacob-fabian-141389abcd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-800 font-medium text-sm hover:text-orange-500 transition-colors"
                >
                  jacob-fabian-141389abcd
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Book a Call
                </p>
                <p className="text-slate-800 font-medium text-sm">
                  Use the form below to request a time
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  Response Time
                </p>
                <p className="text-slate-800 font-medium text-sm">
                  Within 24 hours on business days
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl overflow-hidden aspect-[4/3] relative shadow-sm">
              <Image
                src="/photos/photo2.jpg"
                alt="Jacob Fabian"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            {submitted ? (
              <div className="border border-orange-200 bg-orange-50 rounded-xl p-10">
                <h3 className="text-lg font-bold text-orange-800 mb-2">
                  Message received.
                </h3>
                <p className="text-orange-700 text-sm leading-relaxed">
                  Thanks <strong>{form.name}</strong> — I&apos;ll get back to
                  you at <strong>{form.email}</strong> within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-bold text-slate-900 mb-6">
                  Send a Message
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      Full Name *
                    </label>
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
                    <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                      Email *
                    </label>
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
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    Business / Website
                  </label>
                  <input
                    type="text"
                    name="business"
                    value={form.business}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-500 mb-1.5">
                    What can I help you with? *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none bg-white"
                  />
                </div>
                {error && <p className="text-red-500 text-xs">{error}</p>}
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

      {/* Bottom strip — dark slate */}
      <section className="bg-slate-900 py-16 px-6 text-white" style={{backgroundImage:"url('/tech-bg.svg')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-lg font-bold mb-1">Jacob Fabian · Signal2Sales</p>
            <p className="text-slate-400 text-sm">
              Helping entrepreneurs turn webinars into their best sales channel.
            </p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a
              href="mailto:jacobfabian28@icloud.com"
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              jacobfabian28@icloud.com
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-fabian-141389abcd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-orange-400 transition-colors"
            >
              LinkedIn →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
