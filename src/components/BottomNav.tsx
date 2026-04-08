import { Home, Search, Bell, Heart, User, Plus, LayoutDashboard } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const BottomNav = () => {
  const { mode } = useAppStore();
  const navigate = useNavigate();
  const location = useLocation();

  const exploreTabs = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: Heart, label: "Saved", path: "/saved" },
    { icon: Bell, label: "Alerts", path: "/notifications" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const hostTabs = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/host" },
    { icon: Plus, label: "Add Space", path: "/host/add" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const tabs = mode === "explore" ? exploreTabs : hostTabs;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass safe-bottom">
      <div className="max-w-md mx-auto flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <motion.button
              key={tab.label}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(tab.path)}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-colors relative"
            >
              {isActive && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -top-1 w-5 h-0.5 rounded-full gradient-primary"
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                />
              )}
              <tab.icon className={`w-5 h-5 transition-colors ${isActive ? "text-primary" : "text-muted-foreground"}`} />
              <span className={`text-[10px] font-semibold ${isActive ? "text-primary" : "text-muted-foreground"}`}>
                {tab.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
