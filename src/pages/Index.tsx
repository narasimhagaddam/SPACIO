import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import TrendingSection from "@/components/TrendingSection";
import { motion } from "framer-motion";
import { Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Search bar */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-secondary">
          <Search className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Search spaces, games, venues...</span>
        </div>
      </div>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="px-4 py-2"
      >
        <h1 className="text-2xl font-bold text-foreground">
          What's the plan today? 👀
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Discover and book amazing spaces near you</p>
      </motion.div>

      {/* Categories */}
      <CategoryGrid />

      {/* Trending */}
      <TrendingSection />

      {/* Offers Banner */}
      <div className="px-4 py-2">
        <div className="gradient-accent rounded-2xl p-5 flex items-center justify-between">
          <div>
            <p className="font-bold text-accent-foreground">🎁 First Booking Free!</p>
            <p className="text-accent-foreground/80 text-xs mt-1">Up to ₹200 off. Limited time only.</p>
          </div>
          <span className="text-3xl">🎉</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
