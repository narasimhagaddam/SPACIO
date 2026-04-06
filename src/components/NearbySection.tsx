import { motion } from "framer-motion";
import { spaces } from "@/lib/data";
import SpaceCard from "@/components/SpaceCard";
import { useNavigate } from "react-router-dom";
import { MapPin, Sparkles } from "lucide-react";

const NearbySection = () => {
  const navigate = useNavigate();
  const nearby = spaces.slice(0, 6);

  return (
    <section className="px-4 py-4 space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-accent/20">
            <MapPin className="w-3.5 h-3.5 text-accent" />
          </div>
          <h2 className="text-base font-bold text-foreground">Nearby spaces 📍</h2>
        </div>
        <span className="text-[10px] text-muted-foreground glass-input px-2 py-1 rounded-full">
          <Sparkles className="w-3 h-3 inline mr-0.5" /> Personalized
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {nearby.map((space, i) => (
          <motion.div
            key={space.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
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

export default NearbySection;
