import { useAppStore } from "@/lib/store";
import { User, Heart, Clock, Gift, Settings, LogOut, ChevronRight } from "lucide-react";

const ProfilePage = () => {
  const { isLoggedIn, userName, setShowLogin, setLoggedIn } = useAppStore();

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 pb-24 space-y-4">
        <div className="text-6xl">👤</div>
        <h2 className="text-xl font-bold text-foreground">Join Spacio</h2>
        <p className="text-sm text-muted-foreground text-center">Sign in to save favorites, track bookings, and earn rewards</p>
        <button
          onClick={() => setShowLogin(true)}
          className="px-8 py-3 rounded-2xl gradient-primary text-primary-foreground font-semibold text-sm"
        >
          Sign In
        </button>
      </div>
    );
  }

  const menuItems = [
    { icon: Clock, label: "Booking History" },
    { icon: Heart, label: "Favorites" },
    { icon: Gift, label: "Rewards & Offers" },
    { icon: Settings, label: "Settings" },
  ];

  return (
    <div className="min-h-screen bg-background pb-24 px-4 pt-6 space-y-6">
      {/* Profile card */}
      <div className="bg-card rounded-2xl p-5 border border-border flex items-center gap-4">
        <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
          {userName.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="font-bold text-lg text-card-foreground">{userName}</h2>
          <p className="text-xs text-muted-foreground">Spacio Explorer ✨</p>
        </div>
      </div>

      {/* Rewards banner */}
      <div className="gradient-accent rounded-2xl p-4 flex items-center justify-between">
        <div>
          <p className="font-bold text-accent-foreground text-sm">🎁 First Booking Discount!</p>
          <p className="text-accent-foreground/80 text-xs">Get 20% off your first booking</p>
        </div>
        <span className="text-2xl">🎉</span>
      </div>

      {/* Menu */}
      <div className="space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl hover:bg-secondary transition-colors"
          >
            <item.icon className="w-5 h-5 text-muted-foreground" />
            <span className="flex-1 text-left text-sm font-medium text-foreground">{item.label}</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </button>
        ))}
      </div>

      <button
        onClick={() => setLoggedIn(false)}
        className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-destructive hover:bg-destructive/5 transition-colors"
      >
        <LogOut className="w-5 h-5" />
        <span className="text-sm font-medium">Log Out</span>
      </button>
    </div>
  );
};

export default ProfilePage;
