import DramaCard from "./DramaCard";
import { ChevronRight } from "lucide-react";
import drama1 from "@/assets/drama-1.jpg";
import drama2 from "@/assets/drama-2.jpg";
import drama3 from "@/assets/drama-3.jpg";
import drama4 from "@/assets/drama-4.jpg";
import drama5 from "@/assets/drama-5.jpg";
import drama6 from "@/assets/drama-6.jpg";

const dramas = [
  {
    image: drama1,
    title: "A Dream of Splendor",
    year: "2022",
    rating: 9.2,
    genre: "Kostum Kuno",
    episodes: 40,
  },
  {
    image: drama2,
    title: "Love Between Fairy and Devil",
    year: "2022",
    rating: 9.5,
    genre: "Fantasi",
    episodes: 36,
  },
  {
    image: drama3,
    title: "Meet Yourself",
    year: "2023",
    rating: 9.0,
    genre: "Romantis",
    episodes: 40,
  },
  {
    image: drama4,
    title: "The Legend of Shen Li",
    year: "2024",
    rating: 8.8,
    genre: "Fantasi",
    episodes: 39,
  },
  {
    image: drama5,
    title: "Empresses in the Palace",
    year: "2011",
    rating: 9.4,
    genre: "Istana",
    episodes: 76,
  },
  {
    image: drama6,
    title: "Mysterious Lotus Casebook",
    year: "2023",
    rating: 9.1,
    genre: "Laga",
    episodes: 40,
  },
];

const PopularDramas = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-2">
              Drama <span className="text-gradient-crimson">Populer</span>
            </h2>
            <p className="text-foreground/60">
              Koleksi drama China terbaik pilihan penonton
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
        
        {/* Drama Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {dramas.map((drama, index) => (
            <div 
              key={drama.title}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DramaCard {...drama} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDramas;
