"use client";

import Image from "next/image";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const leaders = [
  {
    name: "Shamsul Nashriq Bin Norhisham",
    role: "Group Managing Director",
    image: "/leader-shamsul-nashriq.jpg",
    bio: "A designer-turned-strategist with 16+ years of experience across business development, brand strategy, and corporate restructuring. Shamsul drives the group\u2019s \u201cGood to Great\u201d investment thesis and oversees the entire portfolio — bringing a rare blend of creative vision and operational discipline to every venture.",
  },
  {
    name: "Khairil Aminudin",
    role: "Group Chief Operating Officer",
    image: null,
    bio: "Bio coming soon.",
  },
  {
    name: "Mohd Azzart Moideen",
    role: "Group Chief Corporate Strategy",
    image: null,
    bio: "Bio coming soon.",
  },
  {
    name: "Faizah Ishak",
    role: "Chief Financial Officer",
    image: null,
    bio: "Bio coming soon.",
  },
  {
    name: "Yusni Yussof",
    role: "Chief Legal Officer",
    image: null,
    bio: "Bio coming soon.",
  },
  {
    name: "Faizul",
    role: "Head of Development",
    image: "/leader-faizul.jpg",
    bio: "Bio coming soon.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        subtitle="Leadership"
        title="Guided by Experience"
        description="The leadership driving Triballiance Group\u2019s vision of diversified excellence across Malaysia."
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            {leaders.map((leader, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="grid md:grid-cols-[280px_1fr] gap-8 lg:gap-14 py-14 border-b border-[var(--color-border)] last:border-0 first:pt-0">
                  <div className="aspect-[3/4] max-h-[360px] overflow-hidden rounded-sm bg-[var(--color-surface)]">
                    {leader.image ? (
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={280}
                        height={373}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-[var(--color-text-secondary)] text-sm">
                        Photo
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col justify-center text-left md:text-left">
                    <span className="label-text text-[var(--color-accent)] block mb-3 md:text-xs md:tracking-[0.18em] md:uppercase">
                      {leader.role}
                    </span>
                    <h3
                      className="text-[var(--color-text-primary)] text-xl md:text-xl lg:text-2xl"
                      style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                        fontWeight: 400,
                        marginBottom: 0,
                      }}
                    >
                      {leader.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mt-4 md:text-base md:leading-[1.75]">
                      {leader.bio}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote — full-bleed cinematic */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 img-placeholder" />
        <div className="absolute inset-0 bg-[var(--color-black)]/75" />

        <div className="container-site relative z-10" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
          <div className="text-center">
            <ScrollReveal>
              <span className="label-text text-[var(--color-accent)] block mb-3 text-center md:text-center md:text-xs md:tracking-[0.18em] md:uppercase">
                Leadership Philosophy
              </span>
              <blockquote
                className="text-white max-w-3xl mx-auto text-center md:text-center text-2xl md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 400,
                  lineHeight: 1.3,
                  fontStyle: "italic",
                }}
              >
                &ldquo;We don&apos;t just build companies — we build ecosystems of
                opportunity that empower people and communities to thrive.&rdquo;
              </blockquote>
              <p className="label-text text-[var(--color-accent)] mt-7 text-center md:text-center md:text-xs md:tracking-[0.18em] md:uppercase">
                Shamsul Nashriq Bin Norhisham, Group Managing Director
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
