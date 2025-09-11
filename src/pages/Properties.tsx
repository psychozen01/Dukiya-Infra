
import React, { useEffect, useState, type JSX } from "react";
import axios from "axios";
import bg from "../assets/property/bg.svg";
import { Search } from "lucide-react";

const WHATSAPP_NUMBER = "8860643975";
const tabs = ["Buy", "Sell", "New Projects", "Plot", "Commercial"] as const;

type Tab = typeof tabs[number];

interface Property {
  _id: string;
  title?: string;
  location?: string;
  images?: { url: string }[];
  status?: string;
  deliveryDate?: string;
  bedrooms?: string;
  area?: string;
  price?: string;
}

interface PropertiesResponse {
  page: number;
  perPage: number;
  total: number;
  items: Property[];
}

export default function Properties(): JSX.Element {
  const [active, setActive] = useState<Tab>(tabs[0]);
  const [q, setQ] = useState<string>("");
  const [type, setType] = useState<string>("");
  const [beds, setBeds] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const perPage = 12;

  const [data, setData] = useState<PropertiesResponse>({
    page: 1,
    perPage,
    total: 0,
    items: [],
  });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const API_BASE: string =
    (import.meta as any).env?.VITE_API_URL || "https://dukiya-server.onrender.com";

  const fetchProperties = async (p = 1, filters: Record<string, any> = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<PropertiesResponse>(`${API_BASE}/api/properties`, {
        params: { page: p, perPage, ...filters },
      });
      setData(res.data);
    } catch (err: unknown) {
      console.error(err);
      // safe extraction of error message
      let message = "Failed to load properties";
      if (axios.isAxiosError(err)) {
        message = (err.response?.data as any)?.error || err.message || message;
      } else if (err instanceof Error) {
        message = err.message;
      }
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(page, { q, type, beds, status: active });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, active]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchProperties(1, { q, type, beds, status: active });
  };

  const items = data.items || [];

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section
        className="relative w-full h-[60vh] sm:h-[55vh] md:h-[50vh] lg:h-[48vh]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-8 h-full flex items-start">
          <div className="pt-16 sm:pt-20 lg:pt-24">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
              DUKIYA
            </h2>
            <div className="mt-1 font-serif text-lg sm:text-xl md:text-2xl text-white">
              PROPERTIES
            </div>
          </div>
        </div>

        {/* Tabs + Search container - centered and responsive */}
        <div className="relative z-20 ">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 -translate-y-10 sm:-translate-y-12">
            {/* Dark tabs bar */}
            <div className="bg-black/80 border border-white/10 rounded-xl shadow-lg px-4 py-3">
              <div className="flex justify-center">
                <div className="flex gap-3 flex-wrap">
                  {tabs.map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setActive(t);
                        setPage(1);
                        fetchProperties(1, { q, type, beds, status: t });
                      }}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition ${active === t
                        ? "bg-[#c2a579] text-black"
                        : "text-white border border-white/10 hover:bg-white/5"
                        }`}
                      aria-pressed={active === t}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* White search strip—overlaps hero slightly; responsive */}
              <form
                onSubmit={onSearch}
                className="mt-4 bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-3 flex flex-col md:flex-row items-center gap-3"
                role="search"
                aria-label="Property search"
              >
                {/* Search Input */}
                <div className="flex items-center flex-1 rounded-md border border-gray-200 overflow-hidden min-w-0 bg-white">
                  <div className="px-3 flex-shrink-0">
                    <Search size={18} className="text-gray-500" />
                  </div>
                  <input
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="City, COMMUNITY OR BUILDING"
                    className="flex-1 px-3 py-3 text-sm text-gray-800 outline-none min-w-0"
                    aria-label="Search by city, community or building"
                  />
                </div>

                {/* Property Type */}
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full md:w-48 rounded-md border border-gray-200 bg-white text-sm px-3 py-3"
                  aria-label="Property type"
                >
                  <option value="">Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="plot">Plot</option>
                </select>

                {/* Bedroom */}
                <select
                  value={beds}
                  onChange={(e) => setBeds(e.target.value)}
                  className="w-full md:w-40 rounded-md border border-gray-200 bg-white text-sm px-3 py-3"
                  aria-label="Bedrooms"
                >
                  <option value="">Bedroom</option>
                  <option value="1BHK">1 BHK</option>
                  <option value="2BHK">2 BHK</option>
                  <option value="3BHK">3 BHK</option>
                  <option value="4+BHK">4+ BHK</option>
                </select>

                {/* Search button */}
                <button
                  type="submit"
                  className="w-full md:w-auto rounded-md px-6 py-3 bg-[#c2a579] text-black font-semibold hover:opacity-95 transition"
                  aria-label="Search"
                >
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* LISTINGS */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-96 md:mt-48 mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">🏠</span>
            <h3 className="text-lg md:text-2xl font-semibold text-gray-800">
              Properties for sale in Jaipur
            </h3>
          </div>
          <div className="text-sm text-gray-500">{data.total ?? 0} Units</div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-gray-500">Loading properties…</div>
        ) : error ? (
          <div className="py-12 text-center text-red-600 bg-red-50 rounded-md">
            {error}
          </div>
        ) : items.length === 0 ? (
          <div className="py-12 text-center text-gray-500">No properties found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <article
                key={p._id}
                className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-transparent"
                aria-label={p.title || "property"}
              >
                {/* image as background (fills the card area and respects rounded corners) */}
                <div
                  className="w-full h-72 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${p.images?.[0]?.url || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'/%3E"})`,
                  }}
                  role="img"
                  aria-label={p.title || "property image"}
                />

                {/* subtle gradient at bottom for readable text; rounded so it doesn't show square corners */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl" />

                {/* small stacked pill badges top-left */}
                <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                  {p.status && (
                    <span className="bg-black/70 text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-sm">
                      {p.status}
                    </span>
                  )}
                  {p.deliveryDate && (
                    <span className="bg-black/70 text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-sm">
                      Delivery Date: {p.deliveryDate}
                    </span>
                  )}
                </div>

                {/* bottom overlay content */}
                <div className="absolute inset-x-0 bottom-0 px-5 pb-5 z-30">
                  <div className="rounded-b-2xl p-4">
                    {/* Title (serif) */}
                    <h4 className="text-lg md:text-xl font-serif font-semibold text-white truncate leading-tight">
                      {p.title}
                    </h4>

                    {/* subtitle / location (muted) */}
                    {p.location && (
                      <p className="text-xs md:text-sm text-white/80 mt-1 truncate">
                        {p.location}
                      </p>
                    )}

                    {/* meta row */}
                    <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
                      <span>{p.bedrooms || "-"}</span>
                      <span>|</span>
                      <span>{p.area || "-"}</span>
                      <span>|</span>
                      <span>{p.price || "-"}</span>
                    </div>

                    {/* action row: WhatsApp + Book Now */}
                    <div className="mt-4 flex items-center justify-between gap-3">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-black/75 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black/80 transition"
                        aria-label="WhatsApp"
                      >
                        <img
                          alt=""
                          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                          className="h-4 w-4"
                        />
                        <span>WhatsApp</span>
                      </a>

                      <button className="bg-[#c2a579] text-black px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:opacity-95 transition">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}


          </div>
        )}

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
      </main>

    </div>
  );
}
