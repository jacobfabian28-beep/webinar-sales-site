"use client";

import { useState } from "react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Describe Your Offer",
    desc: "Tell the AI about your product or service, target audience, and pricing.",
    placeholder: "e.g. I sell a $997 online course that teaches real estate agents how to close deals using social media...",
    output: `✅ Offer Analysis Complete\n\n🎯 Target Audience: Real estate agents, 25–45, looking to modernize their sales process\n💡 Core Pain: Losing deals to agents with stronger online presence\n🏆 Unique Value: Proven social media playbook built specifically for real estate\n💰 Price Point: $997 — mid-ticket, strong ROI positioning needed\n\n📋 Recommended Webinar Title:\n"How Smart Agents Are Closing 3× More Deals Using This 20-Minute Social Media Formula"`,
  },
  {
    number: "02",
    title: "Generate Your Script",
    desc: "Signal2Sales AI builds a complete webinar outline and script using proven sales frameworks.",
    placeholder: "Click 'Generate' to see your AI-powered webinar script...",
    output: `📝 Your Webinar Script Outline\n\n[0:00–5:00] HOOK & CREDIBILITY\n→ Open with a shocking stat about agent income inequality\n→ Share a 60-second client success story\n→ Preview the 3 secrets you'll reveal\n\n[5:00–20:00] THE TEACHING CONTENT\n→ Secret #1: The 20-minute daily content formula\n→ Secret #2: The follow-up sequence that converts leads\n→ Secret #3: The closing script that overcomes price objections\n\n[20:00–30:00] THE OFFER\n→ Stack your value visually\n→ Price anchor from $2,997 → $997\n→ Add urgency: only 10 spots available this month\n\n[30:00–45:00] Q&A + CLOSE`,
  },
  {
    number: "03",
    title: "Automate Your Follow-Up",
    desc: "Deploy a 7-day AI email sequence that re-engages attendees and converts fence-sitters.",
    placeholder: "Click 'Generate' to preview your follow-up email sequence...",
    output: `📧 7-Day Follow-Up Sequence\n\nDay 0 (Immediately after): "Here's the replay + your bonus resource"\nDay 1: "The #1 mistake most agents make with social media"\nDay 2: Client case study — from 0 to 12 closings/month\nDay 3: FAQ — answering the top 5 objections from the webinar\nDay 5: "This offer closes in 48 hours"\nDay 6: Final reminder + personal note from Jacob\nDay 7: "Did you make a decision?" — soft re-open`,
  },
];

export default function HowItWorksPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [inputs, setInputs] = useState(["", "", ""]);
  const [outputs, setOutputs] = useState(["", "", ""]);

  function handleGenerate(index: number) {
    const newOutputs = [...outputs];
    newOutputs[index] = steps[index].output;
    setOutputs(newOutputs);
  }

  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-orange-950 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">How Signal2Sales Works</h1>
          <p className="text-slate-300 text-lg">
            Three steps. One system. Webinars that actually sell.
          </p>
        </div>
      </section>

      {/* Interactive demo */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">
              Interactive Demo
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900">
              Try the AI System Yourself
            </h2>
            <p className="text-slate-500 mt-3 max-w-lg mx-auto">
              Click through each step to see how our AI builds your webinar from scratch.
            </p>
          </div>

          {/* Step tabs */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
            {steps.map((step, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-xl font-semibold text-sm transition-all ${
                  activeStep === i
                    ? "bg-orange-500 text-white shadow-lg"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                <span className={`font-mono text-xs ${activeStep === i ? "text-orange-200" : "text-slate-400"}`}>
                  {step.number}
                </span>
                {step.title}
              </button>
            ))}
          </div>

          {/* Active step panel */}
          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Step {steps[activeStep].number}: {steps[activeStep].title}
            </h3>
            <p className="text-slate-500 mb-6">{steps[activeStep].desc}</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Your Input
                </label>
                <textarea
                  rows={6}
                  placeholder={steps[activeStep].placeholder}
                  value={inputs[activeStep]}
                  onChange={(e) => {
                    const newInputs = [...inputs];
                    newInputs[activeStep] = e.target.value;
                    setInputs(newInputs);
                  }}
                  className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none bg-white"
                />
                <button
                  onClick={() => handleGenerate(activeStep)}
                  className="mt-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
                >
                  Generate with AI →
                </button>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  AI Output
                </label>
                <div className="w-full min-h-[150px] border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-white whitespace-pre-wrap font-mono leading-relaxed">
                  {outputs[activeStep] || (
                    <span className="text-slate-300 italic">
                      AI output will appear here after you click Generate...
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">
            From Zero to Live Webinar in 5 Days
          </h2>
          <div className="space-y-6">
            {[
              { day: "Day 1", label: "Offer Clarity Session", desc: "We define your offer, audience, and goals with AI-assisted research." },
              { day: "Day 2", label: "Script & Slides", desc: "AI generates your full webinar script. We refine it together in a 60-min call." },
              { day: "Day 3", label: "Tech Setup", desc: "Zoom, landing page, and email automation — all configured and tested." },
              { day: "Day 4", label: "Rehearsal", desc: "We do a full run-through with live feedback on delivery and pacing." },
              { day: "Day 5", label: "Go Live", desc: "Your webinar runs. AI follow-up sequences activate automatically." },
            ].map(({ day, label, desc }) => (
              <div key={day} className="flex gap-6 items-start">
                <div className="bg-orange-500 text-white rounded-xl px-3 py-2 text-xs font-bold flex-shrink-0 w-16 text-center">
                  {day}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{label}</p>
                  <p className="text-slate-500 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">Ready to get started?</h2>
        <p className="text-orange-100 mb-8 max-w-md mx-auto">
          Book a free strategy call and let&apos;s build your first AI-powered webinar together.
        </p>
        <Link
          href="/contact"
          className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-8 py-4 rounded-lg transition-colors inline-block"
        >
          Book My Free Call →
        </Link>
      </section>
    </>
  );
}
