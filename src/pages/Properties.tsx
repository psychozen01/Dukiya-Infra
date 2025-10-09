
import React, { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import bg from "../assets/home/img1.svg";
import {
  Calendar,
  Search,
  X,
  MapPin,
  Bed,
  Maximize,
  FileText,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const WHATSAPP_NUMBER = "9216028901";
const tabs = ["Buy", "Sell", "New Projects", "Plot", "Commercial"];

type ImageItem = { url: string };
type Brochure = { url: string };

export type Property = {
  _id?: string;
  title?: string;
  images?: ImageItem[];
  status?: string;
  deliveryDate?: string;
  bedrooms?: string;
  area?: string;
  price?: string;
  location?: string;
  description?: string;
  brochure?: Brochure;
};

type DataShape = {
  page: number;
  perPage: number;
  total: number;
  items: Property[];
};

function ImageGallery({ images }: { images: ImageItem[] }) {
  const [index, setIndex] = useState<number>(0);
  useEffect(() => setIndex(0), [images]);

  if (!images || images.length === 0) {
    return (
      <div className="h-64 lg:h-auto bg-gray-50 flex items-center justify-center">
        <svg width="200" height="120" className="opacity-40" />
      </div>
    );
  }

  const length = images.length;
  return (
    <div className="relative">
      <img
        src={images[index].url}
        alt={`gallery-${index + 1}`}
        className="w-full h-64 lg:h-full object-cover rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none"
      />
      {length > 1 && (
        <>
          <button
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i - 1 + length) % length);
            }}
            className="hidden lg:flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i + 1) % length);
            }}
            className="hidden lg:flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 rounded-full p-2 shadow-md"
          >
            <ChevronRight size={20} />
          </button>

          <div className="mt-2 flex gap-2 overflow-x-auto px-4 lg:px-6">
            {images.map((im, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setIndex(idx);
                }}
                className={`flex-shrink-0 rounded-md overflow-hidden border ${idx === index ? "ring-2 ring-[#c2a579]" : "border-gray-200"}`}
                style={{ width: 80, height: 56 }}
                aria-label={`Select image ${idx + 1}`}
              >
                <img src={im.url} alt={`thumb-${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function PropertyDetailModal({ property, onClose }: { property: Property; onClose: () => void }) {
  const images = property && property.images && property.images.length ? property.images : [{ url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'/%3E" }];
  const brochureUrl = property && property.brochure && property.brochure.url;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl transform transition-all duration-300 scale-100 opacity-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-100 transition"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative h-64 lg:h-auto overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
            <ImageGallery images={images} />
            {property && property.status && (
              <div className="absolute top-4 left-4 bg-[#c2a579] text-black font-semibold px-4 py-1 rounded-full text-sm shadow-md">
                {property.status}
              </div>
            )}
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <h2 id="modal-title" className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
              {property && property.title ? property.title : "Property Details"}
            </h2>

            <div className="space-y-1">
              <p className="text-xl font-bold text-[#c2a579]">{(property && property.price) || "Price on Request"}</p>
              {property && property.location && (
                <p className="flex items-center text-sm text-gray-500">
                  <MapPin size={16} className="mr-2 flex-shrink-0" />
                  {property.location}
                </p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-4">
              <div className="text-center">
                <Bed size={20} className="mx-auto text-gray-600 mb-1" />
                <p className="text-sm font-medium">{(property && property.bedrooms) || "-"}</p>
                <p className="text-xs text-gray-500">Beds</p>
              </div>
              <div className="text-center">
                <Maximize size={20} className="mx-auto text-gray-600 mb-1" />
                <p className="text-sm font-medium">{(property && property.area) || "-"}</p>
                <p className="text-xs text-gray-500">Area</p>
              </div>
              <div className="text-center">
                <Calendar size={20} className="mx-auto text-gray-600 mb-1" />
                <p className="text-sm font-medium">{(property && property.deliveryDate) || "N/A"}</p>
                <p className="text-xs text-gray-500">Delivery</p>
              </div>
            </div>

            {property && property.description && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                <p className="text-sm text-gray-600">{property.description}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in the property: ${encodeURIComponent((property && property.title) || "")} (${(property && property._id) || ""})`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-md text-base font-semibold hover:bg-green-600 transition shadow-lg"
                aria-label="WhatsApp now"
                onClick={(e) => e.stopPropagation()}
              >
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="h-5 w-5 invert" />
                Connect on WhatsApp
              </a>

              {brochureUrl ? (
                <a
                  href={brochureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 bg-[#c2a579] text-black px-4 py-3 rounded-md text-base font-semibold shadow-lg hover:opacity-95 transition"
                  aria-label="Download property brochure"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FileText size={20} className="text-black" />
                  Download Brochure
                </a>
              ) : (
                <button
                  className="flex-1 bg-[#c2a579] text-black px-4 py-3 rounded-md text-base font-semibold shadow-lg hover:opacity-95 transition"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Book Site Visit
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Properties() {
  const [active, setActive] = useState<string>(tabs[0]);
  const [q, setQ] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const perPage = 12;

  const [data, setData] = useState<DataShape>({ page: 1, perPage, total: 0, items: [] });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  const API_BASE =
    (import.meta && (import.meta as any).env && (import.meta as any).env.VITE_API_URL) ||
    "https://dukiya-server.onrender.com";

  const abortRef = useRef<AbortController | null>(null);
  const debounceRef = useRef<any>(null);
  const DEBOUNCE_MS = 450;

  const buildParams = useCallback(
    (p: number, { q: qParam, status: statusParam }: { q?: string; status?: string } = {}) => {
      const params: Record<string, any> = { page: p, perPage };
      if (qParam && qParam.trim() !== "") params.q = qParam.trim();
      if (statusParam) params.status = statusParam;
      return params;
    },
    [perPage]
  );

  const fetchProperties = useCallback(
    async (p = 1, filters: { q?: string; status?: string } = {}) => {
      if (abortRef.current) {
        try {
          abortRef.current.abort();
        } catch (_e) {
          // ignore
        }
      }
      const controller = new AbortController();
      abortRef.current = controller;

      setLoading(true);
      setError(null);
      try {
        const res = await axios.get<DataShape>(`${API_BASE}/api/properties`, {
          params: buildParams(p, filters),
          signal: controller.signal,
          timeout: 30000,
        });

        if (res && res.data && Array.isArray(res.data.items)) {
          setData(res.data);
        } else {
          // fallback guard if API shapes differently
          setData({
            page: p,
            perPage,
            total: (res.data && (res.data as any).total) || 0,
            items: (res.data && (res.data as any).items) || [],
          });
        }
      } catch (err: any) {
        if ((axios.isCancel && axios.isCancel(err)) || (err && err.name === "CanceledError")) {
          // no-op for cancellations
        } else {
          console.error("fetchProperties error:", err);
          let message = "Failed to load properties";
          if (axios.isAxiosError && axios.isAxiosError(err)) {
            message = (err.response && (err.response.data as any)?.error) || err.message || message;
          } else if (err && err.message) {
            message = err.message;
          }
          setError(message);
        }
      } finally {
        setLoading(false);
        abortRef.current = null;
      }
    },
    [API_BASE, buildParams, perPage]
  );

  // fetch on page or tab change (status)
  useEffect(() => {
    fetchProperties(page, { q, status: active });
  }, [page, active, fetchProperties, q]);

  // debounce text query (q)
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      setPage(1);
      fetchProperties(1, { q, status: active });
    }, DEBOUNCE_MS);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [q, active, fetchProperties]);

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
      debounceRef.current = null;
    }
    fetchProperties(1, { q, status: active });
  };

  const onTabClick = (t: string) => {
    setActive(t);
    setPage(1);
  };

  useEffect(() => {
    return () => {
      if (abortRef.current) {
        try {
          abortRef.current.abort();
        } catch (_e) {
          // ignore
        }
      }
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
        debounceRef.current = null;
      }
    };
  }, []);

  const items = data.items || [];

  return (
    <div className="min-h-screen bg-white">
      <section
        className="relative w-full min-h-[80vh] sm:min-h-[70vh] md:h-[50vh] lg:h-[70vh]"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-20 flex h-full items-center justify-center py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 w-full">
            <div className="bg-black/80 border border-white/10 rounded-xl shadow-lg px-4 py-3">
              <div className="flex justify-center">
                <div className="flex gap-3 flex-wrap justify-center">
                  {tabs.map((t) => (
                    <button
                      key={t}
                      onClick={() => onTabClick(t)}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition ${active === t ? "bg-[#c2a579] text-black" : "text-white border border-white/10 hover:bg-white/5"}`}
                      aria-pressed={active === t}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <form
                onSubmit={onSearch}
                className="mt-4 bg-white rounded-xl shadow-lg border border-gray-200 px-4 py-3 flex flex-col md:flex-row items-center gap-3"
                role="search"
                aria-label="Property search"
              >
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

                <button type="submit" className="w-full md:w-auto rounded-md px-6 py-3 bg-[#c2a579] text-black font-semibold hover:opacity-95 transition" aria-label="Search">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 mb-16">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-xl">🏠</span>
            <h3 className="text-lg md:text-2xl font-semibold text-gray-800">Properties for sale in Jaipur</h3>
          </div>
          <div className="text-sm text-gray-500">{data.total || 0} Units</div>
        </div>

        {loading ? (
          <div className="py-20 text-center text-gray-500">Loading properties…</div>
        ) : error ? (
          <div className="py-12 text-center text-red-600 bg-red-50 rounded-md">{error}</div>
        ) : items.length === 0 ? (
          <div className="py-12 text-center text-gray-500">No properties found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <div
                key={p._id || Math.random().toString(36).slice(2)}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProperty(p)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedProperty(p);
                }}
                className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-transparent cursor-pointer hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300"
                aria-label={p.title || "property"}
              >
                <div
                  className="w-full h-72 bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${(p.images && p.images[0] && p.images[0].url) || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'/%3E"})`,
                  }}
                  role="img"
                  aria-label={p.title || "property image"}
                />

                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-2xl" />

                <div className="absolute top-3 left-3 z-20 flex flex-col gap-2">
                  {p.status && <span className="bg-black/70 text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-sm">{p.status}</span>}
                  {p.deliveryDate && <span className="bg-black/70 text-white text-[11px] font-medium px-3 py-1 rounded-full shadow-sm">Delivery Date: {p.deliveryDate}</span>}
                </div>

                <div className="absolute inset-x-0 bottom-0 px-5 pb-5 z-30">
                  <div className="rounded-b-2xl p-4">
                    <h4 className="text-lg md:text-xl font-serif font-semibold text-white truncate leading-tight">{p.title}</h4>
                    {p.location && <p className="text-xs md:text-sm text-white/80 mt-1 truncate">{p.location}</p>}

                    <div className="mt-2 flex items-center gap-2 text-xs text-white/80">
                      <span>{p.bedrooms || "-"}</span>
                      <span>|</span>
                      <span>{p.area || "-"}</span>
                      <span>|</span>
                      <span>{p.price || "-"}</span>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 bg-black/75 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-black/80 transition"
                        aria-label="WhatsApp"
                      >
                        <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="h-4 w-4" />
                        <span>WhatsApp</span>
                      </a>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProperty(p);
                        }}
                        className="bg-[#c2a579] text-black px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:opacity-95 transition"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-10 rounded-2xl bg-[#efe7de]/60 px-6 py-8">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="font-serif text-xl md:text-2xl">
                Schedule a <span className="text-[#b4956a]">Meeting</span> and <span className="text-[#b4956a]">WhatsApp Chat</span>
              </h3>
              <p className="mt-2 text-sm text-neutral-700">Book a time that works for you and we'll get in touch to discuss your project.</p>
            </div>

            <div className="flex flex-wrap items-center justify-start gap-3 md:justify-end">
              <a href="https://calendly.com/bishtyash069/30min" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#b4956a] px-4 py-2 text-sm font-medium text-black hover:opacity-90">
                <Calendar className="h-4 w-4 text-black" />
                Schedule a Meeting
              </a>

              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black ring-1 ring-black/10 hover:bg-white/90">
                <img alt="" src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="h-4 w-4" />
                WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </main>

      {selectedProperty && <PropertyDetailModal property={selectedProperty} onClose={() => setSelectedProperty(null)} />}
    </div>
  );
}
