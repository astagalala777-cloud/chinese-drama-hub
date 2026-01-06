import { Search, User, Menu, LogOut, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-crimson to-crimson-dark flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">華</span>
            </div>
            <span className="text-xl font-display font-semibold text-gradient-gold">
              Drama China
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Beranda
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Kostum Kuno
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Modern
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Fantasi
            </a>
            <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
              Aksi
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="glass" size="icon" className="hidden md:flex">
              <Search className="w-5 h-5" />
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="glass" size="icon" className="hidden md:flex">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 bg-surface border-border/50">
                  <div className="px-2 py-2">
                    <p className="text-sm font-medium text-foreground">{user.name}</p>
                    <p className="text-xs text-foreground/60">{user.email}</p>
                  </div>
                  <DropdownMenuSeparator className="bg-border/50" />
                  <DropdownMenuItem onClick={() => navigate("/dashboard")} className="cursor-pointer">
                    <Settings className="w-4 h-4 mr-2" />
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-crimson">
                    <LogOut className="w-4 h-4 mr-2" />
                    Keluar
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="glass" size="icon" className="hidden md:flex" onClick={() => navigate("/auth")}>
                <User className="w-5 h-5" />
              </Button>
            )}
            
            <Button 
              variant="glass" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            {user ? (
              <Button variant="hero" size="sm" className="hidden md:flex" onClick={() => navigate("/dashboard")}>
                Dashboard
              </Button>
            ) : (
              <Button variant="hero" size="sm" className="hidden md:flex" onClick={() => navigate("/auth")}>
                Member VIP
              </Button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50 pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Beranda
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Kostum Kuno
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Modern
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Fantasi
              </a>
              <a href="#" className="text-foreground/80 hover:text-foreground transition-colors font-medium">
                Aksi
              </a>
              {user ? (
                <>
                  <Button variant="glass" size="sm" className="w-full" onClick={() => navigate("/dashboard")}>
                    <Settings className="w-4 h-4 mr-2" />
                    Dashboard
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full text-crimson" onClick={handleLogout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Keluar
                  </Button>
                </>
              ) : (
                <Button variant="hero" size="sm" className="w-full mt-2" onClick={() => navigate("/auth")}>
                  Member VIP
                </Button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
