import { motion } from "framer-motion";
import { spaces } from "@/lib/data";
import SpaceCard from "@/components/SpaceCard";
import { useNavigate } from "react-router-dom";
import { TrendingUp, ChevronRight } from "lucide-react";

const TrendingSection = () => {
  const navigate = useNavigate();
  const trending = spaces.filter((s) =>
    s.tags.some((t) => t.includes("Popular") || t.includes("Filling"))
  );

  return (
    <section className="py-4 space-y-3">
      <div className="px-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg gradient-primary">
            <TrendingUp className="w-3.5 h-3.5 text-primary-foreground" />
          </div>
          <h2 className="text-base font-bold text-foreground">Trending near you 🔥</h2>
        </div>
        <button className="text-xs text-primary font-semibold flex items-center gap-0.5">
          See all <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
      <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-4">
        {trending.slice(0, 5).map((space, i) => (
          <motion.div
            key={space.id}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
            className="min-w-[240px]"
          >
            <SpaceCard
              space={space}
              onClick={() => navigate(`/space/${space.id}`)}
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingSection;
