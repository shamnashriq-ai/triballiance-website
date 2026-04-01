import PageHero from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    date: "March 2026",
    category: "Corporate",
    title: "Triballiance Group Announces Strategic Expansion Plans",
    excerpt:
      "The group unveils ambitious plans to expand its portfolio across key sectors, reinforcing its position as one of Malaysia\u2019s most dynamic conglomerates.",
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

      <section className="section-padding">
        <div className="container-max px-6 lg:px-10">
          {/* Featured article — large */}
          <article className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-16 pb-16 border-b border-gray-100">
            <div className="aspect-[16/10] img-placeholder" />
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
                  {articles[0].category}
                </span>
                <span className="text-xs text-[var(--gray-400)]">
                  {articles[0].date}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl text-[var(--primary)] mb-4 leading-tight">
                {articles[0].title}
              </h2>
              <p className="text-[var(--gray-500)] leading-relaxed mb-6">
                {articles[0].excerpt}
              </p>
              <span className="editorial-link text-[var(--primary)] inline-flex items-center gap-2">
                Read article <ArrowRight size={14} />
              </span>
            </div>
          </article>

          {/* Remaining articles — grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {articles.slice(1).map((article, i) => (
              <article key={i} className="group cursor-pointer">
                <div className="aspect-[16/10] img-placeholder mb-6" />
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
                    {article.category}
                  </span>
                  <span className="text-xs text-[var(--gray-400)]">
                    {article.date}
                  </span>
                </div>
                <h3 className="text-lg font-[family-name:var(--font-playfair)] text-[var(--primary)] mb-3 leading-snug group-hover:text-[var(--accent)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-[var(--gray-500)] leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
