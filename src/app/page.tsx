import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import StatisticsSection from "@/components/StatisticsSection";
import ContentGrid from "@/components/ContentGrid";
import WhyChooseSection from "@/components/WhyChooseSection";
import FooterStrip from "@/components/FooterStrip";

export default function Home() {
  return (
    <main className="min-h-screen lg:h-screen lg:min-h-[620px] bg-gradient-to-b from-[#FFF7FB] to-[#FBEAF5] flex flex-col justify-between selection:bg-pink-100 selection:text-pink-600">
      <div className="w-full flex flex-col lg:flex-1 lg:min-h-0">
        {/* Multi-tier Header with Logo, Script Tagline, Search, Join CTA & Navigation */}
        <Header />

        {/* Hero Section: 3-panel contiguous layout (Left, Studio Discussion, Right Beauty Talks) */}
        <HeroSection />

        {/* 7 Feature Category Cards */}
        <FeatureCards />

        {/* Statistics Strip & Member Privileges Promotional Banner */}
        <StatisticsSection />

        {/* 4-Column Content Grid: Featured Video, Popular Categories, Success Stories, Upcoming Live Programme */}
        <ContentGrid />

        {/* Why Choose Brand Image & Final CTA */}
        <WhyChooseSection />
      </div>

      {/* Signature Gradient Footer Strip */}
      <FooterStrip />
    </main>
  );
}
