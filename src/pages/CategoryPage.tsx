import { useParams, useNavigate } from "react-router-dom";
import { spaces, categories } from "@/lib/data";
import SpaceCard from "@/components/SpaceCard";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { key } = useParams<{ key: string }>();
  const navigate = useNavigate();
  const category = categories.find((c) => c.key === key);
  const filtered = spaces.filter((s) => s.category === key);

  if (!category) return null;

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Hero */}
      <div className="relative h-48">
        <img src={category.image} alt={category.label} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 p-2 rounded-full glass"
        >
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="absolute bottom-4 left-4">
          <h1 className="text-2xl font-bold text-foreground">
            {category.emoji} {category.label}
          </h1>
          <p className="text-sm text-muted-foreground">{filtered.length} spaces nearby</p>
        </div>
      </div>

      {/* Subcategory pills */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto no-scrollbar">
        <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold whitespace-nowrap">
          All
        </span>
        {[...new Set(filtered.map((s) => s.subcategory))].map((sub) => (
          <span key={sub} className="px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium whitespace-nowrap">
            {sub}
          </span>
        ))}
      </div>

      {/* Cards */}
      <div className="px-4 space-y-3">
        {filtered.map((space, i) => (
          <motion.div
            key={space.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <SpaceCard space={space} onClick={() => navigate(`/space/${space.id}`)} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
