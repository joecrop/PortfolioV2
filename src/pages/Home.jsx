import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import ExpertiseSection from "../components/sections/ExpertiseSection";
import FeaturedWorkSection from "../components/sections/FeaturedWorkSection";
import PhilosophySection from "../components/sections/PhilosophySection";
import SkillsSection from "../components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <PageWrapper className="!pt-0">
        <HeroSection />
        <StatsSection />
        <ExpertiseSection />
        <FeaturedWorkSection />
        <PhilosophySection />
        <SkillsSection />
      </PageWrapper>
      <Footer />
    </>
  );
}
