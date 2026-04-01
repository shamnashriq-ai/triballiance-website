"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const companies = [
  { name: "Tribal Minera", sector: "Mining & Minerals", href: "/companies/tribal-minera" },
  { name: "Tribal Floria", sector: "Agriculture", href: "/companies/tribal-floria" },
  { name: "Ideasparq Robotics", sector: "Technology & Robotics", href: "/companies/ideasparq-robotics" },
  { name: "Wigo Air", sector: "Aviation", href: "/companies/wigo-air" },
  { name: "Bailaotai Catering", sector: "Food & Beverage", href: "/companies/bailaotai-catering" },
  { name: "Restoran C Ahmad & Syed", sector: "Food & Beverage", href: "/companies/restoran-c-ahmad-syed" },
];

const methodology = [
  { phase: "Identify", description: "We seek businesses with unrealized potential in sectors critical to Malaysia\u2019s growth." },
  { phase: "Invest", description: "Strategic capital deployment paired with operational infrastructure and governance." },
  { phase: "Transform", description: "Hands-on value creation through systems, talent, and market repositioning." },
  { phase: "Scale", description: "Sustainable growth pathways that compound returns across the portfolio." },
];

export default function HomePage() {
  return (
    <>
      {/* HERO — Full viewport, single declaration */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/90 via-[var(--color-black)]/40 to-transparent" />

        <div className="container-site relative z-10 pb-[calc(50vh+25px)]">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="label-text text-[var(--color-accent)] block mb-3"
          >
            Triballiance Group of Companies
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="max-w-5xl text-left"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: "var(--text-hero)",
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              marginBottom: 0,
            }}
          >
            Good to Great.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            className="text-white/45 text-lg max-w-lg leading-relaxed mt-5 text-left"
          >
            A Malaysian multi-sector investment holding company transforming
            businesses with unrealized potential into industry leaders.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.9 }}
            className="flex flex-wrap gap-4 mt-7"
          >
            <Link href="/about/group" className="btn-primary">
              Discover Our Story <ArrowRight size={16} />
            </Link>
            <Link
              href="/companies"
              className="btn-outline"
              style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}
            >
              Our Companies
            </Link>
          </motion.div>
        </div>
      </section>

      {/* THESIS — One idea, two-column left-aligned */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6 items-start">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <span className="label-text text-[var(--color-accent)] block mb-3">
                  Investment Thesis
                </span>
                <div className="accent-line" />
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8">
              <ScrollReveal delay={0.1}>
                <h2
                  className="text-[var(--color-text-primary)]"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: "var(--text-display)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    marginBottom: 0,
                  }}
                >
                  We acquire and build businesses that move
                  Malaysia forward.
                </h2>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed max-w-2xl mt-4">
                  Triballiance operates under the &ldquo;Good to Great&rdquo; thesis — identifying
                  businesses with strong fundamentals and unrealized potential, then applying
                  strategic capital, governance, and operational excellence to unlock transformative growth.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FULL-BLEED IMAGE BREAK */}
      <div className="h-[60vh] relative overflow-hidden">
        <img src="/hero-bg.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      {/* METHODOLOGY — Four phases */}
      <section className="section-padding bg-[var(--color-surface)]" >
        <div className="container-site">
          <ScrollReveal>
            <div className="text-center mb-[56px] max-md:mb-10">
              <span className="label-text text-[var(--color-accent)] block mb-3">
                Our Approach
              </span>
              <h2
                className="text-[var(--color-text-primary)]"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: "var(--text-heading)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  marginBottom: 0,
                }}
              >
                Four phases of value creation
              </h2>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-md:gap-8">
            {methodology.map((item, i) => (
              <StaggerItem key={item.phase}>
                <div className="border-t border-[var(--color-border)] pt-8">
                  <span
                    className="block mb-2 text-[var(--color-text-muted)]"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontSize: "48px",
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className="text-[var(--color-text-primary)]"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontSize: "24px",
                      fontWeight: 500,
                      marginBottom: 0,
                    }}
                  >
                    {item.phase}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed mt-[10px]">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* COMPANIES — two-column left-aligned layout */}
      <section className="section-padding" >
        <div className="container-site">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6">
            <div className="lg:col-span-4">
              <ScrollReveal>
                <span className="label-text text-[var(--color-accent)] block mb-3">
                  Our Portfolio
                </span>
                <h2
                  className="text-[var(--color-text-primary)]"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: "var(--text-heading)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    marginBottom: 0,
                  }}
                >
                  Six industries.
                  <br />
                  Nine companies.
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4 mb-7 max-w-sm">
                  Each entity operates as a specialist in its domain,
                  collectively building a diversified foundation for sustained growth.
                </p>
                <Link href="/companies" className="editorial-link text-[var(--color-text-primary)]">
                  View all companies
                </Link>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-8">
              <StaggerChildren>
                {companies.map((company, i) => (
                  <StaggerItem key={company.name}>
                    <Link
                      href={company.href}
                      className="group flex items-center justify-between py-6 border-b border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-200"
                    >
                      <div className="flex items-baseline gap-8">
                        <span className="text-[var(--color-text-muted)] text-[var(--text-small)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <span
                            className="block text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200"
                            style={{
                              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                              fontSize: "22px",
                              fontWeight: 500,
                            }}
                          >
                            {company.name}
                          </span>
                          <span className="block text-[var(--color-text-muted)] text-[var(--text-small)] mt-1">
                            {company.sector}
                          </span>
                        </div>
                      </div>
                      <ArrowRight
                        size={16}
                        className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] group-hover:translate-x-1 transition-all duration-200"
                      />
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>
          </div>
        </div>
      </section>

      {/* FLAGSHIP PROJECT — Full-bleed cinematic */}
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/perak-medtech-bg.jpg" alt="Perak Medtech Park" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[var(--color-black)]/70" />

        <div className="container-site relative z-10" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <ScrollReveal>
            <span className="label-text text-[var(--color-accent)] block mb-3">
              Flagship Project
            </span>
            <h2
              className="text-white max-w-3xl text-left"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "var(--text-display)",
                fontWeight: 400,
                lineHeight: 1.05,
                marginBottom: 0,
              }}
            >
              Perak Medtech Park
            </h2>
            <p className="text-white text-lg max-w-xl leading-relaxed mt-4 text-left mb-0">
              A landmark mixed-use development integrating medical technology,
              commercial spaces, and modern living — transforming Perak&apos;s landscape.
            </p>
            <div className="mt-7">
              <Link href="/projects" className="btn-primary">
                Explore the Project <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA — centered */}
      <section className="section-padding" >
        <div className="container-site">
          <div className="text-center">
            <ScrollReveal>
              <h2
                className="text-[var(--color-text-primary)]"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: "var(--text-display)",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  marginBottom: 0,
                }}
              >
                Let&apos;s build something
                <br />
                <em>meaningful</em> together.
              </h2>
              <p className="text-[var(--color-text-secondary)] text-lg max-w-[600px] mx-auto leading-relaxed mt-5 mb-0">
                Partnerships, investments, or conversations — we&apos;re always open
                to those who share our ambition.
              </p>
              <div className="flex justify-center gap-4 mt-7">
                <Link href="/contact" className="btn-primary">
                  Get In Touch <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
