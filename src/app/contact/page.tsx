"use client";

import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { label: "Office", value: "Kuala Lumpur, Malaysia" },
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
        description="Have a question, proposal, or partnership opportunity? We\u2019d love to hear from you."
      />

      <section className="section-padding" style={{ paddingTop: "calc(var(--space-section) + 25px)", paddingBottom: "calc(var(--space-section) + 25px)" }}>
        <div className="container-site">
          <div className="grid lg:grid-cols-[1fr_340px] gap-16 lg:gap-24">
            {/* Form */}
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
                Send Us a Message
              </h3>
              {submitted ? (
                <div className="py-20 text-center">
                  <h4
                    className="text-[var(--color-text-primary)] mb-4"
                    style={{
                      fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontSize: "var(--text-heading)",
                      fontWeight: 400,
                    }}
                  >
                    Thank You
                  </h4>
                  <p className="text-[var(--color-text-secondary)]">
                    Your message has been sent. Our team will respond within 1-2 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-8"
                >
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label className="label-text text-[var(--color-text-primary)] block mb-3">
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
                      <label className="label-text text-[var(--color-text-primary)] block mb-3">
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
                    <label className="label-text text-[var(--color-text-primary)] block mb-3">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-0 py-4 border-0 border-b border-[var(--color-border)] text-[var(--text-body)] focus:outline-none focus:border-[var(--color-text-primary)] transition-colors bg-transparent"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="label-text text-[var(--color-text-primary)] block mb-3">
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
                    <label className="label-text text-[var(--color-text-primary)] block mb-3">
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
              <div className="sticky top-32">
                <span className="label-text text-[var(--color-accent)] block mb-8">
                  Contact Information
                </span>
                <div className="space-y-8">
                  {contactInfo.map((info) => (
                    <div key={info.label}>
                      <span className="label-text text-[var(--color-text-muted)] block mb-2">
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
