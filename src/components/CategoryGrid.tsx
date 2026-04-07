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

  const featured = categories[0]; // Play
  const gridCategories = categories.slice(1);

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

      {/* Featured Play card - cinematic hero */}
      <div className="px-4">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
          whileTap={{ scale: 0.97 }}
          whileHover={{ scale: 1.01 }}
          onClick={() => handleClick(featured.key)}
          className="w-full relative overflow-hidden rounded-[24px] group"
        >
          <div className="relative h-52">
            <img
              src={featured.image}
              alt={featured.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Cinematic overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-play/30 via-transparent to-primary/20" />
            {/* Neon glow effect */}
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 80%, hsla(142, 70%, 50%, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 70% 20%, hsla(270, 70%, 60%, 0.25) 0%, transparent 50%)",
              }}
            />
            {/* Light leak / lens flare */}
            <div
              className="absolute inset-0 opacity-20 mix-blend-screen"
              style={{
                background:
                  "radial-gradient(circle at 85% 15%, hsla(0, 0%, 100%, 0.6) 0%, transparent 30%)",
              }}
            />
            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="text-3xl drop-shadow-lg">{featured.emoji}</span>
                <h3 className="font-extrabold text-xl text-white drop-shadow-lg tracking-tight">
                  {featured.label}
                </h3>
                <span className="ml-auto px-3 py-1 rounded-full bg-play/80 text-play-foreground text-[10px] font-bold backdrop-blur-sm shadow-[0_0_20px_hsla(142,70%,50%,0.4)]">
                  🔥 HOT
                </span>
              </div>
              <p className="text-sm text-white/70 font-medium">{featured.tagline}</p>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Category grid - 2 columns, cinematic cards */}
      <div className="px-4">
        <div className="grid grid-cols-2 gap-3">
          {gridCategories.map((cat, i) => (
            <motion.button
              key={cat.key}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15 + i * 0.06,
                type: "spring",
                stiffness: 120,
                damping: 14,
              }}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => handleClick(cat.key)}
              className="relative overflow-hidden rounded-[20px] group"
            >
              <div className="relative aspect-[4/3]">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Cinematic dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
                {/* Subtle color tint per category */}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    background: `radial-gradient(ellipse at 50% 80%, hsl(var(--primary) / 0.4) 0%, transparent 70%)`,
                  }}
                />
                {/* Soft lens glow */}
                <div
                  className="absolute inset-0 opacity-15 mix-blend-screen"
                  style={{
                    background:
                      "radial-gradient(circle at 80% 20%, hsla(0, 0%, 100%, 0.5) 0%, transparent 40%)",
                  }}
                />
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-lg drop-shadow-lg">{cat.emoji}</span>
                    <h3 className="font-bold text-sm text-white drop-shadow-md tracking-tight">
                      {cat.label}
                    </h3>
                  </div>
                  <p className="text-[11px] text-white/60 font-medium leading-tight">
                    {cat.tagline}
                  </p>
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
