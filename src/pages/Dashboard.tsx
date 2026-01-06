import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Settings, Key, Save, LogOut, User, Crown, ArrowLeft, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

interface ApiSettings {
  proxyUrl: string;
  baseUrl: string;
  cacheTime: number;
}

const Dashboard = () => {
  const { user, logout, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSaving, setIsSaving] = useState(false);
  
  const [apiSettings, setApiSettings] = useState<ApiSettings>({
    proxyUrl: "https://api.codetabs.com/v1/proxy?quest=",
    baseUrl: "https://dramabox.sansekai.my.id/api/dramabox",
    cacheTime: 60,
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    // Load saved settings
    const saved = localStorage.getItem("api_settings");
    if (saved) {
      setApiSettings(JSON.parse(saved));
    }
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    localStorage.setItem("api_settings", JSON.stringify(apiSettings));
    toast({
      title: "Pengaturan disimpan",
      description: "Konfigurasi API telah diperbarui",
    });
    setIsSaving(false);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-crimson animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-surface border-b border-border/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigate("/")}
                className="text-foreground/60 hover:text-foreground"
              >
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <h1 className="text-xl font-display font-bold text-foreground">Dashboard</h1>
                <p className="text-sm text-foreground/60">Kelola pengaturan akun</p>
              </div>
            </div>
            <Button variant="ghost" onClick={handleLogout} className="text-crimson hover:text-crimson/80">
              <LogOut className="w-4 h-4 mr-2" />
              Keluar
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-gradient-card border border-border/30 rounded-2xl p-6">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-crimson to-crimson-dark flex items-center justify-center mx-auto mb-4">
                  <User className="w-10 h-10 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-display font-bold text-foreground">{user.name}</h2>
                <p className="text-foreground/60 text-sm">{user.email}</p>
                
                {user.isVip ? (
                  <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gold/20 border border-gold/30 rounded-full">
                    <Crown className="w-4 h-4 text-gold" />
                    <span className="text-gold font-medium text-sm">Member VIP</span>
                  </div>
                ) : (
                  <Button variant="gold" size="sm" className="mt-4">
                    <Crown className="w-4 h-4 mr-2" />
                    Upgrade ke VIP
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* API Settings */}
          <div className="md:col-span-2">
            <div className="bg-gradient-card border border-border/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-crimson/20 flex items-center justify-center">
                  <Settings className="w-5 h-5 text-crimson" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">Pengaturan API</h3>
                  <p className="text-sm text-foreground/60">Konfigurasi endpoint dan proxy</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    <Key className="w-4 h-4 inline mr-2" />
                    Proxy URL
                  </label>
                  <Input
                    value={apiSettings.proxyUrl}
                    onChange={(e) => setApiSettings({ ...apiSettings, proxyUrl: e.target.value })}
                    placeholder="https://api.codetabs.com/v1/proxy?quest="
                    className="bg-surface border-border/50 focus:border-crimson/50"
                  />
                  <p className="text-xs text-foreground/40 mt-1">URL proxy untuk bypass CORS</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    <Settings className="w-4 h-4 inline mr-2" />
                    Base URL API
                  </label>
                  <Input
                    value={apiSettings.baseUrl}
                    onChange={(e) => setApiSettings({ ...apiSettings, baseUrl: e.target.value })}
                    placeholder="https://dramabox.sansekai.my.id/api/dramabox"
                    className="bg-surface border-border/50 focus:border-crimson/50"
                  />
                  <p className="text-xs text-foreground/40 mt-1">Endpoint utama API drama</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground/80 mb-2">
                    Cache Duration (menit)
                  </label>
                  <Input
                    type="number"
                    value={apiSettings.cacheTime}
                    onChange={(e) => setApiSettings({ ...apiSettings, cacheTime: parseInt(e.target.value) || 60 })}
                    min={1}
                    max={1440}
                    className="bg-surface border-border/50 focus:border-crimson/50"
                  />
                  <p className="text-xs text-foreground/40 mt-1">Durasi cache API (1-1440 menit)</p>
                </div>

                <Button
                  variant="hero"
                  onClick={handleSave}
                  disabled={isSaving}
                  className="w-full mt-6"
                >
                  {isSaving ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Simpan Pengaturan
                    </>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
