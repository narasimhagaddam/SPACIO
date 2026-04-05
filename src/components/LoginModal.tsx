import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { X, Phone, Chrome } from "lucide-react";
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
        <div className="absolute inset-0 bg-foreground/40 backdrop-blur-sm" onClick={() => setShowLogin(false)} />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="relative w-full max-w-md glass-strong rounded-t-3xl sm:rounded-3xl p-6 pb-8"
        >
          <button onClick={() => setShowLogin(false)} className="absolute right-4 top-4 p-2 rounded-full bg-secondary">
            <X className="w-4 h-4" />
          </button>

          {step === "welcome" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Welcome to Spacio 👋</h2>
                <p className="text-muted-foreground text-sm mt-1">Just a quick OTP and you're in 🔐</p>
              </div>

              <div className="space-y-3">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    placeholder="Enter phone number"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-secondary text-foreground text-sm placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button
                  onClick={handleSendOtp}
                  disabled={phone.length < 10}
                  className="w-full py-3 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm disabled:opacity-50 transition-all"
                >
                  Send OTP →
                </button>
              </div>

              <div className="relative flex items-center gap-3">
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <button className="w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-muted transition-colors">
                <Chrome className="w-4 h-4" />
                Continue with Google
              </button>

              <p className="text-center text-xs text-muted-foreground">
                Quick check… we like real people 😏
              </p>
            </div>
          )}

          {step === "otp" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Verify OTP 🔐</h2>
                <p className="text-muted-foreground text-sm mt-1">Sent to +91 {phone}</p>
              </div>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                placeholder="Enter 6-digit OTP"
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm text-center tracking-[0.5em] font-mono placeholder:tracking-normal outline-none focus:ring-2 focus:ring-primary"
                maxLength={6}
              />
              <button
                onClick={handleVerifyOtp}
                disabled={otp.length < 6}
                className="w-full py-3 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm disabled:opacity-50"
              >
                Verify →
              </button>
            </div>
          )}

          {step === "profile" && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">Almost there! ✨</h2>
                <p className="text-muted-foreground text-sm mt-1">Tell us your name</p>
              </div>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value.slice(0, 50))}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleComplete}
                disabled={!name.trim()}
                className="w-full py-3 rounded-xl gradient-primary text-primary-foreground font-semibold text-sm disabled:opacity-50"
              >
                Let's go! 🚀
              </button>
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LoginModal;
