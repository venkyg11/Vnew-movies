import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Info, Star, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Movie } from "@/data/movies";
import { useLanguage } from "@/contexts/LanguageContext";

interface HeroSectionProps {
  movies: Movie[];
}

const HeroSection = ({ movies }: HeroSectionProps) => {
  const [current, setCurrent] = useState(0);
  const { t } = useLanguage();

  // Find RRR to set as default hero if available
  useEffect(() => {
    const rrrIndex = movies.findIndex(m => m.title === "RRR");
    if (rrrIndex !== -1) setCurrent(rrrIndex);
  }, [movies]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % movies.length);
    }, 8000); // 8 seconds for banner rotation
    return () => clearInterval(timer);
  }, [movies.length]);

  const movie = movies[current];
  if (!movie) return null;

  return (
    <div className="relative h-[85vh] min-h-[850px] w-full overflow-hidden cinematic-bg">
      <AnimatePresence mode="wait">
        <motion.div
          key={movie.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img 
            src={movie.backdrop || movie.poster} 
            alt={movie.title} 
            className="w-full h-full object-cover scale-110 motion-safe:animate-[zoom-slow_20s_infinite_alternate]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          <div className="absolute inset-0 projector-beam opacity-20" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 flex flex-col justify-center pb-20 pt-10">
        <div className="px-4 md:px-12 lg:px-20 w-full max-w-[1440px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={movie.id}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold tracking-widest uppercase">
                  Featured
                </span>
                {movie.matchScore && (
                  <span className="text-emerald-400 font-bold text-sm">
                    {movie.matchScore}% Match
                  </span>
                )}
              </div>

              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter text-foreground mb-4 leading-[0.9]">
                {movie.title}
              </h1>

              <div className="flex items-center gap-6 text-lg text-muted-foreground/80 mb-6 font-medium">
                <span className="flex items-center gap-2">
                  <Star size={18} className="text-[#F63700] fill-[#F63700]" />
                  <span className="text-white">{movie.rating}</span>
                </span>
                <span className="text-white/40">|</span>
                <span>{movie.year}</span>
                <span className="text-white/40">|</span>
                <span className="px-2 py-0.5 border border-white/20 rounded text-xs">U/A 13+</span>
                <span className="text-white/40">|</span>
                <span>{movie.duration}</span>
              </div>

              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mb-10 line-clamp-3 leading-relaxed">
                {movie.description}
              </p>

              <div className="flex items-center gap-4">
                <Link
                  to={`/movie/${movie.id}`}
                  className="group flex items-center gap-3 bg-white text-black px-8 py-4 rounded-md font-bold text-lg hover:bg-white/90 transition-all duration-300 scale-100 hover:scale-105 active:scale-95 shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
                >
                  <Play size={20} fill="black" />
                  {t.watchTrailer}
                </Link>
                <Link
                  to={`/movie/${movie.id}`}
                  className="flex items-center gap-3 glass-ott px-8 py-4 rounded-md font-bold text-lg text-white hover:bg-white/10 transition-all duration-300 scale-100 hover:scale-105 active:scale-95"
                >
                  <Info size={20} />
                  {t.moreInfo}
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center justify-center w-full max-w-4xl px-4 z-30">
        <div className="relative flex items-center justify-center gap-2 w-full">
          {/* Background Lines */}
          <div className="absolute inset-0 flex items-center justify-between px-20 -z-10 opacity-30">
            {movies.map((_, i) => (
              <div 
                key={i}
                className={`flex-1 h-[2px] mx-1 transition-all duration-700 ${
                  i === current ? "bg-primary scale-x-125" : "bg-white/30"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-12">
            <button
              onClick={() => setCurrent((prev) => (prev - 1 + movies.length) % movies.length)}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all active:scale-90 group"
              aria-label="Previous movie"
            >
              <motion.span
                animate={{ x: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowLeft size={24} className="text-white opacity-60 group-hover:opacity-100" />
              </motion.span>
            </button>

            <div className="flex gap-4">
              {movies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-500 hover:scale-y-150 ${
                    i === current 
                      ? "w-10 bg-primary shadow-[0_0_15px_#F63700]" 
                      : "w-6 bg-white/20 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrent((prev) => (prev + 1) % movies.length)}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 hover:border-white/40 transition-all active:scale-90 group"
              aria-label="Next movie"
            >
              <motion.span
                animate={{ x: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight size={24} className="text-white opacity-60 group-hover:opacity-100" />
              </motion.span>
            </button>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes zoom-slow {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
