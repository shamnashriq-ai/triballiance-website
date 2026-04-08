"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    date: "March 2026",
    category: "Corporate",
    title: "Triballiance Group Announces Strategic Expansion Plans",
    excerpt:
      "The group unveils ambitious plans to expand its portfolio across key sectors, reinforcing its position as one of Malaysia's most dynamic investment holding companies.",
  },
  {
    date: "February 2026",
    category: "Projects",
    title: "Perak Medtech Park Development Update",
    excerpt:
      "Progress continues on the flagship mixed-use development, with key milestones achieved in planning and design phases.",
  },
  {
    date: "January 2026",
    category: "Technology",
    title: "Ideasparq Robotics Launches New Automation Platform",
    excerpt:
      "Triballiance's technology arm introduces a next-generation robotics platform aimed at enhancing industrial productivity across Southeast Asia.",
  },
  {
    date: "December 2025",
    category: "F&B",
    title: "Bailaotai Catering Secures Major Corporate Contracts",
    excerpt:
      "The catering division expands its client portfolio with several high-profile corporate partnerships for 2026.",
  },
  {
    date: "November 2025",
    category: "Agriculture",
    title: "Tribal Floria Achieves Sustainability Certification",
    excerpt:
      "Our agriculture subsidiary receives international recognition for its commitment to sustainable farming practices.",
  },
  {
    date: "October 2025",
    category: "Aviation",
    title: "Wigo Air Expands Route Network",
    excerpt:
      "New routes added to connect underserved communities, improving accessibility and economic opportunities across Malaysia.",
  },
];

export default function NewsPage() {
  return (
    <>
      <PageHero
        subtitle="Latest Updates"
        title="News & Announcements"
        description="Stay informed about the latest developments across the Triballiance Group."
        backgroundImage="https://images.unsplash.com/photo-1671955101244-34c69cf8bd05?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section className="section-padding">
        <div className="container-site">
          {/* Featured article */}
          <ScrollReveal>
            <article className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-[56px] md:mb-14 pb-[56px] md:pb-14 border-b border-[var(--color-border)]">
              <div className="aspect-[16/10] img-placeholder" />
              <div className="flex flex-col justify-center text-left md:text-left">
                <div className="flex items-center gap-5 mb-3">
                  <span className="label-text text-[var(--color-accent)] md:text-xs md:tracking-[0.18em] md:uppercase">
                    {articles[0].category}
                  </span>
                  <span className="text-[var(--color-text-muted)] text-xs">
                    {articles[0].date}
                  </span>
                </div>
                <h2
                  className="text-[var(--color-text-primary)] leading-tight text-2xl md:text-4xl lg:text-5xl"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontWeight: 400,
                    marginBottom: 0,
                  }}
                >
                  {articles[0].title}
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mt-3 mb-0 md:text-base md:leading-[1.75]">
                  {articles[0].excerpt}
                </p>
                <span className="editorial-link text-[var(--color-text-primary)] inline-flex items-center gap-2 mt-7">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </article>
          </ScrollReveal>

          {/* Grid */}
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 gap-6 max-md:gap-4">
            {articles.slice(1).map((article, i) => (
              <StaggerItem key={i}>
                <article className="group cursor-pointer text-left md:text-left p-8 md:p-8 max-md:p-6">
                  <div className="aspect-[16/10] img-placeholder mb-6" />
                  <div className="flex items-center gap-5 mb-2 md:mb-2">
                    <span className="label-text text-[var(--color-accent)] md:text-xs md:tracking-[0.18em] md:uppercase">
                      {article.category}
                    </span>
                    <span className="text-[var(--color-text-muted)] text-xs">
                      {article.date}
                    </span>
                  </div>
                  <h3
                    className="text-[var(--color-text-primary)] leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-200 text-xl md:text-xl lg:text-2xl"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontWeight: 500,
                      marginBottom: 0,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed mt-3 md:text-sm md:leading-[1.7]">
                    {article.excerpt}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
