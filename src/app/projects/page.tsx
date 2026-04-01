"use client";

import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal, { StaggerChildren, StaggerItem } from "@/components/ScrollReveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    label: "Medical Technology Hub",
    description: "State-of-the-art medtech facilities and healthcare innovation centre.",
  },
  {
    label: "Commercial District",
    description: "Modern retail and commercial spaces for businesses and entrepreneurs.",
  },
  {
    label: "Residential Living",
    description: "Contemporary residential units designed for modern Malaysian families.",
  },
  {
    label: "Green Spaces",
    description: "Integrated parks and green corridors promoting sustainable living.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            poster="/perak-medtech-bg.jpg"
          >
            <source src="/perak-medtech-bg-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/85 via-[var(--color-black)]/35 to-transparent" />

        <div className="container-site relative z-10 pb-[calc(80px+25px)] lg:pb-[calc(112px+25px)] pt-40">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="label-text text-[var(--color-accent)] block mb-5"
          >
            Flagship Project
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-white max-w-4xl heading-hover"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: "var(--text-display)",
              fontWeight: 400,
              lineHeight: 1.05,
            }}
          >
            Perak Medtech Park
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-[var(--text-small)] mt-4"
          >
            Perak, Malaysia
          </motion.p>
        </div>
      </section>

      {/* Project Details — architectural two-column */}
      <section className="section-padding" style={{ paddingTop: "calc(var(--space-section) + 25px)", paddingBottom: "calc(var(--space-section) + 25px)" }}>
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <div className="accent-line mb-8" />
              <h2
                className="text-[var(--color-text-primary)] mb-8 heading-hover"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: "var(--text-heading)",
                  fontWeight: 400,
                }}
              >
                Transforming Perak&apos;s Landscape
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mb-6">
                Perak Medtech Park is Triballiance Group&apos;s flagship mixed-use
                development — a visionary project set to transform the landscape
                of Perak. This landmark integrates medical technology facilities,
                commercial spaces, residential living, and green infrastructure
                into a cohesive, future-ready township.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Designed to attract investment, create jobs, and elevate quality
                of life in the region, Perak Medtech Park represents our
                commitment to developments that serve both economic and social purposes.
              </p>
            </ScrollReveal>

            <StaggerChildren className="space-y-0">
              {features.map((f, i) => (
                <StaggerItem key={f.label}>
                  <div className="flex gap-8 pb-8 pt-8 border-b border-[var(--color-border)] first:pt-0 last:border-0 last:pb-0">
                    <span
                      className="text-[var(--color-text-muted)] shrink-0"
                      style={{
                        fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                        fontSize: "36px",
                        fontWeight: 300,
                        lineHeight: 1,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h4 className="text-[var(--color-text-primary)] font-medium mb-2">
                        {f.label}
                      </h4>
                      <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          <ScrollReveal className="mt-20 text-center">
            <Link href="/contact" className="btn-primary">
              Enquire About This Project <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Full-bleed video break */}
      <div className="h-[50vh] relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="/perak-medtech-bg.jpg"
        >
          <source src="/perak-medtech-bg-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Coming Soon */}
      <section className="section-padding bg-[var(--color-surface)]" style={{ paddingTop: "calc(var(--space-section) + 25px)", paddingBottom: "calc(var(--space-section) + 25px)" }}>
        <div className="container-site text-center">
          <SectionHeading
            subtitle="Stay Tuned"
            title="More Projects Coming Soon"
            description="We\u2019re always exploring new opportunities to create value and impact. Watch this space."
          />
        </div>
      </section>
    </>
  );
}
