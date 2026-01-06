import { Play, Star, Info, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDramas } from "@/hooks/useDramas";

const HeroSection = () => {
  const { data: dramas, isLoading } = useDramas("foryou");
  const featuredDrama = dramas?.[0];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ 
          backgroundImage: featuredDrama ? `url(${featuredDrama.coverWap})` : undefined,
          backgroundColor: 'hsl(var(--background))'
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-10 h-10 text-crimson animate-spin" />
          </div>
        ) : featuredDrama ? (
          <div className="max-w-2xl animate-slide-up">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-crimson/20 border border-crimson/30 rounded-full text-sm text-crimson">
                Rekomendasi
              </span>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-gold fill-gold" />
                <span className="text-gold text-sm font-medium">{featuredDrama.playCount}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4 leading-tight">
              <span className="text-gradient-gold">{featuredDrama.bookName}</span>
            </h1>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed max-w-xl line-clamp-3">
              {featuredDrama.introduction || "Drama seru dengan cerita menarik yang wajib ditonton."}
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
            
            <div className="flex items-center gap-4 mt-8 text-sm text-foreground/60 flex-wrap">
              {featuredDrama.tags?.slice(0, 3).map((tag, i) => (
                <span key={tag} className="flex items-center gap-2">
                  {i > 0 && <span>•</span>}
                  {tag}
                </span>
              ))}
              <span>•</span>
              <span>{featuredDrama.totalChapterNum} Episode</span>
            </div>
          </div>
        ) : null}
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
