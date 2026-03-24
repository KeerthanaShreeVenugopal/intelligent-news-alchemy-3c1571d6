import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Newspaper, Menu, X } from "lucide-react";
import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Briefings", path: "/briefings" },
  { label: "Story Tracker", path: "/story-tracker" },
  { label: "Video", path: "/video-studio" },
  { label: "Profile", path: "/profile" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const handleLogout = async () => {
    await supabase.auth.signOut();
  };
  

return (
  <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center"
            style={{ background: "var(--gradient-gold)" }}
          >
            <Newspaper className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight font-['Space_Grotesk']">
            My <span className="text-gradient-gold">AI News</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems
            .filter((item) => {
              if (item.path === "/profile" && !user) return false;
              return true;
            })
            .map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${isActive
                    ? "text-gold"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-gold"
                    />
                  )}
                </Link>
              );
            })}
          {user && (
            <span className="px-3 text-sm text-gray-300">
              {user.name || user.email}
            </span>
          )}

          {user ? (
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm font-medium text-red-400 hover:text-red-300"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Login
            </Link>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-muted-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </div>

    {/* Mobile menu */}
    {mobileOpen && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="md:hidden glass-strong border-t border-border/50"
      >
        <div className="px-4 py-3 space-y-1">
          {navItems
            .filter((item) => {
              if (item.path === "/profile" && !user) return false;
              return true;
            })
            .map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${location.pathname === item.path
                  ? "text-gold bg-gold/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
              >
                {item.label}
              </Link>
            ))}
          {user && (
            <span className="px-3 text-sm text-gray-300">
              {user.name || user.email}
            </span>
          )}
          {user ? (
            <button
              onClick={() => {
                handleLogout();
                setMobileOpen(false);
              }}
              className="block w-full text-left px-4 py-2.5 text-sm text-red-400"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 text-sm text-muted-foreground"
            >
              Login
            </Link>
          )}
        </div>
      </motion.div>
    )}
  </nav>
);
};

export default Navbar;
