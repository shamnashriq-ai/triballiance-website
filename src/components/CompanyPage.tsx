"use client";

import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ScrollReveal";
import { ArrowLeft } from "lucide-react";
interface CompanyPageProps {
  name: string;
  industry: string;
  description: string;
  overview: string;
  services: string[];
  highlights: { label: string; value: string }[];
  backgroundImage?: string;
}

export default function CompanyPage({
  name,
  industry,
  description,
  overview,
  services,
  highlights,
  backgroundImage,
}: CompanyPageProps) {
  return (
    <>
      <PageHero subtitle={industry} title={name} description={description} backgroundImage={backgroundImage} />

      <section className="section-padding">
        <div className="container-site">
          <ScrollReveal>
            <Link
              href="/companies"
              className="inline-flex items-center gap-2 text-[var(--color-text-muted)] text-[var(--text-small)] mb-16 hover:text-[var(--color-text-primary)] transition-colors duration-200"
            >
              <ArrowLeft size={14} /> Back to Companies
            </Link>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-16 lg:gap-20">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="accent-line mb-8" />
                <h3
                  className="text-[var(--color-text-primary)] mb-6"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: "var(--text-heading)",
                    fontWeight: 400,
                  }}
                >
                  Overview
                </h3>
                <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mb-16">
                  {overview}
                </p>
              </ScrollReveal>

              <ScrollReveal>
                <div className="accent-line mb-8" />
                <h3
                  className="text-[var(--color-text-primary)] mb-10"
                  style={{
                    fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                    fontSize: "var(--text-heading)",
                    fontWeight: 400,
                  }}
                >
                  Services &amp; Capabilities
                </h3>
              </ScrollReveal>
              <StaggerChildren className="grid sm:grid-cols-2 gap-x-12 gap-y-0">
                {services.map((s) => (
                  <StaggerItem key={s}>
                    <div className="flex items-center gap-4 py-5 border-b border-[var(--color-border)]">
                      <span className="w-1 h-1 bg-[var(--color-accent)] shrink-0" />
                      <span className="text-[var(--color-text-secondary)]">{s}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerChildren>
            </div>

            {/* Sidebar */}
            <div>
              <ScrollReveal delay={0.2}>
                <div className="border border-[var(--color-border)] p-10 sticky top-32">
                  <span className="label-text text-[var(--color-accent)] block mb-8">
                    Quick Facts
                  </span>
                  <div className="space-y-6">
                    {highlights.map((h) => (
                      <div key={h.label}>
                        <span className="label-text text-[var(--color-text-muted)] block mb-2">
                          {h.label}
                        </span>
                        <span className="text-[var(--color-text-primary)] font-medium">
                          {h.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-10 pt-10 border-t border-[var(--color-border)]">
                    <Link href="/contact" className="btn-primary w-full justify-center text-center">
                      Enquire
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
