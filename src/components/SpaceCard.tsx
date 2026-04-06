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
      whileTap={{ scale: 0.97 }}
      className="w-full text-left rounded-[20px] overflow-hidden glass-card group"
    >
      <div className="relative">
        <img
          src={space.image}
          alt={space.name}
          className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
        <div className="absolute top-2.5 right-2.5 flex gap-1.5">
          {space.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-full glass text-[10px] font-bold text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Rating badge */}
        <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 px-2 py-1 rounded-xl glass">
          <Star className="w-3 h-3 fill-park text-park" />
          <span className="font-bold text-xs text-foreground">{space.rating}</span>
        </div>
      </div>
      <div className="p-3.5 space-y-2">
        <div>
          <h3 className="font-bold text-sm text-foreground">{space.name}</h3>
          <p className="text-[11px] text-muted-foreground">{space.subcategory}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <MapPin className="w-3 h-3" />
            <span>{space.distance}</span>
          </div>
          <p className="font-bold text-sm text-foreground">
            ₹{space.price}
            <span className="text-[10px] font-normal text-muted-foreground">/{space.priceUnit}</span>
          </p>
        </div>
      </div>
    </motion.button>
  );
};

export default SpaceCard;
