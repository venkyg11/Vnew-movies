import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import MovieDetails from "./pages/MovieDetails";
import SearchPage from "./pages/SearchPage";
import GenrePage from "./pages/GenrePage";
import NotFound from "./pages/NotFound";

import { motion, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import IntroAnimation from "@/components/IntroAnimation";

const queryClient = new QueryClient();

const App = () => {
  const [showIntro, setShowIntro] = useState(true);
  
  // Custom Cursor Glow
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          
          {/* Background Cinematic Effects */}
          <div className="fixed inset-0 pointer-events-none z-[-1] cinematic-bg overflow-hidden">
            <div className="film-grain" />
            <motion.div 
              style={{ 
                x: cursorX, 
                y: cursorY,
                background: "radial-gradient(circle at center, rgba(142, 45, 226, 0.1) 0%, transparent 70%)"
              }}
              className="absolute w-[300px] h-[300px] rounded-full blur-[100px]"
            />
          </div>

          <AnimatePresence mode="wait">
            {showIntro ? (
              <IntroAnimation key="intro" onComplete={() => setShowIntro(false)} />
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full relative"
              >
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/search" element={<SearchPage />} />
                    <Route path="/genre/:genre" element={<GenrePage />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </motion.div>
            )}
          </AnimatePresence>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
