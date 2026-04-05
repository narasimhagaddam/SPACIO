import { Home, Search, Heart, User, Plus } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { useNavigate, useLocation } from "react-router-dom";

const BottomNav = () => {
  const { mode } = useAppStore();
  const navigate = useNavigate();
  const location = useLocation();

  const exploreTabs = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Search, label: "Search", path: "/search" },
    { icon: Heart, label: "Saved", path: "/saved" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const hostTabs = [
    { icon: Home, label: "Dashboard", path: "/host" },
    { icon: Plus, label: "Add Space", path: "/host/add" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  const tabs = mode === "explore" ? exploreTabs : hostTabs;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 glass safe-bottom border-t border-border">
      <div className="flex items-center justify-around px-2 py-2">
        {tabs.map((tab) => {
          const isActive = location.pathname === tab.path;
          return (
            <button
              key={tab.label}
              onClick={() => navigate(tab.path)}
              className={`flex flex-col items-center gap-0.5 px-3 py-1 rounded-xl transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
