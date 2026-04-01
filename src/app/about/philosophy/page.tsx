import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const pillars = [
  {
    title: "Innovation First",
    description:
      "We believe innovation isn\u2019t just about technology \u2014 it\u2019s about finding better ways to serve, operate, and grow. Every company in our group is encouraged to challenge conventions and pioneer new approaches.",
  },
  {
    title: "Partnership & Trust",
    description:
      "Our success is built on lasting relationships. We invest in trust \u2014 with our employees, partners, clients, and communities \u2014 knowing that strong partnerships create exponential value.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Growth without responsibility is hollow. We pursue opportunities that create long-term value while respecting our environment, our communities, and the generations that will follow.",
  },
  {
    title: "People-Centric",
    description:
      "Behind every great company are great people. We invest in talent development, create inclusive workplaces, and ensure every team member has the opportunity to grow and contribute meaningfully.",
  },
  {
    title: "Ethical Conduct",
    description:
      "Integrity is non-negotiable. We hold ourselves to the highest standards of corporate governance, transparency, and accountability in everything we do.",
  },
  {
    title: "National Contribution",
    description:
      "As a Malaysian conglomerate, we take pride in contributing to the nation\u2019s economic development, job creation, and positioning Malaysia as a competitive force in the global arena.",
  },
];

export default function PhilosophyPage() {
  return (
    <>
      <PageHero
        subtitle="Our Philosophy"
        title="What We Stand For"
        description="The principles and beliefs that guide our decisions, shape our culture, and define who we are as a group."
      />

      <section className="section-padding">
        <div className="container-max px-6 lg:px-10">
          <SectionHeading
            subtitle="Our Pillars"
            title="Six Pillars of Excellence"
            description="These foundational principles underpin everything we do across all our companies and ventures."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-14">
            {pillars.map((p, i) => (
              <div key={p.title}>
                <span className="text-5xl font-[family-name:var(--font-playfair)] text-[var(--gray-200)] block mb-4">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-[family-name:var(--font-playfair)] text-[var(--primary)] mb-3">
                  {p.title}
                </h3>
                <p className="text-[var(--gray-500)] text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote — minimal */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-max px-6 lg:px-10 text-center">
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-[var(--primary)] font-[family-name:var(--font-playfair)] leading-relaxed italic max-w-3xl mx-auto">
            &ldquo;A company is only as strong as the values it refuses to
            compromise on. At Triballiance, our values are our compass.&rdquo;
          </blockquote>
          <div className="accent-line mx-auto mt-10" />
        </div>
      </section>
    </>
  );
}
