import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Clock, Play, Bookmark, ThumbsUp, ThumbsDown, ArrowLeft, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import MovieSlider from "@/components/MovieSlider";
import { movies } from "@/lib/utils";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === id);
  const [showTrailer, setShowTrailer] = useState(false);
  const [liked, setLiked] = useState<boolean | null>(null);
  const [userRating, setUserRating] = useState(0);
  const { t, lang } = useLanguage();

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">{t.movieNotFound}</p>
      </div>
    );
  }

  const similar = movies
    .filter((m) => m.id !== movie.id && m.genre.some((g) => movie.genre.includes(g)))
    .slice(0, 8);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-fade-up" />
        <div className="absolute inset-0 gradient-fade-right opacity-90" />
        <div className="absolute inset-0 bg-background/40" />
      </div>

      <div className="-mt-96 relative z-10 max-w-[1440px] mx-auto px-4 md:px-8">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6 text-sm">
          <ArrowLeft size={16} />
          {t.back}
        </Link>

        <div className="flex flex-col md:flex-row gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="flex-shrink-0"
          >
            <div className="w-[250px] md:w-[300px] rounded-xl overflow-hidden glow-primary">
              <img src={movie.poster} alt={movie.title} className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            {movie.matchScore && (
              <span className="inline-block mb-3 text-sm font-semibold text-primary bg-primary/15 px-3 py-1 rounded-full">
                {movie.matchScore}% {t.match}
              </span>
            )}

            <h1 className="font-display text-4xl md:text-6xl tracking-wider text-foreground mb-1">
              {lang === "te" ? movie.teluguTitle : movie.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              {lang === "te" ? movie.title : movie.teluguTitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                <span className="text-foreground font-semibold">{movie.rating}</span>/10
              </span>
              <span>{movie.year}</span>
              <span className="flex items-center gap-1"><Clock size={14} />{movie.duration}</span>
              <span className="flex items-center gap-1"><Users size={14} />{(movie.views / 1000000).toFixed(1)}M {t.views}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genre.map((g) => (
                <span key={g} className="text-xs px-3 py-1 rounded-full glass glass-border text-muted-foreground">
                  {g}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">{movie.description}</p>

            <div className="text-sm text-muted-foreground mb-2">
              <span className="text-foreground font-medium">{t.director}</span> {movie.director}
            </div>
            <div className="text-sm text-muted-foreground mb-6">
              <span className="text-foreground font-medium">{t.cast}</span> {movie.cast.join(", ")}
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-8">
              <button
                onClick={() => setShowTrailer(true)}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
              >
                <Play size={18} fill="currentColor" />
                {t.watchTrailer}
              </button>
              <button className="flex items-center gap-2 glass glass-border px-5 py-3 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors">
                <Bookmark size={18} />
                {t.watchlist}
              </button>
              <button
                onClick={() => setLiked(liked === true ? null : true)}
                className={`p-3 rounded-full glass glass-border transition-colors ${liked === true ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <ThumbsUp size={18} />
              </button>
              <button
                onClick={() => setLiked(liked === false ? null : false)}
                className={`p-3 rounded-full glass glass-border transition-colors ${liked === false ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <ThumbsDown size={18} />
              </button>
            </div>

            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">{t.rateThisMovie}</p>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                  <button
                    key={n}
                    onClick={() => setUserRating(n)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      size={20}
                      className={n <= userRating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground/30"}
                    />
                  </button>
                ))}
                {userRating > 0 && (
                  <span className="text-sm text-foreground ml-2 font-medium">{userRating}/10</span>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-4">
          <MovieSlider title={t.youMayAlsoLike} movies={similar} />
        </div>
      </div>

      {showTrailer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/90 flex items-center justify-center p-4"
          onClick={() => setShowTrailer(false)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={movie.trailer}
              title={`${movie.title} Trailer`}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default MovieDetails;
