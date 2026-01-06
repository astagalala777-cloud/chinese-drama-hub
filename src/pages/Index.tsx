import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularDramas from "@/components/PopularDramas";
import LatestDramas from "@/components/LatestDramas";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const Index = () => {
  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <HeroSection />
      <PopularDramas />
      <LatestDramas />
      <Categories />
      <Footer />
      <BottomNav />
    </div>
  );
};

export default Index;
