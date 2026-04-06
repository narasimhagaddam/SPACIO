import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { useAppStore } from "@/lib/store";
import { Bell, User } from "lucide-react";

const Header = () => {
  const { mode, setMode, isLoggedIn, setShowLogin } = useAppStore();

  return (
    <header className="sticky top-0 z-50 glass safe-top">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl overflow-hidden ring-1 ring-primary/30">
            <img src={logo} alt="Spacio" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base text-foreground leading-tight">SPACIO</span>
            <span className="text-[9px] text-muted-foreground tracking-[0.15em] leading-none">by GLN</span>
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center gap-0.5 rounded-2xl glass-input p-1">
          <button
            onClick={() => setMode("explore")}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
              mode === "explore"
                ? "gradient-primary text-primary-foreground shadow-lg glow-primary"
                : "text-muted-foreground"
            }`}
          >
            🔍 Explore
          </button>
          <button
            onClick={() => setMode("host")}
            className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all ${
              mode === "host"
                ? "gradient-primary text-primary-foreground shadow-lg glow-primary"
                : "text-muted-foreground"
            }`}
          >
            🏠 Host
          </button>
        </div>

        <div className="flex items-center gap-1.5">
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-xl glass-input relative"
          >
            <Bell className="w-4 h-4 text-muted-foreground" />
            <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary glow-primary" />
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => !isLoggedIn && setShowLogin(true)}
            className="p-2 rounded-xl glass-input"
          >
            <User className="w-4 h-4 text-muted-foreground" />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
