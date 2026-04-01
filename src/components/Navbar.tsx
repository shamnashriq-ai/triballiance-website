"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about/group",
    children: [
      { label: "The Group", href: "/about/group" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Philosophy", href: "/about/philosophy" },
    ],
  },
  { label: "Companies", href: "/companies" },
  { label: "Projects", href: "/projects" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm border-b border-gray-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between h-20 px-6 lg:px-10">
        {/* Logo — serif wordmark */}
        <Link href="/" className="flex items-center gap-3">
          <span
            className={`font-[family-name:var(--font-playfair)] text-2xl tracking-wide transition-colors duration-500 ${
              scrolled ? "text-[var(--primary)]" : "text-white"
            }`}
          >
            Triballiance
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 text-[13px] uppercase tracking-[0.12em] font-medium transition-colors duration-500 ${
                    scrolled
                      ? "text-[var(--gray-700)] hover:text-[var(--primary)]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={12} />
                </button>
                {aboutOpen && (
                  <div className="absolute top-full left-0 mt-4 w-52 bg-white py-3 shadow-lg border border-gray-100">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-[var(--gray-500)] hover:text-[var(--primary)] hover:bg-[var(--gray-50)] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={`text-[13px] uppercase tracking-[0.12em] font-medium transition-colors duration-500 ${
                  scrolled
                    ? "text-[var(--gray-700)] hover:text-[var(--primary)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden transition-colors duration-500 ${
            scrolled ? "text-[var(--primary)]" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-8 space-y-5">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="space-y-3">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1.5 text-[13px] uppercase tracking-[0.12em] font-medium text-[var(--primary)]"
                >
                  {link.label}
                  <ChevronDown
                    size={12}
                    className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {aboutOpen && (
                  <div className="pl-4 space-y-3 border-l border-gray-200">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-sm text-[var(--gray-500)] hover:text-[var(--primary)]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-[13px] uppercase tracking-[0.12em] font-medium text-[var(--primary)]"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
