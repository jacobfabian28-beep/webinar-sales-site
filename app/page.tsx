import Link from "next/link";
import Image from "next/image";
import EmailCapture from "@/components/EmailCapture";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-orange-950 to-slate-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-orange-500/20 text-orange-300 text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wider uppercase">
              AI-Powered Webinar Sales Coaching
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Turn Your Webinars Into a{" "}
              <span className="text-orange-400">Revenue-Generating</span> Machine
            </h1>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Signal2Sales helps entrepreneurs and small businesses use AI tools
              to craft, deliver, and automate webinars that convert viewers into
              paying customers — without the guesswork.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Book a Free Strategy Call
              </Link>
              <Link
                href="/how-it-works"
                className="border border-slate-500 hover:border-white text-slate-300 hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                See How It Works
              </Link>
            </div>
          </div>

          {/* Email capture */}
          <EmailCapture />
        </div>
      </section>

      {/* Social proof bar */}
      <section className="bg-orange-500 text-white py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-x-10 gap-y-2 text-sm font-medium text-orange-100">
          <span>✓ 200+ Entrepreneurs Coached</span>
          <span>✓ Average 3× Revenue Increase</span>
          <span>✓ AI-First Methodology</span>
          <span>✓ Proven Webinar Frameworks</span>
        </div>
      </section>

      {/* What I do */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
              What Is Signal2Sales?
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Most webinars fail because they&apos;re built on guesswork. Signal2Sales
              gives you an AI-powered system that handles the strategy, scripting,
              and follow-up — so you can focus on showing up and closing deals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🤖",
                title: "AI-Crafted Scripts",
                desc: "Our AI analyzes your offer and audience to generate high-converting webinar scripts tailored to your business.",
              },
              {
                icon: "📈",
                title: "Sales-First Structure",
                desc: "Learn the exact webinar framework that top coaches use to consistently close 10–20% of attendees.",
              },
              {
                icon: "🔄",
                title: "Automated Follow-Up",
                desc: "AI-powered email sequences that follow up with every attendee, turning no-shows into customers.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Photo 1 */}
          <div className="rounded-2xl overflow-hidden aspect-[3/4] relative">
            <Image
              src="/photos/photo3.jpg"
              alt="Jacob Fabian - Signal2Sales"
              fill
              className="object-cover object-center"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              Built for Business Owners Who Are Ready to Scale
            </h2>
            <ul className="space-y-4 text-slate-600">
              {[
                "You have a great offer but struggle to communicate its value",
                "You've tried webinars before and they didn't convert",
                "You want to use AI but don't know where to start",
                "You're ready to build a repeatable sales system",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/about"
              className="inline-block mt-8 bg-slate-900 hover:bg-slate-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Meet Jacob →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">
            What Clients Are Saying
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100"
              >
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  &ldquo;{quote}&rdquo;
                </p>
                <div>
                  <p className="font-bold text-slate-900">{name}</p>
                  <p className="text-slate-400 text-sm">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-orange-500 py-16 px-6 text-white text-center">
        <h2 className="text-3xl font-extrabold mb-4">
          Ready to build your webinar sales machine?
        </h2>
        <p className="text-orange-100 mb-8 max-w-lg mx-auto">
          Book a free 30-minute strategy call and I&apos;ll show you exactly how to
          apply AI to your next webinar.
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
