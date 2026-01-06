import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Star, Clock, Film, Loader2, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDramas } from "@/hooks/useDramas";
import { useEpisodes } from "@/hooks/useDramas";
import VideoPlayer from "@/components/VideoPlayer";
import BottomNav from "@/components/BottomNav";

const DramaDetail = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const navigate = useNavigate();
  const [selectedEpisode, setSelectedEpisode] = useState<{ videoPath: string; name: string } | null>(null);

  const { data: dramas, isLoading: dramasLoading } = useDramas("trending");
  const { data: episodes, isLoading: episodesLoading } = useEpisodes(bookId || "");

  // Find drama from trending list (in real app, would have dedicated endpoint)
  const drama = dramas?.find((d) => d.bookId === bookId);

  const handlePlayEpisode = (videoPath: string, name: string) => {
    setSelectedEpisode({ videoPath, name });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: drama?.bookName,
        text: drama?.introduction,
        url: window.location.href,
      });
    }
  };

  if (dramasLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-crimson animate-spin" />
      </div>
    );
  }

  if (!drama) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
        <p className="text-foreground/60 mb-4">Drama tidak ditemukan</p>
        <Button variant="hero" onClick={() => navigate("/")}>
          Kembali ke Beranda
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      {/* Video Player or Cover */}
      {selectedEpisode ? (
        <VideoPlayer
          src={selectedEpisode.videoPath}
          title={`${drama.bookName} - ${selectedEpisode.name}`}
          onClose={() => setSelectedEpisode(null)}
        />
      ) : (
        <div className="relative aspect-video md:aspect-[21/9] w-full">
          <img
            src={drama.coverWap}
            alt={drama.bookName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Back Button */}
          <Button
            variant="glass"
            size="icon"
            className="absolute top-4 left-4 z-10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-5 h-5" />
          </Button>

          {/* Share Button */}
          <Button
            variant="glass"
            size="icon"
            className="absolute top-4 right-4 z-10"
            onClick={handleShare}
          >
            <Share2 className="w-5 h-5" />
          </Button>
        </div>
      )}

      <div className="container mx-auto px-4 -mt-20 relative z-10">
        {/* Drama Info */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-4xl font-display font-bold text-foreground mb-3">
            {drama.bookName}
          </h1>

          <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-foreground/60">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-gold font-medium">{drama.playCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <Film className="w-4 h-4" />
              <span>{drama.totalChapterNum} Episode</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>~45 menit/ep</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {drama.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-crimson/20 border border-crimson/30 rounded-full text-sm text-crimson"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Synopsis */}
          <div className="bg-gradient-card border border-border/30 rounded-2xl p-4 md:p-6">
            <h2 className="text-lg font-display font-bold text-foreground mb-3">Sinopsis</h2>
            <p className="text-foreground/70 leading-relaxed">
              {drama.introduction || "Sinopsis tidak tersedia untuk drama ini."}
            </p>
          </div>
        </div>

        {/* Episodes */}
        <div className="mb-8">
          <h2 className="text-xl font-display font-bold text-foreground mb-4">
            Daftar Episode
          </h2>

          {episodesLoading ? (
            <div className="flex items-center justify-center py-10">
              <Loader2 className="w-6 h-6 text-crimson animate-spin" />
            </div>
          ) : episodes && episodes.length > 0 ? (
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
              {episodes.map((episode, index) => (
                <button
                  key={episode.chapterId}
                  onClick={() => handlePlayEpisode(episode.videoPath, episode.chapterName)}
                  className={`group relative aspect-square rounded-xl flex items-center justify-center font-medium transition-all ${
                    selectedEpisode?.name === episode.chapterName
                      ? "bg-crimson text-primary-foreground"
                      : "bg-surface border border-border/50 text-foreground/80 hover:border-crimson/50 hover:bg-crimson/10"
                  }`}
                >
                  <span>{index + 1}</span>
                  <Play className="w-3 h-3 absolute bottom-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-foreground/60">
              Episode tidak tersedia
            </div>
          )}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default DramaDetail;
