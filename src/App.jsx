import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

// Wraps each lazy element in its own Suspense so AnimatePresence never sees
// the Routes tree replaced — only the page content inside suspends.
function S({ component: C }) {
  return (
    <Suspense fallback={<PageFallback />}>
      <C />
    </Suspense>
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
  return (
    <>
      <AuroraBackground />
      <ScrollProgress />
      <ScrollToTop />

      <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/experience"     element={<S component={ExperiencePage} />} />
          <Route path="/projects"       element={<S component={ProjectsPage} />} />
          <Route path="/education"      element={<S component={EducationPage} />} />
          <Route path="/publications"   element={<S component={PublicationsPage} />} />
          <Route path="/contact"        element={<S component={ContactPage} />} />
          <Route path="/teaching"       element={<S component={TeachingPage} />} />
          <Route path="/chips"          element={<S component={ChipsPage} />} />
          <Route path="/classes"        element={<S component={ClassesPage} />} />
          <Route path="/resume"         element={<S component={ResumePage} />} />
          <Route path="/music"          element={<S component={MusicPage} />} />
          <Route path="/pictures"       element={<S component={PicturesPage} />} />
          <Route path="/links"          element={<S component={LinksPage} />} />
          <Route path="/projects/:slug" element={<S component={BlogPost} />} />
          <Route path="/tools/mnos"     element={<S component={MNOSPage} />} />
          <Route path="/tools/kitties"  element={<S component={HowManyKittiesPage} />} />
          <Route path="*"               element={<S component={NotFound} />} />
        </Routes>
    </>
  );
}
