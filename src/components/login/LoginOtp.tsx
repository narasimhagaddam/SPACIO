import { motion } from "framer-motion";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

interface Props {
  phone: string;
  otp: string;
  setOtp: (v: string) => void;
  isVerifying: boolean;
  onVerify: () => void;
  onBack: () => void;
}

const LoginOtp = ({ phone, otp, setOtp, isVerifying, onVerify, onBack }: Props) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [resendTimer, setResendTimer] = useState(30);
  const digits = otp.split("").concat(Array(6 - otp.length).fill(""));

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (resendTimer > 0) {
      const t = setTimeout(() => setResendTimer((p) => p - 1), 1000);
      return () => clearTimeout(t);
    }
  }, [resendTimer]);

  const handleDigitChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const arr = digits.slice(0, 6);
    arr[index] = value;
    const newOtp = arr.join("").slice(0, 6);
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <motion.div
      key="otp"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.25 }}
      className="space-y-5"
    >
      <div>
        <button
          onClick={onBack}
          className="flex items-center gap-1 text-muted-foreground text-xs mb-3 hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </button>
        <h2 className="text-xl font-bold text-foreground">Verify your number 🔐</h2>
        <p className="text-muted-foreground text-xs mt-1">
          We've sent a 6-digit code to +91 {phone}
        </p>
      </div>

      {/* OTP Boxes */}
      <div className="flex justify-center gap-2.5">
        {digits.map((digit, i) => (
          <motion.input
            key={i}
            ref={(el) => { inputRefs.current[i] = el; }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={(e) => handleDigitChange(i, e.target.value)}
            onKeyDown={(e) => handleKeyDown(i, e)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="w-11 h-12 rounded-xl text-center text-lg font-bold text-foreground outline-none transition-all duration-200"
            style={{
              background: digit
                ? "hsla(var(--primary) / 0.1)"
                : "hsla(240, 15%, 12%, 0.5)",
              border: digit
                ? "1px solid hsla(var(--primary) / 0.4)"
                : "1px solid hsla(0, 0%, 100%, 0.08)",
              boxShadow: digit
                ? "0 0 12px hsla(var(--primary) / 0.2)"
                : "none",
            }}
          />
        ))}
      </div>

      {/* Resend */}
      <div className="text-center">
        {resendTimer > 0 ? (
          <p className="text-[11px] text-muted-foreground/50">
            Resend in{" "}
            <span className="text-muted-foreground font-medium">
              {resendTimer}s
            </span>
          </p>
        ) : (
          <button
            onClick={() => setResendTimer(30)}
            className="text-[11px] text-primary font-medium"
          >
            Resend OTP
          </button>
        )}
      </div>

      {/* Verify button */}
      <motion.button
        whileTap={{ scale: 0.97 }}
        onClick={onVerify}
        disabled={otp.length < 6 || isVerifying}
        className="w-full py-3.5 rounded-2xl gradient-primary text-primary-foreground font-semibold text-sm disabled:opacity-30 transition-all flex items-center justify-center gap-2"
        style={{
          boxShadow:
            otp.length >= 6
              ? "0 0 24px hsla(var(--primary) / 0.4)"
              : "none",
        }}
      >
        {isVerifying ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Verifying...
          </>
        ) : (
          "Verify & Continue →"
        )}
      </motion.button>
    </motion.div>
  );
};

export default LoginOtp;
