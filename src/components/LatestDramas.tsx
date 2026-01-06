import DramaCard from "./DramaCard";
import { ChevronRight, Loader2 } from "lucide-react";
import { useDramas } from "@/hooks/useDramas";

const LatestDramas = () => {
  const { data: dramas, isLoading, error } = useDramas("latest");

  return (
    <section className="py-20 bg-surface-darker">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Drama <span className="text-gradient-gold">Terbaru</span>
            </h2>
            <p className="text-foreground/60">
              Rilis terbaru yang wajib kamu tonton
            </p>
          </div>
          <a 
            href="#" 
            className="flex items-center gap-1 text-gold hover:text-gold-light transition-colors font-medium"
          >
            Lihat Semua
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
        
        {/* Loading State */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-gold animate-spin" />
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-20 text-foreground/60">
            Gagal memuat drama. Silakan coba lagi.
          </div>
        )}
        
        {/* Drama Grid */}
        {dramas && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {dramas.slice(0, 6).map((drama, index) => (
              <div 
                key={drama.bookId}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <DramaCard drama={drama} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LatestDramas;
