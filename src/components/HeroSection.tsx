import { Play, Star, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <div className="max-w-2xl animate-slide-up">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-crimson/20 border border-crimson/30 rounded-full text-sm text-crimson">
              Sedang Tayang
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-gold text-sm font-medium">9.6</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-4 leading-tight">
            <span className="text-gradient-gold">Lost You Forever</span>
          </h1>
          
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl">
            Kisah cinta yang melampaui ribuan tahun. Drama fantasi kolosal yang mengungkap 
            misteri mitologi kuno dengan konflik cinta yang rumit dan mengharukan.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl">
              <Play className="w-5 h-5 mr-1 fill-current" />
              Tonton Sekarang
            </Button>
            <Button variant="glass" size="xl">
              <Info className="w-5 h-5 mr-1" />
              Lihat Detail
            </Button>
          </div>
          
          <div className="flex items-center gap-6 mt-8 text-sm text-foreground/60">
            <span>Yang Zi / Zhang Wanyi / Tan Jianci</span>
            <span>•</span>
            <span>2023</span>
            <span>•</span>
            <span>39 Episode</span>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
