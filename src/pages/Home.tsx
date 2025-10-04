// src/pages/Home.tsx
import heroImg from "@/assets/home/hero.svg";
import img1 from "@/assets/home/img1.svg";     // skyscraper image
import img2 from "@/assets/home/img2.svg";   // re-imagining horizon image
import i1 from "@/assets/home/img3.png"; // feature (tall)
import i2 from "@/assets/home/img4.png"; // small
import i3 from "@/assets/home/img5.png"; // small
import i4 from "@/assets/home/img6.png"; // wide
import { useEffect } from "react";
import { X, } from "lucide-react";
import { Calendar, BookOpen, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { useState } from "react";

// import the types
import type { LucideIcon } from "lucide-react";
import {
  
  Phone,
  Mail,
  User,
  MessageSquareText,
} from "lucide-react";
import { Link } from "react-router-dom";
import Chatbot from "../components/Chatbot";
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
      <PremiumProperties />
      {/* form */}
      <ExpressInterest />
      {/* Recent Blogs */}
      <RecentBlogs />
      <Chatbot />
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
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 pb-12">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide text-[#b4956a]">
          THE ART OF ELEVATION
        </h1>
        <p className="mt-5 max-w-2xl text-sm md:text-base text-black font-medium">
          A vision that transcends property and space, where unmatched craftsmanship
          inspires elegance and innovation to enrich lives. Imagining the extraordinary
          and building it into reality.
        </p>
        <div className="mt-6">

        </div>
      </div>

      {/* bottom search panel */}
      {/* <div className="relative z-10 w-full max-w-5xl mx-auto px-4 -mb-12">
        <div className="rounded-2xl bg-black/5 backdrop-blur-md p-4 shadow-lg">
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
      </div> */}
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
      <div className="absolute inset-0 bg-black/5" />

      <div className="relative z-10 text-center px-4 max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-white">
          A VISION LIKE NO OTHER: LUMENA BY DUKIYA ILLUMINATES ULTRA-LUXURY
          COMMERCIAL REAL ESTATE
        </h2>
        <div className="mt-5">
          <Link
            to="/contact"

            className="hidden md:inline-flex items-center justify-center rounded-md bg-[#b4956a] px-3 py-1.5 text-[12px] font-semibold text-black shadow-md hover:opacity-90 whitespace-nowrap"
          >
            Contact Us
          </Link>
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
// export function PremiumProperties() {
//   return (
//     <section className="py-16 md:py-20 text-neutral-900">{/* <- force dark text here */}
//       <div className="mx-auto max-w-[1200px] px-4 md:px-6">
//         <div className="grid gap-10 md:grid-cols-12">
//           {/* LEFT: copy */}
//           <div className="md:col-span-4">
//             <p className="text-[12px] tracking-wide text-[#b4956a]/85">Properties</p>

//             <h2 className="mt-3 font-serif text-[32px] leading-[1.08] md:text-[40px]">
//               <span className="text-[#b4956a] font-semibold">PREMIUM</span>
//               <br />
//               <span className="font-semibold">PROPERTIES IN THE BEST</span>
//               <br />
//               <span className="font-semibold">LOCATIONS</span>
//             </h2>

//             <p className="mt-4 max-w-[40ch] text-[12px] leading-5 text-neutral-700">
//               A vision that transcends property and space , where unmatched craftsmanship inspires
//               elegance and innovation to enrich lives. Imagining the extraordinary and building it
//               into reality.
//             </p>

//             <a
//               href="/properties"
//               className="mt-7 inline-flex rounded-md bg-[#b4956a] px-4 py-2 text-[12px] font-semibold text-black shadow-sm hover:opacity-90"
//             >
//               View All Properties
//             </a>
//           </div>

//           {/* RIGHT: collage */}
//           <div className="md:col-span-8">
//             <div className="grid gap-10 md:grid-cols-2">
//               {/* Left: Tall feature */}
//               <figure>
//                 <Card image={i1} h="h-[420px] md:h-[460px]" alt="Kardhani Prime At 9 — Dukan, Jaipur" />
//                 <CaptionRow
//                   leftTitle="Kardhani Prime At 9"
//                   leftSub="Dukan, Jaipur"
//                   rightTitle="Grand Polo Club & Resort"
//                 />
//               </figure>

//               {/* Right column: two stacked small cards */}
//               <div className="grid gap-10">
//                 <figure>
//                   <Card image={i2} h="h-[180px] md:h-[190px]" alt="Grand Polo Club & Resort" />
//                   <CaptionRow
//                     leftTitle="SIDDHI HOMES REALTY"
//                     leftSub="Dukan, Jaipur"
//                     rightTitle="Valenza"
//                   />
//                 </figure>

//                 <figure>
//                   <Card image={i3} h="h-[180px] md:h-[190px]" alt="Kardhani Prime At 9 — Dukan, Jaipur" />
//                   <CaptionRow
//                     leftTitle="SHREE SHYAM ENTERPRISES"
//                     leftSub="THE CITY PARK"
//                     rightTitle="PARK VIEW by SIDDHI HOMES"
//                   />
//                 </figure>
//               </div>

//               {/* Bottom: wide across both */}
//               <figure className="md:col-span-2">
//                 <Card image={i4} h="h-[220px] md:h-[240px]" alt="Grand Polo Club & Resort" />
//                 <CaptionRow
//                   leftTitle="ARD BUILDHOME PRIVATE LIMITED"
//                   leftSub="VANTARA"
//                   rightTitle="THE EMERALD-II"
//                   rightAlign
//                 />
//               </figure>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
// new 
export function PremiumProperties() {
  const openPdf = (path: string) => {
    window.open(path, "_blank", "noopener,noreferrer");
  };

  // Assuming i1, i2, i3, i4, Card, Link are imported elsewhere
  // import { i1, i2, i3, i4, Card } from "./imports";
  // import { Link } from "react-router-dom";

  return (
    <section className="py-16 md:py-20 text-neutral-900">
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

            <Link
              to="/properties"
              className="mt-7 inline-flex rounded-md bg-[#b4956a] px-4 py-2 text-[12px] font-semibold text-black shadow-sm hover:opacity-90"
            >
              View All Properties
            </Link>
          </div>

          {/* RIGHT: collage */}
          <div className="md:col-span-8">
            <div className="grid gap-10 md:grid-cols-2">
              {/* Left: Tall feature */}
              <figure className="relative">
                {/* NOTE: You'll need to make sure 'Card' still works without 'h' prop if you modify it */}
                <Card
                  image={i1}
                  h="h-[420px] md:h-[460px]"
                  alt="Kardhani Prime At 9 — Dukan, Jaipur"
                />
                
                {/* MODIFIED CAPTION AND BUTTON */}
                <div className="mt-2 flex justify-between items-center px-2">
                  <p className="text-sm font-semibold">Emerald</p>
                  <button
                    onClick={() => openPdf("/assets/pdf/emreld.pdf")}
                    className="ml-4 text-sm font-bold py-1 px-2 text-[#b4956a] border border-[#b4956a] rounded-md hover:bg-[#b4956a] hover:text-white transition-colors"
                  >
                    Broucher
                  </button>
                </div>
                {/* END MODIFIED CAPTION AND BUTTON */}

              </figure>

              {/* Right column: two stacked small cards */}
              <div className="grid gap-10">
                <figure className="relative">
                  <Card image={i2} h="h-[180px] md:h-[190px]" alt="Grand Polo Club & Resort" />

                  {/* MODIFIED CAPTION AND BUTTON */}
                  <div className="mt-2 flex justify-between items-center px-2">
                    <p className="text-sm font-semibold">SIDDHI HOMES REALTY</p>
                    <button
                      onClick={() => openPdf("/assets/pdf/siddhi-homes.pdf")}
                      className="ml-4 text-sm font-bold py-1 px-2 text-[#b4956a] border border-[#b4956a] rounded-md hover:bg-[#b4956a] hover:text-white transition-colors"
                    >
                      Broucher
                    </button>
                  </div>
                  {/* END MODIFIED CAPTION AND BUTTON */}

                </figure>

                <figure className="relative">
                  <Card
                    image={i3}
                    h="h-[180px] md:h-[190px]"
                    alt="Kardhani Prime At 9 — Dukan, Jaipur"
                  />

                  {/* MODIFIED CAPTION AND BUTTON */}
                  <div className="mt-2 flex justify-between items-center px-2">
                    <p className="text-sm font-semibold">SHREE SHYAM ENTERPRISES</p>
                    <button
                      onClick={() => openPdf("/assets/pdf/Valenza-PPT.pdf")}
                      className="ml-4 text-sm font-bold py-1 px-2 text-[#b4956a] border border-[#b4956a] rounded-md hover:bg-[#b4956a] hover:text-white transition-colors"
                    >
                      Broucher
                    </button>
                  </div>
                  {/* END MODIFIED CAPTION AND BUTTON */}

                </figure>
              </div>

              {/* Bottom: wide across both */}
              <figure className="md:col-span-2 relative">
                <Card image={i4} h="h-[220px] md:h-[240px]" alt="Grand Polo Club & Resort" />
                
                {/* MODIFIED CAPTION AND BUTTON */}
                <div className="mt-2 flex justify-between items-center px-2">
                  <p className="text-sm font-semibold">ARD BUILDHOME PRIVATE LIMITED</p>
                  <button
                    onClick={() => openPdf("/assets/pdf/Vantara2.pdf")}
                    className="ml-4 text-sm font-bold py-1 px-2 text-[#b4956a] border border-[#b4956a] rounded-md hover:bg-[#b4956a] hover:text-white transition-colors"
                  >
                    Broucher
                  </button>
                </div>
                {/* END MODIFIED CAPTION AND BUTTON */}

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



// Recent Blogs

// function RecentBlogs() {
//   const scrollerRef = useRef<HTMLDivElement>(null);

//   const blogs = [
//     {
//       id: 1,
//       title:
//         "Opportunities & Challenges before the Manufacturers of Guar Gum & Cassia Gum Derivatives",
//       excerpt:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exploring the current market dynamics and future prospects in guar gum manufacturing.",
//       read: "3.5k read",
//       date: "14 May 2025",
//       image: img7,
//     },
//     {
//       id: 2,
//       title:
//         "Opportunities & Challenges before the Manufacturers of Guar Gum & Cassia Gum Derivatives",
//       excerpt:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exploring the current market dynamics and future prospects in guar gum manufacturing.",
//       read: "3.5k read",
//       date: "14 May 2025",
//       image: img7,
//     },
//     {
//       id: 3,
//       title:
//         "Opportunities & Challenges before the Manufacturers of Guar Gum & Cassia Gum Derivatives",
//       excerpt:
//         "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Exploring the current market dynamics and future prospects in guar gum manufacturing.",
//       read: "3.5k read",
//       date: "14 May 2025",
//       image: img7,
//     },
//   ];

//   const scrollByViewport = (dir: "prev" | "next") => {
//     const el = scrollerRef.current;
//     if (!el) return;
//     const amount = el.clientWidth; // one viewport
//     el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
//   };

//   return (
// <section className="relative isolate py-16 md:py-20 bg-gradient-to-b from-[#f8f8f8] to-[#eaeaea] text-neutral-900">


//       <div className="mx-auto max-w-[1200px] px-4 md:px-6">
//         {/* Heading */}
//         <div className="text-center">
//           <h2 className="font-serif text-3xl md:text-5xl font-semibold">Recent Blogs</h2>
//           <p className="mx-auto mt-3 max-w-3xl text-sm md:text-[15px] text-neutral-600">
//             A vision that transcends property and space, where unmatched craftsmanship inspires elegance,
//             and innovation to enrich lives. Imagining the extraordinary and building it into reality.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="mt-8 md:mt-10">
//           {/* mobile/tablet: horizontal snap carousel; desktop: 3-up grid */}
//           <div
//             ref={scrollerRef}
//             className="group relative grid grid-flow-col auto-cols-[85%] gap-4 overflow-x-auto pb-4 pr-4 md:overflow-visible md:grid-cols-3 md:auto-cols-auto md:gap-6 md:pb-0"
//             style={{ scrollSnapType: "x mandatory" }}
//           >
//             {blogs.map((b) => (
//               <article
//                 key={b.id}
//                 className="scroll-ml-4 scroll-snap-align-start rounded-2xl bg-white text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/10 md:scroll-ml-0"
//                 style={{ scrollSnapAlign: "start" }}
//               >
//                 <div className="p-3 md:p-4">
//                   <div className="overflow-hidden rounded-xl">
//                     <img src={b.image} alt={b.title} className="h-40 w-full object-cover md:h-44" />
//                   </div>

//                   <h3 className="mt-3 text-[15px] font-semibold leading-snug">
//                     {b.title}
//                   </h3>
//                   <p className="mt-2 text-[13px] leading-6 text-neutral-600">
//                     {b.excerpt}
//                   </p>

//                   {/* Meta + CTA */}
//                   <div className="mt-4 flex items-center justify-between text-[12px] text-neutral-500">
//                     <div className="flex items-center gap-4">
//                       <span className="inline-flex items-center gap-1">
//                         <BookOpen size={14} /> {b.read}
//                       </span>
//                       <span className="inline-flex items-center gap-1">
//                         <Calendar size={14} /> {b.date}
//                       </span>
//                     </div>
//                     <a
//                       href="/blogs"
//                       className="inline-flex items-center gap-1 font-medium text-[#b4956a] hover:opacity-90"
//                     >
//                       View More <ArrowRight size={14} />
//                     </a>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>

//           {/* Carousel controls (hidden on md+) */}
//           <div className="mt-4 flex items-center justify-between md:hidden">
//             <div className="flex gap-2">
//               <button
//                 onClick={() => scrollByViewport("prev")}
//                 className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/60 ring-1 ring-white/20"
//                 aria-label="Previous"
//               >
//                 <ChevronLeft size={16} />
//               </button>
//               <button
//                 onClick={() => scrollByViewport("next")}
//                 className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black/60 ring-1 ring-white/20"
//                 aria-label="Next"
//               >
//                 <ChevronRight size={16} />
//               </button>
//             </div>

//             {/* Dots */}
//             <div className="flex items-center gap-1.5">
//               {blogs.map((b) => (
//                 <span key={b.id} className="h-1.5 w-1.5 rounded-full bg-white/60" />
//               ))}
//             </div>
//           </div>

//           {/* Desktop “View All” */}
//           <div className="mt-8 hidden justify-center md:flex">
//             <a
//               href="/blogs"
//               className="inline-flex rounded-md bg-[#b4956a] px-5 py-2 text-sm font-semibold text-black hover:opacity-90"
//             >
//               View All Blogs
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// new 

type Blog = {
  _id: string;
  title: string;
  excerpt: string;
  images?: { url: string }[];
  publishedAt: string;
  slug: string;
};
// ...other imports (Blog type etc.)

type ImgMode = "cover" | "contain";

function RecentBlogs() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [error, setError] = useState<string | null>(null);

  // New: whether footer is visible (in viewport)
  const [footerVisible, setFooterVisible] = useState(false);

  // Per-image display mode map (blogId -> "cover" | "contain")
  const [imgModes, setImgModes] = useState<Record<string, ImgMode>>({});

  // fetch blogs
  useEffect(() => {
    let mounted = true;
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://dukiya-server.onrender.com/api/blogs");
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const data = await res.json();
        if (!data.success || !Array.isArray(data.items)) {
          throw new Error("Unexpected API response");
        }
        const sorted = data.items.sort(
          (a: Blog, b: Blog) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        if (mounted) setBlogs(sorted);
      } catch (err: any) {
        console.error("Failed to fetch blogs:", err);
        if (mounted) setError("Failed to load blogs. Try again later.");
      } finally {
        if (mounted) setLoading(false);
      }
    };
    fetchBlogs();
    return () => {
      mounted = false;
    };
  }, []);

  // lock body scroll
  useEffect(() => {
    const locked = showAllModal || selectedBlog !== null;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showAllModal, selectedBlog]);

  // esc close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedBlog) setSelectedBlog(null);
        else if (showAllModal) setShowAllModal(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedBlog, showAllModal]);

  // observe footer visibility to hide the "View All Blogs" button when footer is in view
  useEffect(() => {
    const footerEl = document.getElementById("site-footer");
    if (!footerEl) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setFooterVisible(entry.isIntersecting);
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    obs.observe(footerEl);
    return () => obs.disconnect();
  }, []);

  const onImageLoad = (blogId: string, ev: React.SyntheticEvent<HTMLImageElement>) => {
    const img = ev.currentTarget;
    if (!img || !img.naturalWidth || !img.naturalHeight) return;

    const ratio = img.naturalWidth / img.naturalHeight; // >1 => wide, <1 => tall
    // pick threshold (1.2) to treat slightly wide images as wide
    const mode: ImgMode = ratio > 1.2 ? "cover" : "contain";

    setImgModes((prev) => {
      if (prev[blogId] === mode) return prev;
      return { ...prev, [blogId]: mode };
    });
  };

  const scrollByViewport = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth || 320;
    el.scrollBy({ left: dir === "next" ? amount : -amount, behavior: "smooth" });
  };

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const handleOpenBlog = (b: Blog, fromAll: boolean = false) => {
    if (fromAll) {
      setShowAllModal(false);
      setTimeout(() => setSelectedBlog(b), 50);
    } else {
      setSelectedBlog(b);
    }
  };

  // BlogCard uses imgModes[blogId] to decide classes
  const BlogCard = ({ b, fromAll = false }: { b: Blog; fromAll?: boolean }) => {
    const mode = imgModes[b._id] ?? "contain"; // default to contain until load
    return (
      <article
        className="scroll-ml-4 scroll-snap-align-start rounded-2xl bg-white text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.25)] ring-1 ring-white/10 md:scroll-ml-0"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="p-3 md:p-4">
          {/* Image container with fixed height so cards align */}
          <div className="overflow-hidden rounded-xl bg-neutral-100 flex items-center justify-center h-40 md:h-44">
            {mode === "cover" ? (
              // wide images: fill card, allow small crop
              <img
                src={b.images?.[0]?.url ?? "/placeholder.png"}
                alt={b.title}
                className="h-full w-full object-cover"
                onLoad={(e) => onImageLoad(b._id, e)}
              />
            ) : (
              // portrait / square: contain fully, no crop
              <img
                src={b.images?.[0]?.url ?? "/placeholder.png"}
                alt={b.title}
                className="max-h-full w-auto object-contain"
                onLoad={(e) => onImageLoad(b._id, e)}
              />
            )}
          </div>

          <h3 className="mt-3 text-[15px] font-semibold leading-snug">{b.title}</h3>

          <p className="mt-2 text-[13px] leading-6 text-neutral-600 line-clamp-3">
            {b.excerpt}
          </p>

          <div className="mt-4 flex items-center justify-between text-[12px] text-neutral-500">
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-1">
                <BookOpen size={14} /> 3 min read
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar size={14} /> {formatDate(b.publishedAt)}
              </span>
            </div>
            <button
              onClick={() => handleOpenBlog(b, fromAll)}
              className="inline-flex items-center gap-1 font-medium text-[#b4956a] hover:opacity-90"
            >
              View More <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </article>
    );
  };

  if (loading) {
    return (
      <section className="py-16 text-center">
        <p className="text-neutral-600">Loading blogs...</p>
      </section>
    );
  }
  if (error) {
    return (
      <section className="py-16 text-center">
        <p className="text-red-600">{error}</p>
      </section>
    );
  }

  return (
    <section className="relative isolate py-16 md:py-20 bg-gradient-to-b from-[#f8f8f8] to-[#eaeaea] text-neutral-900">
      <div className="mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-semibold">Recent Blogs</h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm md:text-[15px] text-neutral-600">
            A vision that transcends property and space, where unmatched craftsmanship inspires
            elegance, and innovation to enrich lives. Imagining the extraordinary and building it
            into reality.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-8 md:mt-10">
          <div
            ref={scrollerRef}
            className="group relative grid grid-flow-col auto-cols-[85%] gap-4 overflow-x-auto pb-4 pr-4 md:overflow-visible md:grid-cols-3 md:auto-cols-auto md:gap-6 md:pb-0"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {blogs.slice(0, 3).map((b) => (
              <div key={b._id}>
                <BlogCard b={b} />
              </div>
            ))}
          </div>

          {/* Mobile controls */}
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
            <div className="flex items-center gap-1.5">
              {blogs.slice(0, 3).map((b) => (
                <span key={b._id} className="h-1.5 w-1.5 rounded-full bg-white/60" />
              ))}
            </div>
          </div>

          {/* Desktop “View All” */}
          <div className="mt-8 hidden justify-center md:flex">
            <button
              onClick={() => setShowAllModal(true)}
              className={`inline-flex rounded-md bg-[#b4956a] px-5 py-2 text-sm font-semibold text-black hover:opacity-90 transition-all ${
                footerVisible ? "opacity-0 pointer-events-none translate-y-2" : "opacity-100"
              }`}
              aria-hidden={footerVisible}
            >
              View All Blogs
            </button>
          </div>
        </div>
      </div>

      {/* All Blogs Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowAllModal(false)} />
          <div className="relative z-10 w-full max-w-6xl rounded-xl bg-white p-6 shadow-lg overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setShowAllModal(false)}
              className="absolute top-3 right-3 rounded-full bg-black/60 p-1 text-white hover:bg-black"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <h3 className="text-2xl font-semibold mb-4">All Blogs</h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {blogs.map((b) => (
                <div key={b._id}>
                  <BlogCard b={b} fromAll />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Blog Detail Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSelectedBlog(null)} />
          <div className="relative z-10 w-full max-w-3xl rounded-xl bg-white p-6 shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-3 right-3 rounded-full bg-black/60 p-1 text-white hover:bg-black"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <div className="space-y-4">
              <div className="overflow-hidden rounded-xl bg-neutral-100 flex items-center justify-center h-56">
                {/* Modal image uses previously-determined mode (if available) */}
                {selectedBlog && (imgModes[selectedBlog._id] === "cover") ? (
                  <img
                    src={selectedBlog.images?.[0]?.url ?? "/placeholder.png"}
                    alt={selectedBlog.title}
                    className="h-full w-full object-cover rounded-md"
                    onLoad={(e) => onImageLoad(selectedBlog._id, e)}
                  />
                ) : (
                  <img
                    src={selectedBlog.images?.[0]?.url ?? "/placeholder.png"}
                    alt={selectedBlog.title}
                    className="max-h-full w-auto object-contain rounded-md"
                    onLoad={(e) => onImageLoad(selectedBlog._id, e)}
                  />
                )}
              </div>

              <h2 className="text-2xl font-semibold">{selectedBlog.title}</h2>

              <div className="flex items-center gap-4 text-sm text-neutral-500">
                <span className="inline-flex items-center gap-1">
                  <BookOpen size={14} /> 3 min read
                </span>
                <span className="inline-flex items-center gap-1">
                  <Calendar size={14} /> {formatDate(selectedBlog.publishedAt)}
                </span>
              </div>

              <p className="text-neutral-700 whitespace-pre-line">{selectedBlog.excerpt}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}









// Form




function ExpressInterest() {
  const [agreeNews, setAgreeNews] = useState(true);
  const [agreePrivacy, setAgreePrivacy] = useState(false);

  // Note: The onSubmit function is no longer needed as the form submits directly to Formspree.
  // The browser handles the submission when action and method attributes are present.

  return (
    <section className="py-16 md:py-20 text-neutral-900">
      <div className="mx-auto max-w-[1100px] px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-center font-serif text-3xl md:text-5xl font-semibold">
          Express your interest
        </h2>

        {/* Form card with Formspree integration */}
        <form
          className="mt-8 space-y-4"
          action="https://formspree.io/f/mdkwobjo"
          method="POST"
        >
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
                  name="agreeNews"
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
                  name="agreePrivacy"
                />
                I have read and agree to the{" "}
                <a href="/" className="underline">Privacy Policy</a>.
              </label>
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
                Schedule a <span className="text-[#b4956a]">Meeting</span> and{" "}
                <span className="text-[#b4956a]">WhatsApp Chat</span>
              </h3>
              <p className="mt-2 text-sm text-neutral-700">
                Book a time that works for you and we'll get in touch to discuss your project.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
              <a
                href="https://calendly.com/bishtyash069/30min"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-[#b4956a] px-4 py-2 text-sm font-medium text-black hover:opacity-90"
              >
                <Calendar className="h-4 w-4 text-black" />
                Schedule a Meeting
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



/** Generic Lucide icon renderer */
function Icon({ as: Comp }: { as: LucideIcon }) {
  return <Comp size={16} className="text-neutral-500 shrink-0" />;
}