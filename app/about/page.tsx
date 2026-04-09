import Link from "next/link";
import Image from "next/image";

// ─── UPDATE THIS when you upload your new Kaltura video ───────────────────────
// 1. Upload your video to Kaltura
// 2. Copy the entry ID from the video URL (looks like "1_xxxxxxxx")
// 3. Paste it here and save
const KALTURA_ENTRY_ID = "1_78xnxrw1";
// ─────────────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 px-6" style={{backgroundImage:"url('/tech-bg.svg')",backgroundSize:"cover",backgroundPosition:"center"}}>
        <div className="max-w-3xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-widest mb-3">
            About
          </p>
          <h1 className="text-5xl font-bold mb-5 leading-tight">
            Jacob Fabian
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Webinar sales coach, AI enthusiast, and founder of Signal2Sales.
          </p>
        </div>
      </section>

      {/* Pitch video */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            30-Second Intro
          </h2>
          <p className="text-slate-500 mb-8 text-base">
            Watch this quick video to learn who I am, what I do, and how
            Signal2Sales can help your business grow.
          </p>
          <div className="rounded-xl overflow-hidden shadow-lg aspect-video bg-slate-100">
            <iframe
              src={`https://cdnapisec.kaltura.com/p/2356971/embedPlaykitJs/uiconf_id/56368382/entry_id/${KALTURA_ENTRY_ID}?iframeembed=true`}
              className="w-full h-full"
              allowFullScreen
              allow="autoplay"
              title="Jacob Fabian 30-Second Pitch"
            />
          </div>
        </div>
      </section>

      {/* Bio + photos */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="pt-2">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 leading-snug">
              My Story
            </h2>
            <div className="space-y-5 text-slate-600 leading-relaxed text-[15px]">
              <p>
                I started Signal2Sales after watching talented entrepreneurs
                consistently fail to communicate the value of their offers —
                not because their products were bad, but because their sales
                process was broken.
              </p>
              <p>
                Webinars changed everything for me. They let you educate,
                build trust, and sell simultaneously — at scale. But most
                people approach them wrong, treating them like a presentation
                rather than a conversion machine.
              </p>
              <p>
                Then AI arrived and changed the game again. Now I help clients
                combine proven webinar sales frameworks with cutting-edge AI
                tools to build systems that run while they sleep.
              </p>
            </div>
            <div className="mt-10">
              <Link
                href="/how-it-works"
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
              >
                See How It Works →
              </Link>
            </div>
          </div>

          {/* Photos grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden aspect-square relative shadow-sm">
              <Image
                src="/photos/photo1.jpg"
                alt="Jacob Fabian"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square relative shadow-sm">
              <Image
                src="/photos/download.png"
                alt="Signal2Sales platform"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-lg mb-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-3 leading-snug">
              How I Think About Coaching
            </h2>
            <p className="text-slate-500 text-[15px] leading-relaxed">
              Not a course, not a community. Just direct frameworks that get
              businesses selling faster.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-px bg-slate-200 rounded-xl overflow-hidden">
            {[
              {
                number: "01",
                title: "Results Over Theory",
                desc: "Every strategy I teach has been tested on real businesses with real money on the line. No fluff, no filler.",
              },
              {
                number: "02",
                title: "You Keep the Wheel",
                desc: "I hand you frameworks and tools — you run your business. No dependency, no lock-in, ever.",
              },
              {
                number: "03",
                title: "Speed Matters",
                desc: "With the right AI setup you should be able to go from idea to live webinar in days, not months.",
              },
            ].map(({ number, title, desc }) => (
              <div key={title} className="bg-white p-8">
                <p className="text-orange-500 font-mono text-xs font-bold tracking-widest mb-5">
                  {number}
                </p>
                <h3 className="text-[15px] font-semibold text-slate-900 mb-3">
                  {title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
