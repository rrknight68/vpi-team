import React from 'react'

// ── GP Team Data ──────────────────────────────────────────────────────────
const gpPrincipals = [
  {
    name: 'Robert Knight',
    initials: 'RK',
    title: 'Founder & Managing Principal',
    org: 'Vantage Point Investments',
    bio: 'Robert is the Founder & Managing Principal of Vantage Point Investments, with 18 years of experience in Southwest Florida real estate as an investor, HomeVestors franchisee, land developer, residential home builder, and licensed Florida broker. A recognized local market expert, Robert leads development strategy, capital formation, and execution across the VPI portfolio.',
  },
  {
    name: 'Eddie Wilson',
    initials: 'EW',
    title: 'Principal · Business Strategy',
    org: 'Serial Entrepreneur',
    bio: 'Heralded as the "King of Exits," Eddie has built or run more than 100 different businesses, managed 4,000+ employees, and traveled the world speaking on business leadership. His operating and exit experience anchors the GP\'s enterprise-level decision-making.',
  },
  {
    name: 'Aaron Chapman',
    initials: 'AC',
    title: 'Principal · Capital & Finance',
    org: 'Veteran Finance Industry Leader',
    bio: 'A veteran of the finance industry since 1997, Aaron is presently ranked in the top 1% of over 1.4 million loan originators, closing in excess of 100 transactions per month. Aaron is the battle-worn partner every real estate entrepreneur needs to walk through the tough parts of building a real estate investment business.',
  },
  {
    name: 'Tyler Moynihan',
    initials: 'TM',
    title: 'Principal · Business Development',
    org: 'Former Zillow Executive',
    bio: 'Tyler is a results-oriented leader with over 20 years of notable executive impact across start-ups, real estate, fintech, media, and large corporations. He has spent the last 12 years at Zillow leading their corporate and business development functions.',
  },
  {
    name: 'Gary Pinkerton',
    initials: 'GP',
    title: 'Principal · Investor Relations',
    org: 'Veteran · Nuclear Submarine Officer',
    bio: 'Gary is a Veteran, Nuclear Submarine Officer, entrepreneur, and real estate investor who helps individuals and families create Permanent Wealth using time-tested traditional approaches — a path proven by Rockefeller, Buffett, and Carnegie and thousands of others for centuries.',
  },
  {
    name: 'Mike Shirkey',
    initials: 'MS',
    title: 'Principal · Policy & Government Affairs',
    org: 'Former Michigan State Senator',
    bio: 'Mike is an American politician who served as a Republican member of the Michigan State Senate and as a member of the Michigan House of Representatives. He was first elected to the House in 2010 and to the Senate in 2014, bringing legislative and regulatory insight to the partnership.',
  },
  {
    name: 'Koen Roelens',
    initials: 'KR',
    title: 'Exclusive Hospitality Operator & LP Co-Investor',
    org: 'Founder & President, Roelens Vacations',
    bio: "Koen trained 15 years with Riu Hotels in global hospitality operations before founding Roelens Vacations in 2010 — now one of Southwest Florida's largest independent vacation rental operations, with 300+ managed properties and a 30+ person team. At Lake Shadroe, Koen is investing his own capital alongside his owners, and Roelens Vacations serves as the exclusive hospitality operator from opening day.",
  },
]

// ── GC Team Data ──────────────────────────────────────────────────────────
const gcPrincipals = [
  {
    name: 'Chris Curran',
    initials: 'CC',
    role: 'Principal / General Contractor',
    bio: 'With two decades of experience and a diverse list of projects ranging from $2M to $250M across several non-residential product types, Chris is a seasoned builder with strong competencies in all aspects of construction from preconstruction to executing in the field.',
    quals: [
      '20+ years construction experience',
      'Projects from $2M to $250M',
      'Non-residential product expertise',
      'Preconstruction to field execution',
    ],
  },
  {
    name: 'Bruce Young',
    initials: 'BY',
    role: 'Principal / General Contractor',
    bio: 'A seasoned construction professional and General Contractor, Bruce has more than 20 years of hands-on experience with projects totaling in excess of $1.8B. His passion for "all things construction" is easily recognized and shines through in his personable and driven approach.',
    quals: [
      '20+ years hands-on experience',
      '$1.8B+ in completed projects',
      'Full-service general contractor',
      'Design-build expertise',
    ],
  },
]

// ── Engineering Awards ────────────────────────────────────────────────────
const boralAwards = [
  { year: '2017', title: 'Best Engineering Project · Commercial $2M–$4.9M', project: 'Ballpark RV & Boat Storage' },
  { year: '2021', title: 'Best Engineering Project · Multi-Story $5M–$8M', project: 'Civitas Affordable Housing' },
  { year: '2025', title: 'Lee County BIS Award · Best Engineering Project · Commercial $10M–$15M+', project: 'Paraiso at North Cape' },
]

// ── Architecture Awards ───────────────────────────────────────────────────
const pdsAwards = [
  { year: '2015–2017', title: 'Architectural Firm of the Year' },
  { year: '2017', title: 'Commercial Project of the Year' },
  { year: '2016–2017', title: 'Best Architectural Project · Restaurant' },
  { year: '2015–2016', title: 'Product Design of the Year · Multi-Family' },
  { year: '2016', title: 'Best Architectural Project · Retail' },
  { year: '2015', title: 'Best Non-Built Design Project' },
  { year: '2014', title: 'Best Architectural Project · Multi-Story' },
]

// ── Components ────────────────────────────────────────────────────────────

function Section({ id, eyebrow, title, children, tone = 'cream' }) {
  const bg = tone === 'navy' ? 'bg-vpi-navy text-vpi-cream' : tone === 'stone' ? 'bg-vpi-stone' : 'bg-vpi-cream'
  return (
    <section id={id} className={`${bg} px-6 py-20 sm:py-28`}>
      <div className="mx-auto max-w-7xl">
        {eyebrow && (
          <div className="mb-6 flex items-center gap-3">
            <span className={`h-px w-10 ${tone === 'navy' ? 'bg-vpi-gold' : 'bg-vpi-gold'}`} />
            <span className={`font-label text-xs tracking-[0.3em] ${tone === 'navy' ? 'text-vpi-gold-light' : 'text-vpi-gold'}`}>
              {eyebrow}
            </span>
          </div>
        )}
        {title && (
          <h2 className={`font-display text-4xl font-light leading-tight sm:text-5xl md:text-6xl ${tone === 'navy' ? 'text-vpi-cream' : 'text-vpi-navy'}`}>
            {title}
          </h2>
        )}
        <div className="mt-12">{children}</div>
      </div>
    </section>
  )
}

// ── Icon Library ──────────────────────────────────────────────────────────
// Editorial line icons, 1.5px stroke, VPI gold. Used in place of emoji to
// preserve a lender-grade, non-AI aesthetic across the page.
const ICON_PATHS = {
  // Badges (Curran Young)
  shield: (
    <>
      <path d="M12 3 L4 6 V12 C4 17 7.5 20.5 12 22 C16.5 20.5 20 17 20 12 V6 Z" />
      <path d="M9.5 12.5 L11 14 L14.5 10.5" />
    </>
  ),
  building: (
    <>
      <path d="M4 21 V7 L12 3 L20 7 V21" />
      <path d="M4 21 H20" />
      <path d="M9 21 V14 H15 V21" />
      <path d="M8 10 H10 M14 10 H16" />
    </>
  ),
  chart: (
    <>
      <path d="M4 19 H20" />
      <path d="M7 19 V13" />
      <path d="M11 19 V10" />
      <path d="M15 19 V7" />
      <path d="M19 19 V4" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 11 L7 7 H11 L13 9" />
      <path d="M21 11 L17 7 H13" />
      <path d="M13 9 L10 12 C9.5 12.5 9.5 13.5 10 14 C10.5 14.5 11.5 14.5 12 14 L15 11" />
      <path d="M12 14 L15 17 C15.5 17.5 16.5 17.5 17 17 C17.5 16.5 17.5 15.5 17 15 L14 12" />
    </>
  ),
  // Closer (Execution Strength)
  trophy: (
    <>
      <path d="M8 4 H16 V10 C16 12.5 14 14 12 14 C10 14 8 12.5 8 10 Z" />
      <path d="M8 6 H5 V8 C5 9.5 6 10.5 7.5 10.5" />
      <path d="M16 6 H19 V8 C19 9.5 18 10.5 16.5 10.5" />
      <path d="M10 14 V17 H14 V14" />
      <path d="M8 20 H16" />
      <path d="M10 17 V20 M14 17 V20" />
    </>
  ),
  pin: (
    <>
      <path d="M12 22 C12 22 19 14 19 9 C19 5.5 15.9 3 12 3 C8.1 3 5 5.5 5 9 C5 14 12 22 12 22 Z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  column: (
    <>
      <path d="M5 20 H19" />
      <path d="M4 17 H20" />
      <path d="M6 17 V8" />
      <path d="M10 17 V8" />
      <path d="M14 17 V8" />
      <path d="M18 17 V8" />
      <path d="M4 8 H20" />
      <path d="M5 5 H19 L17 8 H7 Z" />
    </>
  ),
  wind: (
    <>
      <path d="M3 9 H14 C15.5 9 17 7.5 17 6 C17 4.5 15.5 3.5 14 4 C13 4.3 12.5 5 12.5 6" />
      <path d="M3 13 H18 C19.5 13 20.5 14 20.5 15.5 C20.5 17 19.5 18 18 18 C17 18 16.5 17.5 16.5 16.5" />
      <path d="M3 17 H10" />
    </>
  ),
  shieldCheck: (
    <>
      <path d="M4 19 H20" />
      <path d="M7 19 V16 L10 13" />
      <path d="M12 19 V11" />
      <path d="M17 19 V7 L20 4" />
      <path d="M18 7 H20 V9" />
    </>
  ),
  checkBadge: (
    <>
      <path d="M12 3 L14.5 4.8 L17.5 4.5 L18.5 7.2 L21 8.8 L20.3 11.8 L21 14.8 L18.5 16.5 L17.5 19.2 L14.5 18.9 L12 20.7 L9.5 18.9 L6.5 19.2 L5.5 16.5 L3 14.8 L3.7 11.8 L3 8.8 L5.5 7.2 L6.5 4.5 L9.5 4.8 Z" />
      <path d="M9 12 L11 14 L15 10" />
    </>
  ),
}

function Icon({ name, className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICON_PATHS[name]}
    </svg>
  )
}

function MonogramAvatar({ initials, photo, size = 'lg' }) {
  const [imgFailed, setImgFailed] = React.useState(false)
  const dim = size === 'lg' ? 'h-28 w-28 text-3xl' : 'h-20 w-20 text-2xl'
  return (
    <div className={`${dim} overflow-hidden rounded-full border-2 border-vpi-gold/40 shadow-lg bg-vpi-navy-deep`}>
      {photo && !imgFailed ? (
        <img
          src={photo}
          alt={initials}
          className="h-full w-full object-cover"
          onError={() => setImgFailed(true)}
        />
      ) : (
        <div className="monogram">{initials}</div>
      )}
    </div>
  )
}

function GPCard({ person }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-sm border border-vpi-navy/10 bg-white shadow-sm transition hover:shadow-xl">
      <div className="flex flex-col items-center bg-vpi-navy px-6 pb-6 pt-10">
        <MonogramAvatar initials={person.initials} />
        <h3 className="mt-5 text-center font-display text-2xl font-medium text-vpi-cream">
          {person.name}
        </h3>
        <p className="mt-1 text-center font-label text-[0.7rem] tracking-[0.2em] text-vpi-gold-light">
          {person.title.toUpperCase()}
        </p>
        <p className="mt-1 text-center font-body text-xs italic text-vpi-cream/70">
          {person.org}
        </p>
      </div>
      <div className="flex-1 px-6 py-6">
        <p className="font-body text-sm leading-relaxed text-vpi-graphite">{person.bio}</p>
      </div>
    </article>
  )
}

function GCPrincipalCard({ person }) {
  return (
    <article className="rounded-sm border border-vpi-navy/10 bg-white p-8 shadow-sm">
      <div className="flex items-start gap-5">
        <MonogramAvatar initials={person.initials} size="sm" />
        <div>
          <h4 className="font-display text-2xl font-medium text-vpi-navy">{person.name}</h4>
          <p className="mt-1 font-label text-[0.7rem] tracking-[0.25em] text-vpi-gold">
            {person.role.toUpperCase()}
          </p>
        </div>
      </div>
      <p className="mt-5 font-body text-sm leading-relaxed text-vpi-graphite">{person.bio}</p>
      <div className="mt-6 border-t border-vpi-gold/20 pt-5">
        <p className="font-label text-[0.65rem] tracking-[0.25em] text-vpi-navy/60">KEY QUALIFICATIONS</p>
        <ul className="mt-3 space-y-1.5">
          {person.quals.map((q, i) => (
            <li key={i} className="flex items-start gap-2 font-body text-sm text-vpi-graphite">
              <span className="mt-1 text-vpi-gold">◆</span>
              <span>{q}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function AwardRow({ award }) {
  return (
    <div className="flex items-start gap-4 border-b border-vpi-navy/10 py-4 last:border-b-0">
      <div className="flex-shrink-0">
        <span className="font-mono text-xs font-medium text-vpi-gold">{award.year}</span>
      </div>
      <div className="flex-1">
        <p className="font-body text-sm font-medium leading-snug text-vpi-navy">{award.title}</p>
        {award.project && (
          <p className="mt-0.5 font-body text-sm italic text-vpi-graphite/80">{award.project}</p>
        )}
      </div>
    </div>
  )
}

function StatPill({ value, label }) {
  return (
    <div className="flex flex-col items-center border border-vpi-gold/30 bg-white/5 px-6 py-4 backdrop-blur-sm">
      <span className="font-mono text-2xl font-medium text-vpi-gold-light">{value}</span>
      <span className="mt-1 text-center font-label text-[0.6rem] tracking-[0.25em] text-vpi-cream/80">
        {label}
      </span>
    </div>
  )
}

// ── Main App ──────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-vpi-cream font-body text-vpi-navy">
      {/* ═══ HERO ═══ */}
      <header className="relative overflow-hidden bg-vpi-navy-deep">
        {/* Gold accent pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #C89A3A 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-vpi-gold to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-vpi-gold" />
            <span className="font-label text-xs tracking-[0.3em] text-vpi-gold">
              LAKE SHADROE RESORT &amp; MARINA
            </span>
          </div>

          <h1 className="mt-8 max-w-4xl font-display text-5xl font-light leading-[1.05] text-vpi-cream sm:text-6xl md:text-7xl">
            General Partnership,<br />
            <span className="italic text-vpi-gold-light">Builder, &amp; Design</span> Team
          </h1>

          <p className="mt-8 max-w-3xl font-body text-lg leading-relaxed text-vpi-cream/80">
            A seasoned general partnership, a Veteran-owned general contractor with a
            <span className="text-vpi-gold-light"> $1.8B+ track record</span>, and an award-winning
            architecture and engineering team — assembled to deliver Lake Shadroe with lender-grade
            execution discipline.
          </p>

          <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            <StatPill value="100+" label="YEARS COMBINED GP EXPERIENCE" />
            <StatPill value="$1.8B+" label="GC CONSTRUCTION TRACK RECORD" />
            <StatPill value="20+" label="DESIGN & ENGINEERING AWARDS" />
            <StatPill value="SW FL" label="ACTIVE MARKET EXPERTISE" />
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <a href="#gp" className="border border-vpi-gold bg-vpi-gold/10 px-6 py-3 font-label text-xs tracking-[0.25em] text-vpi-gold-light transition hover:bg-vpi-gold hover:text-vpi-navy">
              GP TEAM
            </a>
            <a href="#gc" className="border border-vpi-gold/40 px-6 py-3 font-label text-xs tracking-[0.25em] text-vpi-cream transition hover:border-vpi-gold hover:text-vpi-gold-light">
              GENERAL CONTRACTOR
            </a>
            <a href="#ae" className="border border-vpi-gold/40 px-6 py-3 font-label text-xs tracking-[0.25em] text-vpi-cream transition hover:border-vpi-gold hover:text-vpi-gold-light">
              ARCHITECTURE &amp; ENGINEERING
            </a>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-vpi-gold to-transparent" />
      </header>

      {/* ═══ GP TEAM ═══ */}
      <Section
        id="gp"
        eyebrow="I · GENERAL PARTNERSHIP"
        title="Meet the Principals"
      >
        <p className="max-w-3xl font-body text-lg italic leading-relaxed text-vpi-graphite">
          Our qualified members bring over <span className="font-semibold not-italic text-vpi-navy">100 years of
          combined real estate, capital markets, operating, and legislative experience</span> — spanning
          development, syndication, finance, technology, and public policy.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gpPrincipals.map((p) => (
            <GPCard key={p.name} person={p} />
          ))}
        </div>
      </Section>

      {/* ═══ GENERAL CONTRACTOR ═══ */}
      <Section
        id="gc"
        eyebrow="II · GENERAL CONTRACTOR"
        title="Curran Young Construction"
        tone="navy"
      >
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="font-body text-lg leading-relaxed text-vpi-cream/90">
              Curran Young Construction is a <span className="text-vpi-gold-light">Veteran-owned</span>,
              full-service general contractor, design-build, and construction management firm that
              brings a higher standard of service, dependability, and execution to the Southwest
              Florida construction market.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: 'shield',    label: 'Veteran Owned',      sub: 'Service & Integrity' },
                { icon: 'building',  label: 'Full-Service GC',    sub: 'Design-Build Expertise' },
                { icon: 'chart',     label: '$1.8B+ Track Record', sub: 'Proven Execution' },
                { icon: 'handshake', label: 'GP Aligned',         sub: 'Loan Co-Signer' },
              ].map((b) => (
                <div key={b.label} className="border border-vpi-gold/30 bg-white/5 p-5 text-center">
                  <Icon name={b.icon} className="mx-auto h-7 w-7 text-vpi-gold-light" />
                  <div className="mt-3 font-display text-base font-medium text-vpi-cream">{b.label}</div>
                  <div className="mt-1 font-body text-xs text-vpi-cream/60">{b.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Loan Co-Signer Callout */}
          <aside className="lg:col-span-2">
            <div className="relative h-full border border-vpi-gold/50 bg-vpi-gold/5 p-8">
              <div className="absolute -top-3 left-6 bg-vpi-navy-deep px-3">
                <span className="font-label text-[0.65rem] tracking-[0.3em] text-vpi-gold">
                  LENDER ALIGNMENT
                </span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-medium text-vpi-gold-light">
                Construction Loan Co-Signer
              </h3>
              <p className="mt-4 font-body text-sm leading-relaxed text-vpi-cream/90">
                As part of the General Partnership, Curran Young Construction principals are
                <span className="font-semibold text-vpi-gold-light"> co-signers on the construction loan</span>,
                ensuring full alignment between construction execution and project financing.
              </p>
              <p className="mt-4 font-body text-sm leading-relaxed text-vpi-cream/80">
                This structure provides lenders with additional recourse and demonstrates the GC's
                commitment to project success.
              </p>
            </div>
          </aside>
        </div>

        {/* Principals */}
        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {gcPrincipals.map((p) => (
            <GCPrincipalCard key={p.name} person={p} />
          ))}
        </div>
      </Section>

      {/* ═══ ARCHITECTURE & ENGINEERING ═══ */}
      <Section
        id="ae"
        eyebrow="III · DESIGN &amp; ENGINEERING"
        title="Award-Winning A&E Team"
        tone="cream"
      >
        <p className="max-w-3xl font-body text-lg leading-relaxed text-vpi-graphite">
          The strength and risk profile of this development are materially enhanced by an
          award-winning architecture and engineering team with a demonstrated history of delivering
          complex commercial and multi-family projects throughout Florida.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* ─── Boral Engineering ─── */}
          <article className="flex flex-col border border-vpi-navy/10 bg-white shadow-sm">
            <header className="border-b border-vpi-gold/30 bg-vpi-navy px-8 py-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-label text-[0.65rem] tracking-[0.3em] text-vpi-gold-light">
                    CIVIL &amp; STRUCTURAL ENGINEERING
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-medium text-vpi-cream">
                    Boral Engineering, Inc.
                  </h3>
                  <p className="mt-1 font-body text-xs italic text-vpi-cream/70">
                    Licensed Florida Professional Engineer
                  </p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center border border-vpi-gold/40 bg-white/5 font-label text-lg text-vpi-gold">
                  BE
                </div>
              </div>
            </header>

            <div className="flex-1 px-8 py-8">
              {/* Awards */}
              <div>
                <p className="font-label text-[0.65rem] tracking-[0.25em] text-vpi-gold">
                  AWARDS &amp; RECOGNITION
                </p>
                <div className="mt-3">
                  {boralAwards.map((a, i) => (
                    <AwardRow key={i} award={a} />
                  ))}
                </div>
              </div>

              {/* Leadership */}
              <div className="mt-8 border-t border-vpi-gold/20 pt-6">
                <p className="font-label text-[0.65rem] tracking-[0.25em] text-vpi-gold">
                  LEADERSHIP
                </p>
                <div className="mt-4 flex items-start gap-4">
                  <MonogramAvatar initials="AB" size="sm" />
                  <div>
                    <h4 className="font-display text-xl font-medium text-vpi-navy">
                      Andres Boral, PE, MBA
                    </h4>
                    <p className="font-body text-sm italic text-vpi-graphite">Principal Engineer</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="border border-vpi-gold/40 bg-vpi-gold/5 px-2 py-0.5 font-label text-[0.6rem] tracking-[0.15em] text-vpi-navy">
                        BUSINESS OBSERVER 40 UNDER 40
                      </span>
                      <span className="border border-vpi-gold/40 bg-vpi-gold/5 px-2 py-0.5 font-label text-[0.6rem] tracking-[0.15em] text-vpi-navy">
                        FGCU SOARING EAGLE AWARD
                      </span>
                    </div>
                    <p className="mt-3 font-body text-sm leading-relaxed text-vpi-graphite">
                      Extensive experience in feasibility analysis, entitlement strategy, and
                      structural execution.
                    </p>
                  </div>
                </div>
              </div>

              {/* Capabilities */}
              <div className="mt-8 border-t border-vpi-gold/20 pt-6">
                <p className="font-label text-[0.65rem] tracking-[0.25em] text-vpi-gold">
                  TECHNICAL CAPABILITIES
                </p>
                <ul className="mt-3 space-y-1.5 font-body text-sm text-vpi-graphite">
                  {[
                    'Municipal review & entitlement processes',
                    'Florida Building Code & high-wind standards',
                    'Infrastructure coordination & site optimization',
                    'Cost-efficient structural & civil solutions',
                    'Constructability-driven design',
                  ].map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-vpi-gold">◆</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          {/* ─── PDS Architecture ─── */}
          <article className="flex flex-col border border-vpi-navy/10 bg-white shadow-sm">
            <header className="border-b border-vpi-gold/30 bg-vpi-navy px-8 py-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-label text-[0.65rem] tracking-[0.3em] text-vpi-gold-light">
                    ARCHITECTURAL DESIGN PARTNER
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-medium text-vpi-cream">
                    PDS Architecture
                  </h3>
                  <p className="mt-1 font-body text-xs italic text-vpi-cream/70">
                    Est. 2012 · Fort Myers, FL · 60+ Years Combined Experience
                  </p>
                </div>
                <div className="flex h-16 w-16 items-center justify-center border border-vpi-gold/40 bg-white/5 font-label text-lg text-vpi-gold">
                  PDS
                </div>
              </div>
            </header>

            <div className="flex-1 px-8 py-8">
              {/* Awards */}
              <div>
                <p className="font-label text-[0.65rem] tracking-[0.25em] text-vpi-gold">
                  AWARDS &amp; RECOGNITION
                </p>
                <div className="mt-3">
                  {pdsAwards.map((a, i) => (
                    <AwardRow key={i} award={a} />
                  ))}
                </div>
              </div>

              {/* Sectors */}
              <div className="mt-8 border-t border-vpi-gold/20 pt-6">
                <p className="font-label text-[0.65rem] tracking-[0.25em] text-vpi-gold">
                  SECTORS SERVED
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {['Multifamily', 'Commercial', 'Industrial', 'Hospitality', 'Healthcare', 'Office/Retail', 'Residential'].map((s) => (
                    <span key={s} className="border border-vpi-navy/20 bg-vpi-stone/40 px-3 py-1 font-label text-[0.65rem] tracking-[0.15em] text-vpi-navy">
                      {s.toUpperCase()}
                    </span>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div className="mt-8 border-t border-vpi-gold/20 pt-6">
                <p className="font-label text-[0.65rem] tracking-[0.25em] text-vpi-gold">
                  CAPABILITIES &amp; SCALE
                </p>
                <ul className="mt-3 space-y-1.5 font-body text-sm text-vpi-graphite">
                  {[
                    'Master planning & feasibility studies',
                    'Architectural design & construction docs',
                    'Construction administration',
                    'High-quality visualization services',
                    '430,000+ SF multifamily portfolio experience',
                    'Modern digital coordination workflows',
                  ].map((c, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-vpi-gold">◆</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </Section>

      {/* ═══ EXECUTION STRENGTH CLOSER ═══ */}
      <Section
        eyebrow="EXECUTION STRENGTH"
        title="Credit Enhancement Through Integrated Expertise"
        tone="navy"
      >
        <p className="max-w-4xl font-body text-lg leading-relaxed text-vpi-cream/90">
          The collaboration between <span className="text-vpi-gold-light">Curran Young Construction</span>,
          <span className="text-vpi-gold-light"> Boral Engineering</span>, and
          <span className="text-vpi-gold-light"> PDS Architecture</span> — under the direction of a
          seasoned General Partnership — provides a coordinated, award-recognized execution platform
          that materially strengthens the overall credit profile of Lake Shadroe Resort &amp; Marina.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: 'trophy',      text: 'Demonstrated performance across multiple project types and value tiers' },
            { icon: 'pin',         text: 'Active engagement in the Southwest Florida development market' },
            { icon: 'column',      text: 'Strong regulatory and permitting familiarity' },
            { icon: 'wind',        text: 'Structural integrity aligned with high-wind Florida standards' },
            { icon: 'shieldCheck', text: 'Reduced design, entitlement, and constructability risk' },
            { icon: 'checkBadge',  text: 'Continued industry recognition and leadership stability' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 border border-vpi-gold/20 bg-white/5 p-6">
              <Icon name={item.icon} className="h-6 w-6 flex-shrink-0 text-vpi-gold-light" />
              <p className="font-body text-sm leading-relaxed text-vpi-cream/90">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-vpi-gold/30 pt-10 text-center">
          <p className="font-label text-[0.7rem] tracking-[0.3em] text-vpi-gold">
            LAKE SHADROE RESORT &amp; MARINA · 218 BURNT STORE RD S · CAPE CORAL, FL
          </p>
          <p className="mt-3 font-body text-sm text-vpi-cream/60">
            For lender inquiries, please contact Vantage Point Investments directly.
          </p>
        </div>
      </Section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-vpi-navy-deep px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="font-label text-[0.65rem] tracking-[0.3em] text-vpi-gold/70">
            VANTAGE POINT INVESTMENTS
          </p>
          <p className="font-mono text-xs text-vpi-cream/40">
            © {new Date().getFullYear()} · ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  )
}
