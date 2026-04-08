import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, X, Star, MapPin, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { spaces, categories } from "@/lib/data";

const intentFilters = ["All", "Work", "Chill", "Fun", "Relax"] as const;

const searchChips = [
  { label: "Coworking 💼", cat: "work" },
  { label: "Pool 🏊", cat: "play" },
  { label: "Gaming 🎮", cat: "play" },
  { label: "Wellness 🧘", cat: "wellness" },
  { label: "Entertainment 🎬", cat: "party" },
  { label: "Parking 🅿️", cat: "park" },
  { label: "Stay 🏨", cat: "stay" },
];

const trendingSuggestions = [
  "Trending near you 🔥",
  "Top rated ⭐",
  "Recently booked 📖",
  "Popular for groups 👥",
];

const intentToCategory: Record<string, string[]> = {
  Work: ["work"],
  Chill: ["stay", "wellness"],
  Fun: ["play", "party"],
  Relax: ["wellness", "park", "stay"],
};

type Availability = "available" | "few" | "full";
const getAvailability = (id: string): Availability => {
  const n = parseInt(id) % 3;
  return n === 0 ? "full" : n === 1 ? "few" : "available";
};
const availBadge: Record<Availability, { label: string; cls: string }> = {
  available: { label: "Available now", cls: "bg-emerald-500/20 text-emerald-400" },
  few: { label: "Few slots left", cls: "bg-amber-500/20 text-amber-400" },
  full: { label: "Fully booked", cls: "bg-red-500/20 text-red-400" },
};

const SearchPage = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [activeIntent, setActiveIntent] = useState("All");
  const [activeChip, setActiveChip] = useState<string | null>(null);

  const hasInput = query.length > 0 || activeChip || activeIntent !== "All";

  const filtered = useMemo(() => {
    let result = [...spaces];
    if (query) {
      const q = query.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.subcategory.toLowerCase().includes(q) ||
          s.address.toLowerCase().includes(q)
      );
    }
    if (activeChip) {
      const chip = searchChips.find((c) => c.label === activeChip);
      if (chip) result = result.filter((s) => s.category === chip.cat);
    }
    if (activeIntent !== "All") {
      const cats = intentToCategory[activeIntent] || [];
      result = result.filter((s) => cats.includes(s.category));
    }
    return result;
  }, [query, activeChip, activeIntent]);

  return (
    <div className="min-h-screen pb-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 50%, #0F2A3F 100%)" }} />
      <div className="absolute top-32 -left-20 w-56 h-56 rounded-full opacity-15 blur-[80px] pointer-events-none bg-purple-500" />
      <div className="absolute bottom-40 -right-16 w-48 h-48 rounded-full opacity-10 blur-[70px] pointer-events-none bg-blue-500" />

      <div className="relative z-10">
        {/* Sticky search bar */}
        <div className="sticky top-0 z-20 px-4 pt-4 pb-2 glass">
          <div className="flex items-center gap-2">
            <div className="flex-1 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl glass-card">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search spaces, locations, amenities..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              {query && (
                <button onClick={() => setQuery("")}>
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-2xl glass-card flex items-center justify-center"
            >
              <SlidersHorizontal className="w-4 h-4 text-primary" />
            </motion.button>
          </div>
        </div>

        {/* Intent filters */}
        <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          {intentFilters.map((f) => (
            <motion.button
              key={f}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveIntent(f)}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeIntent === f
                  ? "gradient-primary text-primary-foreground"
                  : "glass-card text-muted-foreground"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </div>

        {/* Category chips */}
        <div className="px-4 py-1 flex gap-2 overflow-x-auto no-scrollbar">
          {searchChips.map((chip) => (
            <motion.button
              key={chip.label}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveChip(activeChip === chip.label ? null : chip.label)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeChip === chip.label
                  ? "bg-primary/20 text-primary border border-primary/30"
                  : "glass-card text-muted-foreground"
              }`}
            >
              {chip.label}
            </motion.button>
          ))}
        </div>

        {/* Smart suggestions when no input */}
        {!hasInput && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4 py-3">
            <h3 className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
              Quick picks
            </h3>
            <div className="space-y-2">
              {trendingSuggestions.map((s, i) => (
                <motion.button
                  key={s}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setQuery(s.replace(/[^\w\s]/g, "").trim())}
                  className="w-full text-left px-4 py-2.5 rounded-xl glass-card text-sm text-foreground hover:scale-[1.01] transition-transform"
                >
                  {s}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Results */}
        {hasInput && (
          <div className="px-4 py-3">
            <p className="text-xs text-muted-foreground mb-3">
              {filtered.length} space{filtered.length !== 1 ? "s" : ""} found
            </p>

            {filtered.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <Search className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <h3 className="text-base font-bold text-foreground mb-1">No spaces found</h3>
                <p className="text-xs text-muted-foreground mb-4">Try adjusting filters or explore popular spaces</p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => { setQuery(""); setActiveChip(null); setActiveIntent("All"); }}
                  className="px-5 py-2 rounded-xl text-xs font-bold text-black"
                  style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)", boxShadow: "0 4px 15px rgba(245,158,11,0.3)" }}
                >
                  Explore Popular Spaces
                </motion.button>
              </motion.div>
            ) : (
              <div className="space-y-3">
                {filtered.map((space, i) => {
                  const avail = getAvailability(space.id);
                  const badge = availBadge[avail];
                  return (
                    <motion.button
                      key={space.id}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => navigate(`/space/${space.id}`)}
                      className="w-full text-left rounded-2xl overflow-hidden glass-card hover:scale-[1.01] transition-transform"
                      style={{ background: "rgba(20,30,50,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      <div className="flex gap-3 p-3">
                        <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 relative">
                          <img src={space.image} alt={space.name} className="w-full h-full object-cover" loading="lazy" />
                          <span className={`absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-md text-[9px] font-bold ${badge.cls}`}>
                            {badge.label}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0 py-0.5">
                          <h3 className="text-sm font-bold text-foreground truncate">{space.name}</h3>
                          <p className="text-[11px] text-muted-foreground mt-0.5">{space.subcategory}</p>
                          <div className="flex items-center gap-2 mt-1.5 text-[11px] text-muted-foreground">
                            <MapPin className="w-3 h-3" />
                            <span>{space.distance}</span>
                            <span>•</span>
                            <Star className="w-3 h-3 text-amber-400" />
                            <span>{space.rating}</span>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-sm font-extrabold text-foreground">₹{space.price}<span className="text-[10px] text-muted-foreground font-normal">/{space.priceUnit}</span></span>
                            <span
                              className="px-3 py-1 rounded-lg text-[10px] font-bold text-black"
                              style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)" }}
                            >
                              <Zap className="w-3 h-3 inline mr-0.5" /> Book
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
