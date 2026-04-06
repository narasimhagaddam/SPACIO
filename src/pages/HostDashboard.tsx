import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check, Plus, TrendingUp, Calendar, Zap } from "lucide-react";

const HostDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24 px-4 pt-6 space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground">Host Dashboard 🏠</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Manage your spaces & earnings</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Earnings", value: "₹12,400", emoji: "💰", gradient: "gradient-primary" },
          { label: "Bookings", value: "23", emoji: "📅", gradient: "gradient-accent" },
          { label: "Listings", value: "3", emoji: "🏢", gradient: "gradient-play" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card rounded-[20px] p-4 text-center space-y-1"
          >
            <p className="text-2xl">{stat.emoji}</p>
            <p className="text-lg font-extrabold text-foreground">{stat.value}</p>
            <p className="text-[10px] text-muted-foreground font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Quick action */}
      <motion.button
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate("/host/add")}
        className="w-full py-3.5 rounded-2xl gradient-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 glow-primary"
      >
        <Plus className="w-4 h-4" /> Add New Space
      </motion.button>

      {/* Recent bookings */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-primary" />
          <h2 className="font-bold text-foreground text-sm">Recent Bookings</h2>
        </div>
        {[
          { name: "Rahul M.", space: "Shuttle Arena", status: "Verified ✅", time: "Today, 3 PM" },
          { name: "Priya K.", space: "WorkNest Hub", status: "Pending ⏳", time: "Tomorrow, 10 AM" },
          { name: "Arjun S.", space: "GameZone Pro", status: "Completed ✅", time: "Yesterday" },
        ].map((b, i) => (
          <motion.div
            key={b.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.05 }}
            className="glass-card rounded-[20px] p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-bold text-sm text-foreground">{b.name}</p>
              <p className="text-[11px] text-muted-foreground">{b.space} • {b.time}</p>
            </div>
            <span className="text-[11px] font-semibold text-muted-foreground">{b.status}</span>
          </motion.div>
        ))}
      </div>

      {/* Visibility Plans */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-park" />
          <h2 className="font-bold text-foreground text-sm">Boost Your Visibility 💎</h2>
        </div>
        {[
          { plan: "Standard", price: "Free", desc: "Basic listing", active: true },
          { plan: "Boost 🔥", price: "₹39/week", desc: "Higher ranking", glow: false },
          { plan: "Pro 🚀", price: "₹79/week", desc: "Top placement + badge", glow: true },
        ].map((p, i) => (
          <motion.div
            key={p.plan}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className={`rounded-[20px] p-4 transition-all ${
              p.active
                ? "glass-card ring-1 ring-primary/30 glow-primary"
                : p.glow
                ? "glass-card ring-1 ring-park/20"
                : "glass-card"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-sm text-foreground">{p.plan}</p>
                <p className="text-[11px] text-muted-foreground">{p.desc}</p>
              </div>
              <div className="text-right flex items-center gap-2">
                <p className="font-bold text-sm text-foreground">{p.price}</p>
                {p.active && (
                  <div className="w-5 h-5 rounded-full gradient-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HostDashboard;
