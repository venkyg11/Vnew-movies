import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MovieSlider from "@/components/MovieSlider";
import { Flame, TrendingUp, Star, Eye, Pin, Sparkles, Heart, Swords, Laugh } from "lucide-react";
import {
  getTopRated,
  getMostViewed,
  getLatest,
  getPinned,
  getRecommended,
  getPopularThisWeek,
  getMoviesByGenre,
} from "@/data/movies";
import { movies } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const pinnedMovies = getPinned();
  const heroMovies = pinnedMovies.length >= 3 ? pinnedMovies : movies.slice(0, 4);
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection movies={heroMovies} />

      <div className="relative z-10 -mt-20 space-y-2 pb-10 overflow-hidden">
        <MovieSlider
          title="⭐ Recommended For You"
          movies={getRecommended()}
          icon={<Sparkles size={24} className="text-[#8E2DE2]" />}
        />
        <MovieSlider
          title="🔥 Trending Telugu Movies"
          movies={getPopularThisWeek()}
          icon={<TrendingUp size={24} className="text-[#F63700]" />}
        />
        <MovieSlider
          title="🎬 Latest Releases"
          movies={getLatest()}
          icon={<Flame size={24} className="text-primary" />}
        />
        <MovieSlider
          title="❤️ Romantic Movies"
          movies={getMoviesByGenre("Romance")}
          icon={<Heart size={24} className="text-pink-500" />}
        />
        <MovieSlider
          title="💥 Action Blockbusters"
          movies={getMoviesByGenre("Action")}
          icon={<Swords size={24} className="text-orange-500" />}
        />
      </div>

      <footer className="py-20 px-4 md:px-8 max-w-[1440px] mx-auto border-t border-white/5 mt-8 bg-black">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <img src="/logo2.png" alt="Vnew" className="h-12 w-12 logo-circular" />
              <div className="absolute inset-0 rounded-full glow-purple-orange opacity-30 pointer-events-none" />
            </div>
            <div className="flex flex-col -gap-1">
              <span className="font-display text-2xl text-gradient leading-none">VNEW</span>
              <span className="font-display text-xl text-foreground leading-none opacity-80 uppercase tracking-widest">Movies</span>
            </div>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground">
            <p>© 2026 Vnew Movies. Discover Telugu Cinema Like Never Before.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
