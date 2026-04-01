import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white">
      <div className="container-max px-6 lg:px-10">
        {/* Main footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <span className="font-[family-name:var(--font-playfair)] text-2xl tracking-wide block mb-5">
              Triballiance
            </span>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              A diversified Malaysian conglomerate driving innovation across
              mining, agriculture, robotics, aviation, food &amp; beverage, and
              property development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium block mb-5">
              Navigate
            </span>
            <ul className="space-y-3">
              {[
                { label: "About the Group", href: "/about/group" },
                { label: "Our Companies", href: "/companies" },
                { label: "Projects", href: "/projects" },
                { label: "News", href: "/news" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium block mb-5">
              Companies
            </span>
            <ul className="space-y-3">
              {[
                "Tribal Minera",
                "Tribal Floria",
                "Ideasparq Robotics",
                "Wigo Air",
                "Bailaotai Catering",
                "Restoran C Ahmad & Syed",
              ].map((name) => (
                <li key={name}>
                  <span className="text-white/50 text-sm">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/40 font-medium block mb-5">
              Contact
            </span>
            <div className="space-y-3 text-sm text-white/50">
              <p>Kuala Lumpur, Malaysia</p>
              <p>+60 3-XXXX XXXX</p>
              <p>info@triballiance.com</p>
              <p className="pt-2 text-white/30">Mon – Fri: 9:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Triballiance Group. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
