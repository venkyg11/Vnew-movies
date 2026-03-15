import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MovieCard from "@/components/MovieCard";
import { movies } from "@/lib/utils";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const { t } = useLanguage();

  const results = query.trim()
    ? movies.filter(
      (m) =>
        m.title.toLowerCase().includes(query.toLowerCase()) ||
        m.teluguTitle.includes(query) ||
        m.genre.some((g) => g.toLowerCase().includes(query.toLowerCase())) ||
        m.cast.some((c) => c.toLowerCase().includes(query.toLowerCase())) ||
        m.director.toLowerCase().includes(query.toLowerCase())
    )
    : [];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 px-4 md:px-8 max-w-[1440px] mx-auto">
        <div className="relative max-w-xl mx-auto mb-12">
          <SearchIcon size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPagePlaceholder}
            className="w-full bg-secondary rounded-xl pl-12 pr-4 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary font-body"
            autoFocus
          />
        </div>

        {query.trim() && (
          <p className="text-sm text-muted-foreground mb-6">
            {results.length} {t.resultsFor} "{query}"
          </p>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
        >
          {results.map((movie, i) => (
            <MovieCard key={movie.id} movie={movie} index={i} />
          ))}
        </motion.div>

        {query.trim() && results.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">{t.noMoviesFound} "{query}"</p>
            <p className="text-muted-foreground/60 text-sm mt-2">{t.tryDifferent}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
