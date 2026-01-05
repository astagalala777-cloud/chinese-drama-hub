import { Crown, Sword, Heart, Sparkles, Building2, Flame } from "lucide-react";

const categories = [
  {
    icon: Crown,
    title: "Drama Istana",
    description: "Intrik kerajaan",
    color: "from-crimson to-crimson-dark",
  },
  {
    icon: Sword,
    title: "Wuxia",
    description: "Dunia persilatan",
    color: "from-gold to-gold-light",
  },
  {
    icon: Sparkles,
    title: "Fantasi",
    description: "Dunia mistis",
    color: "from-blue-500 to-cyan-400",
  },
  {
    icon: Heart,
    title: "Romantis",
    description: "Kisah cinta",
    color: "from-pink-500 to-rose-400",
  },
  {
    icon: Building2,
    title: "Modern",
    description: "Kehidupan kota",
    color: "from-emerald-500 to-teal-400",
  },
  {
    icon: Flame,
    title: "Aksi",
    description: "Penuh adrenalin",
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
            Jelajahi <span className="text-gradient-gold">Kategori</span>
          </h2>
          <p className="text-foreground/60 max-w-xl mx-auto">
            Dari drama klasik hingga modern, temukan genre favoritmu
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
