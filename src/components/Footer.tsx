// src/components/Footer.tsx
import type { FC } from "react";
import type { LucideIcon } from "lucide-react";
import { Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import footerBg from "../assets/home/footer.svg"; // ✅ your footer background

const Footer: FC = () => {
  const explore = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact" },
  ];

  const residential = [
    "The Alba Residences, Dorchester Collection, Dubai",
    "The Alba Residences, Dorchester Collection, Dubai",
    "The Alba Residences, Dorchester Collection, Dubai",
    "The Alba Residences, Dorchester Collection, Dubai",
  ];

  const commercial = [
    "The Alba Residences, Dorchester Collection, Dubai",
    "The Alba Residences, Dorchester Collection, Dubai",
    "The Alba Residences, Dorchester Collection, Dubai",
    "The Alba Residences, Dorchester Collection, Dubai",
  ];

  const socials: { icon: LucideIcon; label: string; href: string }[] = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter/X", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Send, label: "Telegram", href: "#" },
  ];

  return (
    <footer
      className="relative text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/5" aria-hidden="true" />
      <div className="relative mx-auto w-full max-w-[1200px] px-4 md:px-6 py-10 md:py-12">
        {/* Top grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Explore */}
          <div>
            <h4 className="font-serif text-2xl text-[#c2a579]">Explore</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {explore.map((i) => (
                <li key={i.label}>
                  <a
                    href={i.href}
                    className="inline-block text-white/85 hover:text-[#c2a579] transition-colors"
                  >
                    {i.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Residential */}
          <div>
            <h4 className="font-serif text-2xl text-[#c2a579]">Residential</h4>
            <ul className="mt-4 space-y-4 text-[13px] leading-5 text-white/85">
              {residential.map((t, idx) => (
                <li key={idx} className="max-w-[34ch]">{t}</li>
              ))}
            </ul>
          </div>

          {/* Commercial */}
          <div>
            <h4 className="font-serif text-2xl text-[#c2a579]">Commercial</h4>
            <ul className="mt-4 space-y-4 text-[13px] leading-5 text-white/85">
              {commercial.map((t, idx) => (
                <li key={idx} className="max-w-[34ch]">{t}</li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-serif text-2xl text-[#c2a579]">Follow Us on</h4>
            <div className="mt-4 flex flex-col gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#c2a579]/60 bg-black/40 hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-[#c2a579]/60"
                >
                  <s.icon size={16} strokeWidth={1.75} className="text-[#c2a579]" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 h-px w-full bg-white/20" />

        {/* Brand */}
        <div className="flex flex-col items-center py-8 md:py-10">
          <div className="font-serif text-4xl md:text-5xl tracking-[0.2em] text-white">
            DUKIYA
          </div>
          <div className="mt-2 text-lg tracking-[0.5em] text-white">INFRA</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
