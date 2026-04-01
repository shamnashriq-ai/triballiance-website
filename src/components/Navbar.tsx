"use client";

import Link from "next/link";
import Image from "next/image";
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
          ? "bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-site flex items-center justify-between h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-color.jpg"
            alt="Triballiance Group"
            width={220}
            height={60}
            className={`h-10 w-auto object-contain transition-all duration-500 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-12">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button
                  className={`flex items-center gap-1.5 label-text transition-colors duration-500 ${
                    scrolled
                      ? "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown size={10} />
                </button>
                {aboutOpen && (
                  <div className="absolute top-full left-0 mt-6 w-56 bg-[var(--color-bg)] py-4 border border-[var(--color-border)]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-6 py-3 text-[var(--text-small)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface)] transition-colors"
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
                className={`label-text transition-colors duration-500 ${
                  scrolled
                    ? "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    : "text-white/70 hover:text-white"
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
            scrolled ? "text-[var(--color-text-primary)]" : "text-white"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-[var(--color-bg)] border-t border-[var(--color-border)] px-6 py-10 space-y-6">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="space-y-4">
                <button
                  onClick={() => setAboutOpen(!aboutOpen)}
                  className="flex items-center gap-1.5 label-text text-[var(--color-text-primary)]"
                >
                  {link.label}
                  <ChevronDown
                    size={10}
                    className={`transition-transform ${aboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {aboutOpen && (
                  <div className="pl-5 space-y-4 border-l border-[var(--color-border)]">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block text-[var(--text-small)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
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
                className="block label-text text-[var(--color-text-primary)]"
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
