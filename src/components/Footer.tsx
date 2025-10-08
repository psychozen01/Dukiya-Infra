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

  // Merged Projects array (residential + commercial)
  // Short highlights pulled from your uploaded PDFs.
  const projects = [
    {
      title: "Vantara",
      short:
        "48 super-luxury apartments — unit mix: 31 x 4BHK, 12 x 3BHK, 5 penthouses. Land ~3,000 sq.yds; waterfall & dual-layer clubhouse; world-class amenities and provisions (solar, 100% common backup, centralized gas bank).",
      note: "RERA: RAJ/P/2024/3101",
      // source: Vantara PDF. :contentReference[oaicite:0]{index=0}
    },
    {
      title: "The Emerald",
      short:
        "Luxury 3BHK & 4BHK apartments with pool, AC gym, rooftop garden, kids' play area, gas-bank, CCTV & 24hr power backup; prime Mansarovar location (near Mansarovar Metro).",
      note: "Site: Ashok Vatika, Gopalpura Bypass — RERA: RAJ/P/2023/2598",
      // source: emreld.pdf. :contentReference[oaicite:1]{index=1}
    },
    {
      title: "The Landmark",
      short:
        "2 / 3 BHK luxury apartments; typical BU/SBU areas listed in brochure — planned with solar panels for common area and practical floor layouts.",
      note: "Address: C3/C4/C5 Krashi Vihar, Near Mansarovar Metro — RERA: RAJ/P/2023/2649",
      // source: siddhi-homes.pdf. :contentReference[oaicite:2]{index=2}
    },
    {
      title: "Valenza (presentation)",
      short:
        "Project presentation available (Valenza PPT — April 2025). Refer to PDF for full design & delivery details.",
      note: "See Valenza PPT (uploaded).",
      // source: Valenza-PPT.pdf. :contentReference[oaicite:3]{index=3}
    },
  ];

  const socials: { icon: LucideIcon; label: string; href: string }[] = [
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61579187717172",
    },
    { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/dukiya_infra/" },
    { icon: Twitter, label: "Twitter/X", href: "#" }, // 🔹 replace later if you have one
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/dukiya-infra-private-limited/",
    },
    { icon: Send, label: "Telegram", href: "#" }, // 🔹 replace later if you have one
  ];

  return (
    <footer
      id="site-footer"
      className="relative z-0 text-white bg-cover bg-center"
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

          {/* Projects (merged Residential + Commercial) */}
          <div>
            <h4 className="font-serif text-2xl text-[#c2a579]">Projects</h4>
            {/* MODIFIED: Removed grid-cols-2 on ul, switched to simple space-y-3 and only rendering title */}
            <ul className="mt-4 space-y-3 text-sm">
              {projects.map((p) => (
                <li key={p.title}>
                  {/* MODIFIED: Wrapped title in <a> for hover effect, which acts as the project link */}
                  <a
                    href="/properties" // ⚠️ Consider linking to a specific project page if you have one
                    className="inline-block text-white/85 hover:text-[#c2a579] transition-colors"
                  >
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* MODIFIED: The original Projects section occupied 1/4 of the grid. By leaving the 4th column as-is, the projects will naturally align to the left side of the third column. 
             If you wanted the projects to fill 2/4 and the social links to be last, you'd need to re-order the columns and use `lg:col-span-2` on the Projects div.
             Since you asked for equal division, and there are only 4 projects, I've kept the simplest structure that ensures alignment.
          */}



          {/* Office Location */}
          <div>
            <h4 className="font-serif text-2xl text-[#c2a579]">Office Location</h4>
            <div className="mt-4 space-y-2 text-sm text-white/85">
              <p>Shree Shyam Residency,</p>
              <p>Flat LG -1, Ground Floor, Plot No. 7 (West Part),</p>
              <p>Dr. Rajendra Prasad Nagar,</p>
              <p>Near Shyam Baba Temple,</p>
              <p>Badarwas, Mansarover, Jaipur, Raj-302020</p>
              <a
                href="https://maps.google.com/?q=26.877474,75.742828"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center text-[#c2a579] hover:underline"
                onClick={(e) => {
                  e.preventDefault();
                  window.open('https://maps.google.com/?q=26.877474,75.742828', '_blank');
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                View on Map
              </a>
            </div>
          </div>


          {/* Follow us */}
          <div>
            <h4 className="font-serif text-2xl text-[#c2a579]">Follow Us on</h4>
            <div className="mt-4 flex flex-wrap gap-3">
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