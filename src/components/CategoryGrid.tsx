import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const CategoryGrid = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const handleClick = (key: string) => {
    setActiveCategory(key);
    navigate(`/category/${key}`);
  };

  return (
    <section className="space-y-4">
      {/* Horizontal category pills */}
      <div className="px-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat, i) => (
            <motion.button
              key={cat.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleClick(cat.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl whitespace-nowrap text-xs font-bold transition-all ${
                activeCategory === cat.key
                  ? "gradient-primary text-primary-foreground glow-primary shadow-lg"
                  : "glass-card text-foreground hover:bg-muted/30"
              }`}
            >
              <span className="text-base">{cat.emoji}</span>
              <span>{cat.label}</span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Featured category cards */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-3">
          {/* Play - featured large card */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleClick("play")}
            className="col-span-2 relative overflow-hidden rounded-[20px] group"
          >
            <div className="relative h-44">
              <img
                src={categories[0].image}
                alt="Play"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-play/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl">🎮</span>
                  <h3 className="font-extrabold text-lg text-foreground">Play</h3>
                  <span className="ml-auto px-2.5 py-0.5 rounded-full bg-play text-play-foreground text-[10px] font-bold glow-neon">
                    🔥 HOT
                  </span>
                </div>
                <p className="text-xs text-muted-foreground">Game on or still scrolling? 😏</p>
              </div>
            </div>
          </motion.button>

          {/* Remaining categories */}
          {categories.slice(1).map((cat, i) => (
            <motion.button
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleClick(cat.key)}
              className="relative overflow-hidden rounded-[20px] group"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg">{cat.emoji}</span>
                    <h3 className="font-bold text-sm text-foreground">{cat.label}</h3>
                  </div>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{cat.tagline}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
