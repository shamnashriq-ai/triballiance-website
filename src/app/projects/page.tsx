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
            className="label-text text-[var(--color-accent)] block mb-3 md:text-xs md:tracking-[0.18em] md:uppercase"
          >
            Flagship Project
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="text-white max-w-4xl text-left md:text-left text-4xl md:text-6xl lg:text-7xl"
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontWeight: 400,
              lineHeight: 1.05,
              marginBottom: 0,
            }}
          >
            Perak Medtech Park
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white text-[var(--text-small)] mt-4 text-left md:text-left"
          >
            Perak, Malaysia
          </motion.p>
        </div>
      </section>

      {/* Project Details — two-column left-aligned */}
      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <ScrollReveal>
              <div className="accent-line mb-8" />
              <h2
                className="text-[var(--color-text-primary)] text-2xl md:text-4xl lg:text-5xl"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 400,
                  marginBottom: 0,
                }}
              >
                Transforming Perak&apos;s Landscape
              </h2>
              <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg mt-4 mb-4 md:text-base md:leading-[1.75]">
                Perak Medtech Park is Triballiance Group&apos;s flagship mixed-use
                development — a visionary project set to transform the landscape
                of Perak. This landmark integrates medical technology facilities,
                commercial spaces, residential living, and green infrastructure
                into a cohesive, future-ready township.
              </p>
              <p className="text-[var(--color-text-secondary)] leading-relaxed md:text-base md:leading-[1.75]">
                Designed to attract investment, create jobs, and elevate quality
                of life in the region, Perak Medtech Park represents our
                commitment to developments that serve both economic and social purposes.
              </p>
            </ScrollReveal>

            <StaggerChildren className="space-y-0">
              {features.map((f, i) => (
                <StaggerItem key={f.label}>
                  <div className="flex gap-8 py-10 max-md:py-8 border-b border-[var(--color-border)] first:pt-0 last:border-0 last:pb-0">
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
                      <h4 className="text-[var(--color-text-primary)] font-medium md:text-lg" style={{ marginBottom: 0 }}>
                        {f.label}
                      </h4>
                      <p className="text-[var(--color-text-secondary)] text-[var(--text-small)] leading-relaxed mt-[10px] md:mt-2 md:text-sm md:leading-[1.7]">
                        {f.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerChildren>
          </div>

          <ScrollReveal className="mt-[56px] md:mt-14">
            <div className="flex justify-center md:flex md:justify-center">
              <Link href="/contact" className="btn-primary">
                Enquire About This Project <ArrowRight size={16} />
              </Link>
            </div>
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
      <section className="section-padding bg-[var(--color-surface)]">
        <div className="container-site">
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
