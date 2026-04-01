import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";

const timeline = [
  {
    year: "Founded",
    event:
      "Triballiance Group established with a vision to build a diversified Malaysian conglomerate.",
  },
  {
    year: "Growth",
    event:
      "Expanded into mining, agriculture, and food & beverage sectors.",
  },
  {
    year: "Innovation",
    event:
      "Launched Ideasparq Robotics and Wigo Air, entering technology and aviation.",
  },
  {
    year: "Today",
    event:
      "A portfolio of 9+ companies across 6 industries, with flagship developments underway.",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "Embracing new ideas and technologies to stay ahead of the curve.",
  },
  {
    title: "Integrity",
    description:
      "Conducting business with transparency, honesty, and accountability.",
  },
  {
    title: "People",
    description:
      "Investing in our people — our most valuable asset across every company.",
  },
  {
    title: "Growth",
    description:
      "Pursuing sustainable growth that benefits our stakeholders and communities.",
  },
];

export default function AboutGroupPage() {
  return (
    <>
      <PageHero
        subtitle="About Us"
        title="The Triballiance Group"
        description="A diversified Malaysian conglomerate united by a shared vision of innovation, integrity, and national impact."
      />

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-max px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium block mb-4">
                Our Vision
              </span>
              <h3 className="text-2xl md:text-3xl text-[var(--primary)] mb-6">
                Where We&apos;re Headed
              </h3>
              <p className="text-[var(--gray-500)] leading-relaxed text-lg">
                To be Malaysia&apos;s most trusted and innovative diversified
                group — creating lasting value across industries while
                contributing to the nation&apos;s economic progress and global
                competitiveness.
              </p>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium block mb-4">
                Our Mission
              </span>
              <h3 className="text-2xl md:text-3xl text-[var(--primary)] mb-6">
                What Drives Us
              </h3>
              <p className="text-[var(--gray-500)] leading-relaxed text-lg">
                To build and nurture a portfolio of industry-leading companies
                that deliver excellence, drive innovation, and create meaningful
                impact for our employees, partners, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full-bleed image break */}
      <div className="h-[50vh] img-placeholder" />

      {/* Our Story */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-max px-6 lg:px-10">
          <SectionHeading
            subtitle="Our Journey"
            title="Building a Legacy"
            description="From humble beginnings to a diversified conglomerate, our journey has been driven by ambition and purpose."
          />
          <div className="container-narrow">
            {timeline.map((item, i) => (
              <div
                key={i}
                className="flex gap-8 lg:gap-12 pb-10 last:pb-0 mb-10 last:mb-0 border-b last:border-0 border-gray-200"
              >
                <span className="text-4xl md:text-5xl font-[family-name:var(--font-playfair)] text-[var(--gray-200)] shrink-0 w-16 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <span className="text-[var(--accent)] font-medium text-sm uppercase tracking-wider block mb-2">
                    {item.year}
                  </span>
                  <p className="text-[var(--gray-700)] leading-relaxed text-lg">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-max px-6 lg:px-10">
          <SectionHeading
            subtitle="What Drives Us"
            title="Our Core Values"
            description="These principles guide every decision we make and every venture we pursue."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {values.map((v) => (
              <div key={v.title}>
                <div className="accent-line mb-6" />
                <h4 className="text-xl font-[family-name:var(--font-playfair)] text-[var(--primary)] mb-3">
                  {v.title}
                </h4>
                <p className="text-sm text-[var(--gray-500)] leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
