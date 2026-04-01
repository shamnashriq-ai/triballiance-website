"use client";

import PageHero from "@/components/PageHero";
import { Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { label: "Office", value: "Kuala Lumpur, Malaysia" },
  { label: "Phone", value: "+60 3-XXXX XXXX" },
  { label: "Email", value: "info@triballiance.com" },
  { label: "Hours", value: "Mon \u2013 Fri: 9:00 AM \u2013 6:00 PM" },
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

      <section className="section-padding">
        <div className="container-max px-6 lg:px-10">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16 lg:gap-24">
            {/* Contact Form */}
            <div>
              <div className="accent-line mb-6" />
              <h3 className="text-2xl md:text-3xl text-[var(--primary)] mb-8">
                Send Us a Message
              </h3>
              {submitted ? (
                <div className="py-16 text-center">
                  <h4 className="text-2xl text-[var(--primary)] mb-3">
                    Thank You
                  </h4>
                  <p className="text-[var(--gray-500)]">
                    Your message has been sent. Our team will get back to you
                    within 1-2 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary)] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)] transition-colors bg-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--primary)] mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-0 py-3 border-0 border-b border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)] transition-colors bg-transparent"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--primary)] mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      className="w-full px-0 py-3 border-0 border-b border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)] transition-colors bg-transparent"
                      placeholder="Your company name (optional)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--primary)] mb-2">
                      Subject
                    </label>
                    <select
                      required
                      className="w-full px-0 py-3 border-0 border-b border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)] transition-colors bg-transparent"
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
                    <label className="block text-sm font-medium text-[var(--primary)] mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-0 py-3 border-0 border-b border-gray-200 text-sm focus:outline-none focus:border-[var(--primary)] transition-colors resize-none bg-transparent"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[var(--primary)] text-white px-10 py-4 text-sm font-medium tracking-wide hover:bg-[var(--primary-light)] transition-colors inline-flex items-center gap-3 mt-4"
                  >
                    Send Message <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info — minimal sidebar */}
            <div>
              <div className="sticky top-28 space-y-8">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)] font-medium block mb-6">
                    Contact Information
                  </span>
                  <div className="space-y-6">
                    {contactInfo.map((info) => (
                      <div key={info.label}>
                        <span className="text-xs text-[var(--gray-400)] uppercase tracking-wider block mb-1">
                          {info.label}
                        </span>
                        <span className="text-[var(--primary)] text-sm">
                          {info.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
