"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";

const leaders = [
  {
    name: "Shamsul Nashriq Norhisham",
    role: "Group CEO",
    bio: "A designer-turned-strategist with 16+ years of experience across business development, brand strategy, and corporate restructuring. Shamsul drives the group\u2019s \u201cGood to Great\u201d investment thesis and oversees the entire portfolio — bringing a rare blend of creative vision and operational discipline to every venture.",
  },
  {
    name: "Board of Directors",
    role: "Strategic Governance",
    bio: "Experienced professionals from diverse industries providing strategic oversight, ensuring the group maintains the highest standards of corporate governance, accountability, and long-term value creation.",
  },
  {
    name: "Management Team",
    role: "Operational Excellence",
    bio: "Each subsidiary is led by an experienced managing director supported by dedicated professionals who bring deep industry knowledge and operational expertise to their respective domains.",
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
                <div className="grid md:grid-cols-[300px_1fr] gap-10 lg:gap-16 py-16 border-b border-[var(--color-border)] last:border-0 first:pt-0">
                  <div className="aspect-[3/4] img-placeholder max-h-[380px]" />
                  <div className="flex flex-col justify-center">
                    <span className="label-text text-[var(--color-accent)] block mb-4">
                      {leader.role}
                    </span>
                    <h3
                      className="text-[var(--color-text-primary)] mb-6"
                      style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                        fontSize: "var(--text-heading)",
                        fontWeight: 400,
                      }}
                    >
                      {leader.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">
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

        <div className="container-site relative z-10 py-24 text-center">
          <ScrollReveal>
            <span className="label-text text-[var(--color-accent)] block mb-8">
              Leadership Philosophy
            </span>
            <blockquote
              className="text-white max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "var(--text-heading)",
                fontWeight: 400,
                lineHeight: 1.3,
                fontStyle: "italic",
              }}
            >
              &ldquo;We don&apos;t just build companies — we build ecosystems of
              opportunity that empower people and communities to thrive.&rdquo;
            </blockquote>
            <p className="label-text text-[var(--color-accent)] mt-10">
              Shamsul Nashriq Norhisham, Group CEO
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
