import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import { getMoviesByGenre } from "@/data/movies";
import { useLanguage } from "@/contexts/LanguageContext";

const GenrePage = () => {
  const { genre } = useParams();
  const genreMovies = genre ? getMoviesByGenre(genre) : [];
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 max-w-[1440px] mx-auto">
        <h1 className="font-display text-4xl md:text-5xl tracking-wider text-foreground mb-8">
          {genre} {t.movies}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {genreMovies.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} index={i} />
          ))}
        </motion.div>

        {genreMovies.length === 0 && (
          <p className="text-center text-muted-foreground py-20">{t.noMoviesInGenre}</p>
        )}
      </div>
    </div>
  );
};

export default GenrePage;
