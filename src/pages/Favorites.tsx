import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import BottomNav from "@/components/BottomNav";

const Favorites = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 pt-safe">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-xl font-display font-bold text-foreground">
            Drama Favorit
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Empty State */}
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-crimson/10 flex items-center justify-center mb-4">
            <Heart className="w-10 h-10 text-crimson" />
          </div>
          <h2 className="text-xl font-display font-bold text-foreground mb-2">
            Belum ada favorit
          </h2>
          <p className="text-foreground/60 mb-6 max-w-sm">
            Simpan drama favoritmu agar mudah ditemukan nanti
          </p>
          <Button variant="hero" onClick={() => navigate("/")}>
            Jelajahi Drama
          </Button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Favorites;
