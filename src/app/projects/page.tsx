import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const features = [
  {
    label: "Medical Technology Hub",
    description: "State-of-the-art medtech facilities and healthcare innovation centre",
  },
  {
    label: "Commercial District",
    description: "Modern retail and commercial spaces for businesses and entrepreneurs",
  },
  {
    label: "Residential Living",
    description: "Contemporary residential units designed for modern Malaysian families",
  },
  {
    label: "Green Spaces",
    description: "Integrated parks and green corridors promoting sustainable living",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero — full-bleed project image */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 img-placeholder" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="container-max relative z-10 px-6 lg:px-10 pb-16 lg:pb-24 pt-32">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium block mb-4">
            Flagship Project
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-3xl">
            Perak Medtech Park
          </h1>
          <p className="text-white/50 text-sm">Perak, Malaysia</p>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding">
        <div className="container-max px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <div className="accent-line mb-6" />
              <h2 className="text-3xl md:text-4xl text-[var(--primary)] mb-8">
                Transforming Perak&apos;s Landscape
              </h2>
              <p className="text-[var(--gray-500)] leading-relaxed text-lg mb-6">
                Perak Medtech Park is Triballiance Group&apos;s flagship mixed-use
                development — a visionary project set to transform the landscape
                of Perak. This landmark development integrates medical technology
                facilities, commercial spaces, residential living, and green
                infrastructure into a cohesive, future-ready township.
              </p>
              <p className="text-[var(--gray-500)] leading-relaxed">
                Designed to attract investment, create jobs, and elevate the
                quality of life in the region, Perak Medtech Park represents our
                commitment to building developments that serve both economic and
                social purposes.
              </p>
            </div>

            <div className="space-y-8">
              {features.map((f, i) => (
                <div
                  key={f.label}
                  className="flex gap-6 pb-8 border-b border-gray-100 last:border-0 last:pb-0"
                >
                  <span className="text-3xl font-[family-name:var(--font-playfair)] text-[var(--gray-200)] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="font-medium text-[var(--primary)] mb-1">
                      {f.label}
                    </h4>
                    <p className="text-sm text-[var(--gray-500)] leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="bg-[var(--primary)] text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-[var(--primary-light)] transition-colors inline-flex items-center gap-3"
            >
              Enquire About This Project <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Full-bleed image break */}
      <div className="h-[50vh] img-placeholder" />

      {/* Coming Soon */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-max px-6 lg:px-10 text-center">
          <SectionHeading
            subtitle="Stay Tuned"
            title="More Projects Coming Soon"
            description="We\u2019re always exploring new opportunities to create value and impact. Watch this space for upcoming developments."
          />
          <p className="text-[var(--gray-400)] text-sm">
            Contact us to learn more about upcoming investment and partnership
            opportunities.
          </p>
        </div>
      </section>
    </>
  );
}
