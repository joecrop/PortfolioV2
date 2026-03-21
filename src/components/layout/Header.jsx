import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiSun, HiMoon, HiMenu, HiX } from "react-icons/hi";
import { HiChevronDown } from "react-icons/hi";
import { useTheme } from "../../hooks/useTheme";
import { useScrollY } from "../../hooks/useScrollY";
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
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.15 }}
          className="absolute top-full right-0 mt-2 min-w-[180px] rounded-lg border border-border dark:border-border bg-surface-light dark:bg-surface shadow-xl overflow-hidden z-50"
        >
          {items.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "block px-4 py-2.5 text-sm transition-colors hover:bg-accent/10 hover:text-accent",
                  isActive ? "text-accent bg-accent/5" : "text-text-light dark:text-text"
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
  const scrollY = useScrollY();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const isScrolled = scrollY > 20;
  const navTextBase = isScrolled
    ? "text-text dark:text-text/70"
    : "text-text-light/80 dark:text-text/70";

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        isScrolled
          ? "bg-background/90 dark:bg-background/90 backdrop-blur-md border-b border-border/50 dark:border-border/50 shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-2xl text-accent hover:text-accent-hover transition-colors"
          >
            Joe Crop
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === link.label ? null : link.label)
                    }
                    className={cn(
                      "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      `${navTextBase} hover:text-accent dark:hover:text-accent`,
                      openDropdown === link.label && "text-accent"
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
                      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "text-accent"
                        : `${navTextBase} hover:text-accent dark:hover:text-accent`
                    )
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className={`p-2 rounded-md ${navTextBase} hover:text-accent dark:hover:text-accent transition-colors`}
            >
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <HiSun className="w-5 h-5" /> : <HiMoon className="w-5 h-5" />}
              </motion.div>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-md ${navTextBase} hover:text-accent transition-colors`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-border/50 bg-background/95 dark:bg-background/95 backdrop-blur-md overflow-hidden"
          >
            <nav className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted">
                      {link.label}
                    </p>
                    {link.dropdown.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                          cn(
                            "block px-6 py-2 text-sm rounded-md transition-colors",
                            isActive ? "text-accent" : "text-text/80 dark:text-text/80 hover:text-accent"
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
                        "block px-3 py-2 text-sm rounded-md font-medium transition-colors",
                        isActive ? "text-accent bg-accent/10" : "text-text/80 dark:text-text/80 hover:text-accent"
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
