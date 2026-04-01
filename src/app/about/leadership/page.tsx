import PageHero from "@/components/PageHero";

const leaders = [
  {
    name: "Shamsul Nashriq Norhisham",
    role: "Group CEO",
    bio: "Visionary leader with deep expertise in business strategy and corporate development. Shamsul drives the group\u2019s diversification strategy and oversees all portfolio companies, bringing a unique blend of entrepreneurial spirit and strategic discipline.",
  },
  {
    name: "Board of Directors",
    role: "Strategic Governance",
    bio: "Our board comprises experienced professionals from diverse industries who provide strategic oversight, ensuring the group maintains the highest standards of corporate governance and accountability.",
  },
  {
    name: "Management Team",
    role: "Operational Excellence",
    bio: "Each subsidiary is led by an experienced managing director supported by a dedicated team of professionals who bring deep industry knowledge and operational expertise to their respective domains.",
  },
];

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        subtitle="Leadership"
        title="Guided by Experience"
        description="Meet the leaders driving Triballiance Group\u2019s vision of diversified excellence across Malaysia."
      />

      <section className="section-padding">
        <div className="container-max px-6 lg:px-10">
          <div className="container-narrow space-y-0">
            {leaders.map((leader, i) => (
              <div
                key={i}
                className="grid md:grid-cols-[280px_1fr] gap-8 lg:gap-16 py-12 border-b border-gray-100 last:border-0 first:pt-0"
              >
                {/* Portrait placeholder */}
                <div className="aspect-[3/4] img-placeholder max-h-[360px]" />

                {/* Bio */}
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium block mb-3">
                    {leader.role}
                  </span>
                  <h3 className="text-2xl md:text-3xl text-[var(--primary)] mb-5">
                    {leader.name}
                  </h3>
                  <p className="text-[var(--gray-500)] leading-relaxed text-lg">
                    {leader.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy — full-bleed quote */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 img-placeholder" />
        <div className="absolute inset-0 bg-black/70" />

        <div className="container-max relative z-10 px-6 lg:px-10 py-20 text-center">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium block mb-6">
            Leadership Philosophy
          </span>
          <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white font-[family-name:var(--font-playfair)] leading-relaxed italic max-w-3xl mx-auto">
            &ldquo;We don&apos;t just build companies — we build ecosystems of
            opportunity that empower people and communities to thrive.&rdquo;
          </blockquote>
          <p className="text-[var(--accent)] mt-8 text-sm uppercase tracking-wider font-medium">
            Shamsul Nashriq Norhisham, Group CEO
          </p>
        </div>
      </section>
    </>
  );
}
