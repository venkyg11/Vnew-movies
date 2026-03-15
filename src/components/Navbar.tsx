import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Search, User, Menu, X, Bookmark, Languages, LogOut, Star } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { useAuth } from "@/contexts/AuthContext";

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang, t } = useLanguage();
  const { user, logout } = useAuth();

  const navLinks = [
    { to: "/", label: t.home },
    { to: "/genre/Action", label: t.action },
    { to: "/genre/Romance", label: t.romance },
    { to: "/genre/Comedy", label: t.comedy },
    { to: "/genre/Drama", label: t.drama },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass glass-border">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative">
            <img src="/logo2.png" alt="Vnew movies" className="h-10 w-10 logo-circular transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 rounded-full glow-purple-orange opacity-40 animate-pulse pointer-events-none" />
          </div>
            <div className="flex flex-col -gap-1">
              <span className="font-display text-xl text-gradient leading-none">VNEW</span>
              <span className="font-display text-lg text-foreground leading-none opacity-80 uppercase tracking-wider">Movies</span>
            </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === "en" ? "te" : "en")}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground text-xs font-semibold"
            title={lang === "en" ? "తెలుగులో చూడండి" : "Switch to English"}
          >
            <Languages size={16} />
            <span>{lang === "en" ? "తెలుగు" : "ENG"}</span>
          </button>

          <AnimatePresence>
            {isSearchOpen && (
              <motion.form
                onSubmit={handleSearch}
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 240, opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative"
              >
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-secondary rounded-lg px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  autoFocus
                />
              </motion.form>
            )}
          </AnimatePresence>

          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <Search size={20} />
          </button>

          <Link
            to="/watchlist"
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground hidden md:flex"
          >
            <Bookmark size={20} />
          </Link>

          {user ? (
            <div className="relative group">
              <button
                className="flex items-center gap-2 p-1 rounded-full hover:bg-white/10 transition-all"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#8E2DE2] to-[#F63700] flex items-center justify-center text-sm font-bold text-white shadow-[0_0_15px_rgba(142,45,226,0.3)] ring-2 ring-white/10">
                  {user.name.substring(0, 2).toUpperCase()}
                </div>
              </button>

              <AnimatePresence>
                {isProfileOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40" 
                      onClick={() => setIsProfileOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute right-0 mt-3 w-56 glass-ott border border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 py-2"
                    >
                      <div className="px-4 py-3 border-b border-white/5 mb-2">
                        <p className="text-sm font-bold text-white truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      </div>

                      <div className="space-y-1">
                        {[
                          { icon: <User size={16} />, label: "Account", onClick: () => {} },
                          { icon: <Bookmark size={16} />, label: "Favourites", onClick: () => {} },
                          { icon: <Languages size={16} />, label: "Preferences", onClick: () => {} },
                          { icon: <Star size={16} />, label: "Billing", onClick: () => {} },
                          { icon: <X size={16} className="rotate-45" />, label: "Settings", onClick: () => {} },
                        ].map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => {
                              item.onClick();
                              setIsProfileOpen(false);
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-muted-foreground hover:text-white hover:bg-white/5 transition-all text-left group"
                          >
                            <span className="text-muted-foreground/60 group-hover:text-primary transition-colors">
                              {item.icon}
                            </span>
                            {item.label}
                          </button>
                        ))}
                      </div>

                      <div className="mt-2 pt-2 border-t border-white/5 px-2">
                        <button
                          onClick={() => {
                            logout();
                            setIsProfileOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-all text-left"
                        >
                          <LogOut size={16} />
                          Logout
                        </button>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              to="/login"
              className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
            >
              <User size={20} />
            </Link>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors text-muted-foreground md:hidden"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass glass-border overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    location.pathname === link.to ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/watchlist"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium py-2 text-muted-foreground"
              >
                {t.watchlist}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
