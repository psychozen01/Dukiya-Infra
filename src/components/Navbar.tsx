import { useEffect, useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import clsx from "clsx";

const links = [
  { label: "Home", to: "/" },
  { label: "About us", to: "/about" },
  { label: "Properties", to: "/properties" },
  { label: "Testimonial", to: "/testimonial" },
  { label: "FAQ", to: "/faq" },
  // { label: "CSR", to: "/csr" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-2 z-50 pointer-events-auto">
        <div className="mx-3 md:mx-6">
          {/* Container with rounded background */}
          <div
            className={clsx(
              "flex items-center justify-between h-12 px-3 md:px-4 rounded-2xl backdrop-blur-md",
              scrolled ? "bg-neutral-900/45" : "bg-neutral-900/35",
              "ring-1 ring-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.28)]"
            )}
          >
            {/* LEFT: burger (mobile) + brand (always left on larger screens) */}
            <div className="flex items-center gap-3 min-w-0">
              {/* Mobile burger */}
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-white/10 md:hidden"
              >
                <Menu size={20} className="text-white" />
              </button>

              {/* Brand — visible always, but slightly smaller on mobile */}
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="select-none text-[13px] md:text-[14px] font-semibold tracking-[0.28em] text-white whitespace-nowrap"
              >
                DUKIYA
              </Link>
            </div>

            {/* CENTER: nav links (hidden on mobile) */}
            <nav className="hidden md:flex items-center justify-center flex-1">
              <ul className="flex items-center gap-4">
                {links.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      className={({ isActive }) =>
                        clsx(
                          "px-3 py-1 rounded-md text-sm font-medium transition inline-block",
                          isActive
                            ? "text-white bg-white/10"
                            : "text-white/80 hover:bg-white/7 hover:text-white"
                        )
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* RIGHT: contact pill (hidden on small) */}
            <div className="flex items-center justify-end min-w-0">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="hidden md:inline-flex items-center justify-center rounded-md bg-[#b4956a] px-3 py-1.5 text-[12px] font-semibold text-black shadow-md hover:opacity-90 whitespace-nowrap"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer for mobile */}
      <Transition show={open} as={Fragment}>
        <Dialog onClose={setOpen} className="relative z-50">
          {/* Backdrop */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          {/* Drawer panel */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-200 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="fixed inset-y-0 left-0 w-full max-w-xs bg-[#0b0f15] ring-1 ring-white/10 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-4">
                <span className="text-sm font-semibold tracking-widest text-white">
                  DUKIYA
                </span>
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
                            isActive
                              ? "text-white bg-white/10"
                              : "text-white/85 hover:bg-white/10"
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
