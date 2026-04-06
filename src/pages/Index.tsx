import CategoryGrid from "@/components/CategoryGrid";
import TrendingSection from "@/components/TrendingSection";
import NearbySection from "@/components/NearbySection";
import { motion } from "framer-motion";
import { Search, MapPin, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Gradient mesh background */}
      <div className="absolute inset-x-0 top-0 h-[400px] gradient-hero pointer-events-none" />

      <div className="relative">
        {/* Location bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-4 pt-2 pb-1"
        >
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 text-primary" />
            <span className="font-semibold text-foreground">📍 Near you</span>
            <span className="text-muted-foreground">• Bengaluru</span>
          </div>
        </motion.div>

        {/* Search bar */}
        <div className="px-4 py-2">
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-3 px-4 py-3 rounded-2xl glass-card cursor-pointer"
          >
            <Search className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Search spaces, play zones, or stays…</span>
            <Sparkles className="w-3.5 h-3.5 text-primary ml-auto" />
          </motion.div>
        </div>

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="px-4 py-3"
        >
          <h1 className="text-2xl font-extrabold text-foreground">
            What's happening near you 👀
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Something good is nearby 👀
          </p>
        </motion.div>

        {/* Categories */}
        <CategoryGrid />

        {/* Hero Carousel / Offers Banner */}
        <div className="px-4 py-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative overflow-hidden rounded-[20px] gradient-primary p-5"
          >
            <div className="absolute inset-0 opacity-20"
              style={{
                background: "radial-gradient(circle at 80% 20%, hsla(0, 0%, 100%, 0.3) 0%, transparent 50%)",
              }}
            />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="font-extrabold text-primary-foreground text-base">🎁 First Booking Free!</p>
                <p className="text-primary-foreground/70 text-xs mt-1">Up to ₹200 off. Limited time only.</p>
                <button className="mt-3 px-4 py-1.5 rounded-xl bg-primary-foreground/20 text-primary-foreground text-xs font-bold">
                  Claim Now →
                </button>
              </div>
              <span className="text-4xl">🎉</span>
            </div>
          </motion.div>
        </div>

        {/* Trending */}
        <TrendingSection />

        {/* Nearby */}
        <NearbySection />

        {/* Play highlight banner */}
        <div className="px-4 py-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative overflow-hidden rounded-[20px] gradient-play p-5"
          >
            <div className="absolute inset-0 opacity-10"
              style={{
                background: "radial-gradient(circle at 90% 50%, hsla(0, 0%, 100%, 0.4) 0%, transparent 50%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🎮</span>
                <h3 className="font-extrabold text-play-foreground">Game on or still scrolling? 😏</h3>
              </div>
              <p className="text-play-foreground/70 text-xs">
                Players nearby are waiting 👥 • Cricket, Badminton, Indoor games & more
              </p>
              <button className="mt-3 px-4 py-1.5 rounded-xl bg-play-foreground/20 text-play-foreground text-xs font-bold">
                Find Games →
              </button>
            </div>
          </motion.div>
        </div>

        {/* Engagement microcopy */}
        <div className="px-4 py-4 text-center">
          <p className="text-xs text-muted-foreground">
            Don't miss this 🔥 • People nearby are booking 👀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
