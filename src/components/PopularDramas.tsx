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
    title: "梦华录",
    year: "2022",
    rating: 9.2,
    genre: "古装",
    episodes: 40,
  },
  {
    image: drama2,
    title: "苍兰诀",
    year: "2022",
    rating: 9.5,
    genre: "仙侠",
    episodes: 36,
  },
  {
    image: drama3,
    title: "去有风的地方",
    year: "2023",
    rating: 9.0,
    genre: "都市",
    episodes: 40,
  },
  {
    image: drama4,
    title: "与凤行",
    year: "2024",
    rating: 8.8,
    genre: "仙侠",
    episodes: 39,
  },
  {
    image: drama5,
    title: "甄嬛传",
    year: "2011",
    rating: 9.4,
    genre: "宫斗",
    episodes: 76,
  },
  {
    image: drama6,
    title: "莲花楼",
    year: "2023",
    rating: 9.1,
    genre: "武侠",
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
              <span className="text-gradient-crimson">热门</span>剧集
            </h2>
            <p className="text-foreground/60">
              精选最受欢迎的华语电视剧
            </p>
          </div>
          <a 
            href="#" 
            className="flex items-center gap-1 text-gold hover:text-gold-light transition-colors font-medium"
          >
            查看全部
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
