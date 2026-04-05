import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { categories } from "@/lib/data";
import { ArrowLeft, Upload, MapPin, IndianRupee, Check } from "lucide-react";

const HostDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24 px-4 pt-6 space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Host Dashboard 🏠</h1>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Earnings", value: "₹12,400", emoji: "💰" },
          { label: "Bookings", value: "23", emoji: "📅" },
          { label: "Listings", value: "3", emoji: "🏢" },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-2xl p-4 border border-border text-center">
            <p className="text-2xl">{stat.emoji}</p>
            <p className="text-lg font-bold text-card-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent bookings */}
      <div className="space-y-3">
        <h2 className="font-semibold text-foreground">Recent Bookings</h2>
        {[
          { name: "Rahul M.", space: "Shuttle Arena", status: "Verified ✅", time: "Today, 3 PM" },
          { name: "Priya K.", space: "WorkNest Hub", status: "Pending ⏳", time: "Tomorrow, 10 AM" },
        ].map((b) => (
          <div key={b.name} className="bg-card rounded-2xl p-4 border border-border flex items-center justify-between">
            <div>
              <p className="font-semibold text-sm text-card-foreground">{b.name}</p>
              <p className="text-xs text-muted-foreground">{b.space} • {b.time}</p>
            </div>
            <span className="text-xs font-medium">{b.status}</span>
          </div>
        ))}
      </div>

      {/* Visibility Plans */}
      <div className="space-y-3">
        <h2 className="font-semibold text-foreground">Boost Your Visibility 💎</h2>
        {[
          { plan: "Standard", price: "Free", desc: "Basic listing", active: true },
          { plan: "Boost 🔥", price: "₹39/week", desc: "Higher ranking" },
          { plan: "Pro 🚀", price: "₹79/week", desc: "Top placement" },
        ].map((p) => (
          <div
            key={p.plan}
            className={`rounded-2xl p-4 border transition-all ${
              p.active
                ? "border-primary bg-primary/5 shadow-md"
                : "border-border bg-card"
            }`}
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold text-sm text-foreground">{p.plan}</p>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-foreground">{p.price}</p>
                {p.active && <Check className="w-4 h-4 text-primary ml-auto" />}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostDashboard;
