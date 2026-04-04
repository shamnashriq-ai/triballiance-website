"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ScrollReveal";

const tribalValues = [
  {
    letter: "T",
    title: "Teamwork",
    description:
      "We operate as one unified force — leveraging collective strengths across our portfolio to achieve what no single entity could alone.",
  },
  {
    letter: "R",
    title: "Relationship-Driven",
    description:
      "Every partnership, investment, and venture is built on the foundation of meaningful, trust-based relationships that endure.",
  },
  {
    letter: "I",
    title: "Innovation-Led",
    description:
      "We infuse technology and fresh thinking into traditional industries, turning good ideas into great realities through bold innovation.",
  },
  {
    letter: "B",
    title: "Bridging-Alliances",
    description:
      "We connect people, industries, and opportunities — forging strategic alliances that create value greater than the sum of their parts.",
  },
  {
    letter: "A",
    title: "Accountability",
    description:
      "We hold ourselves to the highest standards of integrity and transparency, ensuring every decision serves our stakeholders and communities.",
  },
  {
    letter: "L",
    title: "Long Lasting",
    description:
      "We build for permanence — pursuing sustainable returns for our shareholders through ventures designed to stand the test of time.",
  },
];

const visionPillars = [
  {
    title: "Strengthen Relationships",
    description:
      "Harnessing our platform with good approaches to strengthen relationships across industries and communities.",
  },
  {
    title: "Ideas to Realisation",
    description:
      "Clear roadmapping on how we move our good-to-great ideas to realisation through disciplined execution.",
  },
  {
    title: "Multiple Capital Strategies",
    description:
      "Growing our portfolios via multiple capital strategies and toolkits including M&A, tech infusion, and strategic holding.",
  },
  {
    title: "Transform & Empower",
    description:
      "Transform industries, empower communities, and impact our economy — creating lasting value for the nation.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        subtitle="Our Philosophy"
        title="The Tribal New Order"
        description="A vision we have lived by since our inception — to transform industries, empower communities, and impact our economy."
      />

      {/* T.R.I.B.A.L Investment Philosophy */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeading
            subtitle="Investment Philosophy"
            title="T.R.I.B.A.L"
            description="Six core values that define how we invest, build, and grow — driving business innovation, collaboration, and sustainable returns for our shareholders."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-6 max-md:gap-8">
            {tribalValues.map((v, i) => (
              <StaggerItem key={v.letter}>
                <div className="border-t border-[var(--color-border)] pt-8 md:text-left">
                  <span
                    className="block mb-2 md:mt-4 text-[var(--color-accent)]"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontSize: "48px",
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                  >
                    {v.letter}
                  </span>
                  <h3
                    className="text-[var(--color-text-primary)] text-xl md:text-xl lg:text-2xl md:mt-2"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontWeight: 500,
                      marginBottom: 0,
                    }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed mt-[10px] md:mt-2 md:text-sm md:leading-[1.7]">
                    {v.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site text-center">
          <ScrollReveal>
            <blockquote
              className="text-[var(--color-text-primary)] max-w-3xl mx-auto text-center md:text-center text-2xl md:text-4xl lg:text-5xl"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontWeight: 400,
                lineHeight: 1.3,
                fontStyle: "italic",
              }}
            >
              &ldquo;The Tribal New Order is a vision we live for since our
              inception.&rdquo;
            </blockquote>
            <div className="accent-line mx-auto mt-7" />
          </ScrollReveal>
        </div>
      </section>

      {/* Strategic Vision Pillars */}
      <section className="section-padding">
        <div className="container-site">
          <SectionHeading
            subtitle="Our Approach"
            title="Strategic Vision"
            description="Guided by tribal philosophy, accountability, strategic thinking, and fearless execution."
          />
          <StaggerChildren className="grid md:grid-cols-2 gap-10 md:gap-8">
            {visionPillars.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="border-t border-[var(--color-border)] pt-8 md:text-left">
                  <span
                    className="block mb-2 md:mt-4 text-[var(--color-text-muted)]"
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
                    className="text-[var(--color-text-primary)] text-xl md:text-xl lg:text-2xl md:mt-2"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontWeight: 500,
                      marginBottom: 0,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed mt-[10px] md:mt-2 md:text-sm md:leading-[1.7]">
                    {p.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
