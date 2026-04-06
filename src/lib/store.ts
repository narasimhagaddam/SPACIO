import { create } from "zustand";

interface AppState {
  mode: "explore" | "host";
  setMode: (mode: "explore" | "host") => void;
  isLoggedIn: boolean;
  setLoggedIn: (v: boolean) => void;
  userName: string;
  setUserName: (name: string) => void;
  showLogin: boolean;
  setShowLogin: (v: boolean) => void;
  selectedCategory: string | null;
  setSelectedCategory: (c: string | null) => void;
  showSplash: boolean;
  setShowSplash: (v: boolean) => void;
  splashShown: boolean;
  setSplashShown: (v: boolean) => void;
}

export const useAppStore = create<AppState>((set) => ({
  mode: "explore",
  setMode: (mode) => set({ mode }),
  isLoggedIn: false,
  setLoggedIn: (v) => set({ isLoggedIn: v }),
  userName: "",
  setUserName: (name) => set({ userName: name }),
  showLogin: false,
  setShowLogin: (v) => set({ showLogin: v }),
  selectedCategory: null,
  setSelectedCategory: (c) => set({ selectedCategory: c }),
  showSplash: false,
  setShowSplash: (v) => set({ showSplash: v }),
  splashShown: false,
  setSplashShown: (v) => set({ splashShown: v }),
}));
