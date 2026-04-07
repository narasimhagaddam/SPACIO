import { motion, AnimatePresence } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { useState, useEffect, useRef, useCallback } from "react";
import loginBg from "@/assets/login-bg.jpg";
import LoginWelcome from "@/components/login/LoginWelcome";
import LoginOtp from "@/components/login/LoginOtp";
import LoginProfile from "@/components/login/LoginProfile";
import LoginSuccess from "@/components/login/LoginSuccess";

export type LoginStep = "welcome" | "otp" | "profile" | "success";

const LoginModal = () => {
  const { showLogin, setShowLogin, setLoggedIn, setUserName } = useAppStore();
  const [step, setStep] = useState<LoginStep>("welcome");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [name, setName] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleSendOtp = useCallback(() => {
    if (phone.length >= 10) setStep("otp");
  }, [phone]);

  const handleVerifyOtp = useCallback(() => {
    if (otp.length === 6) {
      setIsVerifying(true);
      setTimeout(() => {
        setIsVerifying(false);
        setStep("profile");
      }, 1500);
    }
  }, [otp]);

  const handleComplete = useCallback(() => {
    if (name.trim()) {
      setStep("success");
      setTimeout(() => {
        setUserName(name);
        setLoggedIn(true);
        setShowLogin(false);
        setStep("welcome");
        setPhone("");
        setOtp("");
        setName("");
      }, 2000);
    }
  }, [name, setUserName, setLoggedIn, setShowLogin]);

  const handleClose = useCallback(() => {
    setShowLogin(false);
    setTimeout(() => {
      setStep("welcome");
      setPhone("");
      setOtp("");
      setName("");
    }, 300);
  }, [setShowLogin]);

  if (!showLogin) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
      >
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <img
            src={loginBg}
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: "blur(3px) brightness(0.4)" }}
          />
          {/* Dark gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, hsla(240, 20%, 4%, 0.7) 0%, hsla(240, 20%, 4%, 0.4) 30%, hsla(240, 20%, 4%, 0.6) 60%, hsla(240, 20%, 4%, 0.95) 100%)",
            }}
          />
          {/* Ambient light particles */}
          <FloatingParticles />
        </div>

        {/* Content */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 60, opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 260 }}
          className="relative z-10 w-full max-w-sm mx-4 flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mb-6 text-center"
          >
            <h1
              className="text-4xl font-extrabold tracking-tight"
              style={{
                background: "linear-gradient(135deg, hsl(var(--foreground)), hsl(var(--primary)))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 20px hsla(var(--primary) / 0.3))",
              }}
            >
              SPACIO
            </h1>
            <p className="text-muted-foreground text-sm mt-1 font-medium">
              Find your perfect space.
            </p>
            <p className="text-muted-foreground/60 text-xs mt-0.5">
              Work, play, relax — all in one place.
            </p>
          </motion.div>

          {/* Glass Card */}
          <div
            className="w-full rounded-3xl p-6 relative overflow-hidden"
            style={{
              background: "hsla(240, 15%, 10%, 0.55)",
              backdropFilter: "blur(40px)",
              WebkitBackdropFilter: "blur(40px)",
              border: "1px solid hsla(0, 0%, 100%, 0.08)",
              boxShadow:
                "0 24px 80px hsla(0, 0%, 0%, 0.5), inset 0 1px 0 hsla(0, 0%, 100%, 0.05)",
            }}
          >
            {/* Glass highlight */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsla(0, 0%, 100%, 0.12), transparent)",
              }}
            />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 p-1.5 rounded-full transition-colors z-20"
              style={{
                background: "hsla(0, 0%, 100%, 0.06)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="text-muted-foreground"
              >
                <path
                  d="M1 1L13 13M1 13L13 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <AnimatePresence mode="wait">
              {step === "welcome" && (
                <LoginWelcome
                  phone={phone}
                  setPhone={setPhone}
                  onSendOtp={handleSendOtp}
                />
              )}
              {step === "otp" && (
                <LoginOtp
                  phone={phone}
                  otp={otp}
                  setOtp={setOtp}
                  isVerifying={isVerifying}
                  onVerify={handleVerifyOtp}
                  onBack={() => setStep("welcome")}
                />
              )}
              {step === "profile" && (
                <LoginProfile
                  name={name}
                  setName={setName}
                  onComplete={handleComplete}
                />
              )}
              {step === "success" && <LoginSuccess />}
            </AnimatePresence>
          </div>

          {/* Terms */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-[10px] text-muted-foreground/40 mt-4 px-4 leading-relaxed"
          >
            By continuing, you agree to our{" "}
            <span className="text-muted-foreground/60 underline underline-offset-2">
              Terms
            </span>{" "}
            &{" "}
            <span className="text-muted-foreground/60 underline underline-offset-2">
              Privacy Policy
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

/* Floating ambient particles */
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full"
        style={{
          width: 4 + Math.random() * 4,
          height: 4 + Math.random() * 4,
          left: `${15 + Math.random() * 70}%`,
          top: `${10 + Math.random() * 80}%`,
          background: `hsla(var(--primary) / ${0.15 + Math.random() * 0.2})`,
          filter: "blur(1px)",
        }}
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 4 + Math.random() * 4,
          repeat: Infinity,
          delay: Math.random() * 2,
          ease: "easeInOut",
        }}
      />
    ))}
  </div>
);

export default LoginModal;
