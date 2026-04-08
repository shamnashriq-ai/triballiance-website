"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { label: "Office", value: "E3-06-08 Tamarind Square, Persiaran Multimedia, Cyber 10, 43000 Cyberjaya, Selangor, Malaysia" },
  { label: "Email", value: "info@triballiance.com" },
  { label: "Hours", value: "Mon \u2013 Fri, 9:00 AM \u2013 6:00 PM" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        subtitle="Get in Touch"
        title="Contact Us"
        description="Have a question, proposal, or partnership opportunity? We would love to hear from you."
        backgroundImage="https://images.unsplash.com/photo-1548614239-54eff7340b6e?q=80&w=1444&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">
            {/* Form */}
            <ScrollReveal>
              <div className="accent-line mb-8" />
              <h3
                className="text-[var(--color-text-primary)] text-xl md:text-xl lg:text-2xl"
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontWeight: 400,
                  marginBottom: 0,
                }}
              >
                Send Us a Message
              </h3>
              {submitted ? (
                <div className="py-20 text-center">
                  <h4
                    className="text-[var(--color-text-primary)] md:text-lg"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontWeight: 400,
                      marginBottom: 0,
                    }}
                  >
                    Thank You
                  </h4>
                  <p className="text-[var(--color-text-secondary)] mt-3 md:text-base md:leading-[1.75]">
                    Your message has been sent. Our team will respond within 1-2 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-8 mt-[56px] md:mt-14 max-md:mt-10"
                >
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="label-text text-[var(--color-text-primary)] block mb-3 md:text-xs md:tracking-[0.18em] md:uppercase">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-0 py-4 border-0 border-b border-[var(--color-border)] text-[var(--text-body)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors bg-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="label-text text-[var(--color-text-primary)] block mb-3 md:text-xs md:tracking-[0.18em] md:uppercase">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-0 py-4 border-0 border-b border-[var(--color-border)] text-[var(--text-body)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors bg-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="label-text text-[var(--color-text-primary)] block mb-3 md:text-xs md:tracking-[0.18em] md:uppercase">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-0 py-4 border-0 border-b border-[var(--color-border)] text-[var(--text-body)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors bg-transparent"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="label-text text-[var(--color-text-primary)] block mb-3 md:text-xs md:tracking-[0.18em] md:uppercase">
                      Subject
                    </label>
                    <select
                      required
                      className="w-full px-0 py-4 border-0 border-b border-[var(--color-border)] text-[var(--text-body)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors bg-transparent"
                    >
                      <option value="">Select a topic</option>
                      <option>General Enquiry</option>
                      <option>Partnership Opportunity</option>
                      <option>Investment Enquiry</option>
                      <option>Media / Press</option>
                      <option>Careers</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="label-text text-[var(--color-text-primary)] block mb-3 md:text-xs md:tracking-[0.18em] md:uppercase">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-0 py-4 border-0 border-b border-[var(--color-border)] text-[var(--text-body)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors resize-none bg-transparent"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button type="submit" className="btn-primary mt-4">
                    Send Message <Send size={14} />
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal delay={0.2}>
              <div className="sticky top-32 text-left md:text-left">
                <span className="label-text text-[var(--color-accent)] block mb-8 md:text-xs md:tracking-[0.18em] md:uppercase">
                  Contact Information
                </span>
                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.label}>
                      <span className="label-text text-[var(--color-text-muted)] block mb-2 md:text-xs md:tracking-[0.18em] md:uppercase">
                        {info.label}
                      </span>
                      <span className="text-[var(--color-text-primary)]">
                        {info.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
