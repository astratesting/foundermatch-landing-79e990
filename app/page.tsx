const features = [
  {
    title: 'Compatibility Graph',
    body: 'FounderMatch scores work style, ambition, risk tolerance, time horizon, and founder values before you ever schedule a call.',
  },
  {
    title: 'Skill Gap Radar',
    body: 'Map your strengths against operators, technical builders, sales-led founders, and domain experts who complete your company profile.',
  },
  {
    title: 'Equity Split Studio',
    body: 'Model vesting, contribution levels, cash gaps, cliffs, and future dilution before awkward equity conversations start.',
  },
  {
    title: 'Agreement Builder',
    body: 'Turn match data into structured co-founder agreements with roles, decision rights, founder commitments, and exit expectations.',
  },
  {
    title: 'Swipe With Signal',
    body: 'CoffeeSpace-style cards surface the few founders worth meeting, not endless profiles with vague founder energy.',
  },
  {
    title: 'Investor-Ready Match Notes',
    body: 'Generate concise rationale for why your team fits the market, product motion, and fundraising path.',
  },
];

const steps = [
  'Build your founder DNA profile across skills, goals, values, runway, and market focus.',
  'Review AI-ranked co-founder cards with compatibility scores and skill complementarity.',
  'Match, run structured interviews, then align on equity and agreements in one workspace.',
];

const stats = [
  ['21%', 'capital raise advantage highlighted by YC research for balanced founding teams'],
  ['7 signals', 'scored per match across skills, values, velocity, commitment, and risk'],
  ['48 hrs', 'to a curated short list instead of months of cold founder networking'],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-night text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.28),transparent_34%),radial-gradient(circle_at_80%_18%,rgba(96,232,255,0.13),transparent_28%),linear-gradient(180deg,#06080f_0%,#071121_52%,#06080f_100%)]" />
      <div className="fixed inset-0 -z-10 bg-radial-grid bg-[length:28px_28px] opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" />

      <nav className="sticky top-0 z-50 border-b border-line bg-night/72 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-founder shadow-blueglow">FM</span>
            <span>FounderMatch</span>
          </a>
          <div className="hidden items-center gap-8 text-sm text-white/68 md:flex">
            <a href="#features" className="transition hover:text-white">Features</a>
            <a href="#how" className="transition hover:text-white">How it works</a>
            <a href="#proof" className="transition hover:text-white">Proof</a>
          </div>
          <a href="#waitlist" className="rounded-full border border-white/15 bg-white px-5 py-2 text-sm font-bold text-night transition hover:-translate-y-0.5 hover:bg-blue-100">
            Join waitlist
          </a>
        </div>
      </nav>

      <section id="top" className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-20 md:grid-cols-[1.02fr_0.98fr] md:pb-28 md:pt-28">
        <div className="animate-rise">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-line bg-white/7 px-4 py-2 text-sm text-blue-100 shadow-blueglow">
            <span className="h-2 w-2 rounded-full bg-cyan" /> AI co-founder matching for serious builders
          </div>
          <h1 className="font-display text-6xl font-black leading-[0.9] tracking-[-0.06em] text-white md:text-8xl">
            Find Your Perfect Co-Founder, Backed by Data.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            FounderMatch replaces luck-based networking with compatibility scoring, skill-based matching, equity split tools, and structured co-founder agreements.
          </p>
          <form id="waitlist" className="mt-9 flex max-w-xl flex-col gap-3 rounded-3xl border border-line bg-white/8 p-2 backdrop-blur md:flex-row">
            <label className="sr-only" htmlFor="email">Email address</label>
            <input id="email" type="email" placeholder="founder@company.com" className="min-h-14 flex-1 rounded-2xl border border-transparent bg-night/70 px-5 text-white outline-none ring-founder/40 placeholder:text-white/38 focus:ring-4" />
            <button type="submit" className="min-h-14 rounded-2xl bg-founder px-7 font-bold text-white shadow-blueglow transition hover:-translate-y-0.5 hover:bg-blue-400">
              Get early access
            </button>
          </form>
          <p className="mt-4 text-sm text-white/45">For solo founders, repeat founders, and operators ready to build with higher conviction.</p>
        </div>

        <div className="relative min-h-[620px] animate-rise-delayed">
          <div className="absolute left-1/2 top-5 h-[560px] w-[340px] -translate-x-1/2 rotate-[-7deg] rounded-[2.4rem] border border-white/14 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
            <div className="h-full rounded-[1.8rem] border border-white/10 bg-[#081225] p-5">
              <div className="mb-5 flex items-center justify-between text-xs text-white/45">
                <span>Compatibility</span><span>94%</span>
              </div>
              <div className="h-52 rounded-[1.5rem] bg-[linear-gradient(135deg,#1d4ed8,#60e8ff)] p-5 shadow-blueglow">
                <div className="h-16 w-16 rounded-3xl bg-white/25 backdrop-blur" />
                <h2 className="mt-12 text-3xl font-black tracking-tight">Maya Chen</h2>
                <p className="text-sm text-white/78">B2B sales founder · fintech GTM</p>
              </div>
              <div className="mt-5 space-y-3">
                {['Enterprise sales fills your gap', 'Matches risk appetite', 'Shared climate fintech thesis'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-sm text-white/78">{item}</div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="rounded-2xl border border-white/15 py-4 text-white/70">Pass</button>
                <button className="rounded-2xl bg-founder py-4 font-bold shadow-blueglow">Match</button>
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-28 hidden w-56 rotate-6 rounded-3xl border border-line bg-white/9 p-5 backdrop-blur md:block">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan">Equity model</p>
            <p className="mt-3 text-3xl font-black">52 / 48</p>
            <p className="mt-2 text-sm text-white/55">Adjusted for IP, sales pipeline, and full-time start date.</p>
          </div>
          <div className="absolute bottom-20 left-0 hidden w-64 -rotate-3 rounded-3xl border border-line bg-white/9 p-5 backdrop-blur md:block">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan">Agreement ready</p>
            <p className="mt-3 text-lg font-bold">Roles, vesting, decision rights, founder exit clauses.</p>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan">Matching engine</p>
          <h2 className="mt-4 font-display text-5xl font-black tracking-[-0.045em] md:text-7xl">Founder fit needs more than vibes.</h2>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map((feature, index) => (
            <article key={feature.title} className="group rounded-[2rem] border border-line bg-white/[0.055] p-7 transition duration-300 hover:-translate-y-2 hover:border-founder/60 hover:bg-white/[0.085]">
              <span className="text-sm font-black text-founder">0{index + 1}</span>
              <h3 className="mt-7 text-2xl font-black tracking-tight">{feature.title}</h3>
              <p className="mt-4 leading-7 text-white/62">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[2.5rem] border border-line bg-white/[0.055] p-6 md:p-12">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.35em] text-cyan">How it works</p>
              <h2 className="mt-4 font-display text-5xl font-black tracking-[-0.045em]">From solo founder to aligned founding team.</h2>
            </div>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step} className="grid gap-5 rounded-3xl border border-white/10 bg-night/55 p-6 md:grid-cols-[4rem_1fr]">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-founder text-xl font-black">{index + 1}</div>
                  <p className="text-lg leading-8 text-white/76">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={value} className="rounded-[2rem] border border-line bg-white/[0.055] p-8">
              <p className="font-display text-6xl font-black tracking-[-0.06em] text-white">{value}</p>
              <p className="mt-4 leading-7 text-white/62">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <div className="rounded-[3rem] border border-founder/35 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.38),rgba(255,255,255,0.06)_45%,rgba(255,255,255,0.03))] px-6 py-16 shadow-blueglow">
          <h2 className="font-display text-5xl font-black tracking-[-0.05em] md:text-7xl">Stop searching alone.</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/72">Join FounderMatch and meet co-founders who strengthen your company, fundraising story, and founder agreement from day one.</p>
          <a href="#waitlist" className="mt-8 inline-flex rounded-full bg-white px-8 py-4 font-black text-night transition hover:-translate-y-1 hover:bg-blue-100">Join FounderMatch waitlist</a>
        </div>
      </section>

      <footer className="border-t border-line px-6 py-10 text-sm text-white/48">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 FounderMatch. AI-powered co-founder matching.</p>
          <div className="flex gap-6">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#waitlist" className="hover:text-white">Waitlist</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
