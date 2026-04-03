import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-orange-950 text-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold mb-4">About Jacob Fabian</h1>
          <p className="text-slate-300 text-lg">
            Webinar sales coach, AI enthusiast, and founder of Signal2Sales.
          </p>
        </div>
      </section>

      {/* Pitch video */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">
            Hear It From Me — 30-Second Intro
          </h2>
          <p className="text-slate-500 mb-8">
            Watch this quick video to learn who I am, what I do, and how
            Signal2Sales can help your business grow.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video bg-slate-100">
            <iframe
              src="https://psu.mediaspace.kaltura.com/embed/secure/iframe/entryId/1_idm9ldvr"
              className="w-full h-full"
              allowFullScreen
              allow="autoplay"
              title="Jacob Fabian 30-Second Pitch"
            />
          </div>
        </div>
      </section>

      {/* Bio + photos */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">
              My Story
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
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
            <div className="mt-8 flex gap-4">
              <Link
                href="/how-it-works"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                See How It Works →
              </Link>
            </div>
          </div>

          {/* Photos grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-square relative">
              <Image
                src="/photos/photo1.jpg"
                alt="Jacob Fabian"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="rounded-2xl overflow-hidden aspect-square relative">
              <Image
                src="/photos/photo4.jpg"
                alt="Jacob Fabian"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center mb-12">
            My Coaching Philosophy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Results Over Theory",
                desc: "Every strategy I teach has been tested on real businesses with real money on the line.",
              },
              {
                icon: "🤝",
                title: "You Keep the Wheel",
                desc: "I give you frameworks and tools, but you run your business. No dependency, no lock-in.",
              },
              {
                icon: "⚡",
                title: "Speed Matters",
                desc: "AI lets us move faster than ever. You should be able to launch a webinar in days, not months.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
