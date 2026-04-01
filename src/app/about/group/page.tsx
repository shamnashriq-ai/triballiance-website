"use client";

import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ScrollReveal";

const timeline = [
  {
    year: "Founded",
    event:
      "Triballiance Group established with a vision to build a diversified Malaysian investment holding company.",
  },
  {
    year: "Growth",
    event:
      "Expanded into mining, agriculture, and food & beverage sectors — laying the foundation of a multi-sector portfolio.",
  },
  {
    year: "Innovation",
    event:
      "Launched Ideasparq Robotics and Wigo Air, entering technology and aviation with a future-forward thesis.",
  },
  {
    year: "Today",
    event:
      "A portfolio of 9+ companies across 6 industries, with flagship developments underway and a clear path from Good to Great.",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "Finding better ways to serve, operate, and grow. Every company in our group is encouraged to pioneer new approaches.",
  },
  {
    title: "Integrity",
    description:
      "Conducting business with transparency, honesty, and accountability at every level of the organization.",
  },
  {
    title: "People",
    description:
      "Investing in our people — the most valuable asset across every company in the Triballiance portfolio.",
  },
  {
    title: "Growth",
    description:
      "Pursuing sustainable growth that compounds value for stakeholders, communities, and the nation.",
  },
];

export default function AboutGroupPage() {
  return (
    <>
      <PageHero
        subtitle="About Us"
        title="The Triballiance Group"
        description="A diversified Malaysian investment holding company united by the Good to Great thesis."
      />

      {/* Vision & Mission — two-column architectural layout */}
      <section className="section-padding" style={{ paddingTop: "calc(var(--space-section) + 25px)", paddingBottom: "calc(var(--space-section) + 25px)" }}>
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <span className="label-text text-[var(--color-accent)] block mb-5">
                Our Vision
              </span>
              <h3
                className="text-[var(--color-text-primary)] mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: "var(--text-heading)",
                  fontWeight: 400,
                }}
              >
                Where We&apos;re Headed
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                To be Malaysia&apos;s most trusted and innovative diversified
                group — creating lasting value across industries while
                contributing to the nation&apos;s economic progress and global
                competitiveness.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <span className="label-text text-[var(--color-accent)] block mb-5">
                Our Mission
              </span>
              <h3
                className="text-[var(--color-text-primary)] mb-6"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: "var(--text-heading)",
                  fontWeight: 400,
                }}
              >
                What Drives Us
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                To build and nurture a portfolio of industry-leading companies
                that deliver excellence, drive innovation, and create meaningful
                impact for employees, partners, and communities.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Full-bleed image break */}
      <div className="h-[50vh] img-placeholder" />

      {/* Journey */}
      <section className="section-padding bg-[var(--color-surface)]" style={{ paddingTop: "calc(var(--space-section) + 25px)", paddingBottom: "calc(var(--space-section) + 25px)" }}>
        <div className="container-site">
          <SectionHeading
            subtitle="Our Journey"
            title="Building a Legacy"
            description="From founding vision to a diversified conglomerate — driven by ambition, guided by purpose."
          />
          <div className="max-w-3xl mx-auto">
            <StaggerChildren>
              {timeline.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-10 lg:gap-14 pb-10 last:pb-0 mb-10 last:mb-0 border-b last:border-0 border-[var(--color-border)]">
                    <span
                      className="text-[var(--color-text-muted)] shrink-0 w-16 text-right"
                      style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                        fontSize: "48px",
                        fontWeight: 300,
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <span className="label-text text-[var(--color-accent)] block mb-3">
                        {item.year}
                      </span>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding" style={{ paddingTop: "calc(var(--space-section) + 25px)", paddingBottom: "calc(var(--space-section) + 25px)" }}>
        <div className="container-site">
          <SectionHeading
            subtitle="Our Values"
            title="What Guides Us"
            description="These principles inform every decision we make and every venture we pursue."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="accent-line mb-6" />
                <h4
                  className="text-[var(--color-text-primary)] mb-4"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: "22px",
                    fontWeight: 500,
                  }}
                >
                  {v.title}
                </h4>
                <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed">
                  {v.description}
                </p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
