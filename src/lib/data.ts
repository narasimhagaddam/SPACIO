import workImg from "@/assets/spaces/work.jpg";
import playImg from "@/assets/spaces/play.jpg";
import partyImg from "@/assets/spaces/party.jpg";
import stayImg from "@/assets/spaces/stay.jpg";
import parkImg from "@/assets/spaces/park.jpg";
import shopImg from "@/assets/spaces/shop.jpg";

export type CategoryKey = "work" | "play" | "party" | "park" | "shop" | "stay";

export interface Category {
  key: CategoryKey;
  label: string;
  emoji: string;
  tagline: string;
  image: string;
  color: string;
  gradient: string;
}

export const categories: Category[] = [
  { key: "play", label: "Play", emoji: "🎮", tagline: "Game on 🔥", image: playImg, color: "play", gradient: "gradient-play" },
  { key: "work", label: "Work", emoji: "💻", tagline: "Focus mode 🎯", image: workImg, color: "work", gradient: "gradient-primary" },
  { key: "party", label: "Party", emoji: "🎉", tagline: "Let's celebrate", image: partyImg, color: "party", gradient: "gradient-party" },
  { key: "park", label: "Park", emoji: "🚗", tagline: "Spot found 📍", image: parkImg, color: "park", gradient: "gradient-accent" },
  { key: "shop", label: "Shop", emoji: "🏬", tagline: "Browse around", image: shopImg, color: "shop", gradient: "" },
  { key: "stay", label: "Stay", emoji: "🏨", tagline: "Rest easy 😴", image: stayImg, color: "stay", gradient: "" },
];

export interface Space {
  id: string;
  name: string;
  category: CategoryKey;
  subcategory: string;
  price: number;
  priceUnit: string;
  rating: number;
  reviews: number;
  distance: string;
  image: string;
  tags: string[];
  address: string;
}

export const spaces: Space[] = [
  { id: "1", name: "Shuttle Arena", category: "play", subcategory: "Badminton 🏸", price: 400, priceUnit: "hr", rating: 4.8, reviews: 234, distance: "1.2 km", image: playImg, tags: ["🔥 Filling fast", "Players nearby 👥"], address: "MG Road, Bengaluru" },
  { id: "2", name: "The Cricket Hub", category: "play", subcategory: "Cricket 🏏", price: 800, priceUnit: "hr", rating: 4.6, reviews: 189, distance: "2.5 km", image: playImg, tags: ["Game on 🔥"], address: "Koramangala, Bengaluru" },
  { id: "3", name: "GameZone Pro", category: "play", subcategory: "Indoor Games 🎯", price: 250, priceUnit: "hr", rating: 4.9, reviews: 412, distance: "0.8 km", image: playImg, tags: ["👀 Popular", "🔥 Filling fast"], address: "Indiranagar, Bengaluru" },
  { id: "4", name: "AquaSplash Pool", category: "play", subcategory: "Swimming 🏊", price: 350, priceUnit: "hr", rating: 4.5, reviews: 156, distance: "3.1 km", image: playImg, tags: ["Players nearby 👥"], address: "HSR Layout, Bengaluru" },
  { id: "5", name: "WorkNest Hub", category: "work", subcategory: "Freelance Space 💻", price: 150, priceUnit: "hr", rating: 4.7, reviews: 321, distance: "0.5 km", image: workImg, tags: ["👀 Popular"], address: "Church Street, Bengaluru" },
  { id: "6", name: "Study Cove", category: "work", subcategory: "Study Room 📚", price: 80, priceUnit: "hr", rating: 4.4, reviews: 98, distance: "1.8 km", image: workImg, tags: ["🔥 Filling fast"], address: "Jayanagar, Bengaluru" },
  { id: "7", name: "PodCast Studio", category: "work", subcategory: "Studio 🎙️", price: 500, priceUnit: "hr", rating: 4.9, reviews: 67, distance: "2.2 km", image: workImg, tags: ["👀 Popular"], address: "Whitefield, Bengaluru" },
  { id: "8", name: "SkyLounge Party Hall", category: "party", subcategory: "Rooftop 🌃", price: 5000, priceUnit: "event", rating: 4.8, reviews: 89, distance: "4.0 km", image: partyImg, tags: ["🔥 Filling fast"], address: "UB City, Bengaluru" },
  { id: "9", name: "Celebrations Banquet", category: "party", subcategory: "Party Hall 🎊", price: 8000, priceUnit: "event", rating: 4.6, reviews: 145, distance: "5.5 km", image: partyImg, tags: ["👀 Popular"], address: "Marathahalli, Bengaluru" },
  { id: "10", name: "EasyPark Spot", category: "park", subcategory: "Parking 🅿️", price: 30, priceUnit: "hr", rating: 4.3, reviews: 567, distance: "0.3 km", image: parkImg, tags: ["📍 Nearest"], address: "Brigade Road, Bengaluru" },
  { id: "11", name: "RentAll Store", category: "shop", subcategory: "Rental Shop 🛒", price: 200, priceUnit: "day", rating: 4.5, reviews: 78, distance: "1.5 km", image: shopImg, tags: [], address: "Commercial Street, Bengaluru" },
  { id: "12", name: "ZenStay Rooms", category: "stay", subcategory: "Budget Stay 💸", price: 499, priceUnit: "night", rating: 4.4, reviews: 234, distance: "2.0 km", image: stayImg, tags: ["👀 Popular"], address: "Majestic, Bengaluru" },
  { id: "13", name: "Temple View Inn", category: "stay", subcategory: "Pilgrim Stay 🛕", price: 350, priceUnit: "night", rating: 4.2, reviews: 123, distance: "6.0 km", image: stayImg, tags: [], address: "Basavanagudi, Bengaluru" },
  { id: "14", name: "CloudNine Hotel", category: "stay", subcategory: "Hotel ⭐", price: 1200, priceUnit: "night", rating: 4.7, reviews: 345, distance: "3.5 km", image: stayImg, tags: ["🔥 Filling fast"], address: "Lavelle Road, Bengaluru" },
];
