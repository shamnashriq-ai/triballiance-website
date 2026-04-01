"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ScrollReveal";

const pillars = [
  {
    title: "Innovation First",
    description:
      "We believe innovation isn\u2019t just about technology \u2014 it\u2019s about finding better ways to serve, operate, and grow.",
  },
  {
    title: "Partnership & Trust",
    description:
      "Our success is built on lasting relationships. We invest in trust \u2014 with employees, partners, clients, and communities.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Growth without responsibility is hollow. We pursue opportunities that create long-term value while respecting our environment.",
  },
  {
    title: "People-Centric",
    description:
      "Behind every great company are great people. We invest in talent development and create inclusive workplaces.",
  },
  {
    title: "Ethical Conduct",
    description:
      "Integrity is non-negotiable. We hold ourselves to the highest standards of corporate governance and transparency.",
  },
  {
    title: "National Contribution",
    description:
      "As a Malaysian conglomerate, we take pride in contributing to the nation\u2019s economic development and global competitiveness.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        subtitle="Our Philosophy"
        title="What We Stand For"
        description="The principles that guide our decisions, shape our culture, and define who we are."
      />

      <section className="section-padding">
        <div className="container-site">
          <SectionHeading
            subtitle="Our Pillars"
            title="Six Pillars of Excellence"
            description="Foundational principles underpinning everything we do across all companies and ventures."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-md:gap-8">
            {pillars.map((p, i) => (
              <StaggerItem key={p.title}>
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
                      fontSize: "22px",
                      fontWeight: 500,
                      marginBottom: 0,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed mt-[10px]">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Quote */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site text-center">
          <ScrollReveal>
            <blockquote
              className="text-[var(--color-text-primary)] max-w-3xl mx-auto text-center"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "var(--text-heading)",
                fontWeight: 400,
                lineHeight: 1.3,
                fontStyle: "italic",
              }}
            >
              &ldquo;A company is only as strong as the values it refuses to
              compromise on. At Triballiance, our values are our compass.&rdquo;
            </blockquote>
            <div className="accent-line mx-auto mt-7" />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
