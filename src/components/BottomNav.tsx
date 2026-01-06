import { Home, Search, Heart, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const BottomNav = () => {
  const location = useLocation();
  const { user } = useAuth();

  const navItems = [
    { icon: Home, label: "Beranda", path: "/" },
    { icon: Search, label: "Cari", path: "/search" },
    { icon: Heart, label: "Favorit", path: "/favorites" },
    { icon: User, label: "Akun", path: user ? "/dashboard" : "/auth" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden glass-effect border-t border-border/50 pb-safe">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all ${
                isActive
                  ? "text-crimson"
                  : "text-foreground/50 hover:text-foreground/80"
              }`}
            >
              <item.icon className={`w-5 h-5 ${isActive ? "fill-crimson/20" : ""}`} />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
