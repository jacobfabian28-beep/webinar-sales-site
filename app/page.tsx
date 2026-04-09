import Link from "next/link";
import Image from "next/image";
import EmailCapture from "@/components/EmailCapture";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-28 px-6" style={{backgroundImage:"url('/tech-bg.svg')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Signal2Sales
            </p>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Webinars that actually close — built with AI, coached by Jacob.
            </h1>
            <p className="text-slate-400 text-base mb-10 leading-relaxed max-w-md">
              I help entrepreneurs stop guessing and start converting. If
              you&apos;ve tried webinars before and they didn&apos;t stick, I
              know exactly why — and I can fix it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                Book a Free Strategy Call
              </Link>
              <Link
                href="/how-it-works"
                className="border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                See How It Works
              </Link>
            </div>
          </div>

          <EmailCapture />
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-orange-500 text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-1 text-sm font-medium text-orange-100">
          <span>200+ entrepreneurs coached</span>
          <span>·</span>
          <span>Average 3× revenue increase</span>
          <span>·</span>
          <span>AI-first methodology</span>
          <span>·</span>
          <span>Proven webinar frameworks</span>
        </div>
      </section>

      {/* What I do */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              What is Signal2Sales?
            </h2>
            <p className="text-slate-500 leading-relaxed">
              Most webinars fail because they&apos;re built on guesswork.
              Signal2Sales gives you an AI-powered system that handles the
              strategy, scripting, and follow-up — so you can focus on showing
              up and closing deals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border border-slate-200 rounded-xl overflow-hidden">
            {[
              {
                label: "Step one",
                title: "AI-Crafted Scripts",
                desc: "Our AI analyzes your offer and audience to generate high-converting webinar scripts tailored to your business — not generic templates.",
              },
              {
                label: "Step two",
                title: "Sales-First Structure",
                desc: "Learn the exact webinar framework that top coaches use to consistently close 10–20% of attendees. Structure beats charisma every time.",
              },
              {
                label: "Step three",
                title: "Automated Follow-Up",
                desc: "AI-powered email sequences that follow up with every attendee — turning no-shows into customers while you sleep.",
              },
            ].map(({ label, title, desc }) => (
              <div key={title} className="p-8">
                <p className="text-orange-500 text-xs font-semibold uppercase tracking-widest mb-4">
                  {label}
                </p>
                <h3 className="text-base font-semibold text-slate-900 mb-3">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="rounded-2xl overflow-hidden aspect-[3/4] relative shadow-sm">
            <Image
              src="/photos/photo3.jpg"
              alt="Jacob Fabian"
              fill
              className="object-cover object-center"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-5 leading-snug">
              This is for you if you&apos;re ready to stop winging it.
            </h2>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed">
              I work with business owners who have a real offer and are tired of
              leaving money on the table every time they present it.
            </p>
            <ul className="space-y-4 text-slate-700 text-sm">
              {[
                "You have a great offer but struggle to communicate its value",
                "You've tried webinars before and they didn't convert",
                "You want to use AI but don't know where to start",
                "You're ready to build a repeatable sales system",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5 flex-shrink-0">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-block mt-10 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Meet Jacob →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">
              What clients say
            </h2>
            <p className="text-slate-500 text-sm">
              Real results from real people — not polished case studies.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "Jacob's webinar framework completely changed how I sell. I went from 2% conversions to over 18% in one month.",
                name: "Sarah M.",
                role: "Online Business Coach",
              },
              {
                quote:
                  "The AI scripting tool alone is worth 10× the price. I built my entire webinar in an afternoon.",
                name: "David K.",
                role: "SaaS Founder",
              },
              {
                quote:
                  "I was skeptical about webinars but Jacob showed me exactly how to make them work for my service business.",
                name: "Priya N.",
                role: "Marketing Consultant",
              },
            ].map(({ quote, name, role }) => (
              <div
                key={name}
                className="border-l-2 border-orange-400 pl-6 py-2"
              >
                <p className="text-slate-600 text-sm leading-relaxed mb-5">
                  &ldquo;{quote}&rdquo;
                </p>
                <p className="font-semibold text-slate-900 text-sm">{name}</p>
                <p className="text-slate-400 text-xs mt-0.5">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-6 bg-slate-900 text-white" style={{backgroundImage:"url('/tech-bg.svg')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Pricing
            </p>
            <h2 className="text-4xl font-bold mb-4 leading-tight">
              Simple, honest pricing.
            </h2>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              No long-term contracts. No hidden fees. Pick the plan that matches
              where you are right now — you can always move up.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* Starter */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
                Starter
              </p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-white">$399</span>
                <span className="text-slate-400 text-sm mb-1.5">/month</span>
              </div>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                For early-stage startups testing the waters with webinar sales.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "1 webinar per month",
                  "5–8 content pieces",
                  "LinkedIn posts, emails & clips",
                  "Basic AI repurposing",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-orange-400 mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center border border-slate-500 hover:border-orange-400 hover:text-orange-400 text-slate-300 font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Growth — featured */}
            <div className="bg-orange-500 rounded-2xl p-8 relative shadow-2xl shadow-orange-900/40 md:-mt-4 md:mb-4">
              <span className="absolute top-5 right-5 bg-white text-orange-600 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">
                Most Popular
              </span>
              <p className="text-orange-100 text-xs font-semibold uppercase tracking-widest mb-3">
                Growth
              </p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-white">$699</span>
                <span className="text-orange-200 text-sm mb-1.5">/month</span>
              </div>
              <p className="text-orange-100 text-sm mb-8 leading-relaxed">
                The main plan. Built for founders ready to make webinars their
                primary sales channel.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "2–3 webinars per month",
                  "15–25 content assets",
                  "Email + LinkedIn + short clips",
                  "Light custom messaging",
                  "Everything in Starter",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white">
                    <span className="text-orange-200 mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center bg-white text-orange-600 hover:bg-orange-50 font-bold py-3 rounded-lg transition-colors text-sm"
              >
                Get Started
              </Link>
            </div>

            {/* Pro */}
            <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
              <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-3">
                Pro
              </p>
              <div className="flex items-end gap-1 mb-1">
                <span className="text-4xl font-bold text-white">$1,200</span>
                <span className="text-slate-400 text-sm mb-1.5">/month</span>
              </div>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                For teams serious about scaling — full pipeline, full output,
                priority everything.
              </p>
              <ul className="space-y-3 mb-10">
                {[
                  "Unlimited webinars",
                  "Full content pipeline",
                  "Priority turnaround",
                  "Custom outreach messaging",
                  "Everything in Growth",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-slate-300">
                    <span className="text-orange-400 mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="block text-center border border-slate-500 hover:border-orange-400 hover:text-orange-400 text-slate-300 font-semibold py-3 rounded-lg transition-colors text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>

          <p className="text-slate-500 text-xs text-center mt-10">
            Not sure which plan is right? Book a free call and we&apos;ll figure it out together.
          </p>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-orange-500 py-20 px-6 text-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 leading-snug">
            Ready to build your webinar sales machine?
          </h2>
          <p className="text-orange-100 mb-8 text-sm leading-relaxed">
            Book a free 30-minute strategy call and I&apos;ll show you exactly
            how to apply AI to your next webinar — no pitch, just a real
            conversation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-orange-600 hover:bg-orange-50 font-semibold px-7 py-3.5 rounded-lg transition-colors inline-block text-sm"
          >
            Book My Free Call →
          </Link>
        </div>
      </section>
    </>
  );
}
