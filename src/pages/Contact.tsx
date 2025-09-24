import { useState } from "react";

import {
  User,
  Mail,
  Phone,
  MessageSquareText,
  
  Calendar,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import bg from "../assets/FAQ/bg.svg";


const Contact = () => {
  const [agreeNews, setAgreeNews] = useState(true);
  const [agreePrivacy, setAgreePrivacy] = useState(false);


  

  return (
    <>
      {/* ---------------- FAQ SECTION ---------------- */}
      <section className="relative w-full">
        {/* Background Hero */}
        <div
          className="w-full bg-cover bg-center py-16 sm:py-20"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="max-w-[1000px] mx-auto text-center px-6">
            <h2 className="font-serif text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-snug">
              Contact Us <br /> 
            </h2>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative -mt-8 max-w-[900px] mx-auto px-4">
          <div className="flex items-center bg-[#1a1a1a] rounded-xl shadow-lg p-2">
            {/* Input + Search button grouped */}
            <div className="flex flex-1 rounded-md overflow-hidden">
              <input
                type="text"
                placeholder="Ask Question..."
                className="flex-1 px-4 py-2 text-sm text-neutral-700 placeholder-neutral-500 outline-none bg-white"
              />
              <button className="bg-[#b4956a] px-4 flex items-center justify-center hover:bg-[#9c7a4f] transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                  />
                </svg>
              </button>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noreferrer"
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-[#b4956a] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-4 h-4"
              />
              WhatsApp Chat
            </a>
          </div>
        </div>

        {/* FAQ Accordion */}
      
      </section>

      {/* ---------------- EXPRESS INTEREST SECTION ---------------- */}
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
    </>
  );
};

/* ---------------- helpers ---------------- */
function Field({
  children,
  multiline = false,
}: {
  children: React.ReactNode;
  multiline?: boolean;
}) {
  return <div className={multiline ? "field multiline" : "field"}>{children}</div>;
}



function Icon({ as: Comp }: { as: LucideIcon }) {
  return <Comp size={16} className="text-neutral-500 shrink-0" />;
}

export default Contact;
