"use client";

import { useState } from "react";

export default function EmailCapture() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 text-center max-w-md mx-auto">
        <div className="text-5xl mb-4">🎉</div>
        <h3 className="text-xl font-bold text-orange-800 mb-2">You&apos;re on the list!</h3>
        <p className="text-orange-700">
          Thanks, <strong>{name}</strong>! We&apos;ll send webinar details and exclusive tips to{" "}
          <strong>{email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto border border-slate-100"
    >
      <h3 className="text-xl font-bold text-slate-900 mb-1">Reserve Your Spot</h3>
      <p className="text-slate-500 text-sm mb-6">
        Join hundreds of entrepreneurs learning to sell with AI-powered webinars.
      </p>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-slate-900"
        />
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 text-slate-900"
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
        >
          Get Free Access →
        </button>
      </div>
      <p className="text-xs text-slate-400 mt-4 text-center">No spam. Unsubscribe anytime.</p>
    </form>
  );
}
