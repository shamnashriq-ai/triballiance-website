import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    name: "Tribal Minera Sdn Bhd",
    industry: "Mining & Minerals",
    description:
      "Specializing in mineral resources exploration, extraction, and processing. Tribal Minera drives responsible mining operations that contribute to Malaysia\u2019s industrial growth.",
    href: "/companies/tribal-minera",
  },
  {
    name: "Tribal Floria Sdn Bhd",
    industry: "Agriculture",
    description:
      "Sustainable agriculture and plantation management focused on high-value crops and eco-friendly farming practices.",
    href: "/companies/tribal-floria",
  },
  {
    name: "Ideasparq Robotics Sdn Bhd",
    industry: "Technology & Robotics",
    description:
      "Pioneering robotics and automation solutions for industrial and commercial applications, positioning Malaysia at the forefront of the Fourth Industrial Revolution.",
    href: "/companies/ideasparq-robotics",
  },
  {
    name: "Wigo Air Sdn Bhd",
    industry: "Aviation",
    description:
      "Aviation services and air travel solutions connecting communities and businesses, with a commitment to safety and reliability.",
    href: "/companies/wigo-air",
  },
  {
    name: "Bailaotai Catering Sdn Bhd",
    industry: "Food & Beverage",
    description:
      "Premium catering and food service operations serving corporate clients, events, and institutions with exceptional quality.",
    href: "/companies/bailaotai-catering",
  },
  {
    name: "Restoran C Ahmad & Syed",
    industry: "Food & Beverage",
    description:
      "An authentic Malaysian restaurant offering traditional cuisine with a modern twist, celebrating the rich culinary heritage of Malaysia.",
    href: "/companies/restoran-c-ahmad-syed",
  },
];

const mentioned = [
  { name: "PCB Development Sdn Bhd", industry: "Property Development" },
  { name: "Berkat Bersatu Sdn Bhd", industry: "Diversified Services" },
  { name: "PCB Ancasa Sdn Bhd", industry: "Property & Hospitality" },
];

export default function CompaniesPage() {
  return (
    <>
      <PageHero
        subtitle="Our Portfolio"
        title="Our Companies"
        description="Nine companies across six industries \u2014 each a specialist in its domain, collectively building Malaysia\u2019s future."
      />

      {/* Featured Companies */}
      <section className="section-padding">
        <div className="container-max px-6 lg:px-10">
          <SectionHeading
            subtitle="Featured Companies"
            title="Our Core Portfolio"
          />
          <div className="space-y-0">
            {featured.map((company, i) => (
              <Link
                key={company.name}
                href={company.href}
                className="group grid md:grid-cols-[1fr_1.5fr] gap-8 lg:gap-16 py-10 border-b border-gray-100 hover:border-[var(--accent)] transition-colors"
              >
                {/* Image placeholder */}
                <div className="aspect-[16/10] img-placeholder" />

                {/* Content */}
                <div className="flex flex-col justify-center">
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium block mb-3">
                    {company.industry}
                  </span>
                  <h3 className="text-2xl md:text-3xl text-[var(--primary)] group-hover:text-[var(--accent)] transition-colors mb-4">
                    {company.name}
                  </h3>
                  <p className="text-[var(--gray-500)] leading-relaxed mb-5">
                    {company.description}
                  </p>
                  <span className="editorial-link text-[var(--primary)] inline-flex items-center gap-2">
                    View profile{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Associated Companies */}
      <section className="section-padding bg-[var(--gray-50)]">
        <div className="container-max px-6 lg:px-10">
          <SectionHeading
            subtitle="Also Part of the Group"
            title="Associated Companies"
            description="These companies complement our core portfolio and contribute to the group\u2019s diversified strength."
          />
          <div className="grid md:grid-cols-3 gap-8 container-narrow">
            {mentioned.map((c) => (
              <div key={c.name} className="text-center py-8">
                <h4 className="font-[family-name:var(--font-playfair)] text-lg text-[var(--primary)] mb-2">
                  {c.name}
                </h4>
                <span className="text-sm text-[var(--gray-400)]">
                  {c.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
