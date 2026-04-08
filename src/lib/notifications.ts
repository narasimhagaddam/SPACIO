export type NotificationType = "fomo" | "urgency" | "social" | "price" | "flirty";
export type Language = "en" | "te" | "hi";

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: Record<Language, string>;
  timeAgo: string;
  icon: string;
  cta?: string;
  ctaLink?: string;
  read: boolean;
  category?: string;
}

export const typeConfig: Record<NotificationType, { color: string; glow: string; label: string }> = {
  fomo: { color: "text-orange-400", glow: "shadow-orange-500/20", label: "🔥 Hot" },
  urgency: { color: "text-amber-400", glow: "shadow-amber-500/20", label: "⏳ Urgent" },
  social: { color: "text-blue-400", glow: "shadow-blue-500/20", label: "👀 Activity" },
  price: { color: "text-emerald-400", glow: "shadow-emerald-500/20", label: "💰 Deal" },
  flirty: { color: "text-pink-400", glow: "shadow-pink-500/20", label: "😏 Match" },
};

export const sampleNotifications: Notification[] = [
  {
    id: "1",
    type: "fomo",
    title: "Slots filling fast!",
    message: {
      en: "Only 2 slots left at CoWork Hub… book now before it's gone!",
      te: "Only 2 slots left ra… late ayithe miss avuthav 😏",
      hi: "Sirf 2 slots bache hain… jaldi book karo 😏",
    },
    timeAgo: "2 mins ago",
    icon: "🔥",
    cta: "Book Now",
    ctaLink: "/space/1",
    read: false,
    category: "work",
  },
  {
    id: "2",
    type: "social",
    title: "Trending near you",
    message: {
      en: "8 people are viewing PlayArena right now",
      te: "8 members chusthunnaru ippudu… join avvu bro 🎯",
      hi: "8 log abhi dekh rahe hain… tu bhi dekh le 🎯",
    },
    timeAgo: "5 mins ago",
    icon: "👀",
    read: false,
    category: "play",
  },
  {
    id: "3",
    type: "price",
    title: "Price dropped ₹50!",
    message: {
      en: "GreenPark Café just dropped ₹50 — grab this deal now!",
      te: "₹50 drop ayyindi… best deal miss cheyaku! 💰",
      hi: "₹50 ka drop hua hai… best deal mat chhod! 💰",
    },
    timeAgo: "12 mins ago",
    icon: "💰",
    cta: "View Deal",
    ctaLink: "/space/3",
    read: false,
    category: "park",
  },
  {
    id: "4",
    type: "urgency",
    title: "Filling fast!",
    message: {
      en: "Sky Lounge was booked 5 times in the last hour — don't miss out!",
      te: "Last hour lo 5 bookings ayyayi… nuvvu late avthunnav 😤",
      hi: "Last hour mein 5 bookings ho gayi… tum late ho rahe ho 😤",
    },
    timeAgo: "18 mins ago",
    icon: "⏳",
    read: true,
    category: "party",
  },
  {
    id: "5",
    type: "flirty",
    title: "Perfect match found",
    message: {
      en: "You and this workspace = perfect match. Still thinking? It won't wait 😏",
      te: "Nee kosam perfect space ready… inka alochisthunnava? 😏",
      hi: "Tere liye perfect space hai… abhi bhi soch raha hai? 😏",
    },
    timeAgo: "30 mins ago",
    icon: "😏",
    cta: "Check it out",
    ctaLink: "/space/2",
    read: true,
    category: "work",
  },
  {
    id: "6",
    type: "fomo",
    title: "Last chance!",
    message: {
      en: "Evening slot at The Deck is almost gone. 1 left!",
      te: "Evening slot oka 1 migiliundi… book cheyyi fast! 🚀",
      hi: "Evening ka 1 hi slot bacha hai… jaldi kar! 🚀",
    },
    timeAgo: "45 mins ago",
    icon: "🔥",
    cta: "Book Now",
    ctaLink: "/space/4",
    read: true,
    category: "stay",
  },
];
