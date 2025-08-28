// src/pages/Home.tsx
import heroImg from "@/assets/home/hero.svg";
import img1 from "@/assets/home/img1.svg";     // skyscraper image
import img2 from "@/assets/home/img2.svg";   // re-imagining horizon image
import i1 from "@/assets/home/img3.svg"; // feature (tall)
import i2 from "@/assets/home/img4.svg"; // small
import i3 from "@/assets/home/img5.svg"; // small
import i4 from "@/assets/home/img6.svg"; // wide
import bg1 from "@/assets/home/bg1.svg";   // section background
import img7 from "@/assets/home/img7.svg"; // blog card image
import { Calendar, BookOpen, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";
import type { FormEvent } from "react"; 
// import the types
import type { LucideIcon } from "lucide-react";
import { Search } from "lucide-react";
const categories = ["Rent", "Buy", "New Projects", "Commercial"];
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Send,
  Phone,
  Mail,
  User,
  MessageSquareText,
} from "lucide-react";
export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <Hero />

      {/* Vision section */}
      <VisionSection />

      {/* Re-Imagining Horizon */}
      <HorizonSection />

      {/* Premium Properties */}
      <PremiumProperties/>
      {/* Recent Blogs */}
      <RecentBlogs/>
      {/* form */}
      <ExpressInterest/>
    </main>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 pb-32">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-[#b4956a]">
          THE ART OF ELEVATION
        </h1>
        <p className="mt-3 max-w-2xl text-sm md:text-base text-black font-medium">
          A vision that transcends property and space, where unmatched craftsmanship
          inspires elegance and innovation to enrich lives. Imagining the extraordinary
          and building it into reality.
        </p>
        <div className="mt-6">
          <button className="rounded-md border border-[#b4956a] px-6 py-2 text-sm font-medium text-[#b4956a] hover:bg-[#b4956a] hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>

      {/* bottom search panel */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 -mb-12">
        <div className="rounded-2xl bg-black/60 backdrop-blur-md p-4 shadow-lg">
          <div className="flex justify-center gap-3 mb-3 flex-wrap">
            {categories.map((c, i) => (
              <button
                key={c}
                className={`px-5 py-2 rounded-md text-sm font-medium ${i === 0
                    ? "bg-[#b4956a] text-black"
                    : "bg-transparent text-white border border-white/20 hover:bg-white/10"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center rounded-md bg-white overflow-hidden">
            <Search className="ml-3 text-black/50" size={18} />
            <input
              placeholder="City, COMMUNITY OR BUILDING"
              className="flex-1 bg-transparent px-3 py-3 text-sm text-black outline-none"
            />
            <button className="bg-[#b4956a] px-6 py-3 text-sm font-semibold text-black hover:opacity-90">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Vision Section ---------------- */
function VisionSection() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${img1})` }}
    >
      {/* dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          A VISION LIKE NO OTHER: LUMENA BY DUKIYA ILLUMINATES ULTRA-LUXURY
          COMMERCIAL REAL ESTATE
        </h2>
        <div className="mt-5">
          <button className="rounded-md bg-[#b4956a] px-6 py-2 text-sm font-medium text-black hover:opacity-90">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Horizon Section ---------------- */
function HorizonSection() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${img2})` }}
    >
      {/* gradient overlay (left side only) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

      <div className="relative z-10 px-6 md:px-16 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          RE IMAGINING HORIZON
        </h2>
      </div>
    </section>
  );
}
// premium section
export function PremiumProperties() {
  return (
    <section className="py-16 md:py-20 text-neutral-900">{/* <- force dark text here */}
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-12">
          {/* LEFT: copy */}
          <div className="md:col-span-4">
            <p className="text-[12px] tracking-wide text-[#b4956a]/85">Properties</p>

            <h2 className="mt-3 font-serif text-[32px] leading-[1.08] md:text-[40px]">
              <span className="text-[#b4956a] font-semibold">PREMIUM</span>
              <br />
              <span className="font-semibold">PROPERTIES IN THE BEST</span>
              <br />
              <span className="font-semibold">LOCATIONS</span>
            </h2>

            <p className="mt-4 max-w-[40ch] text-[12px] leading-5 text-neutral-700">
              A vision that transcends property and space , where unmatched craftsmanship inspires
              elegance and innovation to enrich lives. Imagining the extraordinary and building it
              into reality.
            </p>

            <a
              href="/properties"
              className="mt-7 inline-flex rounded-md bg-[#b4956a] px-4 py-2 text-[12px] font-semibold text-black shadow-sm hover:opacity-90"
            >
              View All Properties
            </a>
          </div>

          {/* RIGHT: collage */}
          <div className="md:col-span-8">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Left: Tall feature */}
              <figure>
                <Card image={i1} h="h-[420px] md:h-[460px]" alt="Kardhani Prime At 9 — Dukan, Jaipur" />
                <CaptionRow
                  leftTitle="Kardhani Prime At 9"
                  leftSub="Dukan, Jaipur"
                  rightTitle="Grand Polo Club & Resort"
                />
              </figure>

              {/* Right column: two stacked small cards */}
              <div className="grid gap-10">
                <figure>
                  <Card image={i2} h="h-[180px] md:h-[190px]" alt="Grand Polo Club & Resort" />
                  <CaptionRow
                    leftTitle="Kardhani Prime At 9"
                    leftSub="Dukan, Jaipur"
                    rightTitle="Grand Polo Club & Resort"
                  />
                </figure>

                <figure>
                  <Card image={i3} h="h-[180px] md:h-[190px]" alt="Kardhani Prime At 9 — Dukan, Jaipur" />
                  <CaptionRow
                    leftTitle="Kardhani Prime At 9"
                    leftSub="Dukan, Jaipur"
                    rightTitle="Grand Polo Club & Resort"
                  />
                </figure>
              </div>

              {/* Bottom: wide across both */}
              <figure className="md:col-span-2">
                <Card image={i4} h="h-[220px] md:h-[240px]" alt="Grand Polo Club & Resort" />
                <CaptionRow
                  leftTitle="Kardhani Prime At 9"
                  leftSub="Dukan, Jaipur"
                  rightTitle="Grand Polo Club & Resort"
                  rightAlign
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- presentational helpers ---------- */

function Card({ image, h, alt }: { image: string; h: string; alt: string }) {
  return (
    <div className={`w-full overflow-hidden rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.12)] ${h}`}>
      <img src={image} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

/** Caption row: left (title+sub) | thin divider | right (title) */
function CaptionRow({
  leftTitle,
  leftSub,
  rightTitle,
  rightAlign = false,
}: {
  leftTitle: string;
  leftSub?: string;
  rightTitle: string;
  rightAlign?: boolean;
}) {
  return (
    <figcaption className="mt-2 grid grid-cols-[1fr_auto_1fr] items-start gap-3 text-[12px]">
      {/* left text */}
      <div>
        <div className="font-semibold leading-tight text-neutral-900">{leftTitle}</div>
        {leftSub ? <div className="text-neutral-600">{leftSub}</div> : null}
      </div>

      {/* divider */}
      <div className="mt-0.5 h-5 w-px justify-self-center bg-neutral-300" />

      {/* right text */}
      <div className={rightAlign ? "text-right text-neutral-800" : "text-neutral-800"}>
        <div className="leading-tight">{rightTitle}</div>
      </div>
    </figcaption>
  );
}



// Recent Blogs

function RecentBlogs() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const blogs = [
    {
      id: 1,
      title:
        "Opportunities & Challenges before the Manufacturers of Guar Gum & Cassia Gum Derivatives",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exploring the current market dynamics and future prospects in guar gum manufacturing.",
      read: "3.5k read",
      date: "14 May 2025",
      image: img7,
    },
    {
      id: 2,
      title:
        "Opportunities & Challenges before the Manufacturers of Guar Gum & Cassia Gum Derivatives",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exploring the current market dynamics and future prospects in guar gum manufacturing.",
      read: "3.5k read",
      date: "14 May 2025",
      image: img7,
    },
    {
      id: 3,
      title:
        "Opportunities & Challenges before the Manufacturers of Guar Gum & Cassia Gum Derivatives",
      excerpt:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exploring the current market dynamics and future prospects in guar gum manufacturing.",
      read: "3.5k read",
      date: "14 May 2025",
      image: img7,
    },
  ];

  const scrollByViewport = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth; // one viewport
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <section
      className="relative isolate py-16 md:py-20 text-white"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      {/* dark veil for readability */}
      <div className="absolute inset-0 -z-10 bg-black/70" />

      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold">Recent Blogs</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm md:text-[15px] text-white/80">
            A vision that transcends property and space , where unmatched craftsmanship inspires elegance,
            and innovation to enrich lives. Imagining the extraordinary and building it into reality.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 md:mt-10">
          {/* mobile/tablet: horizontal snap carousel; desktop: 3-up grid */}
          <div
            ref={scrollerRef}
            className="group relative grid grid-flow-col auto-cols-[85%] gap-4 overflow-x-auto pb-4 pr-4 md:overflow-visible md:grid-cols-3 md:auto-cols-auto md:gap-6 md:pb-0"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {blogs.map((b) => (
              <article
                key={b.id}
                className="scroll-ml-4 scroll-snap-align-start rounded-2xl bg-white text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/10 md:scroll-ml-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="p-3 md:p-4">
                  <div className="overflow-hidden rounded-xl">
                    <img src={b.image} alt={b.title} className="h-40 w-full object-cover md:h-44" />
                  </div>

                  <h3 className="mt-3 text-[15px] font-semibold leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-6 text-neutral-600">
                    {b.excerpt}
                  </p>

                  {/* Meta + CTA */}
                  <div className="mt-4 flex items-center justify-between text-[12px] text-neutral-500">
                    <div className="flex items-center gap-4">
                      <span className="inline-flex items-center gap-1">
                        <BookOpen size={14} /> {b.read}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar size={14} /> {b.date}
                      </span>
                    </div>
                    <a
                      href="/blogs"
                      className="inline-flex items-center gap-1 font-medium text-[#b4956a] hover:opacity-90"
                    >
                      View More <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Carousel controls (hidden on md+) */}
          <div className="mt-4 flex items-center justify-between md:hidden">
            <div className="flex gap-2">
              <button
                onClick={() => scrollByViewport("prev")}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/60 ring-1 ring-white/20"
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scrollByViewport("next")}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/60 ring-1 ring-white/20"
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>

            {/* Dots */}
            <div className="flex items-center gap-1.5">
              {blogs.map((b) => (
                <span key={b.id} className="h-1.5 w-1.5 rounded-full bg-white/60" />
              ))}
            </div>
          </div>

          {/* Desktop “View All” */}
          <div className="mt-8 hidden justify-center md:flex">
            <a
              href="/blogs"
              className="inline-flex rounded-md bg-[#b4956a] px-5 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              View All Blogs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


// Form


function ExpressInterest() {
  const [agreeNews, setAgreeNews] = useState(true);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: hook to backend
  };

  return (
    <section className="py-16 md:py-20 text-neutral-900">
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-center font-serif text-3xl md:text-5xl font-semibold">
          Express your interest
        </h2>

        {/* Form card (no shadow per mock; just borders) */}
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          {/* Top row: name / email / phone */}
          <div className="grid gap-4 md:grid-cols-3">
            <Field>
              <Icon as={User} />
              <input
                className="field-input"
                placeholder="Name"
                name="name"
                required
              />
            </Field>

            <Field>
              <Icon as={Mail} />
              <input
                className="field-input"
                placeholder="Email"
                name="email"
                type="email"
                required
              />
            </Field>

            <Field>
              <Icon as={Phone} />
              <input
                className="field-input"
                placeholder="+91  Phone Number"
                name="phone"
                inputMode="tel"
                required
              />
            </Field>
          </div>

          {/* Message */}
          <Field multiline>
            <Icon as={MessageSquareText} />
            <textarea
              className="field-input min-h-[54px]"
              placeholder="Type Message"
              name="message"
              rows={3}
            />
          </Field>

          {/* Checks + socials (same row on md, stacked on mobile) */}
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div className="space-y-3">
              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[#b4956a]"
                  checked={agreeNews}
                  onChange={(e) => setAgreeNews(e.target.checked)}
                />
                I would like to receive communications from DUKIYA.
              </label>

              <label className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4 accent-[#b4956a]"
                  checked={agreePrivacy}
                  onChange={(e) => setAgreePrivacy(e.target.checked)}
                  required
                />
                I have read and agree to the{" "}
                <a href="/privacy" className="underline">Privacy Policy</a>.
              </label>
            </div>

            <div className="flex justify-start gap-3 md:justify-end">
              <Social icon={Facebook} aria="Facebook" />
              <Social icon={Instagram} aria="Instagram" />
              <Social icon={Twitter} aria="Twitter" />
              <Social icon={Linkedin} aria="LinkedIn" />
              <Social icon={Send} aria="Share" />
            </div>
          </div>

          {/* Submit */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="inline-flex min-w-[140px] items-center justify-center rounded-md bg-[#b4956a] px-6 py-2 text-sm font-semibold text-black hover:opacity-90"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Promo banner */}
        <div className="mt-10 rounded-2xl bg-[#efe7de]/60 px-6 py-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="font-serif text-xl md:text-2xl">
                Instant <span className="text-[#b4956a]">Video Call</span> and{" "}
                <span className="text-[#b4956a]">WhatsApp Chat</span>
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                Create team, join contests & win exciting cash prizes.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
              <a
                href="https://meet.google.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#b4956a] px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              >
                <img
                  alt=""
                  src="https://www.gstatic.com/images/branding/product/1x/meet_2020q4_48dp.png"
                  className="h-4 w-4"
                />
                Google Meet
              </a>

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black ring-1 ring-black/10 hover:bg-white/90"
              >
                <img
                  alt=""
                  src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                  className="h-4 w-4"
                />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Local styles for fields to keep markup lean */}
      <style>{`
        .field {
          display:flex; align-items:center; gap:.5rem;
          border:1px solid rgba(0,0,0,.15); border-radius:.5rem;
          padding:.5rem .75rem; background: white;
        }
        .field.multiline { align-items:flex-start; }
        .field-input {
          width:100%; background:transparent; outline:none;
          font-size:.9rem; color:#0b0f15;
        }
      `}</style>
    </section>
  );
}

/* -------------------- tiny UI helpers -------------------- */

function Field({
  children,
  multiline = false,
}: {
  children: React.ReactNode;
  multiline?: boolean;
}) {
  return <div className={multiline ? "field multiline" : "field"}>{children}</div>;
}

function Social({
  icon: Comp,
  aria,
}: {
  icon: LucideIcon;
  aria: string;
}) {
  return (
    <button
      type="button"
      aria-label={aria}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white ring-1 ring-[#b4956a]/50 text-[#b4956a] hover:bg-[#b4956a]/10"
    >
      <Comp size={16} strokeWidth={1.75} />
    </button>
  );
}

/** Generic Lucide icon renderer */
function Icon({ as: Comp }: { as: LucideIcon }) {
  return <Comp size={16} className="text-neutral-500 shrink-0" />;
}