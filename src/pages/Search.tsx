import { useState } from "react";
import { Search as SearchIcon, X, Loader2, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchDramas } from "@/hooks/useDramas";
import DramaCard from "@/components/DramaCard";
import BottomNav from "@/components/BottomNav";
import { useNavigate } from "react-router-dom";

const popularSearches = [
  "Romance",
  "Fantasy",
  "Comedy",
  "Action",
  "Drama",
  "Historical",
];

const Search = () => {
  const [query, setQuery] = useState("");
  const { data: results, isLoading, isFetched } = useSearchDramas(query);
  const navigate = useNavigate();

  const handleClear = () => {
    setQuery("");
  };

  const handleDramaClick = (bookId: string) => {
    navigate(`/drama/${bookId}`);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Search Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 pt-safe">
        <div className="container mx-auto px-4 py-4">
          <div className="relative">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <Input
              type="text"
              placeholder="Cari drama favorit..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-12 py-6 bg-surface border-border/50 focus:border-crimson/50 text-lg rounded-xl"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClear}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Loading */}
        {isLoading && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-crimson animate-spin" />
          </div>
        )}

        {/* No Query - Show Popular Searches */}
        {!query && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-gold" />
              <h2 className="text-lg font-display font-bold text-foreground">
                Pencarian Populer
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 bg-surface border border-border/50 rounded-full text-foreground/70 hover:border-crimson/50 hover:text-foreground transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && !isLoading && results && (
          <div>
            <p className="text-foreground/60 mb-4">
              {results.length} hasil untuk "{query}"
            </p>
            {results.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {results.map((drama, index) => (
                  <div
                    key={drama.bookId}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <DramaCard
                      drama={drama}
                      onClick={() => handleDramaClick(drama.bookId)}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-foreground/60 mb-2">Tidak ada hasil</p>
                <p className="text-foreground/40 text-sm">
                  Coba kata kunci lain
                </p>
              </div>
            )}
          </div>
        )}

        {/* Initial fetch with no results */}
        {query && !isLoading && isFetched && !results?.length && (
          <div className="text-center py-20">
            <p className="text-foreground/60 mb-2">Tidak ada hasil</p>
            <p className="text-foreground/40 text-sm">
              Coba kata kunci lain
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
};

export default Search;
