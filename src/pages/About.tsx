// src/pages/About.tsx
import { Link } from "react-router-dom";
import hero from "@/assets/about/hero.svg";
import bg1 from "@/assets/about/bg1.svg";
import { ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, Linkedin, Send } from "lucide-react";
import aboutImg1 from "@/assets/about/img1.svg";
import founderImg from "@/assets/about/user.svg";
/* -------------------- Page -------------------- */

const About = () => {
  return (
    <main className="w-full">
      <AboutHero />
      <AboutStoryBand />
      <AboutDukiyaStory />
      <AboutPillars />  
      <AboutFounder /> 
    </main>
  );
};

export default About;

/* -------------------- Sections -------------------- */

function AboutHero() {
  return (
    <section
      className="relative w-full overflow-hidden rounded-b-[28px] z-30 md:rounded-b-[36px] bg-cover bg-center"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/30" />

      {/* Headline */}
      <div className="relative z-10 flex items-center justify-center px-4 md:px-8">
        <h1 className="my-16 md:my-12 lg:my-16 max-w-5xl text-center font-serif text-white drop-shadow-sm text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
          Reinventing comfort, building smiles &amp; leading you
          <br className="hidden md:block" /> home.
        </h1>
      </div>

      {/* Bottom pill CTA */}
      <div className="relative z-10 flex justify-center pb-8 md:pb-12">
        <div className="flex w-[92%] max-w-[880px] items-center justify-between gap-3 rounded-[14px] bg-[#a78660]/90 md:rounded-[16px] px-4 md:px-6 py-3 md:py-3.5 backdrop-blur">
          <p className="text-[11px] md:text-[13px] text-white/95">
            Get a head start on your real estate journey with expert guidance.
          </p>
          <Link
            to="/contact"
            className="shrink-0 rounded-[10px] border-2 border-[#c7ad88] bg-black px-4 md:px-5 py-2 text-[11px] md:text-sm font-semibold text-white hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* maintain hero height */}
      <div className="pb-[16vh] md:pb-[20vh]" />
    </section>
  );
}

/* Band that holds the alternating cards + stats */
function AboutStoryBand() {
  return (
    <section className="w-full bg-[#f5f2ee]">
      <div className="mx-auto  px-4 md:px-0">

        {/* Card 1: left aligned, only right corners rounded */}
        <div className="relative -mt-8 md:-mt-10">
          <div
            className="
              w-[94%] sm:w-[90%] md:w-[82%] lg:w-[78%]
              bg-[#efe7de]
              rounded-r-[28px] md:rounded-r-[40px] rounded-l-none
              px-5 py-8 md:px-10 md:py-12 shadow-sm
            "
          >
            <p className="text-center text-[13px] font-semibold text-[#b4956a]">
              Our story
            </p>

            <h2 className="mt-3 text-center font-serif text-3xl md:text-4xl lg:text-[44px] font-extrabold tracking-wide text-[#191919]">
              ELEVATING EVERY DETAIL
            </h2>

            <div className="mx-auto mt-6 max-w-[840px] space-y-5 text-center text-[13px] md:text-[14px] leading-6 text-[#3a3a3a]">
              <p>
                DUKIYA was founded in 2005 with a vision to be the best in class, in every class.
                Transcending property and space, this vision imagines the extraordinary and builds it into reality.
              </p>
              <p className="font-semibold text-[#705e45]">We call this The Art of Elevation.</p>
              <p>
                We elevate the exceptional to create immersive living experiences that redefine the concept of luxury living.
                These are works of art, and for us, art is more than a simple statement of luxury. Art is the ultimate expression
                of creativity, quality and rarity. A combination of intellect and artistry, originating from both the mind and the heart.
              </p>
              <p>
                Together, we are setting new benchmarks of excellence for the UAE and across the globe, inspiring the world’s changemakers
                to invest and make their homes in the city of tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Stats row (centered) */}
        <div className="mt-8 md:mt-10">
          <div className="mx-auto flex max-w-[860px] flex-col items-stretch divide-y divide-[#d5c8b9]/60 rounded-[18px] bg-white/40 px-6 py-5 backdrop-blur md:flex-row md:divide-y-0 md:divide-x">
            <Stat num="03" label="Destinations" />
            <Stat num="18" label="Masterpieces" />
            <Stat num="$10bn" label="Portfolio" />
          </div>
        </div>

        {/* Card 2: right aligned, only left corners rounded */}
        <div className="relative mt-10 md:mt-12">
          <div
            className="
    ml-auto
    w-[94%] sm:w-[90%] md:w-[82%] lg:w-[78%]
    bg-white
    rounded-tl-[36px] rounded-bl-none
    px-5 py-10 md:px-10 md:py-14 shadow-sm
  "
          >
            <h3 className="text-center font-serif text-2xl md:text-3xl lg:text-[36px] font-extrabold tracking-wide text-[#191919]">
              LEADING WITH EXCELLENCE
            </h3>

            <div className="mx-auto mt-6 max-w-[820px] space-y-5 text-center text-[13px] md:text-[14px] leading-6 text-[#3a3a3a]">
              <p>
                DUKIYA was founded in 2005 with a vision to be the best in class, in every class.
                Transcending property and space, this vision imagines the extraordinary and builds it into reality.
              </p>
              <p>
                From architectural collaborations with icons of industry such as Zaha Hadid and Norman Foster, to
                hospitality and service partners such as the sector-leading Dorchester Collection, we continue to seek
                enduring relationships that become part of our story and legacy.
              </p>
            </div>
          </div>
        </div>

        {/* bottom spacing */}
        <div className="h-8 md:h-12" />
      </div>
    </section>
  );
}

/* -------------------- Small UI piece -------------------- */

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex flex-1 items-center justify-center gap-3 py-4 md:py-2">
      <div className="text-[28px] md:text-[32px] font-semibold tracking-wide text-[#705e45]">
        {num}
      </div>
      <div className="text-left text-[12px] md:text-[13px] text-[#6b6b6b]">{label}</div>
    </div>
  );
}



function AboutDukiyaStory() {
  return (
    <section
      className="relative w-full h-[99dvh] mt-[-3rem] bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content wrapper */}
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-6 flex flex-col items-center justify-center h-full text-center">
        <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold">
          THE DUKIYA STORY
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-sm md:text-base text-white/90 leading-relaxed">
          From architectural collaborations with icons of industry such as Zaha Hadid and Norman Foster,
          to hospitality and service partners such as the sector-leading Dorchester Collection,
          we continue to seek enduring relationships that become part of our story and legacy.
        </p>
      </div>

      {/* arrows */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button className="ml-3 md:ml-6 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 hover:bg-black/60">
          <ChevronLeft className="text-white" size={18} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button className="mr-3 md:mr-6 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 hover:bg-black/60">
          <ChevronRight className="text-white" size={18} />
        </button>
      </div>
    </section>

  );
}


// pillar section

function AboutPillars() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1220px] px-4 md:px-6 py-10 md:py-14">
        {/* overline + title + intro */}
        <p className="text-center text-[12px] font-semibold tracking-wide text-[#b4956a]">
          Pillars
        </p>
        <h2 className="mt-2 text-center font-serif text-3xl md:text-4xl lg:text-[40px] font-extrabold text-[#191919]">
          Reinventing the conventional
        </h2>
        <p className="mx-auto mt-3 max-w-3xl text-center text-[13px] md:text-[14px] leading-6 text-[#333]">
          There is an underscored connection between art and architecture and an unwavering ambition to achieve the unimaginable.
          OMNIYAT — which translates to ‘wishes’ — showcases the pursuit of inspirational distinction.
        </p>

        {/* content grid */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* left image */}
          <div className="overflow-hidden rounded-[22px] md:rounded-[26px]">
            <img
              src={aboutImg1}
              alt="Setting Benchmark building"
              className="h-full w-full object-cover"
            />
          </div>

          {/* right copy */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-extrabold text-[#191919]">
                Setting Benchmark
              </h3>

              <div className="mt-4 space-y-4 text-[13px] md:text-[14px] leading-6 text-[#333]">
                <p>
                  From architectural collaborations with icons of industry such as Zaha Hadid and Norman Foster,
                  to hospitality and service partners such as the sector-leading Dorchester Collection, we continue
                  to seek enduring relationships that become part of our story and legacy.
                </p>
                <p>
                  From architectural collaborations with icons of industry such as Zaha Hadid and Norman Foster,
                  to hospitality and service partners such as the sector-leading Dorchester Collection, we continue
                  to seek enduring relationships that become part of our story and legacy.
                </p>
              </div>
            </div>

            {/* arrows */}
            <div className="mt-6 flex items-center gap-3">
              <button
                aria-label="Previous"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-black/20 bg-white hover:bg-black/5"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                aria-label="Next"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-black text-white hover:opacity-90"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* hairline divider to match mock */}
        <div className="mt-8 h-px w-full bg-black/10" />
      </div>
    </section>
  );
}


// founder section
function AboutFounder() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1220px] px-4 md:px-6 py-10 md:py-14">
        <div className="grid items-start gap-8 md:grid-cols-2">
          {/* Left: Copy */}
          <div>
            <p className="text-[12px] font-semibold tracking-wide text-[#b4956a]">
              Our Founder
            </p>

            <h3 className="mt-2 font-serif text-3xl md:text-4xl lg:text-[40px] font-extrabold leading-tight text-[#191919]">
              PIONEERING VISIONARY <br className="hidden sm:block" />
              ARCHITECTURE
            </h3>

            <p className="mt-5 max-w-[48ch] text-[13px] md:text-[14px] leading-6 text-[#333]">
              Mahdi Amjad, Founder and Executive Chairman of OMNIYAT, has dynamically transformed
              Dubai’s architectural landscape. Establishing OMNIYAT in 2005, he prioritized design
              and art, resulting in large-scale collaborations with award-winning designers. Under
              his leadership, OMNIYAT has marked its presence with unique projects, consistently
              delivering quality and value across all. His vision continues to shape vantage
              locations within master communities.
            </p>

            {/* Social icons row */}
            <div className="mt-6 flex flex-wrap gap-3">
              <SocialBox aria="Facebook" Icon={Facebook} />
              <SocialBox aria="Instagram" Icon={Instagram} />
              <SocialBox aria="Twitter" Icon={Twitter} />
              <SocialBox aria="LinkedIn" Icon={Linkedin} />
              <SocialBox aria="Share" Icon={Send} />
            </div>
          </div>

          {/* Right: Avatar + caption */}
          <div className="flex flex-col items-center justify-start">
            <div className="relative h-[240px] w-[240px] overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-black/10 md:h-[280px] md:w-[280px]">
              <img
                src={founderImg}
                alt="Mahdi Amjad"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <div className="font-semibold text-[#191919]">Mahdi Amjad</div>
              <div className="text-[12px] text-[#6b6b6b]">
                Founder and Executive Chairman
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* small helper */
function SocialBox({
  Icon,
  aria,
}: {
  Icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  aria: string;
}) {
  return (
    <a
      href="#"
      aria-label={aria}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#b4956a]/60 bg-white text-[#b4956a] hover:bg-[#b4956a]/5"
    >
      <Icon size={16} strokeWidth={1.75} />
    </a>
  );
}
