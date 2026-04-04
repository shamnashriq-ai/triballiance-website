"use client";

import Link from "next/link";
import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const marketStats = [
  { value: "11%", label: "CAGR (YoY)", sub: "Healthcare growth" },
  { value: "USD 30B", label: "Malaysia Healthcare", sub: "Market size by 2027" },
  { value: "15.3%", label: "Aging Society", sub: "By 2030" },
  { value: ">50%", label: "Indonesian", sub: "Medical tourists" },
];

const clusters = [
  {
    number: "01",
    label: "Private Hospital",
    description: "A 200-bed PFI-led private hospital facility across 5 acres, anchoring the park\u2019s healthcare ecosystem.",
    gdv: "RM 500M",
  },
  {
    number: "02",
    label: "Teaching Hospital Campus",
    description: "A 5-acre medical university college campus integrating work, live, study and play \u2014 the base for medtech talent supply.",
    gdv: "RM 250M",
  },
  {
    number: "03",
    label: "Medtech Incubation Cohort",
    description: "A 2-acre innovation precinct for medtech startups and companies to develop and commercialise healthcare solutions.",
    gdv: "RM 150M",
  },
  {
    number: "04",
    label: "Wellness & Frontliner Residency",
    description: "Staff residential blocks and wellness residency clusters across 3 acres, designed for hospital frontliners and families.",
    gdv: "TBA",
  },
  {
    number: "05",
    label: "Commercial District",
    description: "10 acres of commercial shoplots, retail units and residential developments serving the surrounding 150,000-strong community.",
    gdv: "RM 380M",
  },
];

const swot = {
  strengths: [
    "Adjacent to PLUS highway (Jelapang) with high landmark visibility",
    "PERKESO Rehabilitation Hospital nearby \u2014 largest in Southeast Asia",
    "Healthcare is recession-proof and critical to ASEAN communities",
  ],
  opportunities: [
    "Bandar Meru Raya projected to reach 500,000 population by 2030",
    "Growing demand for quality health tourism access",
    "Government offices shifting to BMR \u2014 transforming it into a Mini Putrajaya",
  ],
};

const timeline = [
  { phase: "Planning & Approval", years: "Year 1" },
  { phase: "Teaching Campus", years: "Year 1\u20133" },
  { phase: "Hostel & Residential", years: "Year 2\u20134" },
  { phase: "Commercial", years: "Year 3\u20135" },
  { phase: "Private Hospital", years: "Year 3\u20136" },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/perak-medtech-bg.jpg"
          >
            <source src="/perak-medtech-bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/85 via-[var(--color-black)]/35 to-transparent" />

        <div className="container-site relative z-10 pb-[calc(80px+25px)] lg:pb-[calc(112px+25px)] pt-40">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="label-text text-[var(--color-accent)] block mb-3 md:text-xs md:tracking-[0.18em] md:uppercase"
          >
            Flagship Project
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="max-w-md md:max-w-lg lg:max-w-xl"
          >
            <Image
              src="/pmp-logo-white.png"
              alt="Perak Medtech Park"
              width={800}
              height={320}
              className="w-full h-auto"
              priority
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white/80 text-[var(--text-small)] mt-4 text-left md:text-left max-w-2xl"
          >
            Experience The Valley For Wellness Innovation & Healthcare Excellence
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/60 text-sm mt-2 text-left md:text-left"
          >
            Bandar Meru Raya, Ipoh City, Perak &middot; Malaysia
          </motion.p>
        </div>
      </section>

      {/* Market Context */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
          <ScrollReveal>
            <p className="label-text text-[var(--color-accent)] mb-3">ASEAN&apos;s Healthcare Transit Loop</p>
            <h2
              className="text-[var(--color-text-primary)] text-2xl md:text-4xl lg:text-5xl max-w-3xl"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontWeight: 400,
                marginBottom: 0,
              }}
            >
              Malaysia&apos;s Healthcare Opportunity
            </h2>
            <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mt-4 mb-12 md:text-base md:leading-[1.75] max-w-3xl">
              Demand for private healthcare services in Malaysia is expected to continue to grow in tandem with an expanding upper-middle income and affluent population segment. With Perak as the #1 aging population state and rapid urbanisation in Ipoh, the opportunity is clear.
            </p>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {marketStats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center md:text-left">
                  <p
                    className="text-[var(--color-accent)] text-3xl md:text-4xl lg:text-5xl"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontWeight: 500,
                      marginBottom: 0,
                      lineHeight: 1.1,
                    }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[var(--color-text-primary)] font-medium text-sm mt-2" style={{ marginBottom: 0 }}>
                    {s.label}
                  </p>
                  <p className="text-[var(--color-text-muted)] text-xs mt-1">{s.sub}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* The Story — Location & Context */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <div className="accent-line mb-8" />
              <h2
                className="text-[var(--color-text-primary)] text-2xl md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 400,
                  marginBottom: 0,
                }}
              >
                A Global City Nestled In The Heart of ASEAN
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mt-4 mb-4 md:text-base md:leading-[1.75]">
                Situated in Bandar Meru Raya — a rapidly urbanising township of over 150,000 residents (80% youths) — Perak Medtech Park is a 35-acre technology park with a deep focus on wellness and healthtech, poised to become the destination for innovative healthcare solutions.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed md:text-base md:leading-[1.75] mb-4">
                Ipoh City sits at the crossroads of ASEAN&apos;s healthcare transit loop, just 12 minutes from Sultan Azlan Shah Airport, 2 hours from Penang, and 2.5 hours from Kuala Lumpur. With the Menora Tunnel development nearby and PLUS highway adjacency, PMP enjoys unmatched connectivity and landmark visibility.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed md:text-base md:leading-[1.75]">
                The park addresses a critical gap: there is yet no hospital in Bandar Meru Raya, Hospital Raja Permaisuri Bainun is over capacity with no room for expansion, and Penang&apos;s healthcare access is at full capacity. PMP is positioned to catalyse greater access to affordable, quality healthcare services in this connected, rapidly growing market.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="space-y-6">
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/pmp-masterplan.jpg"
                    alt="Bandar Meru Raya masterplan showing Perak Medtech Park development site"
                    width={800}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-[var(--color-surface)] rounded-xl p-4">
                    <p className="text-[var(--color-text-primary)] font-medium text-sm" style={{ marginBottom: 0 }}>12 min</p>
                    <p className="text-[var(--color-text-muted)] text-xs mt-1">to Airport</p>
                  </div>
                  <div className="bg-[var(--color-surface)] rounded-xl p-4">
                    <p className="text-[var(--color-text-primary)] font-medium text-sm" style={{ marginBottom: 0 }}>2 hrs</p>
                    <p className="text-[var(--color-text-muted)] text-xs mt-1">to Penang</p>
                  </div>
                  <div className="bg-[var(--color-surface)] rounded-xl p-4">
                    <p className="text-[var(--color-text-primary)] font-medium text-sm" style={{ marginBottom: 0 }}>2.5 hrs</p>
                    <p className="text-[var(--color-text-muted)] text-xs mt-1">to KL</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 md:py-28 bg-[var(--color-black)]">
        <div className="container-site">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="label-text text-[var(--color-accent)] mb-4">The Mission</p>
              <h2
                className="text-white text-2xl md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 400,
                  marginBottom: 0,
                  lineHeight: 1.15,
                }}
              >
                &ldquo;To Strengthen Perak As The Hub For Inclusive Healthcare Access&rdquo;
              </h2>
              <p className="text-white/60 mt-6 md:text-base leading-relaxed">
                Backed by the Ministry of Higher Education and Ministry of Health, PMP brings together hospital operators, campus partners, landowners, and medtech innovators as first movers in an ecosystem development model.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Masterplan — Clusters */}
      <section className="section-padding">
        <div className="container-site">
          <ScrollReveal>
            <div className="accent-line mb-8" />
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
              <div>
                <h2
                  className="text-[var(--color-text-primary)] text-2xl md:text-4xl lg:text-5xl"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontWeight: 400,
                    marginBottom: 0,
                  }}
                >
                  The Masterplan
                </h2>
                <p className="text-[var(--color-text-secondary)] mt-3 md:text-base leading-relaxed max-w-2xl">
                  A 35-acre integrated ecosystem across five development clusters with a combined Gross Development Value of RM 1.28 billion.
                </p>
              </div>
              <p
                className="text-[var(--color-accent)] text-2xl md:text-3xl shrink-0"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 500,
                  marginBottom: 0,
                }}
              >
                GDV RM 1.28B
              </p>
            </div>
          </ScrollReveal>

          <StaggerChildren className="space-y-0">
            {clusters.map((c) => (
              <StaggerItem key={c.number}>
                <div className="flex gap-8 py-10 max-md:py-8 border-b border-[var(--color-border)] first:border-t">
                  <span
                    className="text-[var(--color-text-muted)] shrink-0"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontSize: "36px",
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    {c.number}
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                      <h4 className="text-[var(--color-text-primary)] font-medium md:text-lg" style={{ marginBottom: 0 }}>
                        {c.label}
                      </h4>
                      <span className="text-[var(--color-accent)] text-sm font-medium shrink-0">
                        {c.gdv}
                      </span>
                    </div>
                    <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed mt-[10px] md:mt-2 md:text-sm md:leading-[1.7]">
                      {c.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Full-bleed video break */}
      <div className="h-[50vh] relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/perak-medtech-bg.jpg"
        >
          <source src="/perak-medtech-bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Strategic Position */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
          <ScrollReveal>
            <div className="accent-line mb-8" />
            <h2
              className="text-[var(--color-text-primary)] text-2xl md:text-4xl lg:text-5xl mb-12"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Strategic Position
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal>
              <h3 className="text-[var(--color-text-primary)] font-medium text-lg mb-4" style={{ marginBottom: "16px" }}>
                Strengths
              </h3>
              <ul className="space-y-4">
                {swot.strengths.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[var(--color-accent)] mt-1 shrink-0">&#9654;</span>
                    <span className="text-[var(--color-text-secondary)] md:text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h3 className="text-[var(--color-text-primary)] font-medium text-lg mb-4" style={{ marginBottom: "16px" }}>
                Opportunities
              </h3>
              <ul className="space-y-4">
                {swot.opportunities.map((o, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[var(--color-accent)] mt-1 shrink-0">&#9654;</span>
                    <span className="text-[var(--color-text-secondary)] md:text-sm leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Development Timeline */}
      <section className="section-padding">
        <div className="container-site">
          <ScrollReveal>
            <div className="accent-line mb-8" />
            <h2
              className="text-[var(--color-text-primary)] text-2xl md:text-4xl lg:text-5xl mb-12"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontWeight: 400,
              }}
            >
              Development Timeline
            </h2>
          </ScrollReveal>

          <StaggerChildren className="space-y-0">
            {timeline.map((t) => (
              <StaggerItem key={t.phase}>
                <div className="flex items-center gap-8 py-6 border-b border-[var(--color-border)] first:border-t">
                  <span className="text-[var(--color-accent)] font-medium text-sm w-24 shrink-0">
                    {t.years}
                  </span>
                  <span className="text-[var(--color-text-primary)] md:text-base">
                    {t.phase}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
          <ScrollReveal>
            <div className="text-center">
              <h2
                className="text-[var(--color-text-primary)] text-2xl md:text-4xl lg:text-5xl mb-4"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 400,
                }}
              >
                Invest In The Future of Healthcare
              </h2>
              <p className="text-[var(--color-text-secondary)] md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
                PMP Medtech Sdn Bhd is the ecosystem builder driving investment promotions and cluster development. We welcome partners, investors, and healthcare operators to be part of this vision.
              </p>
              <Link href="/contact" className="btn-primary">
                Enquire About This Project <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeading
            subtitle="Stay Tuned"
            title="More Projects Coming Soon"
            description="We&#39;re always exploring new opportunities to create value and impact. Watch this space."
          />
        </div>
      </section>
    </>
  );
}
