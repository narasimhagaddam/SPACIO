import { motion } from "framer-motion";
import { spaces } from "@/lib/data";
import SpaceCard from "@/components/SpaceCard";
import { useNavigate } from "react-router-dom";
import { TrendingUp } from "lucide-react";

const TrendingSection = () => {
  const navigate = useNavigate();
  const trending = spaces.filter((s) => s.tags.some((t) => t.includes("Popular") || t.includes("Filling")));

  return (
    <section className="px-4 py-4 space-y-3">
      <div className="flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-accent" />
        <h2 className="text-lg font-bold text-foreground">Trending near you 🔥</h2>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
        {trending.slice(0, 5).map((space, i) => (
          <motion.div
            key={space.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="min-w-[260px]"
          >
            <SpaceCard space={space} onClick={() => navigate(`/space/${space.id}`)} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
