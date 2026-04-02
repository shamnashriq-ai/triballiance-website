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
    <ScrollReveal className={`mb-[56px] md:mb-14 max-md:mb-10 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <span
          className={`label-text mb-3 block md:mb-3 md:text-xs md:tracking-[0.18em] md:uppercase ${centered ? "text-center md:text-center" : ""} ${
            light ? "text-white/40" : "text-[var(--color-accent)]"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: 0,
        }}
        className={`text-2xl md:text-4xl lg:text-5xl md:mb-0 ${centered ? "text-center md:text-center" : ""} ${light ? "text-white" : "text-[var(--color-text-primary)]"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-[600px] leading-relaxed mt-5 md:mt-5 md:text-lg md:leading-[1.7] md:max-w-[600px] ${
            centered ? "text-center mx-auto md:text-center md:mx-auto" : ""
          } ${light ? "text-white/50" : "text-[var(--color-text-secondary)]"}`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
