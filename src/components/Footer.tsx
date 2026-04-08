import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-black)] text-white">
      <div className="container-site">
        {/* Main footer */}
        <div className="pt-16 pb-10 md:pt-16 lg:pt-16 md:pb-10 lg:pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image
              src="/logo-white.png"
              alt="Triballiance Group"
              width={308}
              height={84}
              className="h-28 w-auto object-contain mb-6"
            />
            <p className="text-white/40 text-[var(--text-small)] leading-relaxed max-w-xs text-left md:text-left md:leading-[1.75]">
              A Malaysian multi-sector investment holding company operating
              under the Good to Great investment thesis.
            </p>
          </div>

          {/* Navigate */}
          <div className="text-left md:text-left md:items-start md:self-start">
            <span className="label-text text-white/30 block mb-6 md:text-xs md:tracking-[0.18em] md:uppercase">
              Navigate
            </span>
            <ul className="space-y-4">
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
                    className="text-white/50 text-[var(--text-small)] hover:text-white transition-opacity duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Companies */}
          <div className="text-left md:text-left md:items-start md:self-start">
            <span className="label-text text-white/30 block mb-6 md:text-xs md:tracking-[0.18em] md:uppercase">
              Portfolio
            </span>
            <ul className="space-y-4">
              {[
                "Tribal Minera",
                "Tribal Floria",
                "Ideasparq Robotics",
                "Wigo Air",
                "Bailaotai Catering",
                "Restoran C Ahmad & Syed",
              ].map((name) => (
                <li key={name}>
                  <span className="text-white/40 text-[var(--text-small)]">{name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-left md:text-left md:items-start md:self-start">
            <span className="label-text text-white/30 block mb-6 md:text-xs md:tracking-[0.18em] md:uppercase">
              Contact
            </span>
            <div className="space-y-4 text-[var(--text-small)] text-white/40">
              <p>E3-06-08 Tamarind Square, Persiaran Multimedia, Cyber 10, 43000 Cyberjaya, Selangor, Malaysia</p>
              <p>info@triballiance.com</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Triballiance Group. All rights reserved.
          </p>
          <div className="flex gap-10">
            <Link href="#" className="text-white/25 text-xs hover:text-white/50 transition-opacity duration-200">
              Privacy Policy
            </Link>
            <Link href="#" className="text-white/25 text-xs hover:text-white/50 transition-opacity duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
