import { useAppStore } from "@/lib/store";
import { User, Heart, Clock, Gift, Settings, LogOut, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const ProfilePage = () => {
  const { isLoggedIn, userName, setShowLogin, setLoggedIn } = useAppStore();

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 pb-24 space-y-5">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center glow-primary"
        >
          <User className="w-8 h-8 text-primary-foreground" />
        </motion.div>
        <h2 className="text-xl font-extrabold text-foreground">Join Spacio</h2>
        <p className="text-sm text-muted-foreground text-center max-w-[250px]">
          Sign in to save favorites, track bookings, and earn rewards
        </p>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setShowLogin(true)}
          className="px-8 py-3.5 rounded-2xl gradient-primary text-primary-foreground font-bold text-sm glow-primary"
        >
          Sign In
        </motion.button>
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
    <div className="min-h-screen bg-background pb-24 px-4 pt-6 space-y-5">
      {/* Profile card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card rounded-[20px] p-5 flex items-center gap-4"
      >
        <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground text-xl font-extrabold glow-primary">
          {userName.charAt(0).toUpperCase()}
        </div>
        <div>
          <h2 className="font-extrabold text-lg text-foreground">{userName}</h2>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Sparkles className="w-3 h-3 text-primary" />
            <span>Spacio Explorer</span>
          </div>
        </div>
      </motion.div>

      {/* Rewards banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="gradient-accent rounded-[20px] p-5 flex items-center justify-between relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20"
          style={{ background: "radial-gradient(circle at 80% 20%, hsla(0,0%,100%,0.3) 0%, transparent 50%)" }}
        />
        <div className="relative">
          <p className="font-extrabold text-accent-foreground text-sm">🎁 First Booking Discount!</p>
          <p className="text-accent-foreground/70 text-xs mt-0.5">Get 20% off your first booking</p>
        </div>
        <span className="text-3xl relative">🎉</span>
      </motion.div>

      {/* Menu */}
      <div className="space-y-1">
        {menuItems.map((item, i) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.05 }}
            className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl hover:bg-muted/30 transition-colors"
          >
            <div className="p-2 rounded-xl glass-input">
              <item.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="flex-1 text-left text-sm font-semibold text-foreground">{item.label}</span>
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          </motion.button>
        ))}
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        onClick={() => setLoggedIn(false)}
        className="w-full flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-destructive hover:bg-destructive/5 transition-colors"
      >
        <div className="p-2 rounded-xl bg-destructive/10">
          <LogOut className="w-4 h-4" />
        </div>
        <span className="text-sm font-semibold">Log Out</span>
      </motion.button>
    </div>
  );
};

export default ProfilePage;
