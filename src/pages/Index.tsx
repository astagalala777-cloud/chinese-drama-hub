import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularDramas from "@/components/PopularDramas";
import LatestDramas from "@/components/LatestDramas";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PopularDramas />
      <LatestDramas />
      <Categories />
      <Footer />
    </div>
  );
};

export default Index;
