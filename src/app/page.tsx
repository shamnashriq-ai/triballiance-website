import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const companies = [
  {
    name: "Tribal Minera",
    industry: "Mining & Minerals",
    href: "/companies/tribal-minera",
  },
  {
    name: "Tribal Floria",
    industry: "Agriculture",
    href: "/companies/tribal-floria",
  },
  {
    name: "Ideasparq Robotics",
    industry: "Technology & Robotics",
    href: "/companies/ideasparq-robotics",
  },
  {
    name: "Wigo Air",
    industry: "Aviation",
    href: "/companies/wigo-air",
  },
  {
    name: "Bailaotai Catering",
    industry: "Food & Beverage",
    href: "/companies/bailaotai-catering",
  },
  {
    name: "Restoran C Ahmad & Syed",
    industry: "Food & Beverage",
    href: "/companies/restoran-c-ahmad-syed",
  },
];

const stats = [
  { value: "9+", label: "Companies" },
  { value: "6", label: "Industries" },
  { value: "500+", label: "Employees" },
  { value: "Malaysia", label: "Headquartered" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — full-bleed imagery with minimal text */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0 img-placeholder" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        <div className="container-max relative z-10 px-6 lg:px-10 pb-20 lg:pb-28">
          <span className="text-[11px] uppercase tracking-[0.25em] text-white/50 font-medium block mb-5">
            Triballiance Group of Companies
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.05] text-white max-w-4xl mb-8">
            Building Tomorrow,{" "}
            <span className="italic text-[var(--accent)]">Together.</span>
          </h1>
          <p className="text-white/50 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
            A diversified Malaysian conglomerate driving innovation and
            sustainable growth across six industries.
          </p>
          <div className="flex flex-wrap gap-5">
            <Link
              href="/about/group"
              className="bg-white text-[var(--primary)] px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
            >
              Discover Our Story
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/companies"
              className="border border-white/30 text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-white/10 transition-colors"
            >
              Our Companies
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — clean horizontal strip */}
      <section className="border-b border-gray-100">
        <div className="container-max px-6 lg:px-10 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-[family-name:var(--font-playfair)] text-[var(--primary)] mb-1">
                  {stat.value}
                </div>
                <div className="text-[var(--gray-400)] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview — editorial two-column with image */}
      <section className="section-padding">
        <div className="container-max px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="aspect-[4/5] img-placeholder" />

            {/* Text */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium block mb-4">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--primary)] mb-8 leading-tight">
                A Legacy of Diversified Excellence
              </h2>
              <p className="text-[var(--gray-500)] leading-relaxed mb-6 text-lg">
                Triballiance Group is a Malaysian conglomerate with a portfolio
                spanning six key industries. Founded on the principles of
                innovation, integrity, and impact, we bring together companies
                that shape the future of their respective sectors.
              </p>
              <p className="text-[var(--gray-500)] leading-relaxed mb-10">
                From the depths of mineral extraction to the heights of
                aviation, from sustainable agriculture to cutting-edge robotics
                — our diverse portfolio reflects our commitment to building a
                stronger, more innovative Malaysia.
              </p>
              <Link
                href="/about/group"
                className="editorial-link text-[var(--primary)]"
              >
                Learn more about us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Companies — minimal list with hover */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-max px-6 lg:px-10">
          <SectionHeading
            subtitle="Our Portfolio"
            title="Companies Under Triballiance"
            description="Our group spans six industries, each company a leader in its domain."
          />
          <div className="max-w-4xl mx-auto">
            {companies.map((company, i) => (
              <Link
                key={company.name}
                href={company.href}
                className="group flex items-center justify-between py-6 border-b border-gray-200 hover:border-[var(--accent)] transition-colors"
              >
                <div className="flex items-baseline gap-6">
                  <span className="text-[var(--gray-300)] text-sm font-medium">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <span className="text-xl md:text-2xl font-[family-name:var(--font-playfair)] text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors">
                      {company.name}
                    </span>
                    <span className="block text-sm text-[var(--gray-400)] mt-0.5">
                      {company.industry}
                    </span>
                  </div>
                </div>
                <ArrowRight
                  size={18}
                  className="text-[var(--gray-300)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all"
                />
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/companies"
              className="bg-[var(--primary)] text-white px-8 py-4 text-sm font-medium tracking-wide hover:bg-[var(--primary-light)] transition-colors inline-flex items-center gap-3"
            >
              View All Companies <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Flagship Project — full-bleed image section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 img-placeholder" />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container-max relative z-10 px-6 lg:px-10 py-20">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium block mb-4">
            Flagship Project
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 max-w-2xl">
            Perak Medtech Park
          </h2>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-10">
            A landmark mixed-use development set to transform Perak&apos;s landscape
            — integrating medical technology, commercial spaces, and modern
            living.
          </p>
          <Link
            href="/projects"
            className="bg-white text-[var(--primary)] px-8 py-4 text-sm font-medium tracking-wide hover:bg-gray-100 transition-colors inline-flex items-center gap-3"
          >
            Explore the Project <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* CTA — clean, minimal */}
      <section className="section-padding">
        <div className="container-max px-6 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[var(--primary)] mb-6">
            Let&apos;s Build Something{" "}
            <span className="italic">Great Together</span>
          </h2>
          <p className="text-[var(--gray-500)] text-lg max-w-xl mx-auto leading-relaxed mb-10">
            Whether you&apos;re exploring partnerships, investment opportunities, or
            simply want to learn more about Triballiance Group.
          </p>
          <Link
            href="/contact"
            className="bg-[var(--primary)] text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-[var(--primary-light)] transition-colors inline-flex items-center gap-3"
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
