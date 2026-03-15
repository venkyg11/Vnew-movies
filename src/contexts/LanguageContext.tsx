import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "te";

const translations = {
  en: {
    // Navbar
    home: "Home",
    action: "Action",
    romance: "Romance",
    comedy: "Comedy",
    drama: "Drama",
    searchPlaceholder: "Search Telugu movies...",
    watchlist: "Watchlist",

    // Hero
    matchForYou: "Match For You",
    watchTrailer: "Watch Trailer",
    moreInfo: "More Info",

    // Sections
    recommendedForYou: "Recommended For You",
    latestMovies: "Latest Movies",
    topRated: "Top Rated",
    mostViewed: "Most Viewed",
    pinnedByAdmin: "Pinned by Admin",
    popularThisWeek: "Popular This Week",

    // Footer
    footerText: "© 2026 Vnew Movies. Your Telugu Cinema Discovery Platform.",

    // Movie Details
    back: "Back",
    match: "Match",
    director: "Director:",
    cast: "Cast:",
    rateThisMovie: "Rate this movie:",
    youMayAlsoLike: "You May Also Like",
    movieNotFound: "Movie not found",
    views: "views",

    // Search
    searchPagePlaceholder: "Search movies, actors, directors...",
    resultsFor: "result(s) for",
    noMoviesFound: "No movies found for",
    tryDifferent: "Try searching with different keywords",

    // Genre
    movies: "Movies",
    noMoviesInGenre: "No movies found in this genre",

    // Language toggle
    language: "EN",
  },
  te: {
    // Navbar
    home: "హోమ్",
    action: "యాక్షన్",
    romance: "రొమాన్స్",
    comedy: "కామెడీ",
    drama: "డ్రామా",
    searchPlaceholder: "తెలుగు సినిమాలు వెతకండి...",
    watchlist: "వాచ్‌లిస్ట్",

    // Hero
    matchForYou: "మీ కోసం మ్యాచ్",
    watchTrailer: "ట్రైలర్ చూడండి",
    moreInfo: "మరింత సమాచారం",

    // Sections
    recommendedForYou: "మీ కోసం సిఫార్సులు",
    latestMovies: "తాజా సినిమాలు",
    topRated: "అత్యధిక రేటింగ్",
    mostViewed: "అత్యధికంగా చూసిన",
    pinnedByAdmin: "అడ్మిన్ పిన్ చేసినవి",
    popularThisWeek: "ఈ వారం ట్రెండింగ్",

    // Footer
    footerText: "© 2026 Vnew Movies. మీ తెలుగు సినిమా ఆవిష్కరణ వేదిక.",

    // Movie Details
    back: "వెనుకకు",
    match: "మ్యాచ్",
    director: "దర్శకుడు:",
    cast: "నటీనటులు:",
    rateThisMovie: "ఈ సినిమాకు రేటింగ్ ఇవ్వండి:",
    youMayAlsoLike: "మీకు నచ్చవచ్చు",
    movieNotFound: "సినిమా కనుగొనబడలేదు",
    views: "వీక్షణలు",

    // Search
    searchPagePlaceholder: "సినిమాలు, నటులు, దర్శకులు వెతకండి...",
    resultsFor: "ఫలితాలు",
    noMoviesFound: "సినిమాలు కనుగొనబడలేదు",
    tryDifferent: "వేరే కీవర్డ్‌లతో వెతకండి",

    // Genre
    movies: "సినిమాలు",
    noMoviesInGenre: "ఈ జానర్‌లో సినిమాలు లేవు",

    // Language toggle
    language: "తె",
  },
} as const;

type Translations = { [K in keyof typeof translations.en]: string };

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: translations.en,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("vnew-lang");
    return (saved === "te" ? "te" : "en") as Language;
  });

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("vnew-lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
};
