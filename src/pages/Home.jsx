import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageWrapper from "../components/layout/PageWrapper";
import HeroSection from "../components/sections/HeroSection";
import SkillsSection from "../components/sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Header />
      <PageWrapper className="!pt-0">
        <HeroSection />
        <SkillsSection />
      </PageWrapper>
      <Footer />
    </>
  );
}
