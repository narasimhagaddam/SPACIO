import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { useEffect } from "react";
import logo from "@/assets/logo.png";

const floatingIcons = [
  { emoji: "🏏", x: -80, y: -60, delay: 0.8 },
  { emoji: "💻", x: 90, y: -40, delay: 1.0 },
  { emoji: "🎉", x: -70, y: 50, delay: 1.2 },
  { emoji: "🏨", x: 80, y: 60, delay: 1.4 },
  { emoji: "🚗", x: -40, y: -90, delay: 0.9 },
  { emoji: "🏬", x: 50, y: 85, delay: 1.1 },
];

const SplashScreen = () => {
  const { showSplash, setShowSplash } = useAppStore();

  useEffect(() => {
    // Auto-dismiss after 2.8s
    const timer = setTimeout(() => setShowSplash(false), 2800);
    return () => clearTimeout(timer);
  }, [setShowSplash]);

  // Also dismiss on click/tap
  const handleDismiss = () => setShowSplash(false);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(160deg, hsl(240 20% 4%) 0%, hsl(258 40% 12%) 40%, hsl(210 50% 8%) 100%)",
          }}
        >
          {/* Animated gradient orbs */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(258 100% 65% / 0.3) 0%, transparent 70%)",
              top: "20%",
              left: "10%",
              filter: "blur(60px)",
            }}
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[300px] h-[300px] rounded-full"
            style={{
              background: "radial-gradient(circle, hsla(210 100% 60% / 0.25) 0%, transparent 70%)",
              bottom: "20%",
              right: "10%",
              filter: "blur(50px)",
            }}
          />

          {/* Floating category icons */}
          {floatingIcons.map((icon, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0.4],
                scale: [0, 1.2, 1],
                x: [0, icon.x],
                y: [0, icon.y],
              }}
              transition={{ delay: icon.delay, duration: 1.2, ease: "easeOut" }}
              className="absolute text-2xl"
              style={{ filter: "blur(0.5px)" }}
            >
              {icon.emoji}
            </motion.span>
          ))}

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center gap-4"
          >
            <motion.div
              animate={{ boxShadow: ["0 0 30px hsla(258, 70%, 56%, 0.3)", "0 0 60px hsla(258, 70%, 56%, 0.5)", "0 0 30px hsla(258, 70%, 56%, 0.3)"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 rounded-3xl overflow-hidden"
            >
              <img src={logo} alt="Spacio" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-center"
            >
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight">
                SPACIO
              </h1>
              <p className="text-xs font-medium text-muted-foreground tracking-[0.2em] mt-0.5">
                by GLN
              </p>
            </motion.div>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="relative z-10 mt-6 text-sm text-muted-foreground font-medium text-center"
          >
            Find your space. Live your moment.
          </motion.p>

          {/* Loading indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="relative z-10 mt-8 flex gap-1.5"
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1, 0.8] }}
                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
