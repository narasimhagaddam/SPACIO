import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import { useAppStore } from "@/lib/store";
import { useNavigate } from "react-router-dom";

const CategoryGrid = () => {
  const navigate = useNavigate();

  const handleClick = (key: string) => {
    navigate(`/category/${key}`);
  };

  return (
    <section className="px-4 py-2">
      <div className="grid grid-cols-3 gap-3">
        {categories.map((cat, i) => (
          <motion.button
            key={cat.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => handleClick(cat.key)}
            className={`relative overflow-hidden rounded-2xl ${
              cat.key === "play" ? "col-span-2 row-span-2" : ""
            }`}
          >
            <div className="relative aspect-square">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <span className="text-2xl">{cat.emoji}</span>
                <p className="font-bold text-primary-foreground text-sm mt-1">{cat.label}</p>
                {cat.key === "play" && (
                  <p className="text-primary-foreground/80 text-xs">{cat.tagline}</p>
                )}
              </div>
              {cat.key === "play" && (
                <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-play text-play-foreground text-[10px] font-bold">
                  🔥 HOT
                </div>
              )}
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
