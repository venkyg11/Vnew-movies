import { motion } from "framer-motion";
import { Play, Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import type { Movie } from "@/data/movies";

interface MovieCardProps {
  movie: Movie;
  index?: number;
}

const MovieCard = ({ movie, index = 0 }: MovieCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] 
      }}
      className="group relative flex-shrink-0 w-[200px] md:w-[240px] cursor-pointer"
    >
      <Link to={`/movie/${movie.id}`}>
        <motion.div 
          whileHover={{ 
            scale: 1.1, 
            y: -10,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          className="relative aspect-[2/3] rounded-lg overflow-hidden glass-ott group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] group-hover:shadow-[#8E2DE2]/20"
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-50"
            loading="lazy"
          />

          {/* Expanded Hover Info */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-4 scale-95 group-hover:scale-100">
            <h3 className="text-lg font-bold text-white mb-1 drop-shadow-lg leading-tight">
              {movie.title}
            </h3>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1 text-xs font-bold text-white">
                <Star size={12} className="text-[#F63700] fill-[#F63700]" />
                {movie.rating}
              </span>
              <span className="text-[10px] text-white/60 border border-white/30 px-1 rounded">HD</span>
              <span className="text-xs text-white/80">{movie.year}</span>
            </div>

            <p className="text-[10px] text-white/70 line-clamp-2 mb-4 leading-relaxed">
              {movie.description}
            </p>

            <div className="flex items-center gap-2">
              <button className="flex-1 flex items-center justify-center gap-1 bg-white text-black py-1.5 rounded text-[10px] font-bold hover:bg-white/90 transition-colors">
                <Play size={10} fill="black" />
                Play
              </button>
              <button className="p-1.5 rounded glass-ott text-white border-white/20 hover:bg-white/10 transition-colors">
                <Plus size={10} />
              </button>
            </div>
          </div>

          {/* Top Badge */}
          {movie.matchScore && (
            <div className="absolute top-2 right-2 bg-[#F63700] text-white text-[10px] font-black px-1.5 py-0.5 rounded shadow-lg transform rotate-3 opacity-0 group-hover:opacity-100 transition-opacity">
              {movie.matchScore}% Match
            </div>
          )}
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default MovieCard;
