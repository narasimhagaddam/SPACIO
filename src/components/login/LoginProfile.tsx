import { motion } from "framer-motion";
import { User } from "lucide-react";

interface Props {
  name: string;
  setName: (v: string) => void;
  onComplete: () => void;
}

const LoginProfile = ({ name, setName, onComplete }: Props) => (
  <motion.div
    key="profile"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.25 }}
    className="space-y-5"
  >
    <div>
      <h2 className="text-xl font-bold text-foreground">Almost there! ✨</h2>
      <p className="text-muted-foreground text-xs mt-1">
        What should we call you?
      </p>
    </div>

    <div
      className="flex items-center rounded-2xl overflow-hidden"
      style={{
        background: "hsla(240, 15%, 12%, 0.5)",
        border: "1px solid hsla(0, 0%, 100%, 0.08)",
      }}
    >
      <div className="pl-4">
        <User className="w-4 h-4 text-muted-foreground/50" />
      </div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value.slice(0, 50))}
        placeholder="Your name"
        className="flex-1 px-3 py-3.5 bg-transparent text-foreground text-sm placeholder:text-muted-foreground/40 outline-none"
        autoFocus
      />
    </div>

    <motion.button
      whileTap={{ scale: 0.97 }}
      onClick={onComplete}
      disabled={!name.trim()}
      className="w-full py-3.5 rounded-2xl gradient-primary text-primary-foreground font-semibold text-sm disabled:opacity-30 transition-all"
      style={{
        boxShadow: name.trim()
          ? "0 0 24px hsla(var(--primary) / 0.4)"
          : "none",
      }}
    >
      Let's go! 🚀
    </motion.button>
  </motion.div>
);

export default LoginProfile;
