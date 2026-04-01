interface PageHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export default function PageHero({ title, subtitle, description }: PageHeroProps) {
  return (
    <section className="relative min-h-[60vh] flex items-end overflow-hidden">
      {/* Full-bleed image placeholder */}
      <div className="absolute inset-0 img-placeholder" />
      {/* Dark overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      <div className="container-max relative z-10 px-6 lg:px-10 pb-16 lg:pb-20 pt-32">
        {subtitle && (
          <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-medium mb-4 block">
            {subtitle}
          </span>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-[family-name:var(--font-playfair)] text-white mb-4 max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">{description}</p>
        )}
      </div>
    </section>
  );
}
