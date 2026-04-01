"use client";

import ScrollReveal from "@/components/ScrollReveal";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  light,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <ScrollReveal className={`mb-20 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span
          className={`label-text mb-5 block ${
            light ? "text-white/40" : "text-[var(--color-accent)]"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontSize: "var(--text-heading)",
          fontWeight: 400,
          lineHeight: 1.1,
        }}
        className={light ? "text-white" : "text-[var(--color-text-primary)]"}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-[var(--text-body)] leading-relaxed mt-5 ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/50" : "text-[var(--color-text-secondary)]"}`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
