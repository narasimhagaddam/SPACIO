import { motion } from "framer-motion";
import { Check } from "lucide-react";

const LoginSuccess = () => (
  <motion.div
    key="success"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col items-center justify-center py-10 space-y-4"
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", damping: 12, stiffness: 200 }}
      className="w-16 h-16 rounded-full flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))",
        boxShadow: "0 0 40px hsla(var(--primary) / 0.5)",
      }}
    >
      <Check className="w-8 h-8 text-primary-foreground" strokeWidth={3} />
    </motion.div>
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-center"
    >
      <h3 className="text-lg font-bold text-foreground">You're in! 🎉</h3>
      <p className="text-muted-foreground text-xs mt-1">
        Welcome to Spacio
      </p>
    </motion.div>
  </motion.div>
);

export default LoginSuccess;
