import { Quote, Star, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import user1 from "../assets/testimonial/user1.svg";
import user2 from "../assets/testimonial/user2.svg";
import user3 from "../assets/testimonial/user3.svg";
import bg from "../assets/testimonial/bg.svg";

const testimonials = [
  {
    id: 1,
    text: `"Working with this company was a pleasure. They were professional, efficient, and delivered exactly what they promised."`,
    author: "Pardeep Choudhary",
    location: "Jaipur, Rajasthan",
  },
  {
    id: 2,
    text: `"Their attention to detail and dedication to client satisfaction are unmatched. Highly recommend!"`,
    author: "Simran Mehta",
    location: "Delhi, India",
  },
  {
    id: 3,
    text: `"Excellent experience — transparent process and delivered beyond expectations."`,
    author: "Aarav Sharma",
    location: "Gurugram, Haryana",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <>
      {/* Testimonial Section */}
      <section
        className="relative w-full min-h-[100vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <h2 className="text-center font-serif text-white text-[28px] sm:text-[32px] md:text-[40px] lg:text-[44px] font-normal leading-tight mb-10 md:mb-14 tracking-wide">
            Trusted By Families
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
            {/* Left: Testimonial Carousel */}
            <div className="w-full md:max-w-md text-white p-5 sm:p-6 rounded-2xl bg-black/20 backdrop-blur-[1px] border border-white/10 shadow-lg overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.6 }}
                >
                  <Quote className="text-[#b4956a] w-6 h-6 sm:w-7 sm:h-7 mb-4" />
                  <p className="italic font-serif text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
                    {testimonial.text}
                  </p>

                  {/* Stars */}
                  <div className="flex mt-4 sm:mt-5 text-yellow-400">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 stroke-yellow-400"
                        />
                      ))}
                  </div>

                  {/* Author */}
                  <div className="mt-5 sm:mt-6">
                    <p className="font-semibold text-white text-sm sm:text-base">
                      — {testimonial.author}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.location}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex gap-3 mt-8 sm:mt-10">
                <button
                  onClick={prev}
                  className="bg-[#b4956a] text-white p-2 rounded-md hover:bg-[#9c7a4f] transition"
                  aria-label="Previous"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={next}
                  className="bg-[#b4956a] text-white p-2 rounded-md hover:bg-[#9c7a4f] transition"
                  aria-label="Next"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Right: Main & Floating Users */}
            <div className="relative flex items-center justify-center mt-10 md:mt-0">
              <div className="relative text-center">
                <img
                  src={user1}
                  alt="user1"
                  className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 object-cover rounded-full border-[4px] sm:border-[6px] border-white shadow-lg"
                />
                <p className="mt-3 sm:mt-4 font-serif text-[16px] sm:text-[18px] font-medium text-white">
                  Pardeep Choudhary
                </p>
                <p className="text-[12px] sm:text-[14px] text-gray-300 font-light font-sans">
                  Jaipur, Rajasthan
                </p>

                {/* Floating Users */}
                <img
                  src={user2}
                  alt="user2"
                  className="absolute -top-4 sm:-top-6 -right-16 sm:-right-20 md:-right-24 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-[3px] sm:border-[4px] border-white shadow-lg"
                />
                <img
                  src={user3}
                  alt="user3"
                  className="absolute -bottom-4 sm:-bottom-6 -right-14 sm:-right-18 md:-right-20 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-[3px] sm:border-[4px] border-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instant Call & WhatsApp Section */}
      <section className="py-16 md:py-20 text-neutral-900">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6">
          <h2 className="text-center font-serif text-3xl md:text-5xl font-semibold">
            Express your interest
          </h2>

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
                  href="https://wa.me/+919216028901"
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
      </section>
    </>
  );
};

export default TestimonialSection;
