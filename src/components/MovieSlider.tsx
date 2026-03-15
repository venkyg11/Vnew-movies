import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";
import type { Movie } from "@/data/movies";

interface MovieSliderProps {
  title: string;
  movies: Movie[];
  icon?: React.ReactNode;
}

const MovieSlider = ({ title, movies, icon }: MovieSliderProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -600 : 600;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!movies.length) return null;

  return (
    <section className="relative py-6">
      <div className="flex items-center justify-between mb-4 px-4 md:px-8 max-w-[1440px] mx-auto">
        <h2 className="font-display text-2xl md:text-3xl tracking-wide text-foreground flex items-center gap-2">
          {icon}
          {title}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full glass glass-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full glass glass-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 md:px-8 max-w-[1440px] mx-auto pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} index={index} />
        ))}
      </div>
    </section>
  );
};

export default MovieSlider;
