import { Crown, Sword, Heart, Sparkles, Building2, Flame } from "lucide-react";

const categories = [
  {
    icon: Crown,
    title: "宫斗剧",
    description: "权谋争斗",
    color: "from-crimson to-crimson-dark",
  },
  {
    icon: Sword,
    title: "武侠剧",
    description: "江湖风云",
    color: "from-gold to-gold-light",
  },
  {
    icon: Sparkles,
    title: "仙侠剧",
    description: "修仙问道",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Heart,
    title: "爱情剧",
    description: "浪漫甜蜜",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: Building2,
    title: "都市剧",
    description: "现代生活",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Flame,
    title: "动作剧",
    description: "热血激情",
    color: "from-orange-500 to-amber-400",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-surface-darker">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            探索<span className="text-gradient-gold">类型</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            从经典古装到现代都市，找到你最爱的剧集类型
          </p>
        </div>
        
        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/30 hover:border-crimson/30 transition-all duration-300 cursor-pointer card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              
              {/* Text */}
              <h3 className="font-display font-semibold text-lg text-foreground mb-1 group-hover:text-gold transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-foreground/50">
                {category.description}
              </p>
              
              {/* Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
