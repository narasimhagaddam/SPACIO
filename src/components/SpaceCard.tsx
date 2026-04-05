import { Space } from "@/lib/data";
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  space: Space;
  onClick: () => void;
}

const SpaceCard = ({ space, onClick }: Props) => {
  return (
    <motion.button
      onClick={onClick}
      whileTap={{ scale: 0.98 }}
      className="w-full text-left rounded-2xl overflow-hidden bg-card shadow-sm border border-border"
    >
      <div className="relative">
        <img src={space.image} alt={space.name} className="w-full h-40 object-cover" loading="lazy" />
        <div className="absolute top-2 right-2 flex gap-1">
          {space.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-card/90 backdrop-blur text-[10px] font-semibold text-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3 space-y-1.5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-sm text-card-foreground">{space.name}</h3>
            <p className="text-xs text-muted-foreground">{space.subcategory}</p>
          </div>
          <div className="flex items-center gap-0.5 text-xs">
            <Star className="w-3 h-3 fill-accent text-accent" />
            <span className="font-semibold text-card-foreground">{space.rating}</span>
            <span className="text-muted-foreground">({space.reviews})</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{space.distance}</span>
          </div>
          <p className="font-bold text-sm text-card-foreground">
            ₹{space.price}<span className="text-xs font-normal text-muted-foreground">/{space.priceUnit}</span>
          </p>
        </div>
      </div>
    </motion.button>
  );
};

export default SpaceCard;
