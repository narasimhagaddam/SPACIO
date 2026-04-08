import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Star, MapPin, Plus, Share2, ChevronLeft, Zap, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { spaces } from "@/lib/data";

interface Collection {
  id: string;
  name: string;
  emoji: string;
  spaceIds: string[];
}

const defaultCollections: Collection[] = [
  { id: "all", name: "All Saved", emoji: "❤️", spaceIds: ["1", "3", "5", "8", "12"] },
  { id: "work", name: "Work Spots", emoji: "💼", spaceIds: ["5", "7"] },
  { id: "chill", name: "Chill Places", emoji: "🌴", spaceIds: ["12", "13"] },
  { id: "gaming", name: "Gaming", emoji: "🎮", spaceIds: ["1", "3"] },
  { id: "date", name: "Date Spots", emoji: "💖", spaceIds: ["8"] },
];

const smartTags: Record<string, string> = {
  "3": "🏆 Top rated",
  "5": "👥 Best for groups",
  "8": "🔥 Price dropped",
  "12": "⏳ Only 2 slots left",
};

const savedDaysAgo: Record<string, number> = {
  "1": 3,
  "5": 1,
  "8": 5,
};

const SavedPage = () => {
  const navigate = useNavigate();
  const [collections, setCollections] = useState(defaultCollections);
  const [activeCollection, setActiveCollection] = useState("all");
  const [removedIds, setRemovedIds] = useState<string[]>([]);

  const currentCollection = collections.find((c) => c.id === activeCollection) || collections[0];
  const savedSpaces = spaces.filter(
    (s) => currentCollection.spaceIds.includes(s.id) && !removedIds.includes(s.id)
  );

  const handleRemove = (spaceId: string) => {
    setRemovedIds((prev) => [...prev, spaceId]);
  };

  const isEmpty = savedSpaces.length === 0;

  return (
    <div className="min-h-screen pb-24 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 50%, #0F2A3F 100%)" }} />
      <div className="absolute top-20 -right-20 w-56 h-56 rounded-full opacity-12 blur-[80px] pointer-events-none bg-purple-500" />
      <div className="absolute bottom-60 -left-16 w-48 h-48 rounded-full opacity-10 blur-[70px] pointer-events-none bg-blue-500" />

      <div className="relative z-10">
        {/* Header */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>
            <h1 className="text-lg font-extrabold text-foreground">
              ❤️ Saved Spaces
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center"
            >
              <Share2 className="w-4 h-4 text-muted-foreground" />
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center"
            >
              <Plus className="w-4 h-4 text-primary" />
            </motion.button>
          </div>
        </div>

        {/* Collections horizontal scroll */}
        <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar">
          {collections.map((col) => (
            <motion.button
              key={col.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCollection(col.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCollection === col.id
                  ? "gradient-primary text-primary-foreground"
                  : "glass-card text-muted-foreground"
              }`}
            >
              <span>{col.emoji}</span>
              {col.name}
              <span className="ml-1 opacity-60">({col.spaceIds.length})</span>
            </motion.button>
          ))}
        </div>

        {/* Reminder banner */}
        {!isEmpty && savedDaysAgo[savedSpaces[0]?.id] && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-4 mt-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-amber-300"
            style={{ background: "rgba(245,158,11,0.1)", border: "1px solid rgba(245,158,11,0.15)" }}
          >
            ⏰ You saved this space {savedDaysAgo[savedSpaces[0].id]} days ago — book now?
          </motion.div>
        )}

        {/* Saved items or empty state */}
        {isEmpty ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20 px-6"
          >
            <div className="w-16 h-16 rounded-full glass-card flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-muted-foreground/40" />
            </div>
            <h3 className="text-base font-bold text-foreground mb-1">No saved spaces yet</h3>
            <p className="text-xs text-muted-foreground mb-5">Start exploring and save your favorites</p>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-black"
              style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)", boxShadow: "0 4px 15px rgba(245,158,11,0.3)" }}
            >
              <Search className="w-3.5 h-3.5 inline mr-1" />
              Explore Spaces
            </motion.button>
          </motion.div>
        ) : (
          <div className="px-4 py-3 space-y-3">
            <AnimatePresence mode="popLayout">
              {savedSpaces.map((space, i) => {
                const tag = smartTags[space.id];
                return (
                  <motion.div
                    key={space.id}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100, scale: 0.9 }}
                    transition={{ delay: i * 0.04, type: "spring", damping: 20 }}
                    className="rounded-2xl overflow-hidden hover:scale-[1.01] transition-transform"
                    style={{ background: "rgba(20,30,50,0.6)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    {/* Smart tag banner */}
                    {tag && (
                      <div className="px-3 py-1.5 text-[10px] font-bold"
                        style={{
                          background: tag.includes("Price") ? "rgba(239,68,68,0.1)" : tag.includes("Top") ? "rgba(139,92,246,0.1)" : "rgba(245,158,11,0.1)",
                          color: tag.includes("Price") ? "#f87171" : tag.includes("Top") ? "#a78bfa" : "#fbbf24",
                        }}
                      >
                        {tag}
                      </div>
                    )}
                    <div className="flex gap-3 p-3">
                      <div
                        className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 cursor-pointer"
                        onClick={() => navigate(`/space/${space.id}`)}
                      >
                        <img src={space.image} alt={space.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" loading="lazy" />
                      </div>
                      <div className="flex-1 min-w-0 py-0.5">
                        <div className="flex items-start justify-between">
                          <h3
                            className="text-sm font-bold text-foreground truncate cursor-pointer"
                            onClick={() => navigate(`/space/${space.id}`)}
                          >
                            {space.name}
                          </h3>
                          <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={() => handleRemove(space.id)}
                            className="ml-2 flex-shrink-0"
                          >
                            <Heart className="w-5 h-5 text-red-400 fill-red-400" />
                          </motion.button>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-muted-foreground">
                          <MapPin className="w-3 h-3" />
                          <span>{space.address}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-[11px] text-muted-foreground">
                          <Star className="w-3 h-3 text-amber-400" />
                          <span>{space.rating} ({space.reviews})</span>
                          <span>•</span>
                          <span>{space.distance}</span>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-sm font-extrabold text-foreground">
                            ₹{space.price}<span className="text-[10px] text-muted-foreground font-normal">/{space.priceUnit}</span>
                          </span>
                          <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate(`/space/${space.id}`)}
                            className="px-3 py-1 rounded-lg text-[10px] font-bold text-black"
                            style={{ background: "linear-gradient(135deg, #F59E0B, #FBBF24)" }}
                          >
                            <Zap className="w-3 h-3 inline mr-0.5" /> Quick Book
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}

        {/* You may also like */}
        {!isEmpty && (
          <div className="px-4 py-3">
            <h3 className="text-sm font-bold text-foreground mb-2">You may also like</h3>
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
              {spaces
                .filter((s) => !currentCollection.spaceIds.includes(s.id))
                .slice(0, 5)
                .map((space) => (
                  <motion.button
                    key={space.id}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate(`/space/${space.id}`)}
                    className="min-w-[140px] rounded-xl overflow-hidden flex-shrink-0"
                    style={{ background: "rgba(20,30,50,0.5)", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <img src={space.image} alt={space.name} className="w-full h-20 object-cover" loading="lazy" />
                    <div className="p-2.5">
                      <h4 className="text-xs font-bold text-foreground truncate">{space.name}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">₹{space.price}/{space.priceUnit}</p>
                    </div>
                  </motion.button>
                ))}
            </div>
          </div>
        )}

        <div className="px-4 py-4 text-center">
          <p className="text-xs text-muted-foreground">
            Save spaces you love ❤️ • Book them anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default SavedPage;
