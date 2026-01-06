import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff, Mail, Lock, User, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  const { login, register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (isLogin) {
        const result = await login(email, password);
        if (result.success) {
          toast({
            title: "Berhasil masuk!",
            description: "Selamat datang kembali",
          });
          navigate("/");
        } else {
          toast({
            title: "Gagal masuk",
            description: result.error,
            variant: "destructive",
          });
        }
      } else {
        if (!name.trim()) {
          toast({
            title: "Error",
            description: "Nama tidak boleh kosong",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }
        const result = await register(email, password, name);
        if (result.success) {
          toast({
            title: "Registrasi berhasil!",
            description: "Akun Anda telah dibuat",
          });
          navigate("/");
        } else {
          toast({
            title: "Gagal registrasi",
            description: result.error,
            variant: "destructive",
          });
        }
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-crimson to-crimson-dark flex items-center justify-center mx-auto mb-4">
            <span className="text-primary-foreground font-display font-bold text-3xl">華</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-gradient-gold">
            Drama China
          </h1>
          <p className="text-foreground/60 mt-2">
            {isLogin ? "Masuk ke akun Anda" : "Buat akun baru"}
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-gradient-card border border-border/30 rounded-2xl p-6 shadow-elegant">
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                <Input
                  type="text"
                  placeholder="Nama Lengkap"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 bg-surface border-border/50 focus:border-crimson/50"
                />
              </div>
            )}
            
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="pl-10 bg-surface border-border/50 focus:border-crimson/50"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pl-10 pr-10 bg-surface border-border/50 focus:border-crimson/50"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground/60"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : isLogin ? (
                "Masuk"
              ) : (
                "Daftar"
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-foreground/60 text-sm">
              {isLogin ? "Belum punya akun?" : "Sudah punya akun?"}{" "}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-gold hover:text-gold-light font-medium"
              >
                {isLogin ? "Daftar" : "Masuk"}
              </button>
            </p>
          </div>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-surface/50 rounded-xl border border-border/30">
            <p className="text-xs text-foreground/50 text-center mb-2">Demo Login:</p>
            <p className="text-xs text-foreground/70 text-center">
              Email: <span className="text-gold">admin@dramachina.com</span>
            </p>
            <p className="text-xs text-foreground/70 text-center">
              Password: <span className="text-gold">password123</span>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <a href="/" className="text-foreground/60 hover:text-foreground text-sm">
            ← Kembali ke Beranda
          </a>
        </div>
      </div>
    </div>
  );
};

export default Auth;
