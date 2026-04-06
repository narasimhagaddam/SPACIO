import { useParams, useNavigate } from "react-router-dom";
import { spaces } from "@/lib/data";
import { useAppStore } from "@/lib/store";
import { ArrowLeft, Star, MapPin, Clock, Phone, Navigation, Heart, Share2, ChevronRight } from "lucide-react";
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
  const [liked, setLiked] = useState(false);

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
      {/* Hero Image */}
      <div className="relative h-72">
        <img src={space.image} alt={space.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

        {/* Top actions */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => navigate(-1)}
            className="p-2.5 rounded-xl glass"
          >
            <ArrowLeft className="w-5 h-5 text-foreground" />
          </motion.button>
          <div className="flex gap-2">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setLiked(!liked)}
              className="p-2.5 rounded-xl glass"
            >
              <Heart className={`w-5 h-5 ${liked ? "fill-destructive text-destructive" : "text-foreground"}`} />
            </motion.button>
            <motion.button whileTap={{ scale: 0.9 }} className="p-2.5 rounded-xl glass">
              <Share2 className="w-5 h-5 text-foreground" />
            </motion.button>
          </div>
        </div>

        {/* Tags */}
        <div className="absolute bottom-20 left-4 flex gap-1.5">
          {space.tags.map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-full glass text-[10px] font-bold text-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 -mt-8 relative space-y-4">
        {/* Glass info card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card rounded-[20px] p-5 space-y-3"
        >
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-xl font-extrabold text-foreground">{space.name}</h1>
              <p className="text-sm text-muted-foreground">{space.subcategory}</p>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-xl glass">
              <Star className="w-4 h-4 fill-park text-park" />
              <span className="font-bold text-sm text-foreground">{space.rating}</span>
              <span className="text-[10px] text-muted-foreground">({space.reviews})</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 text-primary" />
            <span>{space.address}</span>
            <span>• {space.distance}</span>
          </div>
          <p className="text-xs text-muted-foreground italic">Looks like a good choice 😏</p>

          {/* Map preview placeholder */}
          <button className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl glass-input">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span>View on map</span>
            </div>
            <ChevronRight className="w-3.5 h-3.5 text-muted-foreground" />
          </button>
        </motion.div>

        {!booked ? (
          <>
            {/* Slots */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-3"
            >
              <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> Pick a slot
              </h3>
              <div className="flex flex-wrap gap-2">
                {slots.map((slot) => (
                  <motion.button
                    key={slot}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedSlot(slot)}
                    className={`px-3.5 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                      selectedSlot === slot
                        ? "gradient-primary text-primary-foreground shadow-lg glow-primary"
                        : "glass-card text-foreground"
                    }`}
                  >
                    {slot}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Duration */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="space-y-3"
            >
              <h3 className="font-bold text-sm text-foreground">Duration</h3>
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((d) => (
                  <motion.button
                    key={d}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setDuration(d)}
                    className={`flex-1 py-2.5 rounded-2xl text-xs font-semibold transition-all ${
                      duration === d
                        ? "gradient-primary text-primary-foreground glow-primary"
                        : "glass-card text-foreground"
                    }`}
                  >
                    {d} {space.priceUnit}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Price */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-[20px] p-5 flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-muted-foreground">Total</p>
                <p className="text-2xl font-extrabold text-foreground">₹{total}</p>
              </div>
              <p className="text-xs text-muted-foreground max-w-[140px] text-right">
                Don't overthink… just book it 😏
              </p>
            </motion.div>
          </>
        ) : (
          /* Booking Confirmed */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", damping: 20 }}
            className="glass-card rounded-[20px] p-7 text-center space-y-5"
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="text-5xl"
            >
              🎉
            </motion.div>
            <h2 className="text-xl font-extrabold text-foreground">Boom! It's yours</h2>
            <p className="text-sm text-muted-foreground">
              Show this code to the host to start your session 🔐
            </p>
            <div className="text-4xl font-extrabold tracking-[0.3em] text-gradient font-mono py-3">
              {otp}
            </div>
            <div className="flex gap-2">
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="flex-1 py-3.5 rounded-2xl gradient-primary text-primary-foreground font-bold text-sm flex items-center justify-center gap-2 glow-primary"
              >
                <Navigation className="w-4 h-4" /> Get Directions 📍
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="py-3.5 px-4 rounded-2xl glass-card text-foreground font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Sticky Book Button */}
      {!booked && (
        <div className="fixed bottom-16 left-0 right-0 p-4">
          <div className="max-w-md mx-auto">
            <motion.button
              whileTap={{ scale: 0.98 }}
              onClick={handleBook}
              disabled={!selectedSlot}
              className="w-full py-4 rounded-2xl gradient-primary text-primary-foreground font-bold text-sm disabled:opacity-40 transition-all glow-primary"
            >
              Book Now • ₹{total}
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpaceDetail;
