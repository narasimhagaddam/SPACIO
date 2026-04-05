import { useParams, useNavigate } from "react-router-dom";
import { spaces } from "@/lib/data";
import { useAppStore } from "@/lib/store";
import { ArrowLeft, Star, MapPin, Clock, Phone, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const SpaceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isLoggedIn, setShowLogin } = useAppStore();
  const space = spaces.find((s) => s.id === id);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [duration, setDuration] = useState(1);
  const [booked, setBooked] = useState(false);
  const [otp, setOtp] = useState("");

  if (!space) return null;

  const slots = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
  const total = space.price * duration;

  const handleBook = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
      return;
    }
    const code = String(Math.floor(1000 + Math.random() * 9000));
    setOtp(code);
    setBooked(true);
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Image */}
      <div className="relative h-64">
        <img src={space.image} alt={space.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <button onClick={() => navigate(-1)} className="absolute top-4 left-4 p-2 rounded-full glass">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <div className="absolute top-3 right-3 flex gap-1.5">
          {space.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-card/90 backdrop-blur text-[10px] font-semibold text-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 -mt-6 relative space-y-4">
        {/* Info */}
        <div className="bg-card rounded-2xl p-4 shadow-sm border border-border space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-bold text-card-foreground">{space.name}</h1>
              <p className="text-sm text-muted-foreground">{space.subcategory}</p>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-accent text-accent" />
              <span className="font-bold text-sm text-card-foreground">{space.rating}</span>
              <span className="text-xs text-muted-foreground">({space.reviews})</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>{space.address}</span>
            <span>• {space.distance}</span>
          </div>
          <p className="text-xs text-muted-foreground italic">Looks like a good choice 😏</p>
        </div>

        {!booked ? (
          <>
            {/* Slots */}
            <div className="space-y-2">
              <h3 className="font-semibold text-sm text-foreground flex items-center gap-1">
                <Clock className="w-4 h-4" /> Pick a slot
              </h3>
              <div className="flex flex-wrap gap-2">
                {slots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      selectedSlot === slot
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <h3 className="font-semibold text-sm text-foreground">Duration</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all ${
                      duration === d
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {d} {space.priceUnit}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="bg-card rounded-2xl p-4 border border-border flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="text-2xl font-bold text-card-foreground">₹{total}</p>
              </div>
              <p className="text-xs text-muted-foreground">Don't overthink… just book it 😏</p>
            </div>
          </>
        ) : (
          /* Booking Confirmed */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-card rounded-2xl p-6 border border-border text-center space-y-4"
          >
            <div className="text-4xl">🎉</div>
            <h2 className="text-xl font-bold text-card-foreground">Boom! It's yours</h2>
            <p className="text-sm text-muted-foreground">Show this code to the host to start your session 🔐</p>
            <div className="text-4xl font-bold tracking-[0.3em] text-primary font-mono">{otp}</div>
            <div className="flex gap-2">
              <button className="flex-1 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2">
                <Navigation className="w-4 h-4" /> Get Directions 📍
              </button>
              <button className="py-3 px-4 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Sticky Book Button */}
      {!booked && (
        <div className="fixed bottom-16 left-0 right-0 p-4 glass border-t border-border">
          <button
            onClick={handleBook}
            disabled={!selectedSlot}
            className="w-full py-3.5 rounded-2xl gradient-primary text-primary-foreground font-bold text-sm disabled:opacity-50 transition-all active:scale-[0.98]"
          >
            Book Now • ₹{total}
          </button>
        </div>
      )}
    </div>
  );
};

export default SpaceDetail;
