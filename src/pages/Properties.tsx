import React, { useEffect, useState, type JSX } from "react";
import axios from "axios";
import bg from "../assets/home/img1.svg";
import { Calendar, Search, X, MapPin, Bed, Maximize, FileText } from "lucide-react"; // Added FileText icon

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
    // Added fields for detailed view/modal
    description?: string;
    baths?: string;
    type?: string;
    brochure?: { // Added the brochure field structure
        url: string;
        public_id: string;
        _id: string;
    };
}

interface PropertiesResponse {
    page: number;
    perPage: number;
    total: number;
    items: Property[];
}

// 1. Updated Modal Component
interface PropertyModalProps {
    property: Property;
    onClose: () => void;
}

const PropertyDetailModal: React.FC<PropertyModalProps> = ({ property, onClose }) => {
    // Determine the main image URL
    const imageUrl = property.images?.[0]?.url || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'/%3E";
    // Get brochure URL
    const brochureUrl = property.brochure?.url;

    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 backdrop-blur-sm flex items-center justify-center p-4">
            <div
                className="relative w-full max-w-4xl bg-white rounded-xl shadow-2xl transform transition-all duration-300 scale-100 opacity-100"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white text-gray-700 shadow-lg hover:bg-gray-100 transition"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {/* Modal Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image Section */}
                    <div className="relative h-64 lg:h-auto overflow-hidden rounded-t-xl lg:rounded-l-xl lg:rounded-tr-none">
                        <img
                            src={imageUrl}
                            alt={property.title || "Property image"}
                            className="w-full h-full object-cover"
                        />
                        {/* Status Badge */}
                        {property.status && (
                            <div className="absolute top-4 left-4 bg-[#c2a579] text-black font-semibold px-4 py-1 rounded-full text-sm shadow-md">
                                {property.status}
                            </div>
                        )}
                    </div>

                    {/* Details Section */}
                    <div className="p-6 md:p-8 space-y-6">
                        <h2 id="modal-title" className="font-serif text-2xl md:text-3xl font-bold text-gray-900">
                            {property.title || "Property Details"}
                        </h2>

                        {/* Price & Location */}
                        <div className="space-y-1">
                            <p className="text-xl font-bold text-[#c2a579]">
                                {property.price || "Price on Request"}
                            </p>
                            {property.location && (
                                <p className="flex items-center text-sm text-gray-500">
                                    <MapPin size={16} className="mr-2 flex-shrink-0" />
                                    {property.location}
                                </p>
                            )}
                        </div>

                        {/* Key Features / Meta Data */}
                        <div className="grid grid-cols-3 gap-4 border-t border-b border-gray-100 py-4">
                            <div className="text-center">
                                <Bed size={20} className="mx-auto text-gray-600 mb-1" />
                                <p className="text-sm font-medium">{property.bedrooms || '-'}</p>
                                <p className="text-xs text-gray-500">Beds</p>
                            </div>
                            <div className="text-center">
                                <Maximize size={20} className="mx-auto text-gray-600 mb-1" />
                                <p className="text-sm font-medium">{property.area || '-'}</p>
                                <p className="text-xs text-gray-500">Area</p>
                            </div>
                            <div className="text-center">
                                <Calendar size={20} className="mx-auto text-gray-600 mb-1" />
                                <p className="text-sm font-medium">{property.deliveryDate || 'N/A'}</p>
                                <p className="text-xs text-gray-500">Delivery</p>
                            </div>
                        </div>

                        {/* Description/CTA */}
                        {property.description && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Description</h3>
                                <p className="text-sm text-gray-600 line-clamp-4">{property.description}</p>
                            </div>
                        )}

                        {/* Action Buttons: WhatsApp and Download Brochure/Book Site Visit */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=I'm interested in the property: ${property.title} (${property._id})`}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex flex-1 items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-md text-base font-semibold hover:bg-green-600 transition shadow-lg"
                                aria-label="WhatsApp now"
                            >
                                <img
                                    alt=""
                                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                                    className="h-5 w-5 invert"
                                />
                                Connect on WhatsApp
                            </a>

                            {/* CONDITIONAL BUTTON: Download Brochure or Book Site Visit */}
                            {brochureUrl ? (
                                <a 
                                    href={brochureUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex flex-1 items-center justify-center gap-2 bg-[#c2a579] text-black px-4 py-3 rounded-md text-base font-semibold shadow-lg hover:opacity-95 transition"
                                    aria-label="Download property brochure"
                                >
                                    <FileText size={20} className="text-black" />
                                    Download Brochure
                                </a>
                            ) : (
                                <button className="flex-1 bg-[#c2a579] text-black px-4 py-3 rounded-md text-base font-semibold shadow-lg hover:opacity-95 transition">
                                    Book Site Visit
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 2. Main Properties Component
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

    // New state for modal
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

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
            {/* HERO - Mobile height fix retained */}
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
                        {/* Dark tabs bar */}
                        <div className="bg-black/80 border border-white/10 rounded-xl shadow-lg px-4 py-3">
                            <div className="flex justify-center">
                                <div className="flex gap-3 flex-wrap justify-center">
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

                            {/* White search strip */}
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
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 md:mt-16 mb-16">
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
                            // Clickable card
                            <div
                                key={p._id}
                                role="button"
                                tabIndex={0}
                                onClick={() => setSelectedProperty(p)} // Open modal on click
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        setSelectedProperty(p);
                                    }
                                }}
                                className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-transparent cursor-pointer hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300"
                                aria-label={p.title || "property"}
                            >
                                {/* image as background */}
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

                                {/* Overlay "View Details" button/hint */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-black shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none">
                                    <Search size={24} />
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

                                        {/* Action row: WhatsApp + Book Now */}
                                        <div className="mt-4 flex items-center justify-between gap-3">
                                            <a
                                                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={(e) => e.stopPropagation()} // Crucial: Stop click from opening modal
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

                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Crucial: Stop click from opening modal
                                                    setSelectedProperty(p); // Re-open modal or handle button click
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
                                href={`https://wa.me/${WHATSAPP_NUMBER}`} // Corrected the WhatsApp link
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

            {/* Render Modal if a property is selected */}
            {selectedProperty && (
                <PropertyDetailModal
                    property={selectedProperty}
                    onClose={() => setSelectedProperty(null)}
                />
            )}
        </div>
    );
}