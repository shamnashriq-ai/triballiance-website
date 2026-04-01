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
      "The group unveils ambitious plans to expand its portfolio across key sectors, reinforcing its position as one of Malaysia\u2019s most dynamic investment holding companies.",
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
      "Triballiance\u2019s technology arm introduces a next-generation robotics platform aimed at enhancing industrial productivity across Southeast Asia.",
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
      />

      <section className="section-padding" style={{ paddingTop: "calc(var(--space-section) + 25px)", paddingBottom: "calc(var(--space-section) + 25px)" }}>
        <div className="container-site">
          {/* Featured article */}
          <ScrollReveal>
            <article className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-20 pb-20 border-b border-[var(--color-border)]">
              <div className="aspect-[16/10] img-placeholder" />
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-5 mb-5">
                  <span className="label-text text-[var(--color-accent)]">
                    {articles[0].category}
                  </span>
                  <span className="text-[var(--color-text-muted)] text-xs">
                    {articles[0].date}
                  </span>
                </div>
                <h2
                  className="heading-hover text-[var(--color-text-primary)] mb-5 leading-tight"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: "var(--text-heading)",
                    fontWeight: 400,
                  }}
                >
                  {articles[0].title}
                </h2>
                <p className="text-[var(--color-text-secondary)] leading-relaxed mb-8">
                  {articles[0].excerpt}
                </p>
                <span className="editorial-link text-[var(--color-text-primary)] inline-flex items-center gap-2">
                  Read article <ArrowRight size={14} />
                </span>
              </div>
            </article>
          </ScrollReveal>

          {/* Grid */}
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {articles.slice(1).map((article, i) => (
              <StaggerItem key={i}>
                <article className="group cursor-pointer">
                  <div className="aspect-[16/10] img-placeholder mb-6" />
                  <div className="flex items-center gap-5 mb-4">
                    <span className="label-text text-[var(--color-accent)]">
                      {article.category}
                    </span>
                    <span className="text-[var(--color-text-muted)] text-xs">
                      {article.date}
                    </span>
                  </div>
                  <h3
                    className="heading-hover text-[var(--color-text-primary)] mb-3 leading-snug group-hover:text-[var(--color-accent)] transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed">
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
