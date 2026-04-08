import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell, ChevronLeft, Globe, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  sampleNotifications,
  typeConfig,
  type Language,
  type Notification,
} from "@/lib/notifications";

const langLabels: Record<Language, string> = {
  en: "English",
  te: "Telugu mix",
  hi: "Hindi mix",
};

const NotificationsPage = () => {
  const navigate = useNavigate();
  const [lang, setLang] = useState<Language>("en");
  const [notifications, setNotifications] = useState(sampleNotifications);
  const [showLangPicker, setShowLangPicker] = useState(false);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const markAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const markRead = (id: string) =>
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );

  return (
    <div className="min-h-screen pb-24 relative">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, #0A0F1F 0%, #0D1B2A 40%, #0F2A3F 100%)",
        }}
      />

      {/* Floating accent glows */}
      <div className="absolute top-20 -left-20 w-60 h-60 rounded-full opacity-15 blur-[80px] pointer-events-none bg-blue-500" />
      <div className="absolute top-60 -right-16 w-48 h-48 rounded-full opacity-10 blur-[70px] pointer-events-none bg-purple-500" />
      <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full opacity-10 blur-[60px] pointer-events-none bg-emerald-500" />

      <div className="relative z-10">
        {/* Header */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate(-1)}
              className="w-9 h-9 rounded-xl glass-card flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </motion.button>
            <div>
              <h1 className="text-lg font-extrabold text-foreground flex items-center gap-2">
                <Bell className="w-5 h-5 text-primary" />
                Notifications
                {unreadCount > 0 && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 font-bold">
                    {unreadCount} new
                  </span>
                )}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Language toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowLangPicker(!showLangPicker)}
              className="h-8 px-3 rounded-xl glass-card flex items-center gap-1.5 text-xs font-semibold text-muted-foreground"
            >
              <Globe className="w-3.5 h-3.5" />
              {langLabels[lang]}
            </motion.button>

            {unreadCount > 0 && (
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={markAllRead}
                className="h-8 px-3 rounded-xl glass-card flex items-center gap-1.5 text-xs font-semibold text-primary"
              >
                <Check className="w-3.5 h-3.5" />
                Read all
              </motion.button>
            )}
          </div>
        </div>

        {/* Language picker dropdown */}
        <AnimatePresence>
          {showLangPicker && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="px-4 pb-2"
            >
              <div className="glass-card rounded-2xl p-2 flex gap-2">
                {(Object.keys(langLabels) as Language[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => {
                      setLang(l);
                      setShowLangPicker(false);
                    }}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                      lang === l
                        ? "gradient-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification list */}
        <div className="px-4 py-2 space-y-3">
          {notifications.map((notif, i) => (
            <NotificationCard
              key={notif.id}
              notification={notif}
              lang={lang}
              index={i}
              onRead={() => markRead(notif.id)}
              onCta={() => notif.ctaLink && navigate(notif.ctaLink)}
            />
          ))}
        </div>

        {/* Bottom engagement */}
        <div className="px-4 py-4 text-center">
          <p className="text-xs text-muted-foreground">
            Stay updated 🔔 • Don't let the best spaces slip away
          </p>
        </div>
      </div>
    </div>
  );
};

function NotificationCard({
  notification,
  lang,
  index,
  onRead,
  onCta,
}: {
  notification: Notification;
  lang: Language;
  index: number;
  onRead: () => void;
  onCta: () => void;
}) {
  const config = typeConfig[notification.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, type: "spring", damping: 20 }}
      onClick={onRead}
      className={`relative overflow-hidden rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.01] ${
        notification.read
          ? "glass-card opacity-70"
          : `glass-card shadow-lg ${config.glow}`
      }`}
      style={{
        background: notification.read
          ? "rgba(20,30,50,0.4)"
          : "rgba(20,30,50,0.65)",
        border: notification.read
          ? "1px solid rgba(255,255,255,0.05)"
          : "1px solid rgba(255,255,255,0.1)",
      }}
    >
      {/* Unread indicator */}
      {!notification.read && (
        <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
      )}

      <div className="flex gap-3">
        {/* Icon */}
        <div className="text-2xl flex-shrink-0 mt-0.5">{notification.icon}</div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={`text-[10px] font-bold uppercase tracking-wider ${config.color}`}>
              {config.label}
            </span>
            <span className="text-[10px] text-muted-foreground">
              {notification.timeAgo}
            </span>
          </div>

          <h3 className="text-sm font-bold text-foreground mb-0.5">
            {notification.title}
          </h3>

          <p className="text-xs text-muted-foreground leading-relaxed">
            {notification.message[lang]}
          </p>

          {notification.cta && (
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                onCta();
              }}
              className="mt-2.5 px-4 py-1.5 rounded-xl text-xs font-bold text-black"
              style={{
                background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                boxShadow: "0 4px 15px rgba(245,158,11,0.3)",
              }}
            >
              {notification.cta} →
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default NotificationsPage;
