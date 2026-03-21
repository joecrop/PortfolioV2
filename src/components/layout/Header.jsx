import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme";
import { cn } from "../../lib/utils";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/experience" },
  { label: "Projects", to: "/projects" },
  {
    label: "Research",
    dropdown: [
      { label: "Publications", to: "/publications" },
      { label: "IC Chips", to: "/chips" },
      { label: "Class Projects", to: "/classes" },
    ],
  },
  {
    label: "About",
    dropdown: [
      { label: "Teaching", to: "/teaching" },
      { label: "Resume", to: "/resume" },
      { label: "Education", to: "/education" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    label: "More",
    dropdown: [
      { label: "Music", to: "/music" },
      { label: "Pictures", to: "/pictures" },
      { label: "Links", to: "/links" },
      { label: "MNOS Demo", to: "/tools/mnos" },
      { label: "How Many Kitties", to: "/tools/kitties" },
    ],
  },
];

function DropdownMenu({ items, isOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.96 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full right-0 mt-3 min-w-[180px] overflow-hidden z-50"
          style={{
            background: "rgba(14,14,26,0.85)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "16px",
            boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
          }}
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2.5 text-sm transition-colors hover:bg-white/10 hover:text-accent",
                  isActive ? "text-accent bg-white/5" : "text-white/70"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function Header() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on navigate
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="pointer-events-auto w-full max-w-4xl"
        style={{
          background: "rgba(6,6,15,0.65)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "9999px",
          boxShadow: "0 4px 32px rgba(0,0,0,0.4)",
        }}
      >
        <div className="flex items-center justify-between px-5 h-12">
          {/* Logo */}
          <Link
            to="/"
            className="font-bold text-sm"
            style={{
              background: "linear-gradient(135deg,#a78bfa,#38bdf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Joe Crop
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className={cn(
                      "flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                      openDropdown === link.label
                        ? "text-accent bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/8"
                    )}
                  >
                    {link.label}
                    <HiChevronDown
                      className={cn(
                        "w-3.5 h-3.5 transition-transform",
                        openDropdown === link.label && "rotate-180"
                      )}
                    />
                  </button>
                  <DropdownMenu
                    items={link.dropdown}
                    isOpen={openDropdown === link.label}
                  />
                </div>
              ) : (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-1.5 rounded-full text-sm font-medium transition-colors",
                      isActive
                        ? "text-accent bg-white/10"
                        : "text-white/60 hover:text-white hover:bg-white/8"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <HiSun className="w-4 h-4" /> : <HiMoon className="w-4 h-4" />}
              </motion.div>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX className="w-4 h-4" /> : <HiMenu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile menu — drops below pill */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-full mt-2 w-full max-w-4xl"
            style={{
              background: "rgba(6,6,15,0.9)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
            }}
          >
            <nav className="px-4 py-4 space-y-0.5 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/30">
                      {link.label}
                    </p>
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                          cn(
                            "block px-6 py-2 text-sm rounded-xl transition-colors",
                            isActive
                              ? "text-accent bg-white/8"
                              : "text-white/60 hover:text-white hover:bg-white/8"
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    ))}
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={({ isActive }) =>
                      cn(
                        "block px-3 py-2 text-sm rounded-xl font-medium transition-colors",
                        isActive
                          ? "text-accent bg-white/8"
                          : "text-white/60 hover:text-white hover:bg-white/8"
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
