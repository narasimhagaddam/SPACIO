import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { X, Phone, Chrome, Sparkles } from "lucide-react";
import { useState } from "react";

const LoginModal = () => {
  const { showLogin, setShowLogin, setLoggedIn, setUserName } = useAppStore();
  const [step, setStep] = useState<"welcome" | "otp" | "profile">("welcome");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");

  const handleSendOtp = () => {
    if (phone.length >= 10) setStep("otp");
  };

  const handleVerifyOtp = () => {
    if (otp.length === 6) setStep("profile");
  };

  const handleComplete = () => {
    if (name.trim()) {
      setUserName(name);
      setLoggedIn(true);
      setShowLogin(false);
      setStep("welcome");
      setPhone("");
      setOtp("");
      setName("");
    }
  };

  if (!showLogin) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center"
      >
        {/* Gradient background overlay */}
        <div
          className="absolute inset-0"
          onClick={() => setShowLogin(false)}
          style={{
            background: "linear-gradient(160deg, hsla(258, 70%, 20%, 0.9) 0%, hsla(210, 80%, 10%, 0.95) 100%)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        />

        {/* Floating orbs */}
        <motion.div
          animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[15%] w-32 h-32 rounded-full"
          style={{ background: "radial-gradient(circle, hsla(258, 100%, 65%, 0.3) 0%, transparent 70%)", filter: "blur(30px)" }}
        />
        <motion.div
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[25%] right-[15%] w-24 h-24 rounded-full"
          style={{ background: "radial-gradient(circle, hsla(210, 100%, 60%, 0.3) 0%, transparent 70%)", filter: "blur(25px)" }}
        />

        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.95 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md glass-card rounded-t-[28px] sm:rounded-[28px] p-7 pb-10"
        >
          <button
            onClick={() => setShowLogin(false)}
            className="absolute right-4 top-4 p-2 rounded-full glass-input hover:bg-muted transition-colors"
          >
            <X className="w-4 h-4 text-muted-foreground" />
          </button>

          <AnimatePresence mode="wait">
            {step === "welcome" && (
              <motion.div
                key="welcome"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-6"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <span className="text-xs font-semibold text-primary tracking-wider uppercase">Welcome</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-foreground">Welcome to Spacio 👋</h2>
                  <p className="text-muted-foreground text-sm">Your space, your way</p>
                </div>

                <div className="space-y-3">
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                      placeholder="Enter phone number"
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl glass-input text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <button
                    onClick={handleSendOtp}
                    disabled={phone.length < 10}
                    className="w-full py-3.5 rounded-2xl gradient-primary text-primary-foreground font-semibold text-sm disabled:opacity-40 transition-all glow-primary"
                  >
                    Continue with Phone →
                  </button>
                </div>

                <div className="relative flex items-center gap-3">
                  <div className="flex-1 h-px bg-border" />
                  <span className="text-xs text-muted-foreground">or</span>
                  <div className="flex-1 h-px bg-border" />
                </div>

                <button className="w-full py-3.5 rounded-2xl glass-input text-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-muted/50 transition-colors">
                  <Chrome className="w-4 h-4" />
                  Continue with Google
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  Quick check… we like real people 😏
                </p>
              </motion.div>
            )}

            {step === "otp" && (
              <motion.div
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-extrabold text-foreground">Verify OTP 🔐</h2>
                  <p className="text-muted-foreground text-sm mt-1">Sent to +91 {phone}</p>
                </div>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  placeholder="Enter 6-digit OTP"
                  className="w-full px-4 py-3.5 rounded-2xl glass-input text-foreground text-sm text-center tracking-[0.5em] font-mono placeholder:tracking-normal outline-none focus:ring-2 focus:ring-primary/50"
                  maxLength={6}
                />
                <button
                  onClick={handleVerifyOtp}
                  disabled={otp.length < 6}
                  className="w-full py-3.5 rounded-2xl gradient-primary text-primary-foreground font-semibold text-sm disabled:opacity-40 glow-primary"
                >
                  Verify →
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Just a quick OTP and you're in 🔐
                </p>
              </motion.div>
            )}

            {step === "profile" && (
              <motion.div
                key="profile"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-extrabold text-foreground">Almost there! ✨</h2>
                  <p className="text-muted-foreground text-sm mt-1">Tell us your name</p>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value.slice(0, 50))}
                  placeholder="Your name"
                  className="w-full px-4 py-3.5 rounded-2xl glass-input text-foreground text-sm outline-none focus:ring-2 focus:ring-primary/50"
                />
                <button
                  onClick={handleComplete}
                  disabled={!name.trim()}
                  className="w-full py-3.5 rounded-2xl gradient-primary text-primary-foreground font-semibold text-sm disabled:opacity-40 glow-primary"
                >
                  Let's go! 🚀
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginModal;
