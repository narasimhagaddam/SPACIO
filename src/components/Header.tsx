import { motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { useAppStore } from "@/lib/store";
import { Bell, User, Search } from "lucide-react";

const Header = () => {
  const { mode, setMode, isLoggedIn, setShowLogin } = useAppStore();

  return (
    <header className="sticky top-0 z-50 glass safe-top">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Spacio" className="w-8 h-8 rounded-lg" />
          <span className="font-bold text-lg text-foreground">Spacio</span>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center gap-1 rounded-full bg-secondary p-1">
          <button
            onClick={() => setMode("explore")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              mode === "explore"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground"
            }`}
          >
            🔍 Explore
          </button>
          <button
            onClick={() => setMode("host")}
            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
              mode === "host"
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground"
            }`}
          >
            🏠 Host
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full bg-secondary">
            <Bell className="w-4 h-4 text-muted-foreground" />
          </button>
          <button
            onClick={() => !isLoggedIn && setShowLogin(true)}
            className="p-2 rounded-full bg-secondary"
          >
            <User className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
