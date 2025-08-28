import { useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

const links = [
  { label: "Home page", to: "/" },
  { label: "About us", to: "/about" },
  { label: "PROPERTIES", to: "/properties" },
  { label: "Testimonial", to: "/testimonial" },
  { label: "FAQ", to: "/faq" },
  { label: "CSR", to: "/csr" },
  { label: "Blogs", to: "/blogs" },
  { label: "Explore", to: "/explore" },
  { label: "Contact us", to: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating glass bar (over hero) */}
      <header className="fixed inset-x-0 top-2 z-50">
        {/* side margins to get the “floating pill” look */}
        <div className="mx-3 md:mx-4">
          <div
            className={clsx(
              // layout: three equal columns keeps title perfectly centered
              "grid h-12 grid-cols-3 items-center px-3 md:px-4",
              // shape
              "rounded-2xl",
              // glass surface
              "backdrop-blur-md",
              // tint that matches the screenshot (slightly warm-grey over bright hero)
              scrolled ? "bg-neutral-900/45" : "bg-neutral-900/35",
              // subtle outline & soft drop shadow
              "ring-1 ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
            )}
          >
            {/* Left: burger */}
            <div className="flex items-center">
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10"
              >
                <Menu size={20} className="text-white" />
              </button>
            </div>

            {/* Center: brand (tracking & size tuned to mock) */}
            <div className="flex items-center justify-center">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="select-none text-[12px] md:text-[13px] font-semibold tracking-[0.28em] text-white"
              >
                DUKIYA
              </Link>
            </div>

            {/* Right: compact gold pill */}
            <div className="flex items-center justify-end">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="hidden sm:inline-flex items-center justify-center rounded-md bg-[#b4956a] px-3 py-1.5 text-[12px] font-semibold text-black shadow-[0_2px_10px_rgba(0,0,0,0.25)] hover:opacity-90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Left drawer with all items */}
      <Transition show={open}>
        <Dialog onClose={setOpen} className="relative z-50">
          <Transition.Child
            enter="transition-opacity duration-200"
            enterFrom="opacity-0" enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100" leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <Transition.Child
            enter="transition duration-200 ease-out"
            enterFrom="-translate-x-full" enterTo="translate-x-0"
            leave="transition duration-150 ease-in"
            leaveFrom="translate-x-0" leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#0b0f15] ring-1 ring-white/10 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-sm font-semibold tracking-widest text-white">DUKIYA</span>
                <button
                  onClick={() => setOpen(false)}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10"
                >
                  <X size={20} className="text-white" />
                </button>
              </div>

              <nav className="px-3 pb-6">
                <ul className="space-y-1">
                  {links.map((l) => (
                    <li key={l.to}>
                      <NavLink
                        to={l.to}
                        end={l.to === "/"}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                          clsx(
                            "block rounded-lg px-3 py-2 text-sm",
                            isActive ? "text-white bg-white/10" : "text-white/85 hover:bg-white/10"
                          )
                        }
                      >
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="inline-flex w-full items-center justify-center rounded-md bg-[#b4956a] px-4 py-2 text-sm font-semibold text-black hover:opacity-90"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}
