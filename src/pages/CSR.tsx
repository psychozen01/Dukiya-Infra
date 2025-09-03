import { useState } from "react";
import bg1 from "../assets/csr/bg1.svg";
import bg2 from "../assets/csr/bg2.svg";
import img1 from "../assets/csr/img1.svg";
import bg3 from "../assets/csr/bg3.svg";
import img2 from "../assets/csr/img2.svg"; // <-- initiatives image

const CSR: React.FC = () => {
  const scrollToVision = () => {
    const el = document.getElementById("vision");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // state for initiatives carousel
  const [activeIdx, setActiveIdx] = useState<number>(1); // center card active (0,1,2)

  const initiatives = [
    {
      id: 0,
      title: "The Pearl Academy",
      tag: "NEW PROJECT",
      img: img2,
    },
    {
      id: 1,
      title: "The Pearl Academy",
      tag: "NEW PROJECT",
      img: img2,
    },
    {
      id: 2,
      title: "The Pearl Academy",
      tag: "NEW PROJECT",
      img: img2,
    },
  ];

  const prev = () => setActiveIdx((i) => (i - 1 + initiatives.length) % initiatives.length);
  const next = () => setActiveIdx((i) => (i + 1) % initiatives.length);

  return (
    <div className="w-full">
      {/* ---------- Section 1 - Hero ---------- */}
      <section
        className="relative w-full h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="absolute inset-0 bg-black/0" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-white text-3xl md:text-5xl font-serif font-semibold leading-tight">
            DEVELOPING SUSTAINABLE COMMUNITIES WITH PRECISION AND CARE
          </h1>
          <p className="mt-6 text-gray-200 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
            Explore Sobha’s meticulous approach to fostering sustainable communities, where
            expertise and excellence meet compassion. Discover our initiatives driving positive
            change and nurturing environments for future generations.
          </p>
          <button
            onClick={scrollToVision}
            className="mt-8 px-6 py-3 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-black transition"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* ---------- Section 2 - Vision (ID = vision) ---------- */}
      <section id="vision" className="relative w-full bg-white">
        <div className="text-center max-w-3xl mx-auto px-6 py-10">
          <h2 className="uppercase text-sm tracking-widest text-[#8d735c] font-medium">
            Make a Difference
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Since 2004, Emaar Properties has established a culture of corporate social
            responsibility, which began with providing assistance to welfare groups in UAE
            communities.
          </p>
        </div>

        <div
          className="relative w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${bg2})` }}
        >
          <div className="absolute inset-0 bg-black/10 pointer-events-none" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="flex justify-start md:pl-8">
                <div
                  className={`
                    relative z-20
                    w-full max-w-[560px]
                    bg-transparent
                    rounded-xl
                    overflow-hidden
                    shadow-2xl
                    border
                    border-[rgba(141,115,92,0.12)]
                    transform
                    transition
                    md:translate-x-12 md:-translate-y-6
                  `}
                >
                  <img src={img1} alt="Founder" className="w-full h-auto block rounded-lg" />
                </div>
              </div>

              <div className="flex justify-end md:pr-8">
                <div className="relative top-20">
                  <div className="hidden md:block absolute -top-5 z-10 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#8d735c] text-white px-6 py-2 rounded shadow-md text-sm font-medium">
                      OUR FOUNDER'S VISION
                    </div>
                  </div>

                  <div
                    className={`
                      relative
                      bg-black/50
                      text-white
                      rounded-xl
                      p-8
                      md:pl-12
                      md:py-10
                      shadow-2xl
                      backdrop-blur-10
                      border border-black/20
                      transform
                      md:-translate-x-8
                    `}
                  >
                    <div className="md:hidden mb-4">
                      <div className="bg-[#8d735c] inline-block px-4 py-2 rounded text-white text-sm font-medium">
                        OUR FOUNDER'S VISION
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="text-4xl md:text-5xl leading-none text-white/90 font-serif">“</div>
                      <p className="text-sm md:text-base leading-relaxed text-white/90">
                        A strong advocate of philanthropy, understands its transformative impact.
                        With half his wealth dedicated to charity, he has earned the admiration and
                        love of people.
                      </p>
                    </div>

                    <div className="flex justify-end">
                      <div className="text-3xl md:text-4xl text-white/80 mt-6 font-serif">”</div>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* grid end */}
          </div> {/* container end */}
        </div> {/* bg2 end */}
      </section>

      {/* ---------- Section 3 - Sustainability Report Hero (existing) ---------- */}
      <section
        className="relative w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bg3})` }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center">
          <h2 className="text-white font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight">
            Our Sustainability Report for 2024
          </h2>

          <p className="mt-6 text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            This report showcases the progress on our ongoing journey of creating and managing
            sustainable and vibrant communities, highlighting how we collaborate with our
            stakeholders to drive meaningful change across our business and beyond. Explore how
            Aldar is shaping a better future.
          </p>

          <div className="mt-8">
            <button
              type="button"
              className="inline-block bg-[#bda07a] hover:bg-[#b89a68] text-white px-6 py-2 rounded-md text-sm md:text-base transition"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* ---------- Section 4 - Our Initiatives ---------- */}
      <section className="relative w-full bg-[#e9e0d8] py-16">
        <div className="text-center max-w-5xl mx-auto px-6">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold">Our Initiatives</h2>
          <p className="mt-3 text-gray-700 text-sm md:text-base max-w-3xl mx-auto">
            This report showcases the progress on our ongoing journey of creating and managing
            sustainable and vibrant communities, highlighting how we collaborate with our
            stakeholders to drive meaningful change across our business and beyond. Explore how
            Aldar is shaping a better future!
          </p>
        </div>

        <div className="mt-10">
          {/* carousel area */}
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative">
              {/* cards row */}
              <div className="flex items-center justify-center gap-6">
                {initiatives.map((it, idx) => {
                  const isActive = idx === activeIdx;
                  return (
                    <div
                      key={it.id}
                      className={`
                        relative
                        w-64 sm:w-72 md:w-80
                        rounded-xl
                        overflow-hidden
                        shadow-xl
                        border
                        border-[rgba(0,0,0,0.06)]
                        transition-all
                        duration-300
                        ${isActive ? "scale-105 z-20 md:translate-y-0" : "scale-95 opacity-80 md:translate-y-6"}
                      `}
                      aria-hidden={!isActive}
                    >
                      <div className="relative">
                        <img src={it.img} alt={it.title} className="w-full h-64 object-cover block" />

                        {/* overlay tag top-left */}
                        <div className="absolute top-4 left-4 bg-black/40 text-white text-xs px-3 py-1 rounded">
                          {it.tag}
                        </div>

                        {/* content bottom */}
                        <div className="absolute left-4 bottom-4 right-4">
                          <h3 className="text-white text-lg font-semibold font-serif drop-shadow">
                            {it.title}
                          </h3>
                          <button className="mt-3 inline-block bg-[#bda07a] hover:bg-[#b89a68] text-white px-4 py-2 rounded text-sm transition">
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* nav (prev / next) */}
              <div className="mt-8 flex items-center justify-center gap-6">
                <button
                  onClick={prev}
                  aria-label="Previous"
                  className="p-2 rounded border border-gray-300 bg-white hover:bg-gray-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="text-sm text-gray-700">
                  <span className="font-medium">{String(activeIdx + 1).padStart(2, "0")}</span>
                  <span className="mx-2">—</span>
                  <span className="text-gray-400">{String(initiatives.length).padStart(2, "0")}</span>
                </div>

                <button
                  onClick={next}
                  aria-label="Next"
                  className="p-2 rounded border border-gray-300 bg-white hover:bg-gray-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>


      </section>
      <div className="mt-10 w-[80vw] m-auto mb-10 rounded-2xl bg-[#efe7de]/60 px-6 py-8">
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
  );
};

export default CSR;
