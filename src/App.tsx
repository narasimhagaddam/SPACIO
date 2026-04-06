import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import LoginModal from "@/components/LoginModal";
import SplashScreen from "@/components/SplashScreen";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import SpaceDetail from "./pages/SpaceDetail";
import HostDashboard from "./pages/HostDashboard";
import AddSpace from "./pages/AddSpace";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SplashScreen />
        <div className="max-w-md mx-auto min-h-screen bg-background relative">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/category/:key" element={<CategoryPage />} />
            <Route path="/space/:id" element={<SpaceDetail />} />
            <Route path="/host" element={<HostDashboard />} />
            <Route path="/host/add" element={<AddSpace />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
          <LoginModal />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
