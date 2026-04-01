"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ScrollReveal";
import { ArrowRight } from "lucide-react";

const featured = [
  {
    name: "Tribal Minera Sdn Bhd",
    industry: "Mining & Minerals",
    description:
      "Specializing in mineral resources exploration, extraction, and processing. Tribal Minera drives responsible mining operations that contribute to Malaysia\u2019s industrial growth.",
    href: "/companies/tribal-minera",
    image: "/tribal-minera-bg.jpg",
  },
  {
    name: "Tribal Floria Sdn Bhd",
    industry: "Agriculture",
    description:
      "Sustainable agriculture and plantation management focused on high-value crops and eco-friendly farming practices.",
    href: "/companies/tribal-floria",
    image: "/tribal-floria-bg.jpg",
  },
  {
    name: "Ideasparq Robotics Sdn Bhd",
    industry: "Technology & Robotics",
    description:
      "Pioneering robotics and automation solutions for industrial and commercial applications, positioning Malaysia at the forefront of the Fourth Industrial Revolution.",
    href: "/companies/ideasparq-robotics",
    image: "/ideasparq-robotics-bg.jpg",
  },
  {
    name: "Wigo Air Sdn Bhd",
    industry: "Aviation",
    description:
      "Aviation services and air travel solutions connecting communities and businesses, with a commitment to safety and reliability.",
    href: "/companies/wigo-air",
    image: "/wigo-air-bg.jpg",
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
      "An authentic Malaysian restaurant offering traditional cuisine with a modern twist, celebrating Malaysia\u2019s rich culinary heritage.",
    href: "/companies/restoran-c-ahmad-syed",
    image: "/restoran-c-ahmad-syed-bg.jpg",
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
        description="Nine companies across six industries — each a specialist in its domain, collectively building Malaysia\u2019s future."
      />

      {/* Featured Companies — editorial alternating layout */}
      <section className="section-padding">
        <div className="container-site">
          <StaggerChildren>
            {featured.map((company, i) => (
              <StaggerItem key={company.name}>
                <Link
                  href={company.href}
                  className={`group grid md:grid-cols-2 gap-10 lg:gap-20 py-16 border-b border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors duration-200 ${
                    i % 2 === 1 ? "md:direction-rtl" : ""
                  }`}
                >
                  <div className={`aspect-[16/10] relative overflow-hidden ${company.image ? "" : "img-placeholder"} ${i % 2 === 1 ? "md:order-2" : ""}`}>
                    {company.image && (
                      <Image
                        src={company.image}
                        alt={company.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    )}
                  </div>
                  <div className={`flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                    <span className="label-text text-[var(--color-accent)] block mb-4">
                      {company.industry}
                    </span>
                    <h3
                      className="text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-200 mb-5"
                      style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                        fontSize: "var(--text-heading)",
                        fontWeight: 400,
                      }}
                    >
                      {company.name}
                    </h3>
                    <p className="text-[var(--color-text-secondary)] leading-relaxed mb-6">
                      {company.description}
                    </p>
                    <span className="editorial-link text-[var(--color-text-primary)] inline-flex items-center gap-2">
                      View profile <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Associated Companies */}
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
          <SectionHeading
            subtitle="Also Part of the Group"
            title="Associated Companies"
            description="Complementing our core portfolio and contributing to the group\u2019s diversified strength."
          />
          <StaggerChildren className="grid md:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {mentioned.map((c) => (
              <StaggerItem key={c.name}>
                <div className="text-center py-8 border-t border-[var(--color-border)]">
                  <h4
                    className="text-[var(--color-text-primary)] mb-2"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontSize: "20px",
                      fontWeight: 500,
                    }}
                  >
                    {c.name}
                  </h4>
                  <span className="text-[var(--color-text-muted)] text-[var(--text-small)]">
                    {c.industry}
                  </span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
    </>
  );
}
