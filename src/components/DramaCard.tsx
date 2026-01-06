import { Play, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Drama } from "@/lib/api";

interface DramaCardProps {
  drama: Drama;
  onClick?: () => void;
}

const DramaCard = ({ drama, onClick }: DramaCardProps) => {
  const navigate = useNavigate();
  const { coverWap, bookName, playCount, tags, totalChapterNum, bookId } = drama;
  const genre = tags?.[0] || "Drama";

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      navigate(`/drama/${bookId}`);
    }
  };

  return (
    <div 
      className="group relative rounded-xl overflow-hidden card-hover cursor-pointer"
      onClick={handleClick}
    >
      {/* Image */}
      <div className="aspect-[2/3] relative">
        <img 
          src={coverWap} 
          alt={bookName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-crimson/90 flex items-center justify-center shadow-glow">
            <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
          </div>
        </div>
        
        {/* Play Count Badge */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 bg-background/80 backdrop-blur-sm rounded-lg">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-xs font-medium text-foreground">{playCount}</span>
        </div>
        
        {/* Genre Tag */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-crimson/80 text-xs font-medium text-primary-foreground rounded-lg">
            {genre}
          </span>
        </div>
      </div>
      
      {/* Info */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-display font-semibold text-lg text-foreground mb-1 group-hover:text-gold transition-colors line-clamp-2">
          {bookName}
        </h3>
        <div className="flex items-center gap-2 text-xs text-foreground/60">
          <span>{totalChapterNum} Episode</span>
        </div>
      </div>
    </div>
  );
};

export default DramaCard;
