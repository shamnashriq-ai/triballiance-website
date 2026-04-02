"use client";

import Image from "next/image";
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
        backgroundImage="/group-bg.jpg"
      />

      {/* Vision & Mission — two-column left-aligned layout */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <span className="label-text text-[var(--color-accent)] block mb-3 md:text-xs md:tracking-[0.18em] md:uppercase">
                Our Vision
              </span>
              <h3
                className="text-[var(--color-text-primary)] text-xl md:text-xl lg:text-2xl"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 400,
                  marginBottom: 0,
                }}
              >
                Where We&apos;re Headed
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mt-3 md:text-base md:leading-[1.75]">
                To be Malaysia&apos;s most trusted and innovative diversified
                group — creating lasting value across industries while
                contributing to the nation&apos;s economic progress and global
                competitiveness.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <span className="label-text text-[var(--color-accent)] block mb-3 md:text-xs md:tracking-[0.18em] md:uppercase">
                Our Mission
              </span>
              <h3
                className="text-[var(--color-text-primary)] text-xl md:text-xl lg:text-2xl"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 400,
                  marginBottom: 0,
                }}
              >
                What Drives Us
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mt-3 md:text-base md:leading-[1.75]">
                To build and nurture a portfolio of industry-leading companies
                that deliver excellence, drive innovation, and create meaningful
                impact for employees, partners, and communities.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* T Emblem — centered */}
      <section className="section-padding relative" style={{ minHeight: "320px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="relative" style={{ height: "230px", aspectRatio: "910/1063" }}>
          <Image
            src="/t-emblem-color.png"
            alt="Triballiance Group T Emblem"
            fill
            className="object-contain"
            priority
          />
        </div>
      </section>

      {/* Full-bleed image break */}
      <div
        className="h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url(/group-bg.jpg)" }}
      />

      {/* Journey */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
          <SectionHeading
            subtitle="Our Journey"
            title="Building a Legacy"
            description="From founding vision to a diversified conglomerate — driven by ambition, guided by purpose."
          />
          <div className="max-w-3xl mx-auto">
            <StaggerChildren className="space-y-10 max-md:space-y-8">
              {timeline.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="flex gap-10 lg:gap-14 pb-0 border-b last:border-0 border-[var(--color-border)]" style={{ paddingBottom: i < timeline.length - 1 ? "40px" : "0" }}>
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
                      <span className="label-text text-[var(--color-accent)] block mb-2 md:text-xs md:tracking-[0.18em] md:uppercase">
                        {item.year}
                      </span>
                      <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mt-[10px] md:text-base md:leading-[1.75]">
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
      <section className="section-padding">
        <div className="container-site">
          <SectionHeading
            subtitle="Our Values"
            title="What Guides Us"
            description="These principles inform every decision we make and every venture we pursue."
          />
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-md:gap-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="p-8 md:p-6 max-md:p-6">
                  <div className="accent-line mb-8" />
                  <h4
                    className="text-[var(--color-text-primary)] md:text-lg"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontWeight: 500,
                      marginBottom: 0,
                    }}
                  >
                    {v.title}
                  </h4>
                  <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed mt-3 md:mt-3 md:text-sm md:leading-[1.7]">
                    {v.description}
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
