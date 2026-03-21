import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ScrollProgress from "./components/layout/ScrollProgress";
import AuroraBackground from "./components/layout/AuroraBackground";

// Eager-load Home for fast first paint
import Home from "./pages/Home";

// Lazy-load everything else
const ExperiencePage    = lazy(() => import("./pages/ExperiencePage"));
const ProjectsPage      = lazy(() => import("./pages/ProjectsPage"));
const EducationPage     = lazy(() => import("./pages/EducationPage"));
const PublicationsPage  = lazy(() => import("./pages/PublicationsPage"));
const ContactPage       = lazy(() => import("./pages/ContactPage"));
const TeachingPage      = lazy(() => import("./pages/TeachingPage"));
const ChipsPage         = lazy(() => import("./pages/ChipsPage"));
const ClassesPage       = lazy(() => import("./pages/ClassesPage"));
const ResumePage        = lazy(() => import("./pages/ResumePage"));
const MusicPage         = lazy(() => import("./pages/MusicPage"));
const PicturesPage      = lazy(() => import("./pages/PicturesPage"));
const LinksPage         = lazy(() => import("./pages/LinksPage"));
const BlogPost          = lazy(() => import("./pages/BlogPost"));
const MNOSPage          = lazy(() => import("./pages/tools/MNOSPage"));
const HowManyKittiesPage = lazy(() => import("./pages/tools/HowManyKittiesPage"));
const TVFramePage       = lazy(() => import("./pages/tools/TVFramePage"));
const NotFound          = lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Scroll-to-top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();

  return (
    <>
      <AuroraBackground />
      <ScrollProgress />
      <ScrollToTop />

      <Suspense fallback={<PageFallback />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/"                  element={<Home />} />
            <Route path="/experience"        element={<ExperiencePage />} />
            <Route path="/projects"          element={<ProjectsPage />} />
            <Route path="/education"         element={<EducationPage />} />
            <Route path="/publications"      element={<PublicationsPage />} />
            <Route path="/contact"           element={<ContactPage />} />
            <Route path="/teaching"          element={<TeachingPage />} />
            <Route path="/chips"             element={<ChipsPage />} />
            <Route path="/classes"           element={<ClassesPage />} />
            <Route path="/resume"            element={<ResumePage />} />
            <Route path="/music"             element={<MusicPage />} />
            <Route path="/pictures"          element={<PicturesPage />} />
            <Route path="/links"             element={<LinksPage />} />
            <Route path="/projects/:slug"     element={<BlogPost />} />
            <Route path="/tools/mnos"        element={<MNOSPage />} />
            <Route path="/tools/kitties"     element={<HowManyKittiesPage />} />
            <Route path="*"                  element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}
