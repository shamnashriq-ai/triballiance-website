import Link from "next/link";
import PageHero from "@/components/PageHero";
import { ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface CompanyPageProps {
  name: string;
  industry: string;
  description: string;
  overview: string;
  services: string[];
  highlights: { label: string; value: string }[];
  icon: LucideIcon;
  color: string;
}

export default function CompanyPage({
  name,
  industry,
  description,
  overview,
  services,
  highlights,
}: CompanyPageProps) {
  return (
    <>
      <PageHero subtitle={industry} title={name} description={description} />

      <section className="section-padding bg-white">
        <div className="container-max px-6 lg:px-10">
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 text-[var(--gray-400)] text-sm mb-12 hover:text-[var(--primary)] transition-colors"
          >
            <ArrowLeft size={14} /> Back to Companies
          </Link>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="accent-line mb-6" />
              <h3 className="text-2xl md:text-3xl text-[var(--primary)] mb-6">Overview</h3>
              <p className="text-[var(--gray-500)] leading-relaxed mb-12 text-lg">{overview}</p>

              <div className="accent-line mb-6" />
              <h3 className="text-2xl md:text-3xl text-[var(--primary)] mb-8">
                Services &amp; Capabilities
              </h3>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-5">
                {services.map((s) => (
                  <div
                    key={s}
                    className="flex items-start gap-3 py-3 border-b border-gray-100"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] mt-2 shrink-0" />
                    <span className="text-[var(--gray-700)]">{s}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="border border-gray-100 p-8 sticky top-28">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium block mb-6">
                  Quick Facts
                </span>
                <div className="space-y-5">
                  {highlights.map((h) => (
                    <div key={h.label}>
                      <span className="text-xs text-[var(--gray-400)] uppercase tracking-wider block mb-1">
                        {h.label}
                      </span>
                      <span className="font-medium text-[var(--primary)]">{h.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="block text-center bg-[var(--primary)] text-white px-6 py-3.5 text-sm font-medium tracking-wide hover:bg-[var(--primary-light)] transition-colors"
                  >
                    Enquire About This Company
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
