import { motion } from "framer-motion";
import { Phone, Chrome } from "lucide-react";

interface Props {
  phone: string;
  setPhone: (v: string) => void;
  onSendOtp: () => void;
}

const LoginWelcome = ({ phone, setPhone, onSendOtp }: Props) => (
  <motion.div
    key="welcome"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 20 }}
    transition={{ duration: 0.25 }}
    className="space-y-5"
  >
    <div className="space-y-1 pr-6">
      <h2 className="text-xl font-bold text-foreground">Welcome back 👋</h2>
      <p className="text-muted-foreground text-xs">
        Enter your number to get started
      </p>
    </div>

    <div className="space-y-3">
      {/* Phone input with country code */}
      <div
        className="flex items-center rounded-2xl overflow-hidden transition-all duration-300"
        style={{
          background: "hsla(240, 15%, 12%, 0.5)",
          border: "1px solid hsla(0, 0%, 100%, 0.08)",
        }}
      >
        <div className="flex items-center gap-1 px-3 py-3.5 border-r border-border/30">
          <span className="text-xs">🇮🇳</span>
          <span className="text-xs text-muted-foreground font-medium">+91</span>
        </div>
        <div className="relative flex-1">
          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground/50" />
          <input
            type="tel"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
            }
            placeholder="Enter mobile number"
            className="w-full pl-9 pr-4 py-3.5 bg-transparent text-foreground text-sm placeholder:text-muted-foreground/40 outline-none"
          />
        </div>
      </div>

      {/* Send OTP button */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onSendOtp}
        disabled={phone.length < 10}
        className="w-full py-3.5 rounded-2xl gradient-primary text-primary-foreground font-semibold text-sm disabled:opacity-30 transition-all relative overflow-hidden"
        style={{
          boxShadow: phone.length >= 10
            ? "0 0 24px hsla(var(--primary) / 0.4), 0 0 60px hsla(var(--primary) / 0.15)"
            : "none",
        }}
      >
        Send OTP →
      </motion.button>
    </div>

    {/* Divider */}
    <div className="relative flex items-center gap-3">
      <div className="flex-1 h-px bg-border/40" />
      <span className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">
        or
      </span>
      <div className="flex-1 h-px bg-border/40" />
    </div>

    {/* Google login */}
    <motion.button
      whileTap={{ scale: 0.97 }}
      className="w-full py-3 rounded-2xl text-foreground/80 font-medium text-sm flex items-center justify-center gap-2 transition-colors"
      style={{
        background: "hsla(0, 0%, 100%, 0.04)",
        border: "1px solid hsla(0, 0%, 100%, 0.06)",
      }}
    >
      <Chrome className="w-4 h-4" />
      Continue with Google
    </motion.button>
  </motion.div>
);

export default LoginWelcome;
