import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PopularDramas from "@/components/PopularDramas";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <PopularDramas />
      <Categories />
      <Footer />
    </div>
  );
};

export default Index;
