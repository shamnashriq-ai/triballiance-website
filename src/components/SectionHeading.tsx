interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  center?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  light,
  center = true,
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      {subtitle && (
        <span
          className={`text-[11px] uppercase tracking-[0.2em] font-medium mb-4 block ${
            light ? "text-white/40" : "text-[var(--accent)]"
          }`}
        >
          {subtitle}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl mb-5 ${
          light ? "text-white" : "text-[var(--primary)]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed ${center ? "mx-auto" : ""} ${
            light ? "text-white/50" : "text-[var(--gray-500)]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
