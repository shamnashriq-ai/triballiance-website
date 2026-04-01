"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-end overflow-hidden">
      <div className="absolute inset-0 img-placeholder" />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-black)]/80 via-[var(--color-black)]/30 to-[var(--color-black)]/10" />

      <div className="container-site relative z-10 pb-20 lg:pb-28 pt-40">
        {subtitle && (
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="label-text text-[var(--color-accent)] mb-5 block"
          >
            {subtitle}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-white max-w-4xl"
          style={{
            fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
            fontSize: "var(--text-display)",
            fontWeight: 400,
            lineHeight: 1.05,
          }}
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-white/50 text-lg max-w-xl leading-relaxed mt-6"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
