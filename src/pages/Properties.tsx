import axios from "axios";
import bg from "../assets/property/bg.svg";
import { Search } from "lucide-react";

const ACCENT = "#c2a579";
const WHATSAPP_NUMBER = "8860643975";
const tabs = ["Buy", "Sell", "New Projects", "Plot", "Commercial"];

export default function Properties() {
  const [active, setActive] = useState(tabs[0]);
  const [q, setQ] = useState("");
  const [type, setType] = useState("");
  const [beds, setBeds] = useState("");
  const [page, setPage] = useState(1);
  const perPage = 12;

  const [data, setData] = useState({ page: 1, perPage, total: 0, items: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE =
    import.meta.env.VITE_API_URL || "https://dukiya-server.onrender.com";

  const fetchProperties = async (p = 1, filters = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`${API_BASE}/api/properties`, {
        params: { page: p, perPage, ...filters },
      });
      setData(res.data);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.error || err.message || "Failed to load properties"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties(page, { q, type, beds, status: active });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, active]);

  const onSearch = (e) => {
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
            {/* Replace with svg if you prefer */}
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
          <div className="py-12 text-center text-red-600 bg-red-50 rounded-md">{error}</div>
        ) : items.length === 0 ? (
          <div className="py-12 text-center text-gray-500">No properties found.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((p) => (
              <article
                key={p._id}
                className="relative rounded-xl overflow-hidden shadow-lg bg-white"
                aria-label={p.title || "property"}
              >
                {/* top image */}
                <div className="w-full h-72 sm:h-72 md:h-72 lg:h-72 overflow-hidden rounded-t-xl">
                  <img
                    src={p.images?.[0]?.url || "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'/%3E"}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                {/* badges */}
                <div className="absolute top-3 left-3 text-xs text-white bg-black/70 px-2 py-1 rounded">
                  {p.status || "Status"}
                </div>
                {p.deliveryDate && (
                  <div className="absolute top-3 right-3 text-xs text-white bg-black/70 px-2 py-1 rounded">
                    Delivery: {p.deliveryDate}
                  </div>
                )}

                {/* content area (placed on top of the bottom of image, like the reference) */}
                <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                  <div className=" via-transparent to-transparent rounded-b-xl p-4">
                    <h4 className="text-lg font-semibold text-white truncate">{p.title}</h4>
                    <p className="text-sm text-white/80 mt-1 truncate">{p.location}</p>

                    <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-white/80">
                      <span>{p.bedrooms || "-"}</span>
                      <span>{p.area || "-"}</span>
                      <span>{p.price || "-"}</span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-[#c2a579] text-black px-3 py-2 rounded-md text-xs font-semibold hover:opacity-90"
                      >
                        WhatsApp
                      </a>
                      <button className="bg-white text-black px-3 py-2 rounded-md text-xs font-semibold hover:opacity-90">
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
